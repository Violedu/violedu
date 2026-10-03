'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../Reveal';
import { latestResources } from './resourcesList';

// "More free resources" section shown at the foot of every detail page (video
// articles and worksheet pages). Shows the latest three resources, excluding the
// page you're currently on.
export default function MoreResources({ currentHref }) {
  const items = latestResources(currentHref, 3);
  if (!items.length) return null;

  return (
    <section className="relative pb-24 md:pb-32 pt-16 md:pt-20 border-t border-white/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 30%, rgba(111,76,255,0.12) 0%, rgba(23,21,47,0) 70%)',
        }}
      />
      <div className="container-x">
        <Reveal
          as="p"
          className="text-[#fbd5cf] text-[12px] font-semibold tracking-[0.26em] uppercase text-center mb-4"
        >
          Keep practising
        </Reveal>
        <Reveal
          as="h2"
          delay={60}
          className="font-display text-white text-center text-[30px] sm:text-[38px] md:text-[46px] font-semibold tracking-[-0.02em] leading-[1.1]"
        >
          More free resources
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="text-ink-dim text-center text-[15px] mt-4 max-w-[560px] mx-auto leading-[1.6]"
        >
          The latest worksheets and masterclasses to turn these ideas into daily
          practice.
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mt-12">
          {items.map((r, i) => (
            <Reveal key={r.href} delay={i * 120}>
              <MoreCard resource={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreCard({ resource }) {
  const isVideo = resource.isVideo;
  return (
    <Link href={resource.href} className="group block h-full focus-visible:outline-none">
      <article
        className="relative h-full flex flex-col rounded-[18px] border border-white/8 overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:border-white/15 group-focus-visible:ring-2 group-focus-visible:ring-accent/60"
        style={{
          background: 'linear-gradient(180deg, #1f1c3e 0%, #1a1735 100%)',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -28px rgba(0,0,0,0.55)',
          transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        <div className="relative aspect-[5/3] overflow-hidden border-b border-white/[0.06] bg-[#1a1735]">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)' }}
          >
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              sizes="(min-width: 768px) 360px, 100vw"
              className="object-cover"
              style={
                isVideo
                  ? { objectPosition: resource.imagePosition || 'center' }
                  : { objectPosition: 'center 42%', transform: 'scale(0.95)' }
              }
            />
          </div>
          {isVideo && (
            <span className="absolute inset-0 grid place-items-center">
              <span
                className="grid place-items-center w-[46px] h-[46px] rounded-full backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-110"
                style={{
                  background: 'rgba(16,14,34,0.5)',
                  border: '1px solid rgba(255,255,255,0.45)',
                  boxShadow: '0 10px 28px -8px rgba(0,0,0,0.6)',
                  transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="translate-x-[1px]">
                  <path
                    d="M8 5.5v13a1 1 0 0 0 1.55.83l10.2-6.5a1 1 0 0 0 0-1.66L9.55 4.67A1 1 0 0 0 8 5.5z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 p-6">
          <p className="text-[#fbd5cf] text-[10.5px] font-semibold tracking-[0.22em] uppercase mb-2.5">
            {resource.badge} &middot; {resource.category}
          </p>
          <h3 className="text-white font-display text-[19px] font-semibold tracking-[-0.01em] leading-[1.25]">
            {resource.title}
          </h3>
          <p className="text-ink-dim text-[13.5px] leading-[1.6] mt-2.5 flex-1 line-clamp-3">
            {resource.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-white text-[12px] font-semibold tracking-[0.14em] uppercase group-hover:gap-2.5 transition-all duration-300">
            {isVideo ? 'Watch' : 'Download free'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
