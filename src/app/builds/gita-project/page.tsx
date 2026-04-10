"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" as const }
  }
};

// Subtle animation for each phone screen revealing
const phoneReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as any } 
  }
};

export default function GitaProjectBuildPage() {
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
                ← GO BACK TO SOLO BUILDS
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-ink mb-6">
                The Gita Project
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                Starting with the Gita. Building toward something much bigger.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full mb-8">
                <span>FLUTTER</span>
                <span className="text-ink/20">•</span>
                <span>RIVERPOD</span>
                <span className="text-ink/20">•</span>
                <span>SUPABASE</span>
                <span className="text-ink/20">•</span>
                <span>NEXT.JS</span>
              </div>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  The Bhagavad Gita is one of the world's oldest philosophical texts. But every way to access 
                  it today feels like it was designed 20 years ago. I wanted to build a product that gives this 
                  text the same design and UX treatment as any modern consumer app.
                </p>
                <p>
                  The first problem was scale: 700+ verses, each needing structured metadata, categorization, 
                  and commentary. I built custom AI pipelines to process the entire corpus. Then the mobile app, 
                  the marketing website, the brand identity.
                </p>
                <p>
                  But the Gita is just the starting point. The long-term vision goes beyond the text itself, 
                  into the stories around it, practical ways to apply its teachings, meditation, yoga. A 
                  platform for living the philosophy, not just reading it. This is the closest thing I have 
                  to building a company solo from scratch.
                </p>
              </div>

              <a href="https://thegitaproject.world" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  VIEW LIVE SITE ↗
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: THE MOBILE CASCADE */}
          <div className="w-full lg:w-[60%]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              
              {/* LEFT COLUMN (Normal Flow) */}
              <div className="flex flex-col gap-6 md:gap-10">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/home_screen.webp" 
                    alt="The Gita Project Home Screen" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                    priority
                    loading="eager"
                  />
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/chapter_detail_screen.webp" 
                    alt="The Gita Project Chapter Detail" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/india_gita_screen.webp" 
                    alt="The Gita Project Context Content" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>
              </div>

              {/* RIGHT COLUMN (Staggered Offset) */}
              <div className="flex flex-col gap-6 md:gap-10 sm:mt-24">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/chapters_screen.webp" 
                    alt="The Gita Project Chapters Index" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/verse_screen.webp" 
                    alt="The Gita Project Verse Detail" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/The Gita Project/gita_world_screen.webp" 
                    alt="The Gita Project Global Influence" 
                    width={640}
                    height={1385}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </main>
  );
}