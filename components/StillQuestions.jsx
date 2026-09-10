import Reveal from './Reveal';

export default function StillQuestions() {
  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="container-x">
        <Reveal
          delay={0}
          className="relative rounded-[28px] border border-white/8 px-6 py-10 md:p-16 overflow-hidden text-center"
          style={{
            background:
              'linear-gradient(160deg, #1f1a4d 0%, #1a1735 55%, #14122c 100%)',
          }}
        >
          {/* layered glow */}
          <div
            aria-hidden
            className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-60 pointer-events-none"
            style={{
              background:
                'radial-gradient(closest-side, rgba(168,139,250,0.55), rgba(23,21,47,0))',
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{
              background:
                'radial-gradient(closest-side, rgba(251,213,207,0.35), rgba(23,21,47,0))',
            }}
          />

          {/* scarcity chip */}
          <p
            className="relative inline-flex items-center gap-1.5 md:gap-2 whitespace-nowrap text-[10px] md:text-[12px] font-semibold tracking-[0.08em] md:tracking-[0.18em] uppercase text-[#fbd5cf] px-3 py-1.5 rounded-full mb-8"
            style={{
              background: 'rgba(251,213,207,0.08)',
              border: '1px solid rgba(251,213,207,0.30)',
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fbd5cf] animate-pulse" />
            October intake — 5 spots · 2 filled
          </p>

          <h2 className="relative text-white font-display text-[30px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[900px] mx-auto">
            The next intake starts the week of <span className="italic text-[#fbd5cf]">October 5th</span>.
          </h2>

          <p className="relative text-ink-dim mt-6 max-w-[680px] mx-auto text-[15px] md:text-[17px] leading-[1.65]">
            I take a maximum of <span className="text-white font-semibold">5</span> new students per
            intake. The free 30-minute call is the only way in. If it
            isn&rsquo;t a fit, I&rsquo;ll tell you.
          </p>

          <div className="relative mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="btn-peach text-[15px] md:text-[16px] !py-[15px] !px-[28px] whitespace-nowrap"
            >
              Book Your Free 30-Min Call →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
