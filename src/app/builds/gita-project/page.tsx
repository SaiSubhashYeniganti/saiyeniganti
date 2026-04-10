"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const ImagePlaceholder = ({ label, className = "", aspect = "aspect-[16/9]" }: { label: string, className?: string, aspect?: string }) => (
  <div className={`relative w-full ${aspect} bg-ink/5 border border-ink/10 overflow-hidden group ${className}`}>
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="blueprint text-ink/30 tracking-widest text-sm md:text-base transition-transform duration-700 group-hover:scale-105 text-center px-4">{label}</span>
    </div>
  </div>
);

export default function GitaProjectBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-32 md:pt-40 pb-24 selection:bg-accent selection:text-canvas">
      
      {/* 1. CONTEXT HEADER - CENTERED & ELEGANT */}
      <div className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto mb-16 md:mb-24 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealUp}
          className="flex flex-col items-center"
        >
          <Link href="/#builds" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors mb-10 blueprint text-[10px] tracking-[0.2em]">
            ← BACK TO BUILDS
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-ink mb-6">
            The Gita Project
          </h1>
          <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] max-w-2xl mx-auto mb-10">
            Challenge of building a company solo. App, website, brand, infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full max-w-xl mx-auto">
            <span>FLUTTER</span>
            <span className="text-ink/20">•</span>
            <span>RIVERPOD</span>
            <span className="text-ink/20">•</span>
            <span>SUPABASE</span>
            <span className="text-ink/20">•</span>
            <span>NEXT.JS</span>
          </div>

          <div className="mt-10 text-base md:text-lg font-sans text-ink-muted leading-relaxed max-w-2xl mx-auto text-left space-y-5">
            <p>
              The Bhagavad Gita is one of the world's oldest philosophical texts. But every way to access 
              it today feels like it was designed 20 years ago. I wanted to build a product that gives this 
              text the same design and UX treatment as any modern consumer app.
            </p>
            <p>
              The first problem was scale: 700+ verses, each needing structured metadata, categorization, 
              and commentary. I built custom AI automation pipelines to process the entire corpus. Then the 
              mobile app, the marketing website, the brand. This is the closest thing I have to building a 
              company solo from scratch.
            </p>
          </div>

          <a href="https://thegitaproject.world" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
            <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
              VIEW LIVE SITE ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* 2. PLATFORM SHOWCASE (CUSTOM COMPOSITION) */}
      <div className="w-full flex flex-col gap-8 md:gap-16 px-4 md:px-8 lg:px-12 mx-auto max-w-[1600px]">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ImagePlaceholder label="BRAND IDENTITY & MARKETING WEB" aspect="aspect-[16/9] md:aspect-[21/9]" />
        </motion.div>

        {/* Asymmetric row showing app vs content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          >
            <ImagePlaceholder label="CONSUMER MOBILE APP" aspect="aspect-[4/3] md:aspect-square" className="bg-canvas-alt" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <ImagePlaceholder label="AI DATA PROCESSING PIPELINE" aspect="aspect-[4/3] md:aspect-[3/4]" className="bg-ink/5" />
          </motion.div>
        </div>

      </div>
    </main>
  );
}
