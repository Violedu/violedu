import Reveal from './Reveal';
import VideoPlayer from './VideoPlayer';

export default function Testimonials() {
  return (
    <section className="section-pad relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 40% at 50% 0%, rgba(111,76,255,0.16) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-16">
          <Reveal as="p" delay={0} className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]">
            Student Reviews
          </Reveal>
          <Reveal as="h2" delay={150} className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]">
            What they say.
          </Reveal>
        </div>

        {/* Video card */}
        <Reveal delay={200} className="relative max-w-[920px] mx-auto">
          {/* soft outer glow */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[36px] blur-2xl opacity-70"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(111,76,255,0.30) 0%, rgba(23,21,47,0) 70%)',
            }}
          />

          <VideoPlayer
            src="https://d2cvlhxoblnid8.cloudfront.net/testemonial_video_1080p_h264_25fps_cmp.mp4"
            poster="/testemonial_thumbnail.jpg"
            label="Play testimonial"
          />
        </Reveal>

      </div>
    </section>
  );
}
