'use client';

import { useEffect, useRef, useState } from 'react';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 1100,
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  immediate = false,
  className = '',
  style,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    // Immediate mode: play on mount regardless of scroll position. Used for
    // above-the-fold load sequences (e.g. the hero) where an element may sit
    // below the fold on tall screens and would otherwise never intersect. Two
    // rAFs let the initial opacity:0 frame paint before the transition flips on.
    if (immediate) {
      let raf2;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        if (raf2) cancelAnimationFrame(raf2);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, immediate]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : `translate3d(0, ${y}px, 0)`,
        transition: `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
