'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#050410]/65 backdrop-blur-md'
          : 'bg-[#050410]'
      }`}
    >
      <div className="container-x flex items-center justify-between h-[80px] min-[1000px]:h-[100px]">
        {/* Logo (left) */}
        <a
          href="/"
          aria-label="violedu home"
          onClick={(e) => {
            setMenuOpen(false);
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center shrink-0"
        >
          <Image
            src="/violedu_logo_white.png"
            alt="violedu"
            width={640}
            height={120}
            priority
            className="h-[24px] w-auto"
          />
        </a>

        {/* Nav + CTA (right group, 1000px+) */}
        <div className="hidden min-[1000px]:flex items-center gap-9">
          <nav className="flex items-center gap-9">
            <NavLink href="/free-resources">Free Resources</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
          <a href="/book" className="btn-violet text-[14px]">
            Book Free 30-Min Call
          </a>
        </div>

        {/* Hamburger (below 1000px) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="min-[1000px]:hidden text-white/90 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-md p-2"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <path
              d="M4 9h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="origin-center transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
              style={menuOpen ? { transform: 'translateY(5px) rotate(45deg)' } : undefined}
            />
            <path
              d="M4 19h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="origin-center transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
              style={menuOpen ? { transform: 'translateY(-5px) rotate(-45deg)' } : undefined}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel (below 1000px) */}
      <div
        id="mobile-menu"
        className={`min-[1000px]:hidden overflow-hidden border-t border-white/[0.06] transition-[max-height,opacity] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          <MobileLink href="/free-resources" onClick={() => setMenuOpen(false)}>
            Free Resources
          </MobileLink>
          <MobileLink href="/about" onClick={() => setMenuOpen(false)}>
            About
          </MobileLink>
          <a
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="btn-violet text-[15px] mt-3 w-full justify-center"
          >
            Book Free 30-Min Call
          </a>
        </nav>
      </div>
    </header>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white text-[17px] font-medium py-3 px-1 rounded-lg transition hover:text-white/85 active:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {children}
    </a>
  );
}

function NavLink({ href, children, hasDropdown = false }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 text-white text-[15px] font-medium hover:text-white/85 transition focus-visible:outline-none focus-visible:underline underline-offset-4"
    >
      {children}
      {hasDropdown && (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-[6px] bg-white/10 border border-white/15 transition group-hover:bg-white/15">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </a>
  );
}
