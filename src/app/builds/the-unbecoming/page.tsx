"use client";

export default function TheUnbecomingBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          The Unbecoming
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          Client work. Author's website for a book on ego dissolution. Shipped.
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
              <li>Framer Motion</li>
              <li>Cursor</li>
            </ul>
            
            <a href="https://kartikeyavajpai.com" target="_blank" rel="noreferrer" className="mt-8 inline-block blueprint text-xs border border-ink/20 px-6 py-3 rounded-full hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300">
              VIEW LIVE SITE ↗
            </a>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              This was a specialized client build for an author promoting a deeply philosophical book on ego dissolution. The mandate was to create a digital presence that mirrored the atmospheric, introspective tone of the writing.
            </p>
            <p>
              I utilized AI-first development workflows to handle the entire project lifecycle—from wireframing the abstract layout to implementing subtle, high-end scroll physics with Framer Motion. The result is a highly polished, production-ready editorial website delivered in a fraction of traditional agency timelines.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
