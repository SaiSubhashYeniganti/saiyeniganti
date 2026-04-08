"use client";

export default function PragnaBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          Pragna Skin Clinic
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          86 pages, 65,000 words of content. Experiment in design and content at scale. One of the best dermatology websites in India.
        </p>

        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center mb-16">
          <span className="blueprint text-ink/30 tracking-widest">ASSET PLACEHOLDER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="md:col-span-1">
            <div className="blueprint text-[10px] text-ink-muted tracking-widest mb-4">TECH STACK</div>
            <ul className="blueprint text-sm text-ink space-y-2">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Claude / Cursor</li>
              <li>Vercel</li>
            </ul>
            
            <a href="https://pragnaskinclinic.com" target="_blank" rel="noreferrer" className="mt-8 inline-block blueprint text-xs border border-ink/20 px-6 py-3 rounded-full hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300">
              VIEW LIVE SITE ↗
            </a>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              A dermatologist needed a website. What I ended up building was closer to a clinical 
              encyclopedia. 86 pages of structured, medically accurate content designed to dominate 
              local search. 10 unique page designs across the site. 65,000 words of on-page SEO content.
            </p>
            <p>
              I did everything on this one. Brand positioning, colors, logo, information architecture, 
              the patient funnel, all the content, every page design, and the full engineering and 
              deployment pipeline. The design system was built from scratch to feel warm and clinical 
              at the same time. This was the project that showed me what AI-first workflows can really do at scale.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
