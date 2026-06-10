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

export default function PragnaBuildPage() {
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
              src="/images/builds/pragna/full-page.webp" 
              alt="Pragna Skin Clinic Full Page" 
              width={1200}
              height={5249}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </RevealUp>

        <RevealUp className="flex flex-col items-start">
          <h1 className="text-4xl tracking-tight leading-[0.95] text-ink mb-4">
            Pragna Skin Clinic
          </h1>
          <p className="text-[17px] text-ink-muted font-sans leading-[1.6] mb-6">
            A dermatologist asked for a website. What I built ran to 86 pages and 65,000 words, design-led and patient-focused, all of it aimed at turning local searches into booked appointments.
          </p>

          <div className="text-[17px] font-sans text-ink-muted leading-relaxed space-y-5 mb-10">
            <p>
              A dermatologist needed a website. What I ended up building was closer to a clinical
              encyclopedia. 86 pages of structured, medically accurate content built to win
              local search. 10 unique page designs across the site. 65,000 words of on-page SEO content.
            </p>
            <p>
              I did everything on this one: brand, information architecture, the patient funnel,
              every page design, and the full build and deploy. The hard part was content at that
              scale without errors, so I built an <span className="font-medium text-ink/90">AI content engine</span> with <span className="font-medium text-ink/90">citation enforcement</span> and a <span className="font-medium text-ink/90">human-in-the-loop review pass</span> to keep every medical claim accurate. The whole thing came
              together at roughly half the cost and a fraction of the timeline of a traditional agency build.
            </p>
          </div>

          <a href="https://pragnaskinclinic.com" target="_blank" rel="noreferrer" className="w-full group">
            <span className="blueprint text-xs block w-full text-center border border-ink/20 bg-ink text-canvas px-6 py-4 rounded-full">
              VIEW LIVE SITE ↗
            </span>
          </a>

          <div className="mt-10 pt-6 border-t border-ink/10 w-full">
            <div className="blueprint text-[10px] tracking-widest text-ink-muted/60 mb-3">BUILT WITH</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 blueprint text-[10px] tracking-widest text-ink-muted/80">
              <span>NEXT.JS</span>
              <span className="text-ink/15">•</span>
              <span>TAILWIND CSS</span>
              <span className="text-ink/15">•</span>
              <span>CLAUDE / CURSOR</span>
              <span className="text-ink/15">•</span>
              <span>VERCEL</span>
            </div>
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
                Pragna Skin Clinic
              </h1>
              <p className="text-lg md:text-xl text-ink-muted font-sans leading-[1.6] mb-8">
                A dermatologist asked for a website. What I built ran to 86 pages and 65,000 words, design-led and patient-focused, all of it aimed at turning local searches into booked appointments.
              </p>

              <div className="text-base md:text-lg font-sans text-ink-muted leading-relaxed space-y-5">
                <p>
                  A dermatologist needed a website. What I ended up building was closer to a clinical
                  encyclopedia. 86 pages of structured, medically accurate content built to win
                  local search. 10 unique page designs across the site. 65,000 words of on-page SEO content.
                </p>
                <p>
                  I did everything on this one: brand, information architecture, the patient funnel,
                  every page design, and the full build and deploy. The hard part was content at that
                  scale without errors, so I built an <span className="font-medium text-ink/90">AI content engine</span> with <span className="font-medium text-ink/90">citation enforcement</span> and a <span className="font-medium text-ink/90">human-in-the-loop review pass</span> to keep every medical claim accurate. The whole thing came
                  together at roughly half the cost and a fraction of the timeline of a traditional agency build.
                </p>
              </div>

              <a href="https://pragnaskinclinic.com" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  VIEW LIVE SITE ↗
                </span>
              </a>

              <div className="mt-12 pt-6 border-t border-ink/10 w-full">
                <div className="blueprint text-[10px] tracking-widest text-ink-muted/60 mb-3">BUILT WITH</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 blueprint text-[10px] tracking-widest text-ink-muted/80">
                  <span>NEXT.JS</span>
                  <span className="text-ink/15">•</span>
                  <span>TAILWIND CSS</span>
                  <span className="text-ink/15">•</span>
                  <span>CLAUDE / CURSOR</span>
                  <span className="text-ink/15">•</span>
                  <span>VERCEL</span>
                </div>
              </div>
            </RevealUp>
          </div>

          {/* RIGHT: THE GALLERY */}
          <div className="w-full lg:w-[60%] flex flex-col gap-12 md:gap-20">
            
            {/* Full Page Capture */}
            <div className="relative w-full group cursor-crosshair overflow-hidden rounded-xl border border-ink/10">
              <Image 
                src="/images/builds/pragna/full-page.webp" 
                alt="Pragna Skin Clinic Full Page" 
                width={1200}
                height={5249}
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