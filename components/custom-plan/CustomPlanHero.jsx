import Reveal from '../Reveal';

const stats = [
  { value: '10+', label: 'Years Coaching' },
  { value: '65K+', label: 'Violinists Worldwide' },
  { value: '700+', label: 'Violedu Subscribers' },
];

export default function CustomPlanHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background system — the online-lesson photo used for the product
          artwork, full-bleed and darkened with the same rgb(24,20,30) wash
          (~0.67 alpha) so the heading reads cleanly, then blended into the
          page body color along the bottom edge. */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050410]" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/masterclass_hero_1.png')" }}
        />
        {/* darkening wash — matches the product-image treatment */}
        <div className="absolute inset-0" style={{ background: 'rgba(24,20,30,0.68)' }} />
        {/* extra darkening behind the nav */}
        <div
          className="absolute inset-x-0 top-0 h-[32vh]"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,4,16,0.6) 0%, rgba(5,4,16,0) 100%)',
          }}
        />
        {/* bottom blend into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30vh]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(23,21,47,0) 0%, rgba(23,21,47,0.85) 70%, #17152f 100%)',
          }}
        />
      </div>

      {/* Hero content — fills the first viewport */}
      <div className="container-x relative z-10 w-full min-h-screen flex flex-col pt-[100px] pb-7 md:pt-[110px] md:pb-9">
        {/* Centered eyebrow + headline + CTA */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-[22vh]">
          <Reveal
            as="p"
            immediate
            delay={100}
            className="text-[#fbd5cf] text-[13px] md:text-[14px] font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            Flexible 1-on-1 Coaching
          </Reveal>

          <h1
            className="font-serif text-white text-[56px] sm:text-[70px] md:text-[84px] lg:text-[96px] xl:text-[108px] 2xl:text-[122px] leading-[1.1] tracking-[-0.025em] max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1360px] mx-auto"
            style={{
              fontWeight: 450,
              fontVariationSettings: '"opsz" 40',
              textShadow: '0 2px 30px rgba(0,0,0,0.45)',
            }}
          >
            <Reveal as="span" immediate delay={180} className="inline-block">
              Your pace.
            </Reveal>{' '}
            <Reveal as="span" immediate delay={340} className="inline-block italic text-[#f2b9ad]">
              Your schedule.
            </Reveal>
          </h1>

          <Reveal
            immediate
            delay={520}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/book"
              className="btn-peach whitespace-nowrap text-[16px] !py-[14px] !px-[26px]"
            >
              Book Free 30-Min Call
            </a>
            <a
              href="#how"
              className="text-white/80 hover:text-white text-[15px] font-medium underline-offset-4 hover:underline transition focus-visible:outline-none focus-visible:underline"
            >
              See how it works
            </a>
          </Reveal>
        </div>

        {/* Stats, distributed evenly along the bottom edge */}
        <Reveal
          immediate
          delay={760}
          className="mt-10 grid grid-cols-3 gap-4 max-w-[860px] mx-auto w-full"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-semibold text-white text-[28px] md:text-[40px] lg:text-[46px] leading-none tracking-[-0.02em]">
                {stat.value}
              </div>
              <div className="mt-2 text-white/75 text-[12px] md:text-[14px] tracking-[0.04em]">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Spacer below the fold — the photo blends into the next section here. */}
      <div aria-hidden className="h-[14vh]" />
    </section>
  );
}
