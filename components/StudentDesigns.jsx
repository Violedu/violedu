export default function StudentDesigns() {
  return (
    <section id="designs" className="section-pad">
      <div className="container-x">
        <div className="text-center mb-14">
          <h2 className="text-white font-display text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.05] font-semibold tracking-[-0.02em]">
            Designs Our Students Created
          </h2>
          <p className="text-ink-dim mt-4 max-w-[520px] mx-auto text-[15px] leading-[1.6]">
            Explore the remarkable designs created by our students after completing our courses.
          </p>
        </div>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <Tile className="col-span-12 md:col-span-5 h-[280px]" tone="brand" />
          <Tile className="col-span-6 md:col-span-4 row-span-2 h-[576px]" tone="editorial" />
          <Tile className="col-span-6 md:col-span-3 row-span-2 h-[576px]" tone="portfolio" />
          <Tile className="col-span-12 md:col-span-5 h-[280px]" tone="campus" />
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5 mt-4 md:mt-5">
          <Tile className="col-span-6 md:col-span-5 h-[280px]" tone="tech" />
          <Tile className="col-span-6 md:col-span-3 h-[280px]" tone="photo" />
          <Tile className="col-span-12 md:col-span-4 h-[280px]" tone="lotus" />
        </div>
      </div>
    </section>
  );
}

const tones = {
  brand:      'linear-gradient(135deg, #2a1f5a 0%, #3b2e7a 100%)',
  editorial:  'linear-gradient(180deg, #2a223e 0%, #1a1430 100%)',
  portfolio:  'linear-gradient(135deg, #3a2e72 0%, #6f4cff 100%)',
  campus:     'linear-gradient(135deg, #4f7ad6 0%, #6ea0ee 60%, #b0c8f5 100%)',
  tech:       'linear-gradient(135deg, #1c1340 0%, #4d3aa0 100%)',
  photo:      'linear-gradient(135deg, #221f48 0%, #2a2655 100%)',
  lotus:      'linear-gradient(135deg, #4a2820 0%, #8b4e3a 100%)',
};

function Tile({ tone = 'brand', className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] group ${className}`}
      style={{ background: tones[tone] }}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white/20" />
          <div className="h-2 w-14 rounded bg-white/15" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-3/4 rounded bg-white/22" />
          <div className="h-2.5 w-1/2 rounded bg-white/14" />
        </div>
        <div className="flex gap-2">
          <div className="h-14 w-20 rounded-lg bg-white/10 border border-white/10" />
          <div className="h-14 w-20 rounded-lg bg-white/10 border border-white/10" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-white/5 rounded-[18px] pointer-events-none" />
    </div>
  );
}
