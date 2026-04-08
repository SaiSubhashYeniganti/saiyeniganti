"use client";

export default function JobHunterBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          Job Hunter
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          Personal AI system. Telegram channels to LLM classification to dashboard. 76 relevant roles surfaced in a month.
        </p>

        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center mb-16">
          <span className="blueprint text-ink/30 tracking-widest">ASSET PLACEHOLDER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="md:col-span-1">
            <div className="blueprint text-[10px] text-ink-muted tracking-widest mb-4">TECH STACK</div>
            <ul className="blueprint text-sm text-ink space-y-2">
              <li>Python</li>
              <li>Telegram API</li>
              <li>OpenAI API</li>
              <li>Next.js Dashboard</li>
            </ul>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              The modern hiring landscape is broken. Between fake job postings and endless spam, finding high-signal opportunities requires digging through massive amounts of noise.
            </p>
            <p>
              Rather than scrolling manually, I engineered an autonomous intelligence pipeline. It continuously scrapes job postings from targeted Telegram channels, runs them through an LLM to classify their exact relevance against my specific background, and pushes the high-signal matches to a clean, custom dashboard.
            </p>
            <p>
              It surfaced 76 highly relevant, hidden roles within the first 30 days—completely automating the opportunity ingestion phase of my career pipeline.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
