# Sai Subhash Yeniganti — Personal Website

Personal portfolio site. Showcases independent AI-first builds alongside professional experience.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion 12
- Playfair Display + Geist Mono (via next/font/google)

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, nav, metadata
│   ├── page.tsx                # Homepage (hero, builds, about, principles, footer)
│   ├── experience/page.tsx     # Professional experience narrative
│   └── builds/
│       ├── pragna/page.tsx
│       ├── arthm/page.tsx
│       ├── blockpulse/page.tsx
│       ├── gita-project/page.tsx
│       ├── the-unbecoming/page.tsx
│       └── job-hunter/page.tsx
├── components/                 # Unused legacy components (nav, footer, catalog-entry)
└── lib/
    └── data.ts                 # Build catalog data (keep in sync with pages)
```

## Docs

```
docs/
├── 00-sai-profile.md          # WHO IS SAI. Read this first. Full career, voice rules, content guide.
├── 00-design-philosophy.md     # Conceptual design north star
├── 01-brand-system.md          # Actual colors, fonts, tokens as implemented
├── 01-site-structure.md        # What's built, route map, section breakdown, known issues
└── 03-experience-narrative.md  # Source copy for all site content
```

## For AI Agents

Start with `docs/00-sai-profile.md`. It has everything: career history, voice rules, content guidelines, and reference examples of how Sai describes his work. The voice rules are non-negotiable.
