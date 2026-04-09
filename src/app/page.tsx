"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroShowcase } from "@/components/HeroShowcase";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";

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
      <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center pt-[120px] pb-6">

        {/* Subtle Ambient Lighting */}
        <HeroAtmosphere />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1200px] mx-auto px-6 md:px-12 z-10 flex flex-col"
        >
          {/* Two-column layout: Text left, Image right */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-12 items-center">

            {/* LEFT: Title + Proof + CTA */}
            <motion.div variants={revealUp} className="lg:col-span-6 flex flex-col items-start text-left">
              <h1 className="text-[clamp(3.5rem,6vw,7rem)] leading-[1.05] tracking-tight text-ink mb-6">
                From Zero to Scale.
              </h1>

              <div className="flex flex-col gap-4 text-[16px] lg:text-[18px] text-ink/75 leading-[1.7] font-sans mb-10 max-w-[480px]">
                <p>I'm Sai Subhash Yeniganti.</p>
                <p>Over the last decade, I built a product division from scratch at a US startup and shipped $8M+ in revenue. Then I ran product strategy and GTM for 25+ startups at a Dubai accelerator. Now I build and ship full products solo with AI.</p>
                <p>This is where all of it lives.</p>
              </div>

              <Link href="#builds" className="inline-flex items-center gap-2 group">
                <span className="blueprint text-xs border border-ink/20 bg-canvas/50 backdrop-blur-sm px-8 py-4 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-300 shadow-sm">
                  SEE THE WORK
                </span>
              </Link>
            </motion.div>

            {/* RIGHT: Dynamic Showcase */}
            <motion.div variants={revealUp} className="lg:col-span-6 relative w-full">
              <HeroShowcase />
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 2. THE BUILDS (GRID) */}
      <section id="builds" className="relative w-full bg-ink text-canvas py-20 md:py-20">
        <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.05] mb-6">
              One person. <span className="italic text-canvas/50">End to end.</span>
            </h2>
            <p className="text-canvas/50 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
              A collection of products, platforms, and experiments built entirely solo. From brand and design to code and deployment, all executed using AI-first workflows.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-16 md:gap-y-20 px-6 md:px-12 lg:px-24"
        >
          {[
            {
              id: "pragna",
              title: "Pragna Skin Clinic",
              desc: "Dermatology clinic. 86 pages, 65,000 words of content, 10 unique designs. Wanted to see how far AI can stretch on a single project. Did brand, content, design, development.",
              href: "/builds/pragna",
              type: "WEBSITE",
              status: "LIVE",
              statusColor: "bg-[#4ade80]",
              image: "/images/Home%20page%202nd%20section/pragna.jpg"
            },
            {
              id: "gita-project",
              title: "The Gita Project",
              desc: "Bhagavad Gita reimagined as a modern consumer app. Can one person build an entire company with AI? App, website, brand, infrastructure. Finding out.",
              href: "/builds/gita-project",
              type: "FULL PRODUCT",
              status: "IN PROGRESS",
              statusColor: "bg-[#fbbf24]",
              image: "/images/Home%20page%202nd%20section/gita-project.jpg"
            },
            {
              id: "arthm",
              title: "ARTHM",
              desc: "India's first mic-less concert hall. Proving AI can produce world-class, intentional design. Client call to production in a month.",
              href: "/builds/arthm",
              type: "WEBSITE",
              status: "LIVE",
              statusColor: "bg-[#4ade80]",
              image: "/images/Home%20page%202nd%20section/arthm.jpg"
            },
            {
              id: "blockpulse",
              title: "BlockPulse",
              desc: "Web3 news aggregator. Built an autonomous pipeline that monitors, filters, and pushes to a mobile app. Shipped to Play Store.",
              href: "/builds/blockpulse",
              type: "MOBILE APP",
              status: "SHIPPED",
              statusColor: "bg-[#9ca3af]",
              image: "/images/Home%20page%202nd%20section/blockpulse.jpg"
            },
            {
              id: "job-hunter",
              title: "Job Hunter",
              desc: "Built AI to find me a job. Scans Telegram channels, classifies roles, surfaces matches. 80+ relevant roles in month one.",
              href: "/builds/job-hunter",
              type: "AI PIPELINE",
              status: "INTERNAL",
              statusColor: "bg-[#9ca3af]",
              image: "/images/Home%20page%202nd%20section/job-hunter.jpg"
            },
            {
              id: "the-unbecoming",
              title: "The Unbecoming",
              desc: "Client work. Author's website for a book on ego dissolution.",
              href: "/builds/the-unbecoming",
              type: "WEBSITE",
              status: "LIVE",
              statusColor: "bg-[#4ade80]",
              image: "/images/Home%20page%202nd%20section/the-unbecoming.jpg"
            }
          ].map((build, index) => (
            <motion.div 
              key={build.id} 
              variants={revealUp}
              className="flex flex-col group relative"
            >
              <Link href={build.href} className="flex flex-col gap-6 cursor-pointer">
                {/* Image Container with Integrated Badges */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-ink relative border border-canvas/5 shadow-sm">
                  {build.image ? (
                    <>
                      <Image 
                        src={build.image} 
                        alt={build.title} 
                        fill
                        className="object-cover grayscale opacity-60 contrast-[1.1] transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                      {/* Very subtle noise overlay for the editorial feel */}
                      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                      <div className="absolute inset-0 bg-canvas/5 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                      
                      {/* Top gradient for text readability */}
                      <div className="absolute inset-x-0 top-0 z-[5] h-28 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none"></div>
                      
                      {/* Type (Top Left) — raw text, no container */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                          {build.type}
                        </span>
                      </div>

                      {/* Status (Top Right) — dot + label, no container */}
                      <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${build.statusColor} shadow-[0_0_8px_currentColor]`}></span>
                        <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                          {build.status}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <GradientPlaceholder className="group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
                      
                      {/* Top gradient for text readability */}
                      <div className="absolute inset-x-0 top-0 z-[5] h-28 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none"></div>
                      
                      {/* Type (Top Left) — raw text, no container */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                          {build.type}
                        </span>
                      </div>

                      {/* Status (Top Right) — dot + label, no container */}
                      <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${build.statusColor} shadow-[0_0_8px_currentColor]`}></span>
                        <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                          {build.status}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col gap-4 mt-3">
                  {/* Title & Description */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl lg:text-4xl tracking-tight mb-3 text-canvas group-hover:text-accent transition-colors duration-500">
                        {build.title}
                      </h3>
                      <p className="text-canvas/60 font-sans text-sm md:text-base leading-relaxed max-w-[90%]">
                        {build.desc}
                      </p>
                    </div>
                    {/* Arrow Icon */}
                    <div className="w-10 h-10 rounded-full border border-canvas/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-canvas transition-all duration-500 shrink-0 mt-1">
                      <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
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
