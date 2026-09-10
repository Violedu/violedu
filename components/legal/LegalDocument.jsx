import Reveal from '../Reveal';

export default function LegalDocument({
  eyebrow,
  title,
  italicWord,
  lastUpdated,
  intro,
  sections,
}) {
  const { before, after } = splitTitleAroundWord(title, italicWord);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[140px] md:pt-[160px] pb-14 md:pb-20">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#050410]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(48% 38% at 50% 22%, rgba(139,92,246,0.42) 0%, rgba(124,58,237,0.22) 32%, rgba(76,29,149,0.10) 58%, rgba(5,4,16,0) 80%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[55%]"
            style={{
              background:
                'linear-gradient(to bottom, rgba(5,4,16,0) 0%, rgba(8,7,22,0.85) 40%, #0d0b22 70%, #131129 90%, #17152f 100%)',
            }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="text-center max-w-[820px] mx-auto">
            <Reveal
              as="p"
              delay={0}
              className="text-[#fbd5cf] text-[18px] md:text-[21px] mb-5 font-semibold tracking-[0.18em] uppercase"
            >
              {eyebrow}
            </Reveal>
            <Reveal
              as="h1"
              delay={120}
              className="text-white font-display font-semibold text-[40px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.05] tracking-[-0.025em]"
            >
              {before}
              {italicWord && <span className="text-[#fbd5cf]">{italicWord}</span>}
              {after}
            </Reveal>
            <Reveal
              as="p"
              delay={260}
              className="mt-7 text-ink-muted text-[13.5px] md:text-[14px] font-medium tracking-[0.14em] uppercase"
            >
              Last Updated · {lastUpdated}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Document body */}
      <section className="relative pb-24 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(55% 40% at 50% 0%, rgba(111,76,255,0.10) 0%, rgba(23,21,47,0) 60%)',
          }}
        />

        <div className="container-x">
          <div className="mx-auto max-w-[760px]">
            {intro && (
              <Reveal
                as="p"
                delay={0}
                className="text-ink-dim text-[16px] md:text-[17px] leading-[1.8] mb-14 md:mb-16"
              >
                {intro}
              </Reveal>
            )}

            <ol className="space-y-12 md:space-y-14 list-none">
              {sections.map((section, i) => (
                <Reveal
                  as="li"
                  key={section.title}
                  delay={Math.min(i * 40, 240)}
                  className="scroll-mt-32"
                  id={slugify(section.title)}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      className="font-display text-[22px] md:text-[26px] font-semibold leading-none tracking-[-0.01em] tabular-nums shrink-0"
                      style={{
                        background:
                          'linear-gradient(180deg, #fbd5cf 0%, rgba(251,213,207,0.4) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-white font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.01em] leading-[1.25]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-ink-dim text-[15px] md:text-[16px] leading-[1.78] pl-0 md:pl-12">
                    {section.body.map((para, j) =>
                      Array.isArray(para) ? (
                        <ul key={j} className="list-none space-y-2.5 pt-1">
                          {para.map((item, k) => (
                            <li key={k} className="flex items-start gap-3">
                              <span
                                aria-hidden
                                className="mt-[10px] inline-block w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: '#fbd5cf' }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j}>{para}</p>
                      )
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Footer contact card */}
            <Reveal
              delay={120}
              className="mt-20 md:mt-24 rounded-[20px] border border-white/8 p-7 md:p-9"
              style={{ background: 'linear-gradient(180deg, #221f3f 0%, #1a1735 100%)' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.22em] uppercase mb-2">
                    Questions?
                  </p>
                  <h3 className="text-white font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.01em] leading-[1.25]">
                    We&rsquo;re a quick email away.
                  </h3>
                </div>
                <a
                  href="mailto:contact@violedu.com"
                  className="btn-violet text-[14px] whitespace-nowrap self-start md:self-auto"
                >
                  contact@violedu.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitTitleAroundWord(title, word) {
  if (!word) return { before: title, after: '' };
  const idx = title.indexOf(word);
  if (idx === -1) return { before: title, after: '' };
  return {
    before: title.slice(0, idx),
    after: title.slice(idx + word.length),
  };
}
