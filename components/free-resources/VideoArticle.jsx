'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';
import MoreResources from './MoreResources';
import AuditionCta from './AuditionCta';

// Reusable shell for a video article. `video` supplies the metadata (title,
// player, chapters, optional worksheet CTA); `children` is the per-video article
// body composed from ./articleKit primitives.
export default function VideoArticle({ video, children }) {
  const chapters = video.chapters || [];

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
              {/* Down-funnel CTA — book the free audition readiness check */}
              <Reveal delay={0}>
                <AuditionCta />
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- More resources */}
      <MoreResources currentHref={`/videos/${video.slug}`} />

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

