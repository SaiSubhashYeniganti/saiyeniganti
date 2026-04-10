"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { type MouseEvent } from "react";
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

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

const revealFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
                <p>This is where all of it lives. Thanks for stopping by.</p>
              </div>

              <Link href="/#builds" onClick={handleSeeWorkClick} className="inline-flex items-center gap-2 group">
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
              image: "/images/build-cards/pragna.webp"
            },
            {
              id: "gita-project",
              title: "The Gita Project",
              desc: "Bhagavad Gita reimagined as a modern consumer app. 700+ verses processed through AI pipelines. Starting with the text, building toward stories, meditation, yoga. Can one person build an entire company solo?",
              href: "/builds/gita-project",
              type: "FULL PRODUCT",
              status: "IN PROGRESS",
              statusColor: "bg-[#fbbf24]",
              image: "/images/build-cards/gita-project.webp"
            },
            {
              id: "arthm",
              title: "ARTHM",
              desc: "India's first mic-less concert hall. Proving AI-driven design can be delightful, not just fast. Client call to production in a month.",
              href: "/builds/arthm",
              type: "WEBSITE",
              status: "LIVE",
              statusColor: "bg-[#4ade80]",
              image: "/images/build-cards/arthm.webp"
            },
            {
              id: "blockpulse",
              title: "BlockPulse",
              desc: "Spotted an AI capability gap at the company. Built a Web3 news aggregator as proof that AI can ship real products. Deployed to Play Store solo.",
              href: "/builds/blockpulse",
              type: "MOBILE APP",
              status: "SHIPPED",
              statusColor: "bg-[#9ca3af]",
              image: "/images/build-cards/blockpulse.webp"
            },
            {
              id: "job-hunter",
              title: "Job Hunter",
              desc: "Built AI to find me a job. Scans Telegram channels, classifies roles, surfaces matches. 80+ relevant roles in month one.",
              href: "/builds/job-hunter",
              type: "AI PIPELINE",
              status: "INTERNAL",
              statusColor: "bg-[#9ca3af]",
              image: "/images/build-cards/job-hunter.webp"
            },
            {
              id: "the-unbecoming",
              title: "The Unbecoming",
              desc: "Client work. Author's website for a book on ego dissolution.",
              href: "/builds/the-unbecoming",
              type: "WEBSITE",
              status: "LIVE",
              statusColor: "bg-[#4ade80]",
              image: "/images/build-cards/the-unbecoming.webp"
            }
          ].map((build, index) => (
            <motion.div 
              key={build.id} 
              variants={cardReveal}
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
                        sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 30vw"
                        priority={index < 2}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="object-cover grayscale opacity-60 contrast-[1.1] transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                      
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
      <section id="mind" className="relative pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">

        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
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
            </motion.div>

            {/* Right: Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 mt-[-6px]">
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
                <span className="blueprint text-xs border border-ink/20 px-8 py-4 rounded-full group-hover:bg-accent group-hover:text-canvas group-hover:border-accent transition-all duration-500">
                  CAREER ARC ↗
                </span>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Footnote Metrics Bar (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 md:px-12 lg:px-24 mt-6 md:mt-10"
        >
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
        </motion.div>
      </section>

      {/* 4. HOW I THINK */}
      <section id="thinking" className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-canvas-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tight mb-6">Writing out loud.</h2>
            <p className="text-ink-muted font-sans text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              I write about AI, Web3, and product. What's real, what's hype, and what it looks like when you actually build things.
            </p>
          </motion.div>

          {/* Featured LinkedIn Posts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {[
              {
                id: "post-4",
                hook: "I've never written a line of code. But right now, I don't see anything I can't build with AI.",
                topic: "3.7 billion tokens across 14,000+ sessions. That's about 2.6 million pages of conversation. If you stack those pages, it would be taller than the Burj Khalifa. Twice.",
                label: "3.7B TOKENS, ZERO LINES OF CODE",
                url: "https://www.linkedin.com/posts/subhashyeniganti_%F0%9D%97%9C%F0%9D%98%83%F0%9D%97%B2-%F0%9D%97%BB%F0%9D%97%B2%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BF-%F0%9D%98%84%F0%9D%97%BF%F0%9D%97%B6%F0%9D%98%81%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%BB-%F0%9D%97%AE-%F0%9D%97%B9%F0%9D%97%B6-ugcPost-7442202652144377858-GC5T"
              },
              {
                id: "post-1",
                hook: "Everyone's been talking about autonomous agents. I spent the last few weeks building a dermatology website.",
                topic: "10 unique designs, 86 pages, 65,000+ words. Not a developer. Never written a line of production code. Product skills matter more than ever.",
                label: "WHY PRODUCT SKILLS STILL WIN",
                url: "https://www.linkedin.com/posts/subhashyeniganti_everyones-been-talking-about-autonomous-ugcPost-7425101343272472577-Hh5q"
              },
              {
                id: "post-2",
                hook: "I've lived through three waves of \"this changes everything.\" Crypto in 2017. NFTs in 2021. And now AI.",
                topic: "You cannot keep up, and that's okay. But not trying isn't an option. Hype fades. Infrastructure remains. Builders compound.",
                label: "SURVIVING THREE HYPE CYCLES",
                url: "https://www.linkedin.com/posts/subhashyeniganti_ai-crypto-technology-share-7432020960482066432-BpIu"
              },
              {
                id: "post-3",
                hook: "What if we've already achieved AGI but just refuse to call it that?",
                topic: "Whether AI is \"just next-token prediction\" or something different doesn't really matter. What matters is what it can do.",
                label: "THE AGI WE WON'T ADMIT TO",
                url: "https://www.linkedin.com/posts/subhashyeniganti_ai-agi-share-7434540185134080000-rt7q"
              },
              {
                id: "post-5",
                hook: "I built an AI system to find my next job. It found 80+ in a month.",
                topic: "Connected Telegram channels to an LLM, built a classification pipeline, put a dashboard on top. AI doesn't have to be about building the next big thing.",
                label: "AUTOMATING MY OWN JOB SEARCH",
                url: "https://www.linkedin.com/posts/subhashyeniganti_%F0%9D%97%9C-%F0%9D%97%AF%F0%9D%98%82%F0%9D%97%B6%F0%9D%97%B9%F0%9D%98%81-%F0%9D%97%AE%F0%9D%97%BB-%F0%9D%97%94%F0%9D%97%9C-%F0%9D%98%80%F0%9D%98%86%F0%9D%98%80%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%BA-%F0%9D%98%81%F0%9D%97%BC-share-7445592784117420032-RBS-"
              }
            ].map((post, index) => (
              <motion.a
                key={post.id}
                variants={revealFade}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between p-8 rounded-2xl border border-ink/8 bg-canvas hover:border-ink/20 transition-all duration-500 min-h-[320px] ${
                  index >= 3 ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="blueprint text-[10px] text-ink-muted mb-6 block">{post.label}</span>
                  <h3 className="text-xl md:text-2xl tracking-tight leading-[1.25] mb-4 text-ink group-hover:text-accent transition-colors duration-500">
                    {post.hook}
                  </h3>
                  <p className="text-sm font-sans text-ink-muted leading-relaxed">
                    {post.topic}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8 blueprint text-[11px] text-ink-muted group-hover:text-accent transition-colors duration-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>READ ON LINKEDIN</span>
                  <ArrowUpRight strokeWidth={1.5} className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

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
