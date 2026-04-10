'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function RevealUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal-up ${isRevealed ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function RevealCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal-card ${isRevealed ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function JobHunterBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-24 md:pt-40 pb-24 selection:bg-accent selection:text-canvas">
      
      {/* --- MOBILE LAYOUT --- */}
      <div className="flex md:hidden flex-col w-full px-6 mx-auto">
        <Link href="/#builds" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors mb-8 blueprint text-[10px] tracking-[0.2em]">
          ← GO BACK TO SOLO BUILDS
        </Link>
        
        <RevealUp className="flex flex-col items-start mb-8">
          <h1 className="text-4xl tracking-tight leading-[0.95] text-ink mb-4">
            Job Hunter
          </h1>
          <p className="text-[17px] text-ink-muted font-sans leading-[1.6] mb-6">
            Built AI to find me a job. It found 80+ relevant roles in a month.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted py-2 w-full">
            <span>PYTHON</span>
            <span className="text-ink/20">•</span>
            <span>TELEGRAM API</span>
            <span className="text-ink/20">•</span>
            <span>OPENAI API</span>
            <span className="text-ink/20">•</span>
            <span>NEXT.JS DASHBOARD</span>
          </div>
        </RevealUp>

        {/* Story Sequence */}
        <div className="flex flex-col gap-10 mb-12">
          
          {/* Step 1: The Source */}
          <RevealUp className="flex flex-col gap-3">
            <div className="blueprint text-[10px] tracking-widest text-ink-muted border-b border-ink/10 pb-2 mb-2">1. THE SOURCE</div>
            <div className="relative w-[65%] mx-auto rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
              <Image 
                src="/images/builds/job-hunter/TG.webp" 
                alt="Job Hunter Telegram Sourcing" 
                width={640}
                height={1385}
                className="w-full h-auto"
                sizes="(max-width: 640px) 65vw, 300px"
              />
            </div>
          </RevealUp>

          {/* Step 2: The Engine */}
          <RevealUp className="flex flex-col gap-3">
            <div className="blueprint text-[10px] tracking-widest text-ink-muted border-b border-ink/10 pb-2 mb-2">2. THE ENGINE</div>
            <div className="relative w-full rounded-xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
              <Image 
                src="/images/builds/job-hunter/Process.webp" 
                alt="Job Hunter Ingestion Terminal" 
                width={1200}
                height={685}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 600px"
              />
            </div>
          </RevealUp>

          {/* Step 3: The Output */}
          <RevealUp className="flex flex-col gap-3">
            <div className="blueprint text-[10px] tracking-widest text-ink-muted border-b border-ink/10 pb-2 mb-2">3. THE OUTPUT</div>
            <div className="relative w-full rounded-xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
              <Image 
                src="/images/builds/job-hunter/Job board.webp" 
                alt="Job Hunter Web3 Dashboard" 
                width={1200}
                height={455}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 900px"
              />
            </div>
          </RevealUp>

        </div>

        <RevealUp className="flex flex-col items-start border-t border-ink/10 pt-8">
          <div className="text-[17px] font-sans text-ink-muted leading-relaxed space-y-5">
            <p>
              The Web3 job market is fragmented. There&apos;s no single board that covers it well, and most 
              real leads end up scattered across Telegram channels that get hundreds of messages every day. 
              Scrolling through all of that manually wasn&apos;t working.
            </p>
            <p>
              So I built an automation around it. Connected my Telegram channels to an LLM, built a 
              classification pipeline to filter for PM roles, and put a dashboard on top that shows only 
              what&apos;s relevant to me. It surfaced 80+ relevant roles in the first month. Jobs I would 
              have never found scrolling. It&apos;s still running. Every morning there&apos;s new stuff waiting.
            </p>
            <p>
              AI doesn&apos;t have to be about building the next big thing. Sometimes it&apos;s just about fixing 
              something broken in your day-to-day.
            </p>
          </div>
        </RevealUp>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:block w-full px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: CONTEXT (STICKY ON DESKTOP) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-40 flex flex-col">
            <RevealUp className="flex flex-col items-start">
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
                  The Web3 job market is fragmented. There&apos;s no single board that covers it well, and most 
                  real leads end up scattered across Telegram channels that get hundreds of messages every day. 
                  Scrolling through all of that manually wasn&apos;t working.
                </p>
                <p>
                  So I built an automation around it. Connected my Telegram channels to an LLM, built a 
                  classification pipeline to filter for PM roles, and put a dashboard on top that shows only 
                  what&apos;s relevant to me. It surfaced 80+ relevant roles in the first month. Jobs I would 
                  have never found scrolling. It&apos;s still running. Every morning there&apos;s new stuff waiting.
                </p>
                <p>
                  AI doesn&apos;t have to be about building the next big thing. Sometimes it&apos;s just about fixing 
                  something broken in your day-to-day.
                </p>
              </div>

            </RevealUp>
          </div>

          {/* RIGHT: THE EDITORIAL STACK */}
          <div className="w-full lg:w-[60%] flex flex-col gap-12 md:gap-20">
            
            {/* 1. The Output (Dashboard) - Wide Shot */}
            <RevealCard className="relative w-full lg:-mr-12 xl:-mr-20 rounded-2xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
              <Image 
                src="/images/builds/job-hunter/Job board.webp" 
                alt="Job Hunter Web3 Dashboard" 
                width={1200}
                height={455}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </RevealCard>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start w-full">
              {/* 2. The Source (Telegram) - Mobile Shot */}
              <RevealCard className="relative w-full max-w-[220px] shrink-0 rounded-[2rem] border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
                <Image 
                  src="/images/builds/job-hunter/TG.webp" 
                  alt="Job Hunter Telegram Sourcing" 
                  width={640}
                  height={1385}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </RevealCard>

              {/* 3. The Engine (Synthesis) - Wide Terminal Shot */}
              <RevealCard className="relative w-full rounded-xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5 mt-0 md:mt-16">
                <Image 
                  src="/images/builds/job-hunter/Process.webp" 
                  alt="Job Hunter Ingestion Terminal" 
                  width={1200}
                  height={685}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </RevealCard>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}