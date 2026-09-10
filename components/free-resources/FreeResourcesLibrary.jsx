'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';

const RESOURCES = [
  {
    id: 'worksheet-vibrato',
    href: '/free-resources/master-your-vibrato',
    image: '/worksheet_vibrato_cover.png',
    badge: 'Worksheet',
    format: 'PDF',
    category: 'Technique',
    title: 'Master Your Vibrato',
    description:
      'The four elements of an expressive vibrato — the three vibrato types, plus how vibrato shapes your intonation, dynamics, and musical style.',
    cta: 'Download The Worksheet',
    accentFrom: 'rgba(45,190,175,0.5)',
    accentTo: 'rgba(20,120,110,0.05)',
  },
  {
    id: 'worksheet-memory',
    href: '/free-resources/learn-music-faster',
    image: '/worksheet_memory_cover.png',
    badge: 'Handbook',
    format: 'PDF',
    category: 'Practice',
    title: 'Learn Music Faster',
    description:
      'Memorize concert repertoire the way conservatory players do — four memory anchors, written out as a practical, repeatable system.',
    cta: 'Download The Handbook',
    accentFrom: 'rgba(251,213,207,0.45)',
    accentTo: 'rgba(139,92,246,0.05)',
  },
  {
    id: 'worksheet-sound',
    href: '/free-resources/sound-like-a-pro',
    image: '/worksheet_cover.png',
    badge: 'Worksheet',
    format: 'PDF',
    category: 'Technique',
    title: 'Sound Like A Pro Violinist',
    description:
      'A 12-page worksheet that walks you through the bow-arm checks and tone exercises that separate students from professionals.',
    cta: 'Download The Worksheet',
    accentFrom: 'rgba(139,92,246,0.55)',
    accentTo: 'rgba(76,29,149,0.05)',
  },
];

const CATEGORIES = [
  { label: 'All Resources', value: 'all' },
  { label: 'Technique', value: 'Technique' },
  { label: 'Practice', value: 'Practice' },
  { label: 'Performance', value: 'Performance' },
  { label: 'Repertoire', value: 'Repertoire' },
];

const FORMATS = [
  { label: 'PDF', value: 'PDF' },
  { label: 'Video', value: 'Video' },
  { label: 'Course', value: 'Course' },
];

