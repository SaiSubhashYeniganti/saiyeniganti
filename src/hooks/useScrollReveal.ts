'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A highly efficient, shared IntersectionObserver hook for triggering CSS animations.
 *
 * @param margin The rootMargin for the observer (e.g. "-40px" or "-100px").
 * @param once If true, the element stays revealed forever after first triggering.
 * @returns A ref to attach to the target element, and a boolean indicating if it is in view.
 */
export function useScrollReveal(margin: string = '-40px', once: string | boolean = true) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use a tiny timeout to ensure the DOM is ready, specifically for initial page load elements
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              if (once) {
                observer.unobserve(entry.target);
              }
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

      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observer.disconnect();
      };
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [margin, once]);

  return { ref, isRevealed };
}
