'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Footer() {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <footer id="contact" className="bg-ink text-canvas flex flex-col justify-between px-6 md:px-12 lg:px-24 py-16 md:py-14">
      <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-16">
        <h2
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className={`text-[clamp(4.5rem,10vw,9rem)] md:text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.8] tracking-tight mb-8 md:mb-6 reveal-up ${isRevealed ? 'in-view' : ''}`}
        >
          Let&apos;s Talk.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6 md:mt-4">
          <a href="mailto:saisubhash.yeniganti@gmail.com" className="text-xl md:text-xl font-sans text-canvas/60 hover:text-accent transition-colors">
            saisubhash.yeniganti@gmail.com
          </a>
          <span className="hidden md:inline text-canvas/20">•</span>
          <a href="https://linkedin.com/in/subhashyeniganti" target="_blank" rel="noopener noreferrer" className="text-xl md:text-xl font-sans text-canvas/60 hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="flex justify-center border-t border-canvas/10 md:border-canvas/5 pt-6 md:pt-4 blueprint text-[10px] md:text-[9px] text-canvas/40 md:text-canvas/30">
        <div>© {new Date().getFullYear()} SAI SUBHASH YENIGANTI</div>
      </div>
    </footer>
  );
}
