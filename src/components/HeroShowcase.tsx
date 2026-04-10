'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const FIRST_IMAGE = { src: '/images/hero-showcase/mobile/tgp-1.webp', alt: 'The Gita Project Mobile', type: 'mobile' as const };

const IMAGES = [
  FIRST_IMAGE,
  { src: '/images/hero-showcase/desktop/arthm.webp', alt: 'ARTHM Foundation', type: 'desktop' as const },
  { src: '/images/hero-showcase/mobile/arthm.webp', alt: 'ARTHM Foundation Mobile', type: 'mobile' as const },
  { src: '/images/hero-showcase/desktop/blockpulse.webp', alt: 'BlockPulse Desktop', type: 'desktop' as const },
  { src: '/images/hero-showcase/mobile/bp-1.webp', alt: 'BlockPulse Mobile', type: 'mobile' as const },
  { src: '/images/hero-showcase/desktop/kv.webp', alt: 'KarmaV Desktop', type: 'desktop' as const },
  { src: '/images/hero-showcase/mobile/kv.webp', alt: 'KarmaV Mobile', type: 'mobile' as const },
  { src: '/images/hero-showcase/desktop/psc.webp', alt: 'Pragna Skin Clinic', type: 'desktop' as const },
  { src: '/images/hero-showcase/mobile/psc-1.webp', alt: 'Pragna Skin Clinic Mobile', type: 'mobile' as const },
  { src: '/images/hero-showcase/mobile/bp-2.webp', alt: 'BlockPulse News', type: 'mobile' as const },
  { src: '/images/hero-showcase/mobile/tgp-2.webp', alt: 'The Gita Project App', type: 'mobile' as const },
  { src: '/images/hero-showcase/mobile/psc-2.webp', alt: 'Pragna Skin Clinic Detail', type: 'mobile' as const },
];

function frameClasses(type: 'mobile' | 'desktop') {
  return type === 'mobile'
    ? 'h-[85%] max-h-[520px] aspect-[9/19.5] rounded-[2.5rem] ring-4 ring-ink/5'
    : 'w-[95%] aspect-[16/10] rounded-xl lg:rounded-[1.25rem] ring-1 ring-ink/10';
}

export function HeroShowcase() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const loadedSet = useRef<Set<string>>(new Set([FIRST_IMAGE.src]));
  const preloadedImages = useRef<HTMLImageElement[]>([]);

  const markLoaded = useCallback((src: string) => {
    loadedSet.current.add(src);
  }, []);

  useEffect(() => {
    IMAGES.forEach((image) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = image.src;
      img.onload = () => markLoaded(image.src);
      preloadedImages.current.push(img);
    });
    return () => {
      preloadedImages.current.forEach((img) => { img.onload = null; });
      preloadedImages.current = [];
    };
  }, [markLoaded]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayIndex((current) => {
        const next = (current + 1) % IMAGES.length;
        return loadedSet.current.has(IMAGES[next].src) ? next : current;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentImage = IMAGES[displayIndex];
  const isFirstSlide = displayIndex === 0;

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-accent/10 to-ink/5 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">

        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, x: 80, rotateY: -12, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, rotateY: -4, scale: 1 }}
            exit={{ opacity: 0, x: -80, rotateY: 4, scale: 0.85 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-canvas-alt ${frameClasses(currentImage.type)}`}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
              fetchPriority={isFirstSlide ? "high" : "auto"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