export default function FreeResourcesLibrary() {
  const [category, setCategory] = useState('all');
  const [formats, setFormats] = useState([]);

  const toggleFormat = (val) => {
    setFormats((prev) =>
      prev.includes(val) ? prev.filter((f) => f !== val) : [...prev, val],
    );
  };

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const catOK = category === 'all' || r.category === category;
      const fmtOK = formats.length === 0 || formats.includes(r.format);
      return catOK && fmtOK;
    });
  }, [category, formats]);

  return (
    <section className="relative pb-28 md:pb-36">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[120px]">
            <Reveal delay={0}>
              <div
                className="rounded-[18px] border border-white/8 p-6"
                style={{
                  background:
                    'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.55)',
                }}
              >
                <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
                  Categories
                </p>
                <ul className="space-y-1.5">
                  {CATEGORIES.map((c) => {
                    const active = category === c.value;
                    return (
                      <li key={c.value}>
                        <button
                          type="button"
                          onClick={() => setCategory(c.value)}
                          className={`w-full text-left text-[14px] rounded-[10px] px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                            active
                              ? 'text-white font-semibold'
                              : 'text-ink-dim hover:text-white'
                          }`}
                          style={
                            active
                              ? {
                                  background:
                                    'linear-gradient(135deg, rgba(111,76,255,0.30) 0%, rgba(139,92,246,0.10) 100%)',
                                  border:
                                    '1px solid rgba(168,139,250,0.30)',
                                }
                              : { border: '1px solid transparent' }
                          }
                        >
                          {c.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.22em] uppercase mt-7 mb-4">
                  Format
                </p>
                <ul className="space-y-2.5">
                  {FORMATS.map((f) => {
                    const checked = formats.includes(f.value);
                    return (
                      <li key={f.value}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <span
                            className="w-[18px] h-[18px] rounded-[6px] grid place-items-center transition"
                            style={{
                              background: checked
                                ? 'linear-gradient(160deg, #c4b5fd 0%, #6f4cff 100%)'
                                : 'rgba(255,255,255,0.05)',
                              border: checked
                                ? '1px solid rgba(196,181,253,0.6)'
                                : '1px solid rgba(255,255,255,0.15)',
                            }}
                          >
                            {checked && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                                aria-hidden
                              >
                                <path
                                  d="M2.5 6.5l2 2 5-5"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </span>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() => toggleFormat(f.value)}
                          />
                          <span
                            className={`text-[14px] transition ${
                              checked
                                ? 'text-white'
                                : 'text-ink-dim group-hover:text-white'
                            }`}
                          >
                            {f.label}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    setCategory('all');
                    setFormats([]);
                  }}
                  className="mt-7 w-full btn-ghost text-[13px] !py-[10px]"
                >
                  Clear Filters
                </button>
              </div>
            </Reveal>
          </aside>

          {/* Cards grid */}
          <div>
            <div className="flex items-baseline justify-between mb-7">
              <Reveal
                as="p"
                delay={0}
                className="text-white/85 text-[14px] md:text-[15px]"
              >
                Showing{' '}
                <span className="text-white font-semibold">
                  {filtered.length}
                </span>{' '}
                {filtered.length === 1 ? 'resource' : 'resources'}
              </Reveal>
              <Reveal
                as="p"
                delay={80}
                className="hidden sm:block text-ink-muted text-[13px]"
              >
                More dropping monthly
              </Reveal>
            </div>

            {filtered.length === 0 ? (
              <Reveal>
                <div
                  className="rounded-[20px] border border-white/8 p-10 text-center"
                  style={{
                    background:
                      'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
                  }}
                >
                  <p className="text-white font-display text-[22px] font-semibold tracking-[-0.01em]">
                    Nothing here yet.
                  </p>
                  <p className="text-ink-dim text-[14px] mt-2 leading-[1.6]">
                    Try clearing the format filter or switching category.
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                {filtered.map((r, i) => (
                  <Reveal key={r.id} delay={i * 140}>
                    <ResourceCard resource={r} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource }) {
  return (
    <Link
      href={resource.href}
      className="group block h-full focus-visible:outline-none"
    >
      <article
        className="relative h-full flex flex-col rounded-[20px] border border-white/8 overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:border-white/15 group-focus-visible:ring-2 group-focus-visible:ring-accent/60"
        style={{
          background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -28px rgba(0,0,0,0.55)',
          transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {/* Image */}
        <div className="relative aspect-[5/3] overflow-hidden border-b border-white/[0.06] bg-[#1a1735]">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)' }}
          >
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{
                objectPosition: 'center 42%',
                transform: 'scale(0.95)',
              }}
            />
          </div>
          {/* Format chip */}
          <span
            className="absolute top-4 left-4 z-10 text-[10.5px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full text-white/90"
            style={{
              background: 'rgba(15,12,40,0.6)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {resource.badge}
          </span>
          {/* Format tag right */}
          <span
            className="absolute top-4 right-4 z-10 text-[10.5px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full text-white/85"
            style={{
              background: 'rgba(15,12,40,0.45)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {resource.format}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-7">
          <p className="text-[#fbd5cf] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            Free Resource &middot; {resource.category}
          </p>
          <h3 className="text-white font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.01em] leading-[1.2]">
            {resource.title}
          </h3>
          <p className="text-ink-dim text-[14.5px] leading-[1.65] mt-3 flex-1">
            {resource.description}
          </p>

          <div
            className="mt-7 w-full rounded-[14px] py-[14px] text-center text-[14.5px] font-semibold transition duration-300"
            style={{
              background: '#fbd5cf',
              color: '#161427',
              boxShadow:
                '0 10px 28px -14px rgba(251,213,207,0.55), 0 1px 0 rgba(255,255,255,0.4) inset',
              transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            <span className="transition group-hover:-translate-y-px inline-block">
              {resource.cta}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
