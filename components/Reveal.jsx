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
  }, [threshold, rootMargin]);

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
