import Reveal from '../Reveal';

const blocks = [
  {
    label: 'Foundation',
    weeks: 'Sessions 1–4 · Weeks 1–2',
    focus:
      'Diagnostic run-through of your audition program; tone production, bow technique, and an intonation framework built around your repertoire. We confirm which passages are ready and which are blocked.',
    callout:
      'By end of Session 2: a written document identifying every passage blocking you, with a specific drill for each. You know exactly what to fix.',
  },
  {
    label: 'Technical mastery',
    weeks: 'Sessions 5–8 · Weeks 3–4',
    focus:
      'The specific technical demands of your program — the shifts, the fast passagework, the finger independence and memory security, the bow control — drilled passage by passage and consolidated toward target tempo.',
  },
  {
    label: 'Performance architecture',
    weeks: 'Sessions 9–10 · Week 5',
    focus:
      'Full run-throughs of your program at target tempo; stamina; mental management under pressure.',
    callout:
      'Week 5: a full audition simulation — your program, start to finish, treated as the real thing. Written breakdown of what held and what didn’t. One week to fix what surfaces.',
  },
  {
    label: 'Audition ready',
    weeks: 'Sessions 11–12 · Week 6',
    focus:
      'Final refinement based on the simulation results; a final full run of your program; readiness confirmation; pre-screen recording-session guidance.',
    callout:
      'Session 12: you perform, we review. You walk out knowing exactly where you stand before your actual audition or exam.',
  },
];

export default function MasterclassCurriculum() {
  return (
    <section id="curriculum" className="section-pad relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 35% at 50% 0%, rgba(111,76,255,0.14) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-20 max-w-[820px] mx-auto">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]"
          >
            Curriculum — 6-Week Audition Intensive
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.06] font-semibold tracking-[-0.02em]"
          >
            The roadmap — session by session.
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative">
            {/* timeline rail */}
            <div
              aria-hidden
              className="absolute left-[27px] md:left-[36px] top-3 bottom-3 w-px"
              style={{
                background:
                  'linear-gradient(180deg, rgba(168,139,250,0.55) 0%, rgba(111,76,255,0.35) 50%, rgba(168,139,250,0.10) 100%)',
              }}
            />

            <ol className="space-y-4 md:space-y-5">
              {blocks.map((b, i) => (
                <li
                  key={b.label}
                  className="relative pl-[68px] md:pl-[90px]"
                >
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute left-[20px] md:left-[28px] top-6 grid place-items-center w-[18px] h-[18px] rounded-full"
                    style={{
                      background:
                        'radial-gradient(closest-side, #fbd5cf 0%, #6f4cff 80%)',
                      boxShadow:
                        '0 0 0 4px rgba(23,21,47,1), 0 0 18px rgba(168,139,250,0.55)',
                    }}
                  />

                  <div
                    className="rounded-[20px] border border-white/8 p-6 md:p-7"
                    style={{
                      background:
                        'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
                      boxShadow:
                        '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -40px rgba(0,0,0,0.6)',
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-6">
                      <div>
                        <p className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.22em] uppercase mb-2">
                          {b.weeks}
                        </p>
                        <h3 className="text-white font-display text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-0.01em]">
                          {b.label}
                        </h3>
                      </div>
                      <p className="text-white/40 font-display text-[42px] md:text-[56px] font-semibold leading-none tracking-[-0.02em] mt-3 md:mt-0">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                    </div>

                    <p className="text-ink-dim text-[15px] leading-[1.65] mt-4">
                      {b.focus}
                    </p>

                    {b.callout && (
                      <div
                        className="mt-5 rounded-[14px] px-5 py-4 border border-accent/30"
                        style={{
                          background:
                            'linear-gradient(120deg, rgba(111,76,255,0.18) 0%, rgba(251,213,207,0.10) 100%)',
                        }}
                      >
                        <p className="text-white text-[14px] leading-[1.6] italic">
                          {b.callout}
                        </p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
