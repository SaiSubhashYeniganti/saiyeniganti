'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroArtifactsMobile() {
  return (
    <div className="relative w-full h-[320px] mt-10 mb-4 overflow-visible pointer-events-none">
      
      {/* Artifact 1: Desktop Image (Back Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: 20, rotate: -6 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -4 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-4 -left-2 w-[65%] aspect-[16/10] rounded-xl overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.25)] ring-1 ring-ink/10 bg-canvas z-10"
      >
        <Image
          src="/images/hero-showcase/desktop/psc.webp"
          alt="Pragna Skin Clinic"
          fill
          className="object-cover object-top opacity-95"
          sizes="(max-width: 768px) 65vw"
        />
      </motion.div>

      {/* Artifact 2: Mobile Image (Back Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: 20, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-[38%] aspect-[9/16] rounded-[1.25rem] overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.2)] ring-1 ring-ink/10 bg-ink z-20"
      >
        <Image
          src="/images/hero-showcase/mobile/tgp-2.webp"
          alt="The Gita Project Mobile"
          fill
          className="object-cover opacity-95"
          sizes="(max-width: 768px) 38vw"
        />
      </motion.div>

      {/* Artifact 3: Desktop Image (Front Center) */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-2 left-[6%] w-[78%] aspect-[16/10] rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.35)] ring-1 ring-white/20 bg-[#1A1A1A] z-30"
      >
        <Image
          src="/images/hero-showcase/desktop/arthm.webp"
          alt="ARTHM"
          fill
          className="object-cover object-top opacity-100"
          sizes="(max-width: 768px) 78vw"
        />
        {/* Enhanced glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </motion.div>

    </div>
  );
}
