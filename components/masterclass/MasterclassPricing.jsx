import Reveal from '../Reveal';

/* The 6-Week Audition Intensive — the single audition/exam preparation program. */
const program = {
  scarcity: 'October intake — 5 spots · 2 filled',
  name: 'The 6-Week Audition Intensive',
  price: '€1200',
  payment: 'Or 3 Payments Of €450',
  includes: [
    { strong: '12× 45-min 1-on-1 video sessions', rest: ' — 2 per week for 6 weeks, on your audition program' },
    { strong: 'The Audition Roadmap', rest: ' — personalized 6-week plan, by week, passage, and target tempo' },
    { strong: 'Between-session video feedback', rest: ' on your recordings (48h turnaround)' },
    { strong: 'Week-5 audition simulation', rest: ' with full written report' },
    { strong: '6-week WhatsApp / email support', rest: '' },
  ],
  bonuses: [
    'The Pre-Screen Video Mastery System',
    'The Performance Day Mental Blueprint',
    'The Audition-Prep Practice Tracker',
    'The Personalized Daily Warm-Up Sheet',
    'The Post-Audition Debrief Session',
  ],
};

/* Value-stacked breakdown for the table below the card */
const coreValueRows = [
  { label: '12× 45-min 1-on-1 sessions', note: '€80/session — standard 1-on-1 rate', value: 960 },
  { label: 'The Audition Roadmap', note: 'personalized 6-week plan, mapped passage by passage', value: 150 },
  { label: 'Between-session video feedback', note: '48h turnaround, 12 reviews across the program', value: 300 },
  { label: 'Week-5 audition simulation + written report', note: 'a full dress run before it counts', value: 150 },
  { label: '6-week WhatsApp / email support', note: 'questions answered between sessions', value: 120 },
];

const bonusValueRows = [
  { label: 'The Pre-Screen Video Mastery System', note: 'the recording setup panels actually judge you on', value: 150 },
  { label: 'The Performance Day Mental Blueprint', note: 'the 7-day countdown that settles your nerves', value: 120 },
  { label: 'The Audition-Prep Practice Tracker', note: 'the daily structure that keeps the week moving', value: 60 },
  { label: 'The Personalized Daily Warm-Up Sheet', note: 'built for your hands and your repertoire’s demands', value: 90 },
  { label: 'The Post-Audition Debrief Session', note: 'a follow-up checkpoint to lock in what you built', value: 120 },
];

const eur = (n) => `€${n.toLocaleString('en-US')}`;
const coreTotal = coreValueRows.reduce((s, r) => s + r.value, 0);
const bonusTotal = bonusValueRows.reduce((s, r) => s + r.value, 0);
const stackTotal = coreTotal + bonusTotal;

export default function MasterclassPricing() {
  return (
    <section id="pricing" className="section-pad relative">
      {/* ambient glow */}
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
            The Investment
          </Reveal>
          <Reveal
            as="h2"
            delay={150}
            className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]"
          >
            Everything you need to walk in audition-ready.
          </Reveal>
          <Reveal as="p" delay={300} className="text-ink-dim mt-5 text-[15px] leading-[1.65]">
            Every student begins with the free 30-minute call. We confirm you&rsquo;re the right fit,
            map out where you&rsquo;re stuck, and you leave with one fix to work on — before week 1 even starts.
          </Reveal>
        </div>

        {/* Single program card, centered */}
        <div className="mt-14 max-w-[560px] mx-auto">
          <Reveal delay={300} className="h-full">
            <ProgramCard program={program} />
          </Reveal>
        </div>

        {/* Value-stacked table */}
        <Reveal
          delay={300}
          className="mt-16 rounded-[24px] border border-white/8 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)' }}
        >
          <div className="px-7 md:px-10 pt-8 md:pt-10">
            <p className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.22em] uppercase mb-3">
              What it&rsquo;s worth
            </p>
            <h3 className="text-white font-display text-[24px] md:text-[30px] font-semibold tracking-[-0.01em] leading-[1.2]">
              The full stack, priced piece by piece.
            </h3>
          </div>

          <div className="px-2 md:px-6 pt-6 pb-2">
            <table className="w-full text-left">
              <tbody>
                <ValueGroupLabel>The coaching</ValueGroupLabel>
                {coreValueRows.map((row, i) => (
                  <ValueRow key={`core-${i}`} row={row} />
                ))}
                <SubtotalRow label="Coaching value" value={eur(coreTotal)} />

                <ValueGroupLabel>Plus 5 bonuses — yours, included</ValueGroupLabel>
                {bonusValueRows.map((row, i) => (
                  <ValueRow key={`bonus-${i}`} row={row} />
                ))}
                <SubtotalRow label="Bonus value" value={eur(bonusTotal)} />

                <tr>
                  <td className="py-5 md:py-6 px-4 md:px-6 align-top">
                    <p className="text-white text-[15px] md:text-[16px] font-semibold">
                      Total stacked value
                    </p>
                  </td>
                  <td className="py-5 md:py-6 px-4 md:px-6 text-right whitespace-nowrap">
                    <span className="text-ink-muted text-[15px] md:text-[16px] line-through font-semibold tabular-nums">
                      {eur(stackTotal)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Investment line */}
          <div
            className="mx-2 md:mx-6 mb-6 md:mb-8 rounded-[18px] px-6 md:px-8 py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{
              background:
                'linear-gradient(120deg, rgba(111,76,255,0.22) 0%, rgba(139,92,246,0.10) 60%, rgba(251,213,207,0.18) 100%)',
              border: '1px solid rgba(196, 181, 253, 0.25)',
            }}
          >
            <div>
              <p className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.22em] uppercase mb-2">
                Your investment
              </p>
              <p className="text-white font-display text-[44px] md:text-[56px] font-semibold leading-none tracking-[-0.02em]">
                €1200
              </p>
              <p className="text-white/75 text-[13px] md:text-[14px] mt-2">
                Or split into 3 monthly payments of <span className="text-white font-semibold">€450</span>{' '}
                — begin now, pay as you progress.
              </p>
            </div>
            <a href="/book" className="btn-peach text-[14px] whitespace-nowrap self-start md:self-auto">
              Book Your Free 30-Min Call →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValueGroupLabel({ children }) {
  return (
    <tr>
      <td colSpan={2} className="pt-7 pb-1 px-4 md:px-6">
        <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.2em] uppercase">
          {children}
        </p>
      </td>
    </tr>
  );
}

