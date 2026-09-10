import Reveal from './Reveal';

const QUESTIONS = [
  {
    emoji: '🤔',
    text: 'Struggling with octave passages that collapse the moment you bring them up to tempo?',
  },
  {
    emoji: '✨',
    text: 'Dreaming of playing the cadenza with the freedom you hear in the great recordings?',
  },
  {
    emoji: '🔁',
    text: 'Tired of "just slow it down" feedback that never actually fixes the passage?',
  },
  {
    emoji: '🎯',
    text: 'Eager to learn the bow technique that makes difficult passages finally lock in?',
  },
  {
    emoji: '⚡',
    text: 'Seeking a faster, clearer path from the practice room to the stage?',
  },
  {
    emoji: '🏆',
    text: 'Determined to walk on stage knowing the piece will hold up under pressure?',
  },
];

export default function WhyLearn() {
  return (
    <section id="problem" className="section-pad relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 0%, rgba(111,76,255,0.18) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-20">
          <Reveal as="p" delay={0} className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]">
            Is This You?
          </Reveal>
          <Reveal as="h2" delay={150} className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]">
            Are You...
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {QUESTIONS.map((q, i) => (
            <Reveal key={q.text} delay={250 + i * 70}>
              <QuestionCard emoji={q.emoji} text={q.text} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="text-center mt-14 md:mt-20">
          <p className="text-white text-[18px] md:text-[22px] font-semibold tracking-[-0.01em]">
            If the answer is <span className="text-[#fbd5cf]">“Yes”</span> to any of the above, this program is for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function QuestionCard({ emoji, text }) {
  return (
    <article
      className="group relative flex items-center gap-5 h-full rounded-[20px] border border-white/[0.07] bg-[#1a1736] px-7 py-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.12]"
      style={{
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -40px rgba(0,0,0,0.6)',
      }}
    >
      {/* subtle top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[20px]"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div
        className="shrink-0 inline-flex items-center justify-center w-14 text-[44px] leading-none transition-transform duration-300 ease-out group-hover:scale-110"
        style={{
          filter:
            'saturate(1.25) brightness(1.08) drop-shadow(0 4px 14px rgba(139,92,246,0.45))',
        }}
        aria-hidden
      >
        {emoji}
      </div>

      <p className="text-white text-[15px] md:text-[16px] leading-[1.5]">
        {text}
      </p>
    </article>
  );
}
