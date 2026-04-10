'use client';

import { useRef, useState, useEffect, RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PostType {
  id: string;
  hook: string;
  topic: string;
  label: string;
  url: string;
}

const posts = [
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
];

export function ThinkingCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal();

  return (
    <div 
      ref={revealRef as React.RefObject<HTMLDivElement>} 
      className={`reveal-up ${isRevealed ? 'in-view' : ''} mb-10`}
    >
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:px-0 relative"
      >
        {posts.map((post, index) => (
          <PostCard 
            key={post.id}
            post={post}
            index={index}
            containerRef={scrollContainerRef}
          />
        ))}
      </div>

      {/* Mobile Pagination Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-2 pb-6">
        {posts.map((_, i) => (
          <PaginationDot key={i} index={i} containerRef={scrollContainerRef} total={posts.length} />
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

function PostCard({ 
  post, 
  index, 
  containerRef
}: { 
  post: PostType; 
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
      className={`group relative min-w-[85vw] snap-center snap-always md:min-w-0 rounded-2xl will-change-transform ${isFocused ? 'mobile-focused' : ''} ${index >= 3 ? "lg:col-span-1 md:col-span-1" : ""}`}
    >
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col h-full justify-between p-8 rounded-2xl border border-ink/8 bg-canvas transition-all duration-500 min-h-[320px] ${showHoverState ? 'border-ink/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'hover:border-ink/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'}`}
      >
        <div>
          <span className="blueprint text-[10px] text-ink-muted mb-6 block">{post.label}</span>
          <h3 className={`text-xl md:text-2xl tracking-tight leading-[1.25] mb-4 text-ink transition-colors duration-500 ${showHoverState ? 'text-accent' : 'group-hover:text-accent'}`}>
            {post.hook}
          </h3>
          <p className="text-sm font-sans text-ink-muted leading-relaxed">
            {post.topic}
          </p>
        </div>
        <div className={`flex items-center gap-2 mt-8 blueprint text-[11px] text-ink-muted transition-colors duration-500 ${showHoverState ? 'text-accent' : 'group-hover:text-accent'}`}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <span>READ ON LINKEDIN</span>
          <ArrowUpRight strokeWidth={1.5} className={`w-3 h-3 ml-auto transition-opacity duration-300 ${showHoverState ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        </div>
      </a>
    </motion.div>
  );
}