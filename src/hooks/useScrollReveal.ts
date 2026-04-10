'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Shared IntersectionObserver hook for triggering CSS reveal classes.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  margin: string = '-40px',
  once: boolean = true
) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      {
        rootMargin: `${margin} 0px ${margin} 0px`,
        threshold: 0,
      }
    );

    // Small defer helps with initial mount timing on route transitions.
    const timeoutId = window.setTimeout(() => {
      observer.observe(element);
    }, 10);

    return () => {
      window.clearTimeout(timeoutId);
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [margin, once]);

  return { ref, isRevealed };
}
