from PIL import Image, ImageDraw, ImageFont, ImageFilter

S = 2
WGHT, OPSZ = 450, 72
reg_path = '_productimg/fonts/Newsreader.ttf'
ital_path = '_productimg/fonts/Newsreader-Italic.ttf'
sans_path = '_productimg/fonts/Manrope.ttf'
line1, line2 = "Six Weeks To", "Audition-Ready"
white = (250, 248, 245, 255)
rose = (233, 181, 165, 255)


def nfont(path, size, wght=WGHT, opsz=OPSZ):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([wght, opsz])
    except Exception:
        pass
    return f


def sfont(size, wght=600):
    f = ImageFont.truetype(sans_path, size)
    try:
        f.set_variation_by_axes([wght])
    except Exception:
        pass
    return f


def cover(img, W, H):
    w, h = img.size
    scale = max(W / w, H / h)
    img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    x = (img.size[0] - W) // 2
    y = (img.size[1] - H) // 2
    return img.crop((x, y, x + W, y + H))


def draw_tracked(draw, cx, y, text, font, fill, tracking):
    widths = [draw.textlength(c, font=font) for c in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    for c, w in zip(text, widths):
        draw.text((x, y), c, font=font, fill=fill)
        x += w + tracking


def make(bg_path, out_name, alpha=170, subtitle=None, square=False, tw=1200):
    if square:
        TW = TH = tw
    else:
        b = Image.open(bg_path)
        TW, TH = tw, round(tw * b.size[1] / b.size[0])
    W, H = TW * S, TH * S

    bg = Image.open(bg_path).convert('RGB')
    img = cover(bg, W, H).convert('RGBA')
    img = Image.alpha_composite(img, Image.new('RGBA', (W, H), (24, 20, 30, alpha)))

    draw = ImageDraw.Draw(img)
    size = 120
    f1, f2 = nfont(reg_path, size), nfont(ital_path, size)
    widest = max(draw.textbbox((0, 0), line1, font=f1)[2],
                 draw.textbbox((0, 0), line2, font=f2)[2])
    size = int(size * (0.80 * W) / widest)
    f1, f2 = nfont(reg_path, size), nfont(ital_path, size)
    h1 = draw.textbbox((0, 0), line1, font=f1)[3]
    h2 = draw.textbbox((0, 0), line2, font=f2)[3]
    gap = int(size * 0.14)

    sub_h = 0
    fsub = None
    if subtitle:
        fsub = sfont(int(size * 0.16), 600)
        sub_h = int(size * 0.16) + int(size * 0.28)

    block = h1 + gap + h2 + sub_h
    top = (H - block) / 2 - H * 0.01
    cx = W / 2
    c1y = top + h1 / 2
    c2y = top + h1 + gap + h2 / 2

    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    dsh = ImageDraw.Draw(shadow)
    dsh.text((cx, c1y), line1, font=f1, fill=(0, 0, 0, 150), anchor='mm')
    dsh.text((cx, c2y), line2, font=f2, fill=(0, 0, 0, 150), anchor='mm')
    shadow = shadow.filter(ImageFilter.GaussianBlur(size * 0.045))
    img = Image.alpha_composite(img, shadow)

    draw = ImageDraw.Draw(img)
    draw.text((cx, c1y), line1, font=f1, fill=white, anchor='mm')
    draw.text((cx, c2y), line2, font=f2, fill=rose, anchor='mm')
    if subtitle:
        suby = top + h1 + gap + h2 + int(size * 0.22)
        draw_tracked(draw, cx, suby, subtitle.upper(), fsub,
                     (235, 232, 228, 235), int(size * 0.05))

    logo = Image.open('public/violedu_logo_white.png').convert('RGBA')
    lw = int(0.20 * W)
    lh = int(lw * logo.size[1] / logo.size[0])
    logo = logo.resize((lw, lh), Image.LANCZOS)
    m = int(0.045 * W)
    img.alpha_composite(logo, (W - lw - m, H - lh - m))

    final = img.convert('RGB').resize((TW, TH), Image.LANCZOS)
    final.save(f'_productimg/out/{out_name}.jpg', quality=90)
    import os
    print(out_name, f"{os.path.getsize(f'_productimg/out/{out_name}.jpg')/1024:.0f} KB", final.size)


make('public/masterclass_hero_1.png', 'A_darker', alpha=170)
make('public/masterclass_hero_1.png', 'B_subtitle', alpha=170,
     subtitle="1-on-1 Violin Audition Intensive")
make('public/masterclass_hero_1.png', 'C_square', alpha=170, square=True)
make('public/instructor.png', 'D_concert', alpha=150)
