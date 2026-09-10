import Reveal from './Reveal';

export default function Instructor() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="text-center mb-14">
          <Reveal as="p" delay={0} className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]">
            Meet Your Instructor
          </Reveal>
          <Reveal as="h2" delay={150} className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.08] font-semibold max-w-[820px] mx-auto tracking-[-0.02em]">
            You&rsquo;re learning from a performing soloist who coaches auditions.
          </Reveal>
        </div>

        {/* Instructor image */}
        <Reveal delay={300} className="relative rounded-[28px] overflow-hidden border border-white/10" style={{ aspectRatio: '1000 / 516' }}>
          <img
            src="/instructor.png"
            alt="Instructor portrait"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </Reveal>

        {/* Card under */}
        <Reveal delay={450} className="mt-6 rounded-[20px] border border-white/8 p-8 md:p-10"
             style={{ background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)' }}>
          <h3 className="text-white font-display text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-0.01em]">A soloist&rsquo;s ear. A teacher&rsquo;s system. 10+ years.</h3>
          <p className="text-ink-dim mt-3 max-w-[680px] text-[15px] md:text-[16px] leading-[1.65]">
            I&rsquo;ve performed as a soloist and hold a doctorate in violin, and for over 10 years I&rsquo;ve coached
            violinists through the auditions and exams that decide their next step. I know where playing breaks down
            under pressure — the passages that unravel on the day — because I&rsquo;ve navigated them as a performer and
            fixed them, student by student, as a teacher.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/kalinageorgieva_violinist/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[14px] font-medium text-white/90 transition hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@kalinamiteva5965"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[14px] font-medium text-white/90 transition hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="6" width="20" height="12" rx="3" />
                <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
              </svg>
              YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
