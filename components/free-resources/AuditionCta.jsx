import Link from 'next/link';

// "Free Audition Readiness Check" booking CTA shown at the foot of every video
// article — the down-funnel call-to-action toward the 6-Week Audition Intensive.
const STEPS = [
  {
    title: "You play the passage you're worried about.",
    sub: "It doesn't need to be polished.",
  },
  {
    title: 'I give you one specific fix.',
    sub: 'We try it together, so you hear the difference.',
  },
  {
    title: 'You learn where you honestly stand.',
    sub: 'And what to work on first.',
  },
];

export default function AuditionCta() {
  return (
    <div
      className="mt-12 rounded-[22px] border border-white/8 px-6 py-9 md:px-10 md:py-11 text-center"
      style={{
        background:
          'radial-gradient(90% 70% at 50% 0%, rgba(111,76,255,0.22) 0%, rgba(31,28,62,0.6) 45%, rgba(23,21,47,0.95) 100%)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 70px -34px rgba(0,0,0,0.6)',
      }}
    >
      {/* Badge */}
      <span
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#fbd5cf]"
        style={{ border: '1px solid rgba(255,255,255,0.14)' }}
      >
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#fbd5cf' }}
        />
        Free · 10 slots this week
      </span>

      {/* Heading */}
      <h3 className="mt-6 font-display font-semibold text-white text-[32px] sm:text-[40px] md:text-[46px] leading-[1.05] tracking-[-0.02em]">
        Free Audition
        <span
          className="block text-[#fbd5cf] italic"
          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
        >
          Readiness Check
        </span>
      </h3>

      {/* Subline */}
      <p className="mt-4 text-[15px] md:text-[16px]">
        <span className="text-white font-semibold">
          Play me your hardest passage
        </span>
        <span className="text-ink-muted"> · 30 min · 1-on-1 · live</span>
      </p>

      {/* Steps */}
      <ol className="mt-8 mx-auto max-w-[440px] text-left space-y-5">
        {STEPS.map((s, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className="shrink-0 grid place-items-center w-8 h-8 rounded-full text-[13px] font-semibold text-[#fbd5cf]"
              style={{ border: '1px solid rgba(251,213,207,0.4)' }}
              aria-hidden
            >
              {i + 1}
            </span>
            <div>
              <p className="text-white text-[16px] md:text-[17px] font-semibold leading-snug">
                {s.title}
              </p>
              <p className="text-ink-muted text-[13.5px] md:text-[14px] leading-snug mt-0.5">
                {s.sub}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Fine print */}
      <p className="mt-7 text-ink-muted text-[13px] leading-[1.5] max-w-[460px] mx-auto">
        For violinists who can already play through their audition program.
      </p>

      {/* Button */}
      <Link
        href="/book"
        className="mt-7 inline-flex w-full max-w-[440px] items-center justify-center gap-2 rounded-[16px] px-7 py-[16px] text-[15px] md:text-[16px] font-semibold transition duration-300 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        style={{
          background: '#fbd5cf',
          color: '#161427',
          boxShadow:
            '0 14px 34px -14px rgba(251,213,207,0.6), 0 1px 0 rgba(255,255,255,0.4) inset',
          transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        Book Free 30-min Call
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
  );
}
