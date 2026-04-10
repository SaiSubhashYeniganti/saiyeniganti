'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

function RevealUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal-up ${isRevealed ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function RevealFade({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isRevealed } = useScrollReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal-fade ${isRevealed ? 'in-view' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

const EXPERIENCES = [
  {
    period: "2016 — 2019",
    role: "Staff Engineer",
    company: "National Instruments",
    content: (
      <p>
        I started as an engineer at National Instruments. I spent three years there building signal processing algorithms for 4G and 5G test and measurement systems. Companies like Qualcomm and Verizon used what I built to validate their chipsets. It taught me how complex systems actually work under the surface, and that turned out to be the most useful thing I could have learned before moving into product.
      </p>
    )
  },
  {
    period: "2019 — 2020",
    role: "MBA",
    company: "Indian School of Business",
    content: (
      <p>
        After three years of deep engineering, I wanted the business and strategy layer. ISB is ranked Global #12 per Financial Times. This is where I made the shift from engineer to product.
      </p>
    )
  },
  {
    period: "2020 — 2021",
    role: "Product Manager",
    company: "HCL Technologies",
    content: (
      <p>
        My first product role. At HCL, I owned a B2B SaaS platform that managed 9M+ network devices across 10+ countries for customers like AT&amp;T, Vodafone, and Shaw. Enterprise scale and long sales cycles, the kind of environment where you learn to think in systems and stakeholders. It gave me the foundation for everything that came after.
      </p>
    )
  },
  {
    period: "2022 — 2023",
    role: "Head of Product",
    company: "Bulls and Apes Project",
    content: (
      <p>
        Then the opposite of enterprise. Bulls and Apes Project was a US-based blockchain gaming startup. I joined as founding team and built the product division from nothing. I led a 20+ person cross-functional team, designed a gaming ecosystem around 23,000+ digital assets, and shipped Ethereum&apos;s first customizable 3D avatar platform. The whole thing did $8M in cumulative revenue. No playbook for any of it.
      </p>
    )
  },
  {
    period: "2024 — 2026",
    role: "Head of Product",
    company: "KEY Difference",
    content: (
      <div className="space-y-6">
        <p>
          After doing 0-to-1 for one startup, I did it for 25 at the same time. KEY Difference is a Dubai-based Web3 accelerator and venture studio. I built and ran the entire go-to-market program from scratch: how we select startups, how we support founders, how the accelerator operates. Portfolio startups reached 100K+ users and $10M+ in platform transactions.
        </p>
        <p>
          While there, I noticed nobody in the org was building with AI. So I did it myself as a proof of concept: a news aggregator app, built solo and shipped to the Play Store. That was the start of the solo building.
        </p>
      </div>
    )
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      
      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden pt-32 pb-24 px-6">
        <RevealUp>
          <h1 className="text-[13vw] tracking-tight leading-[0.9] text-ink mb-16">
            10+ years<br/>
            of <span className="italic text-ink-muted">building</span><br/>
            products.
          </h1>
        </RevealUp>
        
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="absolute left-[3px] top-[10px] bottom-0 w-[2px] bg-gradient-to-b from-ink/10 via-ink/10 to-transparent" />
          
          <div className="flex flex-col gap-16 relative z-10">
            {EXPERIENCES.map((exp, i) => (
              <RevealUp key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-5 relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-[1px] top-[10px] w-[6px] h-[6px] rounded-full bg-ink ring-[6px] ring-canvas" />
                  
                  <div className="flex flex-col gap-1 mt-[-2px]">
                    <div className="blueprint text-[10px] text-ink-muted mb-2">{exp.period}</div>
                    <h2 className="text-[28px] text-ink leading-[1.1] tracking-tight">{exp.role}</h2>
                    <div className="text-[17px] text-ink-muted">{exp.company}</div>
                  </div>
                  
                  <div className="text-[17px] font-sans text-ink-muted leading-[1.6]">
                    {exp.content}
                  </div>
                </div>
              </RevealUp>
            ))}
          </div>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:block pt-48 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <RevealUp>
            <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-16">
              10+ years of<br/>
              <span className="italic text-ink-muted">building</span> products.
            </h1>
          </RevealUp>

          <RevealFade delay={0.3} className="space-y-32">
            {EXPERIENCES.map((exp) => (
              <div key={exp.period} className="border-t border-ink/10 pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="w-full md:w-1/3">
                  <div className="blueprint text-xs text-ink-muted mb-3">{exp.period}</div>
                  <h2 className="text-3xl text-ink">{exp.role}</h2>
                  <div className="text-lg text-ink-muted mt-1">{exp.company}</div>
                </div>
                <div className="w-full md:w-2/3 text-lg font-sans text-ink-muted leading-relaxed">
                  {exp.content}
                </div>
              </div>
            ))}
          </RevealFade>
        </div>
      </div>
    </main>
  );
}