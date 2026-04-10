"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export default function PragnaBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-32 md:pt-40 pb-24 selection:bg-accent selection:text-canvas">
      
      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: CONTEXT (STICKY ON DESKTOP) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-40 flex flex-col">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealUp}
              className="flex flex-col items-start"
            >
              <Link href="/#builds" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors mb-10 blueprint text-[10px] tracking-[0.2em]">
                ← BACK TO BUILDS
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-ink mb-6">
                Pragna Skin Clinic
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                86 pages, 65,000 words of content. Experiment in design and content at scale. One of the best dermatology websites in India.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full mb-8">
                <span>NEXT.JS</span>
                <span className="text-ink/20">•</span>
                <span>TAILWIND CSS</span>
                <span className="text-ink/20">•</span>
                <span>CLAUDE / CURSOR</span>
                <span className="text-ink/20">•</span>
                <span>VERCEL</span>
              </div>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  A dermatologist needed a website. What I ended up building was closer to a clinical 
                  encyclopedia. 86 pages of structured, medically accurate content designed to dominate 
                  local search. 10 unique page designs across the site. 65,000 words of on-page SEO content.
                </p>
                <p>
                  I did everything on this one. Brand positioning, colors, logo, information architecture, 
                  the patient funnel, all the content, every page design, and the full engineering and 
                  deployment pipeline. The design system was built from scratch to feel warm and clinical 
                  at the same time. This was the project that showed me what AI-first workflows can really do at scale.
                </p>
              </div>

              <a href="https://pragnaskinclinic.com" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  VIEW LIVE SITE ↗
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: THE GALLERY */}
          <div className="w-full lg:w-[60%] flex flex-col gap-12 md:gap-20">
            
            {/* Full Page Capture */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full group cursor-crosshair overflow-hidden rounded-xl border border-ink/10"
            >
              <Image 
                src="/images/builds/pragna/full-page.webp" 
                alt="Pragna Skin Clinic Full Page" 
                width={1400}
                height={5000}
                className="w-full h-auto transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 800px"
                quality={100}
                priority
                unoptimized
              />
            </motion.div>

          </div>
        </div>
      </div>

    </main>
  );
}
