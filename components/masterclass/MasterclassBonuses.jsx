import Reveal from '../Reveal';

const bonuses = [
  {
    n: '01',
    title: 'The Pre-Screen Video Mastery System',
    value: '€150',
    delivery: 'PDF',
    solves: 'Panels judge the recording first.',
    body: 'Conservatoire panels and diploma adjudicators judge the recording before they ever see the player — and most home recordings quietly cost marks before the first phrase is done. This is the exact phone, laptop, or entry-level-camera placement, lighting, and audio setup that makes a home take sound clean and look professional. Plus the ABRSM submission checklist, conservatoire pre-screen format requirements, and how to structure the session so you capture your best take — not your most exhausted one.',
  },
  {
    n: '02',
    title: 'The Performance Day Mental Blueprint',
    value: '€120',
    delivery: 'PDF',
    solves: 'Hold up on the day.',
    body: 'The week before an audition is where the preparation quietly comes apart — the over-playing, the second-guessing, the 2am doubt. This is the fix: a structured system for each of the 7 days before you walk out — what to practice, what to stop practicing, how to handle the physical symptoms on the day, and a pre-performance ritual built for string players, not the generic breathing drills athletes use.',
  },
  {
    n: '03',
    title: 'The Audition-Prep Practice Tracker',
    value: '€60',
    delivery: 'PDF template',
    solves: 'Know what’s working.',
    body: 'The students who arrive at Week 5 ready are, almost without exception, the ones who tracked what they actually practised — not what they meant to. This is the daily tracker, built around your 6-week audition roadmap: which passages, the tempo you reached, what broke down, and exactly what to bring to the next session. 60 seconds to fill in; one glance to see if the week moved.',
  },
  {
    n: '04',
    title: 'The Personalized Daily Warm-Up Sheet',
    value: '€90',
    delivery: 'PDF',
    solves: 'A warm-up built for you.',
    body: 'Stock warm-ups don’t ready your hands for your program. After your first session I hand-build a 10–15 minute routine tuned to your specific technical weak points — the first thing you play every day before you touch your repertoire.',
  },
  {
    n: '05',
    title: 'The Post-Audition Debrief Session',
    value: '€120',
    delivery: 'Live 1-on-1 session',
    solves: 'Close the loop, open the next.',
    body: 'About 14 days after your audition or exam, we meet again to review your performance — what held up under pressure, what didn’t, and what to keep drilling. One conversation that closes the loop and opens the next chapter: the next audition cycle or the next piece.',
  },
];

export default function MasterclassBonuses() {
  return (
    <section id="bonuses" className="section-pad relative">
      {/* ambient peach glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 35% at 50% 0%, rgba(251,213,207,0.10) 0%, rgba(23,21,47,0) 65%)',
        }}
      />

      <div className="container-x">
        <div className="text-center mb-14 md:mb-16 max-w-[820px] mx-auto">
          <Reveal
            as="p"
            delay={0}
            className="text-[#fbd5cf] text-[20px] md:text-[22px] mb-4 font-semibold tracking-[0.01em]"
          >
            The Bonuses
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.06] font-semibold tracking-[-0.02em]"
          >
            Five tools built for the audition
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((b, i) => (
            <Reveal key={b.n} delay={200 + i * 100} className="h-full">
              <BonusCard {...b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusCard({ n, title, body, value, delivery, solves }) {
  return (
    <article
      className="relative h-full flex flex-col rounded-[22px] border border-white/8 p-7 md:p-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
        boxShadow:
          '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -40px rgba(0,0,0,0.6)',
      }}
    >
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      <div className="flex items-start justify-between mb-5">
        <span
          className="font-display text-[34px] md:text-[40px] font-semibold leading-none"
          style={{
            background: 'linear-gradient(160deg, #fbd5cf 0%, #c4b5fd 60%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {n}
        </span>
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-white/75"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {delivery}
        </span>
      </div>

      <h3 className="text-white font-display text-[19px] md:text-[21px] font-semibold leading-[1.25] tracking-[-0.01em] mb-3">
        {title}
      </h3>

      {/* the obstacle this bonus solves */}
      <p className="text-[#fbd5cf] text-[12.5px] font-semibold leading-[1.4] mb-3">
        {solves}
      </p>

      <p className="text-ink-dim text-[14px] leading-[1.65] flex-1">{body}</p>

      {/* price anchor, pinned to the bottom */}
      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-[#fbd5cf]"
          style={{
            background: 'rgba(251,213,207,0.10)',
            border: '1px solid rgba(251,213,207,0.30)',
          }}
        >
          Value {value}
        </span>
      </div>
    </article>
  );
}
