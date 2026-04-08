import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const blueprint = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-blueprint",
});

const narrative = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-narrative",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sai Subhash Yeniganti — Product Leader & AI-First Builder",
  description: "10+ years across product and engineering. Led product across 25+ startups, built a gaming startup to $8M revenue. Now shipping full products solo with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${narrative.variable} ${blueprint.variable} antialiased bg-canvas text-ink overflow-x-hidden selection:bg-accent selection:text-canvas`}>
        
        {/* GLOBAL DYNAMIC ISLAND HEADER */}
        <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 md:gap-8 bg-canvas/80 backdrop-blur-xl border border-ink/10 px-6 md:px-8 py-4 rounded-full blueprint text-[10px] md:text-xs tracking-widest uppercase shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] w-max max-w-[90vw]">
          <Link href="/" className="hover:text-accent transition-colors font-bold whitespace-nowrap">
            Sai Subhash Yeniganti
          </Link>
          <div className="w-[1px] h-3 bg-ink/20 hidden md:block"></div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#builds" className="hover:text-accent transition-colors">Builds</Link>
            <Link href="/experience" className="hover:text-accent transition-colors">Experience</Link>
          </div>
          <div className="w-[1px] h-3 bg-ink/20 hidden md:block"></div>
          <a href="mailto:saisubhash.yeniganti@gmail.com" className="hover:text-accent transition-colors whitespace-nowrap">
            Let's Talk
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
}
