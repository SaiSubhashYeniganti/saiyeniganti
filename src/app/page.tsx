'use client';

import Link from 'next/link';
import Image from 'next/image';
import { type MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HeroShowcase } from '@/components/HeroShowcase';
import { HeroAtmosphere } from '@/components/HeroAtmosphere';
import { HeroArtifactsMobile } from '@/components/HeroArtifactsMobile';
import { BuildsCarousel } from '@/components/BuildsCarousel';
import { ThinkingCarousel } from '@/components/ThinkingCarousel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// --- ANIMATION COMPONENTS ---
function RevealUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal-up ${isRevealed ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const handleSeeWorkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const buildsSection = document.getElementById("builds");
    if (!buildsSection) {
      return;
    }
    buildsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    const baseUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", `${baseUrl}#builds`);
  };

  return (
    <main className="w-full">

      {/* 1. THE HOOK (HERO) */}
      <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center pt-[100px] md:pt-[120px] pb-12 md:pb-6">

        {/* Subtle Ambient Lighting (Desktop) */}
        <HeroAtmosphere />

        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 z-10 flex flex-col">
          {/* Two-column layout: Text left, Image right */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 md:gap-y-12 gap-x-8 lg:gap-x-12 items-center">

            {/* LEFT: Title + Proof + CTA */}
            <RevealUp className="lg:col-span-6 flex flex-col items-start text-left w-full">
              <h1 className="text-[17vw] leading-[0.85] tracking-[-0.05em] lg:text-[clamp(3.5rem,6vw,7rem)] lg:leading-[1.05] lg:tracking-tight text-ink mt-8 md:mt-0 w-full max-w-full">
                <span className="block w-full">From Zero</span>
                <span className="block w-full">to Scale.</span>
              </h1>
              
              {/* Build Artifacts Collage (Mobile Only) */}
              <div className="block md:hidden w-full">
                <HeroArtifactsMobile />
              </div>

              <div className="flex flex-col gap-4 text-[17px] lg:text-[18px] text-ink/75 leading-[1.6] lg:leading-[1.7] font-sans mb-10 max-w-[480px] mt-6 md:mt-8 relative pl-5 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-px before:bg-ink/10">
                <div className="absolute -left-[3px] top-0 w-1.5 h-px bg-ink/20" />
                <div className="absolute -left-[3px] bottom-0 w-1.5 h-px bg-ink/20" />
                <p>I&apos;m Sai Subhash Yeniganti.</p>
                <p>Over the last decade, I built a product division from scratch at a US startup and shipped $8M+ in revenue. Then I ran product strategy and GTM for 25+ startups at a Dubai accelerator. Now I build and ship full products solo with AI.</p>
                <p>This is where all of it lives. Thanks for stopping by.</p>
              </div>

              <Link href="/#builds" onClick={handleSeeWorkClick} className="inline-flex items-center gap-2 group w-full md:w-auto">
                <span className="blueprint text-xs w-full text-center md:w-auto border border-ink/20 bg-canvas/50 backdrop-blur-sm px-8 py-4 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  SEE THE WORK
                </span>
              </Link>
            </RevealUp>

            {/* RIGHT: Dynamic Showcase */}
            <RevealUp className="hidden lg:block lg:col-span-6 relative w-full" delay={0.2}>
              <HeroShowcase />
            </RevealUp>

          </div>
        </div>
      </section>

      {/* 2. THE BUILDS (GRID) */}
      <section id="builds" className="relative w-full bg-ink text-canvas py-20 md:py-20">
        <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <RevealUp className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.05] mb-6">
              One person. <span className="italic text-canvas/50">End to end.</span>
            </h2>
            <p className="text-canvas/50 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
              A collection of products, platforms, and experiments built entirely solo. From brand and design to code and deployment, all executed using AI-first workflows.
            </p>
          </RevealUp>
        </div>

        <BuildsCarousel />
      </section>

      {/* 3. THE MIND */}
      <section id="mind" className="relative pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">

        {/* Mobile Only: Header & Full Bleed Image */}
        <div className="flex md:hidden flex-col mb-12 relative w-full -mx-6 px-6">
          <div className="w-[100vw] h-[60vh] relative -mx-6 mb-8 overflow-hidden">
            <Image 
              src="/images/sai-portrait-cropped.webp" 
              alt="Portrait of Sai Subhash Yeniganti"
              fill
              className="object-cover object-top contrast-[1.05] grayscale-[0.2]"
              sizes="100vw"
              priority
            />
            {/* Cinematic bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
          </div>
          
          {/* Typographic Drop Cap & Story */}
          <div className="relative z-10 -mt-16 bg-canvas/80 backdrop-blur-sm p-6 rounded-2xl border border-ink/5 mx-4">
            <div className="font-sans text-[17px] text-ink-muted leading-relaxed">
              <span className="float-left text-[5.5rem] font-display leading-[0.75] pr-3 pt-2 text-ink">I</span>
              <span className="font-medium text-ink text-[18px]">started as an engineer at National Instruments,</span> building signal processing systems for companies like Qualcomm and Verizon. Did an MBA at ISB, then moved into product at HCL where I owned a $3.5M B2B SaaS platform serving AT&T and Vodafone.
              
              <p className="mt-5">
                Then I helped build a blockchain gaming startup from zero. Built the product division, led 20+ people, and generated $8M in revenue.
              </p>
              
              <p className="mt-5">
                Most recently, I ran product strategy and GTM across 25+ startups at a Dubai-based accelerator. Somewhere in between, I started building and shipping full products on my own.
              </p>
            </div>

            {/* Integrated Metrics (Mobile) */}
            <div className="mt-10 pt-8 flex flex-col gap-4 relative">
              {/* Subtle accent gradient line at the top */}
              <div className="absolute top-0 left-0 w-12 h-[1px] bg-accent/50" />
              
              <div className="flex items-baseline gap-4">
                <span className="text-3xl tracking-tight text-ink font-display w-16">10+</span>
                <span className="blueprint text-[10px] text-ink-muted">YEARS EXPERIENCE</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-ink/10 to-transparent" />
              <div className="flex items-baseline gap-4">
                <span className="text-3xl tracking-tight text-ink font-display w-16">$8M+</span>
                <span className="blueprint text-[10px] text-ink-muted">REVENUE SHIPPED</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-ink/10 to-transparent" />
              <div className="flex items-baseline gap-4">
                <span className="text-3xl tracking-tight text-ink font-display w-16">25+</span>
                <span className="blueprint text-[10px] text-ink-muted">STARTUPS ADVISED</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-ink/10 to-transparent" />
              <div className="flex items-baseline gap-4">
                <span className="text-3xl tracking-tight text-ink font-display w-16">5+</span>
                <span className="blueprint text-[10px] text-ink-muted">SOLO BUILDS</span>
              </div>
            </div>

            <Link href="/experience" className="flex items-center justify-between group w-full mt-10 bg-ink text-canvas border border-ink px-6 py-4 rounded-full transition-all duration-500">
              <span className="blueprint text-xs tracking-widest pl-2">CAREER ARC</span>
              <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 text-canvas/50 group-hover:text-canvas transition-colors" />
            </Link>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-24">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Image (Desktop only) */}
            <RevealUp className="hidden md:block relative">
              <div className="aspect-[4/5] w-full max-w-[440px] mx-auto lg:ml-auto lg:mr-0 bg-canvas-alt rounded-3xl relative overflow-hidden">
                <Image 
                  src="/images/sai-portrait-cropped.webp" 
                  alt="Portrait of Sai Subhash Yeniganti"
                  fill
                  className="object-cover object-top contrast-[1.05] grayscale-[0.2]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none" />
              </div>
            </RevealUp>

            {/* Right: Story */}
            <RevealUp className="flex flex-col" delay={0.15}>
              <h2 className="hidden md:block text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 mt-[-6px]">
                The backstory,<br /><span className="italic text-ink-muted">in short.</span>
              </h2>

              <div className="space-y-5 text-[17px] md:text-lg font-sans text-ink-muted max-w-lg leading-relaxed">
                <p>
                  I started as an engineer at National Instruments, building signal processing systems for companies like Qualcomm and Verizon. Did an MBA at ISB, then moved into product at HCL where I owned a $3.5M B2B SaaS platform serving AT&T and Vodafone.
                </p>
                <p>
                  Then I helped build a blockchain gaming startup from zero. Built the product division, led 20+ people, and generated $8M in revenue.
                </p>
                <p>
                  Most recently, I ran product strategy and GTM across 25+ startups at a Dubai-based accelerator. Somewhere in between, I started building and shipping full products on my own.
                </p>
              </div>

              <Link href="/experience" className="flex items-center gap-2 group w-fit mt-10">
                <span className="blueprint text-xs border border-ink/20 px-8 py-4 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500 bg-ink text-canvas md:bg-transparent md:text-ink">
                  CAREER ARC ↗
                </span>
              </Link>
            </RevealUp>
          </div>
        </div>

        {/* Footnote Metrics Bar (Desktop) */}
        <RevealUp className="hidden md:block px-6 md:px-12 lg:px-24 mt-6 md:mt-10">
          <div className="max-w-5xl mx-auto border-t border-ink/10 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 text-center">
              <div className="flex flex-col items-center justify-end">
                <div className="text-2xl md:text-3xl tracking-tight mb-2">10+</div>
                <div className="blueprint text-[10px] text-ink-muted">YEARS EXPERIENCE</div>
              </div>
              <div className="flex flex-col items-center justify-end">
                <div className="text-2xl md:text-3xl tracking-tight mb-2">$8M+</div>
                <div className="blueprint text-[10px] text-ink-muted">REVENUE SHIPPED</div>
              </div>
              <div className="flex flex-col items-center justify-end">
                <div className="text-2xl md:text-3xl tracking-tight mb-2">25+</div>
                <div className="blueprint text-[10px] text-ink-muted">STARTUPS ADVISED</div>
              </div>
              <div className="flex flex-col items-center justify-end">
                <div className="text-2xl md:text-3xl tracking-tight mb-2">5+</div>
                <div className="blueprint text-[10px] text-ink-muted">SOLO BUILDS</div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-2 md:col-span-1 mt-2 md:mt-0">
                <div className="text-lg md:text-xl tracking-tight leading-tight mb-2 text-center w-full">
                  ISB <span className="text-ink-muted text-[10px] md:text-xs">(MBA)</span>
                  <br />
                  <span className="text-sm md:text-base">BITS Pilani</span>
                </div>
                <div className="blueprint text-[10px] text-ink-muted">EDUCATION</div>
              </div>
            </div>
          </div>
        </RevealUp>

        {/* Marquee (Mobile Only) */}
        <RevealUp className="block md:hidden mt-12 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee border-y border-ink/10 py-5 w-max">
            <div className="flex gap-8 px-4 items-center shrink-0">
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 10+ YEARS EXPERIENCE
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> $8M+ REVENUE SHIPPED
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 25+ STARTUPS ADVISED
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 5+ SOLO BUILDS
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> ISB MBA / BITS PILANI
              </span>
            </div>
            <div className="flex gap-8 px-4 items-center shrink-0" aria-hidden="true">
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 10+ YEARS EXPERIENCE
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> $8M+ REVENUE SHIPPED
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 25+ STARTUPS ADVISED
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> 5+ SOLO BUILDS
              </span>
              <span className="blueprint text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink/20 rounded-full"></span> ISB MBA / BITS PILANI
              </span>
            </div>
          </div>
        </RevealUp>
      </section>

      {/* 4. HOW I THINK */}
      <section id="thinking" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-canvas-alt">
        <div className="max-w-6xl mx-auto">
          <RevealUp>
            <h2 className="text-5xl md:text-7xl tracking-tight mb-6">Writing out loud.</h2>
            <p className="text-ink-muted font-sans text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              I write about AI, Web3, and product. What&apos;s real, what&apos;s hype, and what it looks like when you actually build things.
            </p>
          </RevealUp>

          {/* Featured LinkedIn Posts */}
          <div className="-mx-6 md:mx-0">
            <ThinkingCarousel />
          </div>

          {/* More on LinkedIn link */}
          <div className="flex justify-start">
            <a
              href="https://linkedin.com/in/subhashyeniganti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
            >
              <span className="blueprint text-xs border border-ink/20 px-8 py-4 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                MORE ON LINKEDIN ↗
              </span>
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
