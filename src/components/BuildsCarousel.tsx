'use client';

import { useRef, useState, useEffect, RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface BuildType {
  id: string;
  title: string;
  desc: string;
  href: string;
  type: string;
  status: string;
  statusColor: string;
  image: string;
}

// --- PLACEHOLDER COMPONENTS ---
const GradientPlaceholder = ({ className }: { className?: string }) => (
  <div className={`w-full h-full bg-gradient-to-br from-ink/10 to-canvas-alt relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEw0IDRaTTQgMEwwIDRaIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>
  </div>
);

const buildsData = [
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
];

export function BuildsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal();

  return (
    <div 
      ref={revealRef as React.RefObject<HTMLDivElement>} 
      className={`reveal-up ${isRevealed ? 'in-view' : ''}`}
    >
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-10 md:gap-y-16 md:pb-0 md:px-12 lg:px-24 relative"
      >
        {buildsData.map((build, index) => (
          <BuildCard 
            key={build.id}
            build={build}
            index={index}
            containerRef={scrollContainerRef}
          />
        ))}
      </div>
      
      {/* Mobile Pagination Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-2 pb-6">
        {buildsData.map((_, i) => (
          <PaginationDot key={i} index={i} containerRef={scrollContainerRef} total={buildsData.length} />
        ))}
      </div>
    </div>
  );
}

function PaginationDot({ index, containerRef, total }: { index: number; containerRef: RefObject<HTMLDivElement | null>; total: number }) {
  const [isActive, setIsActive] = useState(index === 0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Calculate which card is closest to the center
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / total;
      const activeIndex = Math.round(scrollLeft / cardWidth);
      setIsActive(activeIndex === index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef, index, total]);

  return (
    <div 
      className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? 'w-4 bg-ink/80' : 'w-1.5 bg-ink/20'}`}
    />
  );
}

function BuildCard({ 
  build, 
  index, 
  containerRef
}: { 
  build: BuildType; 
  index: number; 
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: cardRef,
    axis: "x",
    offset: ["center end", "center start"]
  });
  
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  useEffect(() => {
    if (!isMobile || !cardRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFocused(entry.isIntersecting);
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, containerRef]);

  const showHoverState = isMobile ? isFocused : undefined;

  return (
    <motion.div
      ref={cardRef}
      style={isMobile ? { scale } : undefined}
      className={`group flex flex-col relative min-w-[85vw] snap-center snap-always md:min-w-0 rounded-2xl cursor-pointer will-change-transform ${isFocused ? 'mobile-focused' : ''}`}
    >
      <Link href={build.href} className="flex flex-col gap-5 md:gap-6 cursor-pointer w-full h-full">
        {/* Image Container with Integrated Badges */}
        <div className={`w-full aspect-[16/10] overflow-hidden rounded-2xl bg-ink relative border border-canvas/5 transition-shadow duration-500 ${showHoverState ? 'shadow-[inset_0_0_0_2px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.4)]' : 'shadow-sm group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]'}`}>
          {build.image ? (
            <>
              <Image 
                src={build.image} 
                alt={build.title} 
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 46vw, 30vw"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                className={`object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${showHoverState ? 'scale-105 grayscale-0 opacity-100' : 'grayscale opacity-60 contrast-[1.1] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100'}`}
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
                <span className={`w-2 h-2 rounded-full ${build.statusColor} shadow-[0_0_8px_currentColor] transition-opacity duration-500 ${showHoverState ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}></span>
                <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {build.status}
                </span>
              </div>
            </>
          ) : (
            <>
              <GradientPlaceholder className={`transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${showHoverState ? 'scale-105' : 'group-hover:scale-105'}`} />
              
              <div className="absolute inset-x-0 top-0 z-[5] h-28 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none"></div>
              
              <div className="absolute top-5 left-5 z-10">
                <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {build.type}
                </span>
              </div>

              <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${build.statusColor} shadow-[0_0_8px_currentColor]`}></span>
                <span className="blueprint text-[11px] text-canvas font-semibold tracking-widest [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {build.status}
                </span>
              </div>
            </>
          )}
        </div>
        
        <div className={`flex flex-col gap-3 mt-1 transition-opacity duration-500 ${showHoverState ? 'opacity-100' : 'opacity-70 group-hover:opacity-100 md:opacity-100'}`}>
          {/* Title & Description */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl md:text-3xl lg:text-4xl tracking-tight mb-2 text-canvas transition-colors duration-500 ${showHoverState ? 'text-accent' : 'group-hover:text-accent'}`}>
                {build.title}
              </h3>
              <p className="text-canvas/60 font-sans text-sm md:text-base leading-relaxed max-w-[90%]">
                {build.desc}
              </p>
            </div>
            {/* Arrow Icon */}
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 mt-1 ${showHoverState ? 'bg-accent border-accent text-canvas' : 'border-canvas/20 group-hover:bg-accent group-hover:border-accent group-hover:text-canvas'}`}>
              <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
