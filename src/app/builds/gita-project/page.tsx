"use client";

export default function GitaProjectBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          The Gita Project
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          Challenge of building a company solo. App, website, brand, infrastructure.
        </p>

        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center mb-16">
          <span className="blueprint text-ink/30 tracking-widest">ASSET PLACEHOLDER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="md:col-span-1">
            <div className="blueprint text-[10px] text-ink-muted tracking-widest mb-4">TECH STACK</div>
            <ul className="blueprint text-sm text-ink space-y-2">
              <li>Flutter</li>
              <li>Riverpod</li>
              <li>Supabase</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              The Bhagavad Gita is one of the world's oldest philosophical texts. But every way to access 
              it today feels like it was designed 20 years ago. I wanted to build a product that gives this 
              text the same design and UX treatment as any modern consumer app.
            </p>
            <p>
              The first problem was scale: 700+ verses, each needing structured metadata, categorization, 
              and commentary. I built custom AI automation pipelines to process the entire corpus. Then the 
              mobile app, the marketing website, the brand. This is the closest thing I have to building a 
              company solo from scratch.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
