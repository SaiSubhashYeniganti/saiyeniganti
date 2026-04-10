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

export default function ArthmBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-24 md:pt-40 pb-24 selection:bg-accent selection:text-canvas">
      
      {/* --- MOBILE LAYOUT --- */}
      <div className="flex md:hidden flex-col w-full px-6 mx-auto">
        <Link href="/#builds" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors mb-8 blueprint text-[10px] tracking-[0.2em]">
          ← GO BACK TO SOLO BUILDS
        </Link>
        
        <RevealUp className="w-full mb-8">
          <div className="relative w-full rounded-2xl border border-ink/10 overflow-hidden shadow-sm bg-ink/5">
            <div className="h-6 w-full bg-ink/5 border-b border-ink/10 flex items-center px-3 gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            </div>
            <Image 
              src="/images/builds/Arthm/full-page.webp" 
              alt="ARTHM Foundation Full Page" 
              width={1200}
              height={2727}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </RevealUp>

        <RevealUp className="flex flex-col items-start">
          <h1 className="text-4xl tracking-tight leading-[0.95] text-ink mb-4">
            ARTHM Foundation
          </h1>
          <p className="text-[17px] text-ink-muted font-sans leading-[1.6] mb-6">
            Proving AI-driven design can be delightful, not just fast. Client call to production in a month.
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-4 w-full mb-8">
            <span>NEXT.JS</span>
            <span className="text-ink/20">•</span>
            <span>THREE.JS / R3F</span>
            <span className="text-ink/20">•</span>
            <span>GSAP & LENIS</span>
            <span className="text-ink/20">•</span>
            <span>CURSOR</span>
          </div>

          <div className="text-[17px] font-sans text-ink-muted leading-relaxed space-y-5 mb-10">
            <p>
              ARTHM is India&apos;s first mic-less concert hall. The client wanted a website that felt like the space itself. 
              No templates, no generic layouts. The kind of thing where every scroll, every transition, every 
              piece of typography has to feel deliberate.
            </p>
            <p>
              I built it using AI-first workflows: 3D rendering in React Three Fiber, scroll-linked animations 
              through GSAP, heavy typographical structures. The whole thing went from first client conversation 
              to deployed production in under a month. For me, this was the project that proved AI-driven 
              design can be delightful, not just fast.
            </p>
          </div>

          <a href="https://arthm.org" target="_blank" rel="noreferrer" className="w-full group">
            <span className="blueprint text-xs block w-full text-center border border-ink/20 bg-ink text-canvas px-6 py-4 rounded-full">
              VIEW LIVE SITE ↗
            </span>
          </a>
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
                ARTHM Foundation
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                Proving AI-driven design can be delightful, not just fast. Client call to production in a month.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 blueprint text-[10px] tracking-widest text-ink-muted border-y border-ink/10 py-5 w-full mb-8">
                <span>NEXT.JS</span>
                <span className="text-ink/20">•</span>
                <span>THREE.JS / R3F</span>
                <span className="text-ink/20">•</span>
                <span>GSAP & LENIS</span>
                <span className="text-ink/20">•</span>
                <span>CURSOR</span>
              </div>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  ARTHM is India&apos;s first mic-less concert hall. The client wanted a website that felt like the space itself. 
                  No templates, no generic layouts. The kind of thing where every scroll, every transition, every 
                  piece of typography has to feel deliberate.
                </p>
                <p>
                  I built it using AI-first workflows: 3D rendering in React Three Fiber, scroll-linked animations 
                  through GSAP, heavy typographical structures. The whole thing went from first client conversation 
                  to deployed production in under a month. For me, this was the project that proved AI-driven 
                  design can be delightful, not just fast.
                </p>
              </div>

              <a href="https://arthm.org" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  VIEW LIVE SITE ↗
                </span>
              </a>
            </RevealUp>
          </div>

          {/* RIGHT: THE GALLERY */}
          <div className="w-full lg:w-[60%] flex flex-col gap-12 md:gap-20">
            
            {/* Full Page Capture */}
            <div className="relative w-full group cursor-crosshair overflow-hidden rounded-xl border border-ink/10">
              <Image 
                src="/images/builds/Arthm/full-page.webp" 
                alt="ARTHM Foundation Full Page" 
                width={1200}
                height={2727}
                className="w-full h-auto transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}