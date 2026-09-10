"""
Defringe the masterclass hero PNG.

The background was removed by an AI tool against a light backdrop, which left a
bright halo baked into the semi-transparent edge pixels (hair, violin).
On the dark purple page background, those edge pixels glow.

Fix:
  1. Erode the alpha matte by ~1 px to choke the worst feather.
  2. For pixels with partial alpha, darken their RGB toward the page's dark
     base color so the residual fringe blends in instead of shining.
"""
from PIL import Image, ImageFilter
import shutil
import sys
from pathlib import Path

SRC = Path("public/masterclass_hero.png")
BACKUP = Path("public/masterclass_hero_original.png")
DARK_BG = (5, 4, 16)  # #050410 — matches the section base color

# Strength knobs
ERODE_KERNEL = 5         # 3 = ~1 px choke, 5 = ~2 px choke, 7 = ~3 px choke
BLEND_EXPONENT = 0.5     # 1.0 = linear, <1.0 pulls partial-alpha pixels harder toward dark
EDGE_ALPHA_CUTOFF = 250  # pixels with alpha at-or-below this get tinted (was effectively 254)


def main() -> int:
    if not SRC.exists():
        print(f"missing: {SRC}", file=sys.stderr)
        return 1

    # Always work from the pristine backup so successive runs don't compound.
    if BACKUP.exists():
        shutil.copy2(BACKUP, SRC)
        print(f"restored {SRC} from backup before re-processing")
    else:
        shutil.copy2(SRC, BACKUP)
        print(f"backed up original to {BACKUP}")

    img = Image.open(SRC).convert("RGBA")
    r, g, b, a = img.split()

    # 1) Choke the matte: erode alpha so the worst feather pixels go fully transparent.
    a_eroded = a.filter(ImageFilter.MinFilter(ERODE_KERNEL))

    # 2) Push semi-transparent pixels toward the dark page background.
    #    Weight = (1 - alpha) so fully opaque pixels are untouched,
    #    fully transparent pixels are fully replaced (irrelevant — alpha=0),
    #    and edge pixels get blended toward the dark color.
    pixels = img.load()
    a_px = a_eroded.load()
    w, h = img.size
    dr, dg, db = DARK_BG

    for y in range(h):
        for x in range(w):
            av = a_px[x, y]
            if av == 0:
                pixels[x, y] = (0, 0, 0, 0)
                continue
            if av > EDGE_ALPHA_CUTOFF:
                pr, pg, pb, _ = pixels[x, y]
                pixels[x, y] = (pr, pg, pb, av)
                continue

            pr, pg, pb, _ = pixels[x, y]
            # blend factor: more transparent => more pull toward dark bg.
            # Raising to BLEND_EXPONENT < 1 makes mid-alpha pixels drag much harder toward dark.
            linear_t = (255 - av) / 255.0
            t = linear_t ** BLEND_EXPONENT
            nr = int(pr * (1 - t) + dr * t)
            ng = int(pg * (1 - t) + dg * t)
            nb = int(pb * (1 - t) + db * t)
            pixels[x, y] = (nr, ng, nb, av)

    img.save(SRC, "PNG", optimize=True)
    print(f"wrote defringed {SRC}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
