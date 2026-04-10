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

const imageReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as any } 
  }
};

export default function JobHunterBuildPage() {
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
                Job Hunter
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                Built AI to find me a job. It found 80+ relevant roles in a month.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full mb-8">
                <span>PYTHON</span>
                <span className="text-ink/20">•</span>
                <span>TELEGRAM API</span>
                <span className="text-ink/20">•</span>
                <span>OPENAI API</span>
                <span className="text-ink/20">•</span>
                <span>NEXT.JS DASHBOARD</span>
              </div>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  The Web3 job market is fragmented. There's no single board that covers it well, and most 
                  real leads end up scattered across Telegram channels that get hundreds of messages every day. 
                  Scrolling through all of that manually wasn't working.
                </p>
                <p>
                  So I built an automation around it. Connected my Telegram channels to an LLM, built a 
                  classification pipeline to filter for PM roles, and put a dashboard on top that shows only 
                  what's relevant to me. It surfaced 80+ relevant roles in the first month. Jobs I would 
                  have never found scrolling. It's still running. Every morning there's new stuff waiting.
                </p>
                <p>
                  AI doesn't have to be about building the next big thing. Sometimes it's just about fixing 
                  something broken in your day-to-day.
                </p>
              </div>

            </motion.div>
          </div>

          {/* RIGHT: THE EDITORIAL STACK */}
          <div className="w-full lg:w-[60%] flex flex-col gap-12 md:gap-20">
            
            {/* 1. The Output (Dashboard) - Wide Shot */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="relative w-full lg:-mr-12 xl:-mr-20 rounded-2xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
            >
              <Image 
                src="/images/builds/job-hunter/Job board.webp" 
                alt="Job Hunter Web3 Dashboard" 
                width={1200}
                height={455}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
                loading="eager"
              />
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start w-full">
              {/* 2. The Source (Telegram) - Mobile Shot */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageReveal}
                className="relative w-full max-w-[220px] shrink-0 rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5"
              >
                <Image 
                  src="/images/builds/job-hunter/TG.webp" 
                  alt="Job Hunter Telegram Sourcing" 
                  width={640}
                  height={1385}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </motion.div>

              {/* 3. The Engine (Synthesis) - Wide Terminal Shot */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageReveal}
                className="relative w-full rounded-xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5 mt-0 md:mt-16"
              >
                <Image 
                  src="/images/builds/job-hunter/Process.webp" 
                  alt="Job Hunter Ingestion Terminal" 
                  width={1200}
                  height={685}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </motion.div>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}