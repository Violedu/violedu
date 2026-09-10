import Reveal from '../Reveal';

export default function MasterclassPromise() {
  return (
    <section className="section-pad relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 0%, rgba(111,76,255,0.16) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-20 max-w-[920px] mx-auto">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]"
          >
            The Promise
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[1.06] font-semibold tracking-[-0.02em]"
          >
            You&rsquo;ll know exactly what to fix &mdash; and exactly what to practice &mdash; from Day 7.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal delay={300} className="h-full">
            <PromiseCard
              number="01"
              title="A written diagnosis by the end of Week 1"
              text="Every passage blocking your audition prep — named, categorized, with a specific drill for each. By Day 7, the guessing is over."
            />
          </Reveal>
          <Reveal delay={450} className="h-full">
            <PromiseCard
              number="02"
              title="You never design your own practice"
              text="The Audition Roadmap tells you what to work on, in what order, at what tempo, between every session. Zero wasted hours."
            />
          </Reveal>
          <Reveal delay={600} className="h-full">
            <PromiseCard
              number="03"
              title="Expert eyes on your practice, not just your lesson"
              text="Submit a recording after every session. Within 48 hours: specific feedback on what you drilled. You don&rsquo;t spend seven days practicing the wrong thing."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PromiseCard({ number, title, text }) {
  return (
    <article
      className="group relative h-full flex flex-col rounded-[22px] border border-white/[0.07] bg-[#1a1736] p-8 md:p-10 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.14]"
      style={{
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -40px rgba(0,0,0,0.6)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[22px]"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <span
        className="font-display text-[40px] md:text-[44px] font-semibold leading-none mb-6"
        style={{
          background: 'linear-gradient(160deg, #c4b5fd 0%, #6f4cff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {number}
      </span>

      <h3 className="text-white font-display text-[20px] md:text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] mb-3">
        {title}
      </h3>
      <p className="text-ink-dim text-[15px] leading-[1.65]">{text}</p>
    </article>
  );
}
