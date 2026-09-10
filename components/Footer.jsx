import Image from 'next/image';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
        <div>
          <ColumnTitle title="Resources" />
          <List items={[{ label: 'Free Resources', href: '/free-resources' }]} />
          <ColumnTitle title="Company" className="mt-8" />
          <List items={[
            { label: 'About', href: '/about' },
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ]} />
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-10 gap-y-10">
            <div>
              <ColumnTitle title="Contact" />
              <a
                href="mailto:contact@violedu.com"
                className="text-ink-dim text-[14px] hover:text-white transition hover:underline underline-offset-4"
              >
                contact@violedu.com
              </a>
            </div>

            <div>
              <ColumnTitle title="Follow Us" />
              <div className="flex items-center gap-5 text-white/85">
                <SocialIcon label="YouTube" href="https://www.youtube.com/@violedugrp">
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
                </SocialIcon>
              </div>
            </div>
          </div>

          <NewsletterSignup />
        </div>
      </div>

      <div className="container-x mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" aria-label="violedu home" className="inline-flex items-center">
          <Image
            src="/violedu_logo_white.png"
            alt="violedu"
            width={480}
            height={90}
            className="h-[28px] w-auto opacity-90"
          />
        </a>
        <div className="text-right text-white/75 text-[14px]">
          <p className="text-ink-muted text-[13px]">&copy; 2026 Violedu</p>
        </div>
      </div>
    </footer>
  );
}

function ColumnTitle({ title, className = '' }) {
  return <h4 className={`text-white text-[20px] font-semibold tracking-[-0.01em] mb-5 ${className}`}>{title}</h4>;
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.label} className="text-ink-dim text-[14px] hover:text-white transition flex items-center gap-2">
          <a href={it.href || '#'} className="hover:underline underline-offset-4">{it.label}</a>
          {it.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/30 text-white border border-accent/40 tracking-wide">
              {it.badge}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({ children, label = 'social link', href = '#' }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      className="hover:text-white transition"
      aria-label={label}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
