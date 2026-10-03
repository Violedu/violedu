'use client';

// Shared building blocks for video-article bodies. Each video's article lives
// in its own file under ./video-articles/<slug>.jsx and is composed from these
// primitives so every post gets the same typography, figures, and callouts.
//
// The matching global styles (.article-lead, .article-p, .article-h2, .dropcap,
// .article-strong) are injected once by the VideoArticle shell, so they are
// available to any body rendered inside it.

import Image from 'next/image';

// A titled chapter block. `id` must match an entry in the video's `chapters`
// list so the sidebar scroll-spy can track it. scrollMarginTop keeps the
// heading clear of the fixed header when jumped to.
export function ArticleSection({ id, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: '120px' }} className="article-block">
      {children}
    </section>
  );
}

// A sheet-music / diagram figure on a warm "paper" panel so dark-on-white
// artwork reads against the dark page. Use only for graphics you actually have
// (e.g. from a companion ebook) — never invent artwork.
export function SheetFigure({ src, caption, ratio = '650 / 220', inGrid = false }) {
  return (
    <figure className={inGrid ? '' : 'my-8'}>
      <div
        className="rounded-[14px] p-4 md:p-5"
        style={{
          background: 'linear-gradient(180deg, #f7f3ec 0%, #efe8dc 100%)',
          boxShadow:
            '0 20px 40px -24px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.5) inset',
        }}
      >
        <div className="relative w-full" style={{ aspectRatio: ratio }}>
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="text-ink-muted text-[12.5px] leading-[1.5] mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// A highlighted pull-quote / insight. `kicker` is the small peach label.
export function Callout({ kicker = 'Key insight', children }) {
  return (
    <div
      className="my-9 rounded-[16px] p-6 md:p-7"
      style={{
        background:
          'linear-gradient(135deg, rgba(196,181,253,0.14) 0%, rgba(111,76,255,0.07) 100%)',
        borderLeft: '2px solid rgba(196,181,253,0.7)',
      }}
    >
      <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.22em] uppercase mb-2.5">
        {kicker}
      </p>
      <p
        className="text-white/90 text-[17px] md:text-[18px] leading-[1.6]"
        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
      >
        {children}
      </p>
    </div>
  );
}
