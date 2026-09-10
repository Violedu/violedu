'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  // Ensure playback on mobile browsers, and honor reduced-motion by leaving
  // the poster frame in place instead of autoplaying the loop.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      v.removeAttribute('autoplay');
      v.pause();
      return;
    }
    v.play()?.catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background system — full-bleed looping video + dark/violet overlay */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        {/* 1. Base color — deep dark (shows before the video paints) */}
        <div className="absolute inset-0 bg-[#050410]" />

        {/* 2. Looping background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          poster="https://d2cvlhxoblnid8.cloudfront.net/hero_bg_poster_1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d2cvlhxoblnid8.cloudfront.net/hero_bg_video_1.webm" type="video/webm" />
          <source src="https://d2cvlhxoblnid8.cloudfront.net/hero_bg_video_1.mp4" type="video/mp4" />
        </video>

        {/* 3. Dark tint — even darkening so the headline pops; strongest at the
            top behind the nav, eased through the middle. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,4,16,0.72) 0%, rgba(5,4,16,0.55) 22%, rgba(5,4,16,0.52) 50%, rgba(5,4,16,0.52) 74%, rgba(5,4,16,0.38) 90%)',
          }}
        />

        {/* 4. Blend to the next section's body bg. It lives mostly in the spacer
            below the first viewport, so the initial view stays clean video and
            the blend only reveals once you start scrolling. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[20vh]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(23,21,47,0) 0%, rgba(23,21,47,0) 30%, rgba(23,21,47,0.5) 68%, rgba(23,21,47,0.92) 90%, #17152f 100%)',
          }}
        />
      </div>

      {/* Hero content — fills the first viewport */}
      <div className="container-x relative z-10 w-full min-h-screen flex flex-col pt-[100px] pb-7 md:pt-[110px] md:pb-9">
        {/* Centered headline + CTA */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-[22vh]">
          <h1
            className="font-serif text-white text-[56px] sm:text-[70px] md:text-[84px] lg:text-[96px] xl:text-[108px] 2xl:text-[122px] leading-[1.1] tracking-[-0.025em] max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1360px] mx-auto"
            style={{ fontWeight: 450, fontVariationSettings: '"opsz" 40' }}
          >
            Six Weeks To<br /><span className="italic text-[#f2b9ad]">Audition-Ready</span>
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
            <a
              href="/book"
              className="btn-peach whitespace-nowrap text-[16px] xl:text-[17px] !py-[14px] !px-[25px]"
            >
              Book Free 30-Min Call
            </a>
          </div>
        </div>

        {/* Stats, distributed evenly along the bottom edge */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-[860px] mx-auto w-full">
          {[
            { value: '10+', label: 'Years Coaching' },
            { value: '65K+', label: 'Violinists Worldwide' },
            { value: '700+', label: 'Violedu Subscribers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-semibold text-white text-[28px] md:text-[40px] lg:text-[46px] leading-none tracking-[-0.02em]">
                {stat.value}
              </div>
              <div className="mt-2 text-white/75 text-[12px] md:text-[14px] tracking-[0.04em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer below the fold — the video keeps running here and blends into
          the next section as the visitor scrolls. */}
      <div aria-hidden className="h-[14vh]" />
    </section>
  );
}
