"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// --- ANIMATION VARIANTS ---
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- PLACEHOLDER COMPONENTS ---
const GradientPlaceholder = ({ className }: { className?: string }) => (
  <div className={`w-full h-full bg-gradient-to-br from-ink/10 to-canvas-alt relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEw0IDRaTTQgMEwwIDRaIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>
  </div>
);

export default function Home() {
  return (
    <main className="w-full">

      {/* 1. THE HOOK (HERO) */}
      <section className="relative w-full h-[100dvh] min-h-[700px] max-h-[1080px] overflow-hidden flex items-center justify-center">

        {/* Subtle Ambient Lighting */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-ink/5 rounded-full blur-[120px]"></div>
          {/* Bumping up the Copper glow behind the Translator so the right side feels warmer */}
          <div className="absolute top-1/4 right-[5%] w-[40vw] h-[60vw] bg-accent/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEw0IDRaTTQgMEwwIDRaIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-[0.04] mix-blend-overlay"></div>
        </div>

        {/* RIGID Editorial Layout */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-12 xl:gap-x-20 pt-12 md:pt-16">

          {/* LEFT: Massive Statement */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.h1 variants={revealUp} className="text-[clamp(2.75rem,4.5vw,6.5rem)] leading-[1.05] tracking-tight text-ink mb-6 lg:mb-8 whitespace-nowrap">
              Product Builder.<br />
              <span className="italic text-ink-muted">From zero to scale.</span>
            </motion.h1>

            <motion.div variants={revealUp} className="max-w-lg lg:max-w-xl">
              <div className="flex flex-col gap-3 lg:gap-4 text-base lg:text-lg text-ink-muted leading-relaxed font-sans font-light text-justify mb-8 lg:mb-10">
                <p>
                  <strong className="text-ink font-semibold">I am Sai Subhash Yeniganti.</strong> I have spent 10+ years across product management and engineering.
                </p>
                <p>
                  Most recently, I led product strategy & GTM for 25+ startups at a Dubai-based accelerator. Before that, I built a US startup's product organization from zero to $8M in revenue. Earlier, I owned product for a $3.5M B2B SaaS platform with customers like AT&T and Vodafone.
                </p>
                <p>
                  Now I ship full products end-to-end solo. Thanks for stopping by.
                </p>
              </div>
              <Link href="#builds" className="inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 bg-canvas/50 backdrop-blur-sm px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-300 shadow-sm">
                  SEE THE WORK
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Open Editorial Column Translator */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-end mt-12 lg:mt-0 relative"
          >
            <div className="w-full max-w-[420px] relative">
              {/* Elegant Editorial Divider Line */}
              <div className="hidden lg:block absolute -left-6 lg:-left-8 xl:-left-12 top-[-10%] bottom-[10%] w-px bg-gradient-to-b from-canvas via-ink/15 to-canvas pointer-events-none"></div>

              {/* Header Tag */}
              <div className="mb-8 flex flex-col items-start gap-3">
                <div className="bg-accent/10 px-4 py-2.5 rounded-sm border border-accent/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="blueprint text-[10px] text-accent font-bold uppercase tracking-widest leading-none mt-px">The Product Translator</span>
                </div>
                <span className="text-sm text-ink/70 font-serif italic pl-1">From 10 years of building products.</span>
              </div>

              {/* Scrolling Container */}
              <div className="relative h-[320px] overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>

                <style>{`
                @keyframes scroll-y-fast { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
                .animate-scroll-y-fast { animation: scroll-y-fast 40s linear infinite; }
                .animate-scroll-y-fast:hover { animation-play-state: paused; }
              `}</style>

                <div className="absolute top-0 left-0 w-full animate-scroll-y-fast pt-8">
                  {[1, 2].map((loopIndex) => (
                    <div key={loopIndex} className="flex flex-col gap-10 pb-10">
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"We'll fix it in V2."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> This will never be built.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"This is a good v1."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> This is terrible, but I'm exhausted.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"Can we make this more agentic?"</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> I read a viral tweet yesterday.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"We should align on this."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> You're wrong, but I'm being polite.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"We need to be data-driven."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> Find numbers that support my opinion.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"Can we automate this with LLMs?"</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> I don't want to understand the problem fully.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"Let's take a step back."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> This meeting is going nowhere.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"It's on the roadmap."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> It exists in an Excel sheet nobody checks.
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-serif text-2xl text-ink leading-tight">"Let's take this offline."</span>
                        <span className="font-sans text-sm text-ink-muted/80 tracking-wide font-light flex items-center gap-3">
                          <span className="w-4 h-[1px] bg-accent/40 block"></span> I don't think you understand what I'm saying.
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE BUILDS (HORIZONTAL SCROLL) */}
      <section id="builds" className="relative w-full bg-ink text-canvas py-32 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24 mb-16 flex items-end justify-between">
          <h2 className="text-5xl md:text-7xl tracking-tight">Recent Builds.</h2>
          <div className="hidden md:block blueprint text-xs tracking-widest text-canvas/50">
            SCROLL HORIZONTALLY →
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 md:gap-16 px-6 md:px-12 lg:px-24 pb-12">

          <Link href="/builds/pragna" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">Pragna Skin Clinic</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">86 pages, 65,000 words of content. Experiment in design and content at scale. One of the best dermatology websites in India.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <Link href="/builds/arthm" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">ARTHM</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">Experiment in proving AI-driven design can be intentional and world-class. Client call to production in a month.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <Link href="/builds/blockpulse" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">BlockPulse</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">Experiment in automation. Web3 news app, shipped to Play Store.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <Link href="/builds/gita-project" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">The Gita Project</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">Challenge of building a company solo. App, website, brand, infrastructure.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <Link href="/builds/the-unbecoming" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">The Unbecoming</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">Client work. Author's website for a book on ego dissolution. Shipped.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <Link href="/builds/job-hunter" className="min-w-[85vw] md:min-w-[60vw] snap-center flex flex-col gap-6 group cursor-pointer relative">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-light relative">
              <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-canvas/10">
              <div>
                <h3 className="text-3xl md:text-5xl tracking-tight mb-2">Job Hunter</h3>
                <p className="text-canvas/60 font-sans text-sm md:text-base max-w-md">Personal AI system. Telegram channels to LLM classification to dashboard. 76 relevant roles surfaced in a month.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight strokeWidth={1} />
              </div>
            </div>
          </Link>

          <div className="min-w-[10vw]"></div>
        </div>
      </section>

      {/* 3. THE MIND */}
      <section id="mind" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">

          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="aspect-[3/4] w-full bg-ink relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-canvas-alt shadow-inner">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTggMEwwIDhaIiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-60 mix-blend-multiply"></div>
              </div>
              <span className="blueprint text-ink-muted tracking-widest z-10 relative">PORTRAIT PLACEHOLDER</span>
            </div>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl tracking-tight mb-12">
              Before the solo builds,<br /><span className="italic text-ink-muted">there was this.</span>
            </h2>

            <div className="space-y-8 text-lg font-sans text-ink-muted max-w-2xl">
              <p>
                I started as an engineer at National Instruments, building test and measurement solutions used by Qualcomm and Verizon. Did an MBA at ISB. Moved into product at HCL, where I owned a B2B SaaS platform that managed 9M+ devices across 10+ countries for AT&amp;T and Vodafone. Then joined a blockchain gaming startup as founding team, built the product division from zero, led 20+ people, shipped $8M in revenue.
              </p>
              <p>
                Most recently, I ran product strategy and GTM across 25+ startups at a Dubai-based accelerator. Somewhere along the way, I started building things on my own using AI workflows. Websites, mobile apps, brands, infrastructure. Turns out a product leader who can also write the code ships a lot faster.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-ink/10 flex flex-col gap-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="blueprint text-xs text-ink-muted mb-2">REVENUE SHIPPED</div>
                  <div className="text-3xl">$8M+</div>
                </div>
                <div>
                  <div className="blueprint text-xs text-ink-muted mb-2">STARTUPS LED</div>
                  <div className="text-3xl">25+</div>
                </div>
                <div>
                  <div className="blueprint text-xs text-ink-muted mb-2">SOLO BUILDS</div>
                  <div className="text-3xl">5+</div>
                </div>
                <div>
                  <div className="blueprint text-xs text-ink-muted mb-2">EDUCATION</div>
                  <div className="text-3xl">ISB &middot; BITS</div>
                </div>
              </div>

              <Link href="/experience" className="flex items-center gap-2 group w-fit mt-8">
                <span className="blueprint text-xs border border-ink/20 px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  FULL EXPERIENCE ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ARCHIVE */}
      <section id="archive" className="py-32 px-6 md:px-12 lg:px-24 bg-canvas-alt">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl tracking-tight mb-16">How I think.</h2>

          <div className="space-y-0 border-t border-ink/10">
            {[
              { num: "001", title: "Rough v1 in a week beats a perfect spec in a month", date: "PRINCIPLE" },
              { num: "002", title: "First principles everything, whether it's engineering, marketing, or fundraising", date: "PRINCIPLE" },
              { num: "003", title: "Build systems that work without you, not because of you", date: "PRINCIPLE" },
              { num: "004", title: "Best product teams: every person can explain what we're building and why in 2 minutes", date: "PRINCIPLE" }
            ].map((post) => (
              <div key={post.num} className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-ink/10 px-6 -mx-6">
                <div className="flex items-center gap-8 md:gap-16 mb-4 md:mb-0">
                  <span className="blueprint text-xs text-ink-muted">{post.num}</span>
                  <h3 className="text-2xl md:text-4xl text-ink">{post.title}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <span className="blueprint text-xs text-ink-muted">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE HANDSHAKE */}
      <footer id="contact" className="h-[80vh] bg-ink text-canvas flex flex-col justify-between px-6 md:px-12 lg:px-24 py-12 md:py-24">
        <div className="flex justify-end items-start">
          <div className="hidden md:flex flex-col gap-2 items-end blueprint text-[10px] text-canvas/40 tracking-widest">
            <span>AVAILABLE FOR:</span>
            <span className="text-canvas/60">HEAD OF PRODUCT / DIRECTOR OF PRODUCT / SENIOR PM</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center -mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(4rem,10vw,12rem)] leading-[0.8] tracking-tight mb-8"
          >
            Let's Talk.
          </motion.h2>
          <a href="mailto:saisubhash.yeniganti@gmail.com" className="text-lg md:text-2xl font-sans text-canvas/60 hover:text-accent transition-colors">
            saisubhash.yeniganti@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-canvas/10 pt-8 blueprint text-xs text-canvas/50">
          <div>© {new Date().getFullYear()} SAI SUBHASH YENIGANTI</div>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="https://linkedin.com/in/subhashyeniganti" target="_blank" rel="noopener noreferrer" className="hover:text-canvas transition-colors">LinkedIn</a>
          </div>
          <div>HYDERABAD / GLOBAL</div>
        </div>
      </footer>

    </main>
  );
}
