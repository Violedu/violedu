import Reveal from '../Reveal';
import VideoPlayer from '../VideoPlayer';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-[140px] md:pt-[160px] pb-20 md:pb-28">
      {/* Background system, full-bleed across the entire section */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        {/* 1. Base color */}
        <div className="absolute inset-0 bg-[#050410]" />

        {/* 2. Radial brand bloom behind the heading */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(48% 38% at 50% 22%, rgba(139,92,246,0.42) 0%, rgba(124,58,237,0.22) 32%, rgba(76,29,149,0.10) 58%, rgba(5,4,16,0) 80%)',
          }}
        />

        {/* 3. Soft dark band fading to the next section bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,4,16,0) 0%, rgba(8,7,22,0.85) 40%, #0d0b22 70%, #131129 90%, #17152f 100%)',
          }}
        />
      </div>

      <div className="container-x relative z-10">
        {/* Heading block */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal
            as="h1"
            delay={120}
            className="text-white font-display font-semibold text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.05] tracking-[-0.025em] max-w-[980px] mx-auto"
          >
            Helping Violinists Find Their{' '}
            <span className="text-[#fbd5cf]">Voice</span> for Over a Decade.
          </Reveal>
        </div>

        {/* Video card — reuses the trailer player styling */}
        <Reveal delay={380} className="relative max-w-[920px] mx-auto">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[36px] blur-2xl opacity-70"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(111,76,255,0.30) 0%, rgba(23,21,47,0) 70%)',
            }}
          />

          <VideoPlayer
            src="https://d2cvlhxoblnid8.cloudfront.net/about_intro_1080p_h264_25fps_cmp.mp4"
            poster="/about_cover.jpg"
            label="Play introduction video"
          />
        </Reveal>

        {/* Bio + social links */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start max-w-[1040px] mx-auto">
          <Reveal delay={0}>
            <p
              className="text-[#fbd5cf] text-[17px] md:text-[18px] mb-4 font-semibold tracking-[0.18em] uppercase"
            >
              Work With Kalina
            </p>
            <h2 className="text-white font-display text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em]">
              Over a decade of teaching experience. A doctorate in violin. One mission — to step up your next performance.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="space-y-5 text-ink-dim text-[15px] md:text-[16px] leading-[1.75]">
              <p>
                Kalina is a versatile and accomplished violinist with over a decade of teaching
                experience. As a solo musician, she has captivated audiences with her virtuosity,
                and as a member of the renowned chamber ensemble{' '}
                <span className="text-white">&ldquo;Silhouettes&rdquo;</span> since 2010, she has
                graced international stages.
              </p>
              <p>
                With a doctoral degree in violin and a deep passion for education, she brings a
                wealth of expertise to her teaching — making her the perfect guide for your
                violin journey.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
