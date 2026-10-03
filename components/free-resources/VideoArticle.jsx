'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';

// The worksheets shown in "More free resources" at the foot of every article.
// Keep the newest three here; a video can override via `video.moreResources`.
const DEFAULT_MORE_RESOURCES = [
  {
    href: '/free-resources/master-your-vibrato',
    image: '/worksheet_vibrato_cover.png',
    category: 'Technique',
    title: 'Master Your Vibrato',
    description:
      'The four elements of an expressive vibrato — written out as a 16-page worksheet with exercises you can start today.',
  },
  {
    href: '/free-resources/sound-like-a-pro',
    image: '/worksheet_cover.png',
    category: 'Technique',
    title: 'Sound Like A Pro Violinist',
    description:
      'The bow-arm checks and tone exercises that separate students from professionals.',
  },
  {
    href: '/free-resources/learn-music-faster',
    image: '/worksheet_memory_cover.png',
    category: 'Practice',
    title: 'Learn Music Faster',
    description:
      'Memorize concert repertoire the way conservatory players do — four practical memory anchors.',
  },
];

// Reusable shell for a video article. `video` supplies the metadata (title,
// player, chapters, optional worksheet CTA); `children` is the per-video article
// body composed from ./articleKit primitives.
export default function VideoArticle({ video, children }) {
  const chapters = video.chapters || [];
  const moreResources = video.moreResources || DEFAULT_MORE_RESOURCES;

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative pt-[132px] md:pt-[160px] pb-10 md:pb-14 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(48% 36% at 50% 4%, rgba(111,76,255,0.28) 0%, rgba(23,21,47,0) 70%)',
          }}
        />

        <div className="container-x">
          {/* Breadcrumb */}
          <Reveal delay={0}>
            <Link
              href="/free-resources"
              className="inline-flex items-center gap-2 text-ink-muted hover:text-white text-[13px] mb-8 transition focus-visible:outline-none focus-visible:underline underline-offset-4"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all resources
            </Link>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="text-[#fbd5cf] text-[12px] md:text-[13px] font-semibold tracking-[0.26em] uppercase mb-6 text-center"
          >
            {video.eyebrow}
          </Reveal>

          <Reveal
            as="h1"
            delay={150}
            className="font-display font-semibold text-white text-[34px] sm:text-[46px] md:text-[58px] leading-[1.05] tracking-[-0.025em] text-center max-w-[900px] mx-auto text-balance"
          >
            {video.title}
          </Reveal>

          {/* Byline */}
          <Reveal delay={240}>
            <div className="mt-8 flex items-center justify-center gap-3.5">
              <span
                className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                style={{ border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <Image
                  src={video.authorAvatar || '/profile_kalina.png'}
                  alt={video.author}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div className="text-left">
                <p className="text-white text-[14.5px] font-semibold leading-tight">
                  {video.author}
                </p>
                <p className="text-ink-muted text-[12.5px] leading-tight mt-0.5">
                  {video.date}
                  {video.readTime ? ` · ${video.readTime}` : ''}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Player */}
          <Reveal delay={340} className="mt-10 md:mt-12">
            <div className="relative max-w-[940px] mx-auto">
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 blur-3xl opacity-50"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(168,139,250,0.40), rgba(23,21,47,0))',
                }}
              />
              <YouTubeFacade
                id={video.youtubeId}
                start={video.start}
                poster={video.cover}
                title={video.title}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Article body */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
            {/* Sidebar — chapter nav (desktop) */}
            <ChapterNav chapters={chapters} />

            {/* Article */}
            <article className="max-w-[720px]">
              {/* Chapter nav — mobile only (collapsible) */}
              <MobileChapterNav chapters={chapters} />

              {children}

              {/* Companion worksheet CTA */}
              {video.worksheet && (
                <Reveal delay={0}>
                  <div
                    className="mt-12 rounded-[20px] border border-white/8 p-7 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(111,76,255,0.18) 0%, rgba(31,28,62,0.9) 55%, rgba(26,23,53,0.95) 100%)',
                      boxShadow:
                        '0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 60px -32px rgba(0,0,0,0.55)',
                    }}
                  >
                    <div className="flex-1">
                      <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
                        {video.worksheet.eyebrow || 'Free Companion Worksheet'}
                      </p>
                      <h3 className="text-white font-display text-[21px] md:text-[23px] font-semibold tracking-[-0.01em] leading-[1.25]">
                        {video.worksheet.title}
                      </h3>
                      <p className="text-ink-dim text-[14.5px] leading-[1.6] mt-2">
                        {video.worksheet.text}
                      </p>
                    </div>
                    <Link
                      href={video.worksheet.href}
                      className="shrink-0 inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-[14px] text-[14.5px] font-semibold transition duration-300 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                      style={{
                        background: '#fbd5cf',
                        color: '#161427',
                        boxShadow:
                          '0 12px 30px -14px rgba(251,213,207,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
                        transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
                      }}
                    >
                      {video.worksheet.cta || 'Get the free worksheet'}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M5 12h14m0 0l-6-6m6 6l-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </Reveal>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- More resources */}
      <section className="relative pb-24 md:pb-32 pt-16 md:pt-20 border-t border-white/[0.06]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 30%, rgba(111,76,255,0.12) 0%, rgba(23,21,47,0) 70%)',
          }}
        />
        <div className="container-x">
          <Reveal
            as="p"
            className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.26em] uppercase text-center mb-4"
          >
            Keep practising
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="font-display text-white text-center text-[30px] sm:text-[38px] md:text-[46px] font-semibold tracking-[-0.02em] leading-[1.1]"
          >
            More free resources
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="text-ink-dim text-center text-[15px] mt-4 max-w-[560px] mx-auto leading-[1.6]"
          >
            Worksheets and handbooks built to turn these ideas into daily
            practice.
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mt-12">
            {moreResources.map((r, i) => (
              <Reveal key={r.href} delay={i * 120}>
                <MoreCard resource={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .article-lead {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 19px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.82);
        }
        .article-p {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
          margin-top: 1.35em;
        }
        .article-strong {
          color: #fff;
          font-weight: 600;
        }
        .article-p em,
        .article-lead em {
          color: #fbd5cf;
          font-style: italic;
        }
        .article-h2 {
          font-family: 'Manrope', 'Britti Sans', Inter, sans-serif;
          color: #fff;
          font-weight: 600;
          font-size: 27px;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-top: 2.4em;
        }
        @media (min-width: 768px) {
          .article-h2 {
            font-size: 31px;
          }
          .article-lead {
            font-size: 20px;
          }
          .article-p {
            font-size: 18.5px;
          }
        }
        .dropcap {
          float: left;
          font-family: 'Newsreader', Georgia, serif;
          font-weight: 500;
          font-size: 68px;
          line-height: 0.82;
          padding: 6px 12px 0 0;
          color: #fbd5cf;
        }
      `}</style>
    </>
  );
}

/* ------------------------------------------------------------------ pieces */

function useActiveChapter(chapters) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [chapters]);

  const goTo = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActive(id);
  };

  return { active, goTo };
}

function MobileChapterNav({ chapters }) {
  const { active, goTo } = useActiveChapter(chapters);
  const [open, setOpen] = useState(true);
  const current = chapters.find((c) => c.id === active) || chapters[0];

  if (!chapters.length) return null;

  return (
    <div
      className="lg:hidden mb-9 rounded-[14px] border border-white/8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)' }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        <span className="min-w-0">
          <span className="block text-[#fbd5cf] text-[10px] font-semibold tracking-[0.24em] uppercase">
            In this article
          </span>
          <span className="block text-white text-[14.5px] font-semibold truncate mt-0.5">
            {current?.label}
          </span>
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
        style={{ maxHeight: open ? '340px' : '0px', opacity: open ? 1 : 0 }}
      >
        <ul className="px-3 pb-3 pt-1 space-y-0.5 border-t border-white/[0.06]">
          {chapters.map((c) => {
            const isActive = active === c.id;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  onClick={(e) => goTo(e, c.id)}
                  className={`block rounded-[9px] px-3 py-2.5 text-[14px] transition-colors ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.06]'
                      : 'text-ink-muted hover:text-white'
                  }`}
                >
                  {c.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ChapterNav({ chapters }) {
  const { active, goTo } = useActiveChapter(chapters);

  if (!chapters.length) return null;

  return (
    <aside className="hidden lg:block lg:sticky lg:top-[120px]">
      <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.24em] uppercase mb-5">
        In this article
      </p>
      <nav>
        <ul className="space-y-1">
          {chapters.map((c) => {
            const isActive = active === c.id;
            return (
              <li key={c.id} className="relative">
                <a
                  href={`#${c.id}`}
                  onClick={(e) => goTo(e, c.id)}
                  className={`block pl-4 py-2 text-[14px] leading-[1.4] transition-colors duration-300 focus-visible:outline-none focus-visible:underline underline-offset-4 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-ink-muted hover:text-white'
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300"
                    style={{
                      height: isActive ? '20px' : '0px',
                      background:
                        'linear-gradient(180deg, #c4b5fd 0%, #6f4cff 100%)',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  {c.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

// Lightweight YouTube facade — shows the poster until clicked, then loads the
// embed on demand so the page stays fast.
function YouTubeFacade({ id, start = 0, poster, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative rounded-[24px] overflow-hidden"
      style={{
        aspectRatio: '16 / 9',
        boxShadow:
          '0 40px 90px -34px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06) inset',
      }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?start=${start}&autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${title}`}
          className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a48bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0a1d]"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(min-width: 940px) 940px, 100vw"
            className="object-cover"
            priority
          />
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(11,10,29,0.05) 0%, rgba(11,10,29,0.12) 60%, rgba(11,10,29,0.30) 100%)',
            }}
          />
          <span className="absolute inset-0 grid place-items-center">
            <span
              className="relative grid place-items-center w-[66px] h-[66px] md:w-[78px] md:h-[78px] rounded-full backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95"
              style={{
                background: 'rgba(16,14,34,0.5)',
                border: '1px solid rgba(255,255,255,0.45)',
                boxShadow: '0 10px 30px -8px rgba(0,0,0,0.6)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="translate-x-[2px]"
              >
                <path
                  d="M8 5.5v13a1 1 0 0 0 1.55.83l10.2-6.5a1 1 0 0 0 0-1.66L9.55 4.67A1 1 0 0 0 8 5.5z"
                  fill="#fff"
                />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function MoreCard({ resource }) {
  return (
    <Link href={resource.href} className="group block h-full focus-visible:outline-none">
      <article
        className="relative h-full flex flex-col rounded-[18px] border border-white/8 overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:border-white/15 group-focus-visible:ring-2 group-focus-visible:ring-accent/60"
        style={{
          background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -28px rgba(0,0,0,0.55)',
          transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        <div className="relative aspect-[5/3] overflow-hidden border-b border-white/[0.06] bg-[#1a1735]">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)' }}
          >
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              sizes="(min-width: 768px) 360px, 100vw"
              className="object-cover"
              style={{ objectPosition: 'center 42%', transform: 'scale(0.95)' }}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <p className="text-[#fbd5cf] text-[10.5px] font-semibold tracking-[0.22em] uppercase mb-2.5">
            Worksheet &middot; {resource.category}
          </p>
          <h3 className="text-white font-display text-[19px] font-semibold tracking-[-0.01em] leading-[1.25]">
            {resource.title}
          </h3>
          <p className="text-ink-dim text-[13.5px] leading-[1.6] mt-2.5 flex-1">
            {resource.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-white text-[12px] font-semibold tracking-[0.14em] uppercase group-hover:gap-2.5 transition-all duration-300">
            Download free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
