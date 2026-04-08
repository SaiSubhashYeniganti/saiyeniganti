"use client";

export default function BlockPulseBuildPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-8xl tracking-tight leading-[0.9] text-ink mb-8">
          BlockPulse
        </h1>
        <p className="text-2xl text-ink-muted max-w-2xl font-sans mb-16">
          Experiment in automation. Web3 news app, shipped to Play Store.
        </p>

        <div className="w-full aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center mb-16">
          <span className="blueprint text-ink/30 tracking-widest">ASSET PLACEHOLDER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="md:col-span-1">
            <div className="blueprint text-[10px] text-ink-muted tracking-widest mb-4">TECH STACK</div>
            <ul className="blueprint text-sm text-ink space-y-2">
              <li>Flutter</li>
              <li>Supabase</li>
              <li>OpenAI API</li>
              <li>Cursor</li>
            </ul>
          </div>
          <div className="md:col-span-3 text-lg font-sans text-ink-muted leading-relaxed space-y-6">
            <p>
              While running product strategy at Key Difference, I noticed we were spending hours manually 
              tracking Web3 news across dozens of sources. Crypto moves fast and manual curation wasn't 
              keeping up. Nobody in the org had the AI capability to fix it.
            </p>
            <p>
              So I built it. An autonomous pipeline that monitors Web3 sources, uses AI to filter signal 
              from noise, and pushes curated content to a Flutter mobile app. Shipped it to the Play Store 
              entirely solo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
