'use client';

import Image from 'next/image';
import Reveal from '../Reveal';

export default function FreeResourcesHero() {
  return (
    <section className="relative pt-[140px] md:pt-[180px] pb-12 md:pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 10%, rgba(111,76,255,0.28) 0%, rgba(23,21,47,0) 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[180px] -translate-x-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background:
            'radial-gradient(closest-side, rgba(168,139,250,0.45), rgba(23,21,47,0))',
        }}
      />

      <div className="container-x text-center max-w-[980px]">
        <Reveal
          as="h1"
          delay={0}
          className="text-white font-display font-semibold text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.05] tracking-[-0.025em]"
        >
          A Violinist&rsquo;s Must Have{' '}
          <span className="text-[#fbd5cf]">Free Resources</span>
          <span className="text-white">.</span>
        </Reveal>

        <Reveal
          delay={220}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-[15px] xl:text-[16px]"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={n}
                src={`/profile_${n}.jpg`}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-bg object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/85 sm:ml-2 leading-tight">
            <span>10+ years coaching experience</span>
            <span className="text-white/40">|</span>
            <span>Trusted by 65K+ violinists worldwide</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
