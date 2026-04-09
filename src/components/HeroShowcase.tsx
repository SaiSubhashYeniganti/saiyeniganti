'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const IMAGES = [
  { src: '/images/Hero/Mobile%20References/TGP%201.png', alt: 'The Gita Project Mobile', type: 'mobile' },
  { src: '/images/Hero/Desktop%20References/ARTHM.png', alt: 'ARTHM Foundation', type: 'desktop' },
  { src: '/images/Hero/Mobile%20References/Arthm.png', alt: 'ARTHM Foundation Mobile', type: 'mobile' },
  { src: '/images/Hero/Desktop%20References/BlockPulse.png', alt: 'BlockPulse Desktop', type: 'desktop' },
  { src: '/images/Hero/Mobile%20References/BP%201.png', alt: 'BlockPulse Mobile', type: 'mobile' },
  { src: '/images/Hero/Desktop%20References/KV.png', alt: 'KarmaV Desktop', type: 'desktop' },
  { src: '/images/Hero/Mobile%20References/KV.png', alt: 'KarmaV Mobile', type: 'mobile' },
  { src: '/images/Hero/Desktop%20References/PSC.png', alt: 'Pragna Skin Clinic', type: 'desktop' },
  { src: '/images/Hero/Mobile%20References/PSC%201.png', alt: 'Pragna Skin Clinic Mobile', type: 'mobile' },
  { src: '/images/Hero/Mobile%20References/BP%202.png', alt: 'BlockPulse News', type: 'mobile' },
  { src: '/images/Hero/Mobile%20References/TGP%202.png', alt: 'The Gita Project App', type: 'mobile' },
  { src: '/images/Hero/Mobile%20References/PSC%202.png', alt: 'Pragna Skin Clinic Detail', type: 'mobile' }
];

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = IMAGES[currentIndex];
  const isMobile = currentImage.type === 'mobile';

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
      
      {/* Ambient Glow - tightened so it doesn't wash out the contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-accent/10 to-ink/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
        <AnimatePresence>
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, x: 80, rotateY: -12, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, rotateY: -4, scale: 1 }}
            exit={{ opacity: 0, x: -80, rotateY: 4, scale: 0.85 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-canvas ${
              isMobile
                ? 'h-[85%] max-h-[520px] aspect-[9/19.5] rounded-[2.5rem] ring-4 ring-ink/5'
                : 'w-[95%] aspect-[16/10] rounded-xl lg:rounded-[1.25rem] ring-1 ring-ink/10'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
