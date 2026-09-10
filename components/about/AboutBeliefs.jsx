import Image from 'next/image';
import Reveal from '../Reveal';

const BELIEFS = [
  {
    number: '01',
    label: 'Knowledge',
    title: 'Deepen Your Understanding.',
    body:
      "Curiosity and constant renewal of knowledge are the most powerful tools for developing ourselves as artists and people. The understanding behind the score lies in questions concerning not only the historical background but also finding the 'right' tempo, shaping of melody, the language on which the pieces are built, the rhetorical figures, and the ability to recognize movement impulses.",
    image: '/belief_knowledge.png',
    side: 'right',
  },
  {
    number: '02',
    label: 'Technique',
    title: 'Precision and Awareness in Every Note.',
    body:
      "A stable instrumental technique is the ground upon which a musician's self-confidence is built. The fine-tuned synchronization of controlled bow and left-hand technique, high sensitivity to intonation and sound quality, and feeling comfortable in your own body and mind are what lead you to play at an advanced level.",
    image: '/belief_technique_2.png',
    side: 'left',
  },
  {
    number: '03',
    label: 'Interpretation',
    title: 'Uncover The Story.',
    body:
      'There is often a concern among young musicians: "Am I allowed to have my own interpretation?" The answer is yes, of course, and you definitely should! This is the way to express your own intelligence, humor, wisdom, and everything that you are in your playing. The key to truly uncovering your story is to have the skill and knowledge to do so.',
    image: '/belief_interpretation.png',
    side: 'right',
  },
];

export default function AboutBeliefs() {
  return (
    <section id="beliefs" className="section-pad relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 35% at 50% 0%, rgba(111,76,255,0.16) 0%, rgba(23,21,47,0) 60%)',
        }}
      />

      <div className="container-x">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-24">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[18px] md:text-[21px] mb-5 font-semibold tracking-[0.18em] uppercase"
          >
            Core Principles
          </Reveal>
          <Reveal
            as="h2"
            delay={140}
            className="text-white font-display text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[880px] mx-auto"
          >
            The Three Beliefs That Guide My Teaching.
          </Reveal>
          <Reveal
            as="p"
            delay={280}
            className="mt-6 text-ink-dim text-[15px] md:text-[17px] leading-[1.65] max-w-[620px] mx-auto"
          >
            Every lesson, every passage, every conversation is shaped by these three principles —
            the same ones I rely on for my own performances.
          </Reveal>
        </div>

        {/* Belief blocks */}
        <div className="space-y-28 md:space-y-36">
          {BELIEFS.map((b, i) => (
            <BeliefRow key={b.number} belief={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeliefRow({ belief, index }) {
  const imageOnRight = belief.side === 'right';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Text */}
      <Reveal
        delay={0}
        className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}
      >
        <div className="flex items-center gap-4 mb-6">
          <span
            className="font-display text-[32px] md:text-[40px] font-semibold leading-none tracking-[-0.02em]"
            style={{
              background:
                'linear-gradient(180deg, #fbd5cf 0%, rgba(251,213,207,0.35) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {belief.number}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          <span className="text-white/70 text-[13px] md:text-[14px] font-semibold tracking-[0.18em] uppercase">
            {belief.label}
          </span>
        </div>

        <h3 className="text-white font-display text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-semibold tracking-[-0.02em]">
          {belief.title}
        </h3>
        <p className="mt-5 text-ink-dim text-[15px] md:text-[16px] leading-[1.75] max-w-[560px]">
          {belief.body}
        </p>
      </Reveal>

      {/* Image */}
      <Reveal
        delay={160}
        className={imageOnRight ? 'lg:order-2' : 'lg:order-1'}
      >
        <div className="relative">
          <div
            className="relative rounded-[24px] overflow-hidden border border-white/10"
            style={{
              aspectRatio: '4 / 5',
              boxShadow:
                '0 40px 80px -30px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset',
            }}
          >
            <Image
              src={belief.image}
              alt={belief.label}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover scale-[1.06] origin-center"
            />
            {/* subtle violet wash for tonal cohesion with the dark page */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, rgba(139,92,246,0.12) 0%, rgba(76,29,149,0.08) 60%, rgba(5,4,16,0) 100%)',
                mixBlendMode: 'soft-light',
              }}
            />
            {/* bottom darken for grounding */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,10,29,0) 55%, rgba(11,10,29,0.4) 100%)',
              }}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
