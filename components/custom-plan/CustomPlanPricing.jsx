import Reveal from '../Reveal';

const features = [
  '45-minute 1-on-1 video session',
  'Between-session video feedback on your recordings (48h)',
  'Email & WhatsApp support',
];

export default function CustomPlanPricing() {
  return (
    <section id="pricing" className="section-pad relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 35% at 50% 10%, rgba(111,76,255,0.16) 0%, rgba(23,21,47,0) 70%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-12 max-w-[820px] mx-auto">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]"
          >
            The Rate
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]"
          >
            Pay as you go.
          </Reveal>
        </div>

        <div className="max-w-[560px] mx-auto">
          <Reveal delay={250}>
            <article
              className="relative flex flex-col items-center text-center rounded-[22px] border border-accent/45 p-8 md:p-11 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #2a1f5a 0%, #1c1737 65%, #1a1735 100%)',
                boxShadow:
                  '0 0 0 1px rgba(168,139,250,0.20) inset, 0 40px 80px -30px rgba(111,76,255,0.55)',
              }}
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-20 w-[280px] h-[280px] rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(168,139,250,0.55), rgba(23,21,47,0))',
                }}
              />

              <p className="relative text-white font-display text-[72px] md:text-[88px] font-semibold leading-none tracking-[-0.03em]">
                €90
              </p>
              <p className="relative text-[#fbd5cf] text-[14px] md:text-[15px] mt-3 tracking-[0.02em]">
                per 45-minute session
              </p>

              <div className="relative mt-7 border-t border-white/[0.08] w-full" />

              <p className="relative text-white text-[16px] md:text-[17px] font-semibold leading-[1.5] mt-7 max-w-[400px]">
                No minimum. No commitment. Book one, book ten — entirely your call.
              </p>

              <div className="relative mt-7 w-full max-w-[360px] mx-auto text-left">
                <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 text-center">
                  Every session includes
                </p>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-ink-dim text-[14px] leading-[1.5]"
                    >
                      <span
                        className="mt-[2px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full shrink-0"
                        style={{
                          background:
                            'linear-gradient(160deg, rgba(196,181,253,0.25) 0%, rgba(111,76,255,0.22) 100%)',
                          border: '1px solid rgba(196,181,253,0.35)',
                        }}
                        aria-hidden
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6.5l2 2 5-5"
                            stroke="#e9defc"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/book"
                className="btn-peach text-[15px] block w-full text-center mt-8 relative"
              >
                Book Your Free 30-Min Call →
              </a>
              <p className="relative text-white/55 text-[12.5px] mt-4">
                Every student starts with a free 30-min fit call — no obligation.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
