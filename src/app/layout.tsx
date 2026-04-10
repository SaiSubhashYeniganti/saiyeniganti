import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

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
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
