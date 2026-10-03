---
name: add-video-resource
description: Add a new YouTube video to the Violedu Free Resources page and build its dedicated article page (/videos/<slug>). Use when the user wants to publish a video resource, add a YouTube video to the site, or create a video article/blog post from a script. Produces a library card (play overlay + "Watch" CTA) and an editorial article page with a lazy YouTube player, scroll-spy chapter nav, original prose, optional companion-worksheet CTA, and a "More free resources" grid.
---

# Add a video resource

This skill adds one YouTube video as a Free Resource: a card on
`/free-resources` and a dedicated article page at `/videos/<slug>`. The page
architecture already exists and is reusable — you are filling a template, not
inventing layout. Match the established design (see `CLAUDE.md`; invoke the
`frontend-design` skill before writing frontend code).

## Required inputs — collect these first

Ask the user (use `AskUserQuestion` for anything missing) before building:

1. **YouTube URL** *(required)* — e.g. `https://www.youtube.com/watch?v=ID&t=50s`.
   Extract the **video id** and the **start time** in seconds (from `&t=` / `#t=`,
   default `0`).
2. **Video title** *(required)* — the card + page `<h1>`. Derive the **slug** as
   kebab-case of the title (strip punctuation), e.g.
   `Why Your Vibrato Isn't Sounding Pro (Yet!)` →
   `why-your-vibrato-isnt-sounding-pro`.
3. **Thumbnail image path** *(required)* — a local path to the video thumbnail
   PNG/JPG. Pick object-position so any on-thumbnail text stays visible.
4. **Script source** *(required — one of)*:
   - **(a) Path to a raw script** markdown file → read it directly, OR
   - **(b) A draft pasted in chat** → use the draft **and additionally transcribe
     the YouTube video** with the `yt-transcript` skill (pass the URL), then
     reconcile draft + transcript so the article reflects what's actually said.
5. **Companion ebook** *(optional)* — a path to ebook content (markdown) and/or a
   graphics folder.
   - If provided, you **may** reuse clean, article-appropriate graphics from it
     (sheet music / diagrams on white backgrounds).
   - **If there is no ebook, do NOT add any new graphics to the article.** Write
     a text-only article (hero player + prose + callouts). Never invent or
     source new artwork.
6. **Category** *(optional, default `Technique`)* — used on the card and the page
   eyebrow. Existing categories: Technique, Practice, Performance, Repertoire.
7. **Related worksheet** *(optional)* — a worksheet slug under `/free-resources/`
   to feature as the end-of-article companion CTA (omit if none).
8. **Author / date / read-time** *(optional)* — default author `Kalina`, avatar
   `/profile_kalina.png`, date = current month + year, read-time ≈ 1 min per
   ~200 words of article.

## Files involved (the pattern)

- `components/free-resources/videosData.js` — per-video **metadata** (incl.
  `chapters` and optional `worksheet` CTA).
- `components/free-resources/video-articles/<slug>.jsx` — the **article body**,
  composed from `articleKit` primitives. One file per video.
- `components/free-resources/videoArticles.js` — **registry** mapping slug →
  body component.
- `components/free-resources/VideoArticle.jsx` — **shared shell** (hero, player,
  chapter nav, worksheet CTA, more-resources). Usually unchanged.
- `components/free-resources/articleKit.jsx` — shared `ArticleSection`,
  `SheetFigure`, `Callout`. Usually unchanged.
- `components/free-resources/FreeResourcesLibrary.jsx` — the **library card**.
- `app/videos/[slug]/page.js` — the route. Unchanged (data-driven).
- `public/` — thumbnail + any reused ebook graphics.

## Steps

1. **Resolve the script content.** Read the raw-script path, or (draft case)
   combine the pasted draft with a fresh `yt-transcript` of the URL. Pull in the
   ebook content too if provided. This is your source material for the article.

2. **Copy assets to `public/`:**
   - Thumbnail → `public/video_<topic>.png` (e.g. `video_vibrato_cover.png`).
   - Only if an ebook was provided: copy the handful of clean graphics you'll
     actually use, with descriptive names (e.g. `vibrato_arm_swings.png`). Remove
     any you end up not using. **No ebook → copy no graphics.**

