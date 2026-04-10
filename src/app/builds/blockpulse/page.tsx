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

export default function BlockPulseBuildPage() {
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
                BlockPulse
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                Proof of concept that AI can build real products. Built solo, shipped to Play Store.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full mb-8">
                <span>FLUTTER</span>
                <span className="text-ink/20">•</span>
                <span>SUPABASE</span>
                <span className="text-ink/20">•</span>
                <span>OPENAI API</span>
                <span className="text-ink/20">•</span>
                <span>CURSOR</span>
              </div>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  While running product strategy at Key Difference, I noticed an AI capability gap across 
                  the org. Nobody was building with AI, and the company's vision needed it. Rather than 
                  write a proposal, I decided to prove the point by shipping something real.
                </p>
                <p>
                  BlockPulse was the proof of concept. A Web3 news aggregator with an AI pipeline that 
                  monitors sources, filters signal from noise, and pushes curated content to a Flutter 
                  mobile app. Built solo, shipped to the Play Store. It became the starting point for an 
                  AI-first transformation at the company.
                </p>
              </div>

              <a href="https://getblockpulse.app" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  VIEW PLAY STORE ↗
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
                    src="/images/builds/BlockPulse/2.webp" 
                    alt="BlockPulse screen 2" 
                    width={640}
                    height={983}
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
                    src="/images/builds/BlockPulse/4.webp" 
                    alt="BlockPulse screen 4" 
                    width={640}
                    height={965}
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
                    src="/images/builds/BlockPulse/8.webp" 
                    alt="BlockPulse screen 8" 
                    width={640}
                    height={1264}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </motion.div>
              </div>

              {/* RIGHT COLUMN (Staggered Offset) — order 3, 6, 7 */}
              <div className="flex flex-col gap-6 md:gap-10 sm:mt-24">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={phoneReveal}
                  className="relative w-full rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
                >
                  <Image 
                    src="/images/builds/BlockPulse/3.webp" 
                    alt="BlockPulse screen 3" 
                    width={640}
                    height={995}
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
                    src="/images/builds/BlockPulse/6.webp" 
                    alt="BlockPulse screen 6" 
                    width={640}
                    height={1287}
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
                    src="/images/builds/BlockPulse/7.webp" 
                    alt="BlockPulse screen 7" 
                    width={640}
                    height={1268}
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