'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';

const CHAPTERS = [
  { id: 'one-technique', label: "Vibrato Isn't One Technique" },
  { id: 'types', label: 'The Three Types of Vibrato' },
  { id: 'intonation', label: 'Vibrato & Intonation' },
  { id: 'dynamics', label: 'Vibrato & Dynamics' },
  { id: 'style', label: 'Vibrato & Style' },
];

// The three worksheets shown in "More free resources" at the foot of the article.
const MORE_RESOURCES = [
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

export default function VideoArticle({ video }) {
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
                  src="/profile_kalina.png"
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
                  {video.date} &middot; {video.readTime}
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
            {/* Sidebar — chapter nav */}
            <ChapterNav />

            {/* Article */}
            <article className="max-w-[720px]">
              {/* Chapter nav — mobile only (collapsible) */}
              <MobileChapterNav />

              {/* Intro */}
              <ArticleSection id="one-technique">
                <Reveal>
                  <p className="article-lead">
                    <span className="dropcap">M</span>ost players treat vibrato as
                    a single trick — one shake of the hand they switch on and hope
                    for the best. That belief is exactly what keeps their playing
                    sounding like a student. Vibrato isn&rsquo;t one technique.
                    It&rsquo;s a coordinated process, and it&rsquo;s the single
                    biggest contributor to the sound people recognise as{' '}
                    <em>yours</em>. When one part of it is off, the whole thing
                    collapses.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    For this masterclass I went back to what the great pedagogues
                    — Carl Flesch, Leopold Auer, Ivan Galamian — actually taught,
                    and studied how today&rsquo;s soloists shape their signature
                    sound. It comes down to four elements. Master them and vibrato
                    stops being a nervous wobble and starts being a voice.
                  </p>
                </Reveal>
              </ArticleSection>

              {/* Types */}
              <ArticleSection id="types">
                <Reveal>
                  <h2 className="article-h2">The Three Types of Vibrato</h2>
                </Reveal>
                <Reveal delay={40}>
                  <p className="article-p">
                    Relying on one type of vibrato is like painting with a single
                    brush. You can cover the canvas, but you can&rsquo;t shade,
                    blend, or create detail. Arm, hand, and finger vibrato each
                    give you a different colour — and the point is to choose that
                    colour on purpose.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    <strong className="article-strong">Arm vibrato</strong> starts
                    in the forearm, the impulse travelling toward your face like a
                    small shift. It&rsquo;s your power source — the one you reach
                    for in double stops, high positions, and anywhere the sound
                    has to carry over an orchestra. To feel it in isolation, lock
                    the wrist toward the scroll and swing the arm in an even
                    rhythm: two, three, four, then six pulses per beat.
                  </p>
                </Reveal>
                <Reveal delay={40}>
                  <SheetFigure
                    src="/vibrato_arm_swings.png"
                    caption="Even swings — practise in twos, threes, fours, and sixes per beat, first without a metronome."
                    ratio="650 / 220"
                  />
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    <strong className="article-strong">Hand vibrato</strong> swings
                    from a still arm, the hand dropping back from the wrist while
                    the fingertip keeps its place. This is the singing one — the
                    lyrical, vocal quality that carries a long melodic line.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    <strong className="article-strong">Finger vibrato</strong> is
                    the smallest, driven from the base knuckle while the hand stays
                    almost passive. It&rsquo;s what creates the illusion of vibrato
                    in fast passages where a wider motion simply isn&rsquo;t
                    possible.
                  </p>
                </Reveal>
              </ArticleSection>

              {/* Intonation */}
              <ArticleSection id="intonation">
                <Reveal>
                  <h2 className="article-h2">Vibrato &amp; Intonation</h2>
                </Reveal>
                <Reveal delay={40}>
                  <p className="article-p">
                    You&rsquo;ve been told vibrato fixes intonation. It
                    doesn&rsquo;t. Vibrato can save your pitch or quietly destroy
                    it — and the difference is whether you know what pitch your
                    vibrato is actually creating.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    The clearest model is to place the note perfectly in tune
                    first, then roll the finger backward toward the flat side so
                    the pitch always returns home to the note. The listener hears
                    exactly where you mean to be.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    None of that works without an ear that refuses to accept
                    out-of-tune. Flesch called the practice behind it the{' '}
                    <em>attack of desperation</em>: play scales and études slowly,
                    without vibrato, checking every note against open strings until
                    inaccuracy genuinely bothers you. It feels worse before it
                    feels better — that discomfort is you finally hearing what you
                    used to ignore.
                  </p>
                </Reveal>
                <Reveal delay={40}>
                  <Callout kicker="Key insight">
                    Picture the fingertip glued to the string by a single tiny dot
                    — not the whole pad. That dot keeps the pitch anchored while
                    the hand stays free to move.
                  </Callout>
                </Reveal>
              </ArticleSection>

              {/* Dynamics */}
              <ArticleSection id="dynamics">
                <Reveal>
                  <h2 className="article-h2">Vibrato &amp; Dynamics</h2>
                </Reveal>
                <Reveal delay={40}>
                  <p className="article-p">
                    Here&rsquo;s where most sounds fall apart: the moment the music
                    gets loud, the tone hardens; the moment it gets soft, it drains
                    away. That happens when you treat volume and vibrato as
                    separate jobs — bow for one, hand for the other.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    They&rsquo;re not separate. They&rsquo;re two halves of a
                    single expressive unit, split between your two arms. As the
                    dynamic grows, vibrato grows with it — wider, faster, more
                    intense. As it softens, vibrato narrows, slows, and holds back.
                    If your vibrato is weak the bow compensates by pressing, and
                    the sound gets crushed. A strong vibrato keeps the bow elastic.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    Even your bow stroke shapes it. A <em>martelé</em> stroke is
                    urgent, and the left hand matches that urgency automatically. A
                    clean <em>portato</em> invites motion, and the vibrato opens up
                    on its own.
                  </p>
                </Reveal>
                <Reveal delay={40}>
                  <div className="grid sm:grid-cols-2 gap-4 mt-7">
                    <SheetFigure
                      src="/vibrato_martele_example.png"
                      caption="Martelé — urgent, accented strokes pull a faster vibrato from the hand."
                      ratio="520 / 150"
                      inGrid
                    />
                    <SheetFigure
                      src="/vibrato_portato_example.png"
                      caption="Portato — a soft, singing stroke invites a gentle, continuous vibrato."
                      ratio="520 / 150"
                      inGrid
                    />
                  </div>
                </Reveal>
              </ArticleSection>

              {/* Style */}
              <ArticleSection id="style">
                <Reveal>
                  <h2 className="article-h2">Vibrato &amp; Style</h2>
                </Reveal>
                <Reveal delay={40}>
                  <p className="article-p">
                    The last mistake is the most common: vibrato on every note,
                    all the time. Used that way it isn&rsquo;t expression —
                    it&rsquo;s a habit, and it flattens the music. Think of vibrato
                    as a volume knob for emotion, not an on/off switch.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    In Mozart, clarity is everything: a narrow vibrato and a clean
                    tone keep the texture transparent. Brahms wants the opposite —
                    a wide, deep vibrato to carry a dense, singing tone. Beethoven
                    lives on contrast, and a passage marked to fade and dissolve is
                    ruined by a standard melodic wobble. In Bach, vibrato
                    isn&rsquo;t a rule at all; it&rsquo;s a decision about whether
                    it clarifies the counterpoint or clouds it.
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <p className="article-p">
                    Same player, different composer, and the colour changes
                    completely — while the voice underneath stays unmistakably
                    yours. That&rsquo;s the whole point. When you stop treating
                    vibrato as constant, style finally has room to speak.
                  </p>
                </Reveal>
              </ArticleSection>

              {/* Worksheet CTA */}
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
                      Free Companion Worksheet
                    </p>
                    <h3 className="text-white font-display text-[21px] md:text-[23px] font-semibold tracking-[-0.01em] leading-[1.25]">
                      Want the full method on paper?
                    </h3>
                    <p className="text-ink-dim text-[14.5px] leading-[1.6] mt-2">
                      The entire masterclass is also a free 16-page vibrato
                      worksheet — every exercise written out, step by step.
                    </p>
                  </div>
                  <Link
                    href={video.relatedWorksheet}
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-[14px] text-[14.5px] font-semibold transition duration-300 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    style={{
                      background: '#fbd5cf',
                      color: '#161427',
                      boxShadow:
                        '0 12px 30px -14px rgba(251,213,207,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
                      transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
                    }}
                  >
                    Get the free worksheet
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
            {MORE_RESOURCES.map((r, i) => (
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

function ArticleSection({ id, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: '120px' }} className="article-block">
      {children}
    </section>
  );
}

function useActiveChapter() {
  const [active, setActive] = useState(CHAPTERS[0].id);

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean,
    );
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
  }, []);

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

function MobileChapterNav() {
  const { active, goTo } = useActiveChapter();
  const [open, setOpen] = useState(true);
  const current = CHAPTERS.find((c) => c.id === active) || CHAPTERS[0];

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
            {current.label}
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
          {CHAPTERS.map((c) => {
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

function ChapterNav() {
  const { active, goTo } = useActiveChapter();

  return (
    <aside className="hidden lg:block lg:sticky lg:top-[120px]">
      <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.24em] uppercase mb-5">
        In this article
      </p>
      <nav>
        <ul className="space-y-1">
          {CHAPTERS.map((c) => {
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

// A sheet-music figure sits on a warm "paper" panel so the black notation
// reads against the dark page.
function SheetFigure({ src, caption, ratio = '650 / 220', inGrid = false }) {
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
      <figcaption className="text-ink-muted text-[12.5px] leading-[1.5] mt-3 italic">
        {caption}
      </figcaption>
    </figure>
  );
}

function Callout({ kicker, children }) {
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
