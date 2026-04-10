'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroArtifactsMobile() {
  return (
    <div className="relative w-full h-[320px] my-8 overflow-visible pointer-events-none">
      
      {/* Artifact 1: UI Component (Back Left) - Larger, more prominent */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: 20, rotate: -8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 -left-4 w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.25)] ring-1 ring-ink/10 bg-canvas z-10"
      >
        <Image
          src="/images/build-cards/pragna.webp"
          alt="Pragna UI Artifact"
          fill
          className="object-cover opacity-90 contrast-[1.05]"
          sizes="(max-width: 768px) 65vw"
        />
      </motion.div>

      {/* Artifact 2: Typography/Brand (Back Right) - Repositioned for better overlap */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: 20, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 -right-4 w-[52%] aspect-square rounded-2xl overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.2)] ring-1 ring-ink/10 bg-ink z-20"
      >
        <Image
          src="/images/build-cards/arthm.webp"
          alt="ARTHM Brand Artifact"
          fill
          className="object-cover opacity-85"
          sizes="(max-width: 768px) 52vw"
        />
      </motion.div>

      {/* Artifact 3: Wireframe/Structure (Front Center) - Hero piece */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.35)] ring-1 ring-white/20 bg-[#1A1A1A] z-30"
      >
        <Image
          src="/images/build-cards/blockpulse.webp"
          alt="BlockPulse Structural Artifact"
          fill
          className="object-cover opacity-95 grayscale-[0.3]"
          sizes="(max-width: 768px) 75vw"
        />
        {/* Enhanced glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none" />
      </motion.div>

    </div>
  );
}