import Reveal from '../Reveal';

const steps = [
  {
    title: 'Book a free 30-min call',
    body: 'A quick fit check — I make sure pay-as-you-go sessions are right for where you are, and we map out where to start. No obligation either way.',
  },
  {
    title: 'Book your sessions',
    body: 'Pick times that fit your week. I email a secure payment link, and you pay per session, in advance.',
  },
  {
    title: 'Your 45-minute session',
    body: 'Live and 1-on-1, on whatever you bring: one passage, a movement, or a whole program. We work on exactly what you need.',
  },
  {
    title: 'Between-session video feedback',
    body: 'Send me recordings of your practice and I’ll return video feedback within 48 hours — a second set of expert ears between your live sessions.',
  },
  {
    title: 'Email & WhatsApp support',
    body: 'Reach me when something comes up — a quick question, a passage that won’t settle, or a clip you want a second opinion on.',
  },
];

export default function CustomPlanHowItWorks() {
  return (
    <section id="how" className="section-pad relative">
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
            How It Works
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.06] font-semibold tracking-[-0.02em]"
          >
            Five steps. No commitment.
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
              {steps.map((s, i) => (
                <li key={s.title} className="relative pl-[68px] md:pl-[90px]">
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute left-[20px] md:left-[28px] top-6 grid place-items-center w-[18px] h-[18px] rounded-full"
                    style={{
                      background: 'radial-gradient(closest-side, #fbd5cf 0%, #6f4cff 80%)',
                      boxShadow: '0 0 0 4px rgba(23,21,47,1), 0 0 18px rgba(168,139,250,0.55)',
                    }}
                  />

                  <div
                    className="rounded-[20px] border border-white/8 p-6 md:p-7"
                    style={{
                      background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
                      boxShadow:
                        '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -40px rgba(0,0,0,0.6)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-white font-display text-[20px] md:text-[25px] font-semibold leading-[1.25] tracking-[-0.01em] mt-1">
                        {s.title}
                      </h3>
                      <p className="text-white/40 font-display text-[40px] md:text-[54px] font-semibold leading-none tracking-[-0.02em] shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                    </div>

                    <p className="text-ink-dim text-[15px] leading-[1.65] mt-3 max-w-[640px]">
                      {s.body}
                    </p>
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