function ValueRow({ row }) {
  return (
    <tr className="border-b border-white/[0.06]">
      <td className="py-4 md:py-5 px-4 md:px-6 align-top">
        <p className="text-white text-[14px] md:text-[15px] font-medium leading-[1.45]">
          {row.label}
        </p>
        {row.note && (
          <p className="text-ink-muted text-[12px] md:text-[13px] mt-1 italic leading-[1.5]">
            {row.note}
          </p>
        )}
      </td>
      <td className="py-4 md:py-5 px-4 md:px-6 text-right align-top whitespace-nowrap text-white/85 text-[14px] md:text-[15px] font-semibold tabular-nums">
        {eur(row.value)}
      </td>
    </tr>
  );
}

function SubtotalRow({ label, value }) {
  return (
    <tr className="border-b border-white/[0.08]">
      <td className="py-3 px-4 md:px-6 align-top">
        <p className="text-white/70 text-[13px] font-medium">{label}</p>
      </td>
      <td className="py-3 px-4 md:px-6 text-right whitespace-nowrap text-white/70 text-[13px] font-semibold tabular-nums">
        {value}
      </td>
    </tr>
  );
}

/* The program card — accent border, purple background, and glow. */
function ProgramCard({ program }) {
  return (
    <article
      className="relative h-full flex flex-col rounded-[22px] border border-accent/45 p-7 md:p-9 overflow-hidden"
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

      {/* Header */}
      <div className="relative text-center">
        <div className="mb-3 flex flex-col items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 md:gap-2 whitespace-nowrap text-[10px] font-semibold tracking-[0.08em] md:tracking-[0.18em] uppercase text-[#fbd5cf] px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(251,213,207,0.08)',
              border: '1px solid rgba(251,213,207,0.30)',
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fbd5cf] animate-pulse" />
            {program.scarcity}
          </span>
        </div>
        <h3 className="text-white font-display text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] leading-[1.2]">
          {program.name}
        </h3>
        <p className="text-white font-display text-[48px] md:text-[60px] font-semibold tracking-[-0.02em] leading-[1.05] mt-3">
          {program.price}
        </p>
        <p className="text-[#fbd5cf] italic mt-3 text-[14px] md:text-[15px] leading-[1.5]">
          {program.payment}
        </p>
      </div>

      {/* divider */}
      <div className="relative mt-7 border-t border-white/[0.08]" />

      {/* Includes */}
      <p className="relative mt-7 text-white font-semibold text-[15px] mb-4">Includes:</p>
      <ul className="space-y-3 relative">
        {program.includes.map((f, i) => (
          <FeatureRow key={i}>
            <span className="text-white font-semibold">{f.strong}</span>
            {f.rest}
          </FeatureRow>
        ))}
      </ul>

      {/* Bonuses */}
      <div className="mt-7 pt-6 border-t border-white/[0.08] relative">
        <p className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.18em] uppercase mb-3">
          Plus 5 bonuses
        </p>
        <ul className="space-y-2">
          {program.bonuses.map((b, i) => (
            <li key={i} className="text-ink-dim text-[13.5px] leading-[1.55] flex items-start gap-2">
              <span className="text-[#fbd5cf] mt-[7px] inline-block w-1 h-1 rounded-full bg-[#fbd5cf]" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="/book"
        className="btn-peach text-[14px] block w-full text-center mt-8 relative"
      >
        Book Your Free 30-Min Call →
      </a>
    </article>
  );
}

function FeatureRow({ children }) {
  return (
    <li className="flex items-start gap-3 text-ink-dim text-[14px] leading-[1.55]">
      <span
        className="mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full shrink-0"
        style={{
          background: 'linear-gradient(160deg, rgba(196,181,253,0.25) 0%, rgba(111,76,255,0.22) 100%)',
          border: '1px solid rgba(196,181,253,0.35)',
        }}
        aria-hidden
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6.5l2 2 5-5" stroke="#e9defc" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
