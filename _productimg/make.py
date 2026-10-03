from PIL import Image, ImageDraw, ImageFont, ImageFilter

S = 2            # supersample factor for crisp text
TW = 1200        # final width
OVERLAY_ALPHA = 140   # 0-255 darkness of grey overlay
WGHT = 450       # Newsreader weight
OPSZ = 72        # optical size (high = elegant display contrast)

reg_path = '_productimg/fonts/Newsreader.ttf'
ital_path = '_productimg/fonts/Newsreader-Italic.ttf'
line1 = "Six Weeks To"
line2 = "Audition-Ready"
white = (250, 248, 245, 255)
rose = (233, 181, 165, 255)   # matches the reference "Audition-Ready" rose

bg = Image.open('public/masterclass_hero_1.png').convert('RGB')
w0, h0 = bg.size
TH = round(TW * h0 / w0)
W, H = TW * S, TH * S
img = bg.resize((W, H), Image.LANCZOS).convert('RGBA')

# grey overlay (warm dark)
overlay = Image.new('RGBA', (W, H), (26, 22, 32, OVERLAY_ALPHA))
img = Image.alpha_composite(img, overlay)

def font(path, size, wght=WGHT, opsz=OPSZ):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([wght, opsz])
    except Exception as e:
        print('varerr', e)
    return f

draw = ImageDraw.Draw(img)
def line_size(text, fnt):
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]

# size so the widest line fills ~80% width
size = 120
f1 = font(reg_path, size); f2 = font(ital_path, size)
widest = max(line_size(line1, f1)[0], line_size(line2, f2)[0])
size = int(size * (0.80 * W) / widest)
f1 = font(reg_path, size); f2 = font(ital_path, size)

h1 = line_size(line1, f1)[1]
h2 = line_size(line2, f2)[1]
gap = int(size * 0.14)
block = h1 + gap + h2
top = (H - block) / 2 - H * 0.01
cx = W / 2
c1y = top + h1 / 2
c2y = top + h1 + gap + h2 / 2

# soft shadow
shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ds = ImageDraw.Draw(shadow)
ds.text((cx, c1y), line1, font=f1, fill=(0, 0, 0, 150), anchor='mm')
ds.text((cx, c2y), line2, font=f2, fill=(0, 0, 0, 150), anchor='mm')
shadow = shadow.filter(ImageFilter.GaussianBlur(size * 0.045))
img = Image.alpha_composite(img, shadow)

draw = ImageDraw.Draw(img)
draw.text((cx, c1y), line1, font=f1, fill=white, anchor='mm')
draw.text((cx, c2y), line2, font=f2, fill=rose, anchor='mm')

# logo bottom-right (white, transparent)
logo = Image.open('public/violedu_logo_white.png').convert('RGBA')
lw = int(0.20 * W)
lh = int(lw * logo.size[1] / logo.size[0])
logo = logo.resize((lw, lh), Image.LANCZOS)
margin = int(0.045 * W)
img.alpha_composite(logo, (W - lw - margin, H - lh - margin))

final = img.convert('RGB').resize((TW, TH), Image.LANCZOS)
final.save('_productimg/out/audition-ready.png')
final.save('_productimg/out/audition-ready.jpg', quality=90)

import os
for f in ('audition-ready.png', 'audition-ready.jpg'):
    p = '_productimg/out/' + f
    print(f, f"{os.path.getsize(p)/1024:.0f} KB", final.size)
