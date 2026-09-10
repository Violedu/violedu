import Image from 'next/image';
import Reveal from '../Reveal';

// Radial fade so the square image dissolves into the page background on every edge.
// Fully transparent by ~62% radius — the square corners (~71%) are cut entirely,
// leaving only the circular seal and a soft glow that melts into the background.
const edgeFade =
  'radial-gradient(circle at 50% 50%, #000 40%, rgba(0,0,0,0.5) 52%, transparent 62%)';

export default function MasterclassGuarantees() {
  return (
    <section id="guarantees" className="section-pad relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 40% at 78% 45%, rgba(111,76,255,0.16) 0%, rgba(23,21,47,0) 70%)',
        }}
      />

      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1 max-w-[560px]">
            <Reveal
              as="h2"
              delay={120}
              className="text-white font-display text-[30px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.08] font-semibold tracking-[-0.02em]"
            >
              30-Day No Questions Asked Money-Back Guarantee
            </Reveal>
            <Reveal as="p" delay={220} className="text-white text-[17px] md:text-[19px] leading-[1.55] font-semibold mt-6">
              When you enroll in the 6-Week Audition Intensive, you&rsquo;re fully protected by
              our 100% Satisfaction Guarantee.
            </Reveal>
            <Reveal as="p" delay={300} className="text-ink-dim text-[15px] leading-[1.7] mt-5">
              If you don&rsquo;t feel like you&rsquo;ve received massive value and you decide you
              want to cancel any time within the next 30 days, just let us know and we&rsquo;ll
              refund you promptly. No hassles, no questions, no hoops to jump through.
            </Reveal>
            <Reveal delay={380} className="mt-9">
              <a href="/book" className="btn-peach text-[14px]">
                Book Your Free 30-Min Call →
              </a>
            </Reveal>
          </div>

          {/* Seal */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={200}>
              <div
                className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
                style={{
                  WebkitMaskImage: edgeFade,
                  maskImage: edgeFade,
                }}
              >
                <Image
                  src="/guarantee.png"
                  alt="30-Day 100% Money-Back Guarantee seal"
                  fill
                  sizes="(max-width: 768px) 320px, 420px"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