3. **Write the article body** at
   `components/free-resources/video-articles/<slug>.jsx`:
   - `'use client'`; import `Reveal` from `../../Reveal` and the primitives from
     `../articleKit`.
   - Define **3–6 chapters**; wrap each in `<ArticleSection id="...">` whose id
     matches the chapters list you'll put in `videosData`.
   - Write **original prose** (not a copy of the ebook/script) in the brand's
     confident, teacherly voice. Cover the video's main points. First paragraph
     uses the `dropcap` span; body paragraphs use `className="article-p"` (first
     is `article-lead`); section titles use `<h2 className="article-h2">`;
     emphasise terms with `<strong className="article-strong">` and `<em>`.
   - Wrap blocks in `<Reveal delay={...}>` for scroll-in animation (stagger
     40–60ms).
   - Use `<Callout kicker="Key insight">…</Callout>` for 1–2 pull-quotes.
   - Use `<SheetFigure src="/..." caption="..." ratio="W / H" />` **only if you
     copied real graphics**. Omit entirely otherwise.

4. **Register the body** in `videoArticles.js`:
   ```js
   import SomeBody from './video-articles/<slug>';
   export const videoArticles = { /* …existing, */ '<slug>': SomeBody };
   ```

5. **Add metadata** in `videosData.js` keyed by `<slug>`:
   ```js
   '<slug>': {
     slug: '<slug>',
     metaTitle: '… — Violedu',
     metaDescription: '…',           // 1–2 sentences for SEO
     youtubeId: '<id>',
     start: <seconds>,                // 0 if none
     eyebrow: 'Video Masterclass · <Category>',
     title: '<Video title>',
     author: 'Kalina',
     authorRole: 'DMA · Soloist & Chamber Musician',
     authorAvatar: '/profile_kalina.png',
     date: '<Month Year>',
     readTime: '<N> min read',
     cover: '/video_<topic>.png',
     chapters: [ { id: '…', label: '…' }, … ], // ids MUST match ArticleSection ids
     worksheet: {                     // omit this key if no related worksheet
       href: '/free-resources/<worksheet-slug>',
       eyebrow: 'Free Companion Worksheet',
       title: '…?',
       text: '…',
       cta: 'Get the free worksheet',
     },
   },
   ```

6. **Add the library card** in `FreeResourcesLibrary.jsx`. Insert a new object at
   the **top** of the `RESOURCES` array (first = newest):
   ```js
   {
     id: 'video-<topic>',
     href: '/videos/<slug>',
     image: '/video_<topic>.png',
     badge: 'Video',
     format: 'Video',               // matches the existing Video format filter
     category: '<Category>',
     title: '<Video title>',
     description: '…',              // 1–2 sentences, ends with a reason to watch
     cta: 'Watch',
     isVideo: true,                 // enables play overlay + full-bleed thumbnail
     accentFrom: 'rgba(80,168,222,0.5)',
     accentTo: 'rgba(37,99,235,0.05)',
   },
   ```

7. **Preview on localhost and verify.** Start the dev server if it isn't running
   (`./node_modules/.bin/next.cmd dev -H 0.0.0.0 -p 3000`, background), then
   screenshot with a local puppeteer script (puppeteer is a devDependency). Check:
   - card shows the thumbnail (text visible), a single `VIDEO` badge, play
     overlay, and "▶ Watch";
   - the article page hero, player, chapter nav (desktop sticky + mobile
     collapsible, **open by default**), figures (if any), worksheet CTA, and
     "More free resources" all render;
   - clicking a chapter lands its heading just below the fixed header on both
     desktop and mobile.

8. **Do not commit or push unless the user asks.** Show it on localhost first.

## Gotchas

- `chapters` ids in `videosData.js` must exactly match the `<ArticleSection id>`
  values in the body, or the scroll-spy won't track.
- The mobile chapter nav must **not** collapse on chapter click — it would shift
  layout and mis-scroll. (The shared shell already handles this; don't
  reintroduce `setOpen(false)` on nav links.)
- Keep the article **original** — don't paste the ebook or transcript verbatim.
- `next.config.js` uses static export (`output: 'export'`); the route is already
  wired via `generateStaticParams`, so no route changes are needed per video.
