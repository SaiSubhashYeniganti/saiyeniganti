"use client";

export default function ArthmBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          ARTHM Foundation
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          Experiment in proving AI-driven design can be intentional and world-class. Client call to production in a month.
        </p>

        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center mb-16">
          <span className="blueprint text-ink/30 tracking-widest">ASSET PLACEHOLDER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="md:col-span-1">
            <div className="blueprint text-[10px] text-ink-muted tracking-widest mb-4">TECH STACK</div>
            <ul className="blueprint text-sm text-ink space-y-2">
              <li>Next.js</li>
              <li>Three.js / R3F</li>
              <li>GSAP & Lenis</li>
              <li>Cursor</li>
            </ul>
            
            <a href="https://arthm.org" target="_blank" rel="noreferrer" className="mt-8 inline-block blueprint text-xs border border-ink/20 px-6 py-3 rounded-full hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300">
              VIEW LIVE SITE ↗
            </a>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              ARTHM is India's first mic-less concert hall. The client wanted a website that felt like the space itself. 
              No templates, no generic layouts. The kind of thing where every scroll, every transition, every 
              piece of typography has to feel deliberate.
            </p>
            <p>
              I built it using AI-first workflows: 3D rendering in React Three Fiber, scroll-linked animations 
              through GSAP, heavy typographical structures. The whole thing went from first client conversation 
              to deployed production in under a month. For me, this was the project that proved AI-driven 
              design can be intentional, not just fast.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
