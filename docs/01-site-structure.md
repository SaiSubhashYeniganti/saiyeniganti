# Site Structure — What's Actually Built

> This document describes the current implemented state of the site. If code and docs conflict, the code wins.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, `src/app/`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 via `@import "tailwindcss"` in `globals.css` |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Fonts | Playfair Display (narrative/display, `--font-narrative`) + Geist Mono (blueprint/metadata, `--font-blueprint`) |
| Path alias | `@/*` maps to `./src/*` |

---

## Route Map

```
/                          → Homepage (hero + builds + about + principles + footer)
/experience                → Full professional experience narrative
/builds/pragna             → Pragna Skin Clinic case study
/builds/arthm              → ARTHM Foundation case study
/builds/blockpulse         → BlockPulse case study
/builds/gita-project       → The Gita Project case study
/builds/the-unbecoming     → The Unbecoming case study
/builds/job-hunter         → Job Hunter case study
```

---

## Homepage Sections (in scroll order)

### 1. The Hook (Hero)
- Massive Playfair Display headline
- One-paragraph summary with proof points
- CTA button: "SEE THE WORK" anchors to builds section
- Full viewport height

### 2. The Builds (Horizontal Scroll)
- Dark background (ink), light text (canvas)
- Horizontal scroll with snap points
- 6 build cards: Pragna, ARTHM, BlockPulse, Gita Project, The Unbecoming, Job Hunter
- Each card: image placeholder + title + one-line description + arrow link to deep-dive page
- Section ID: `#builds`

### 3. The Mind (About)
- Portrait placeholder (left) + story text (right)
- Two paragraphs covering career arc: NI → ISB → HCL → BAP → KD → solo builds
- Stats grid: $8M+ revenue, 25+ startups, 5+ solo builds, ISB + BITS
- CTA: "FULL EXPERIENCE" links to /experience

### 4. How I Think (Principles)
- Light alt background
- 4 numbered operating principles
- No links (these are not articles, they're principles)

### 5. The Handshake (Footer)
- Dark background, full height
- "AVAILABLE FOR: HEAD OF PRODUCT / DIRECTOR OF PRODUCT / SENIOR PM"
- "Let's Talk." headline + email link
- LinkedIn link, copyright, location

---

## Build Page Structure (Universal)

Each `/builds/*` page follows the same layout:
1. **Title** (massive Playfair Display)
2. **Lede** (one-sentence description, text-2xl, muted)
3. **Media placeholder** (aspect-video, to be replaced with screenshots)
4. **Grid:** Tech stack (left col, mono) + Body copy (right 3 cols, 2 paragraphs)
5. Optional: "VIEW LIVE SITE" link if the project has a URL

---

## Global Navigation

Fixed "dynamic island" nav bar at top center:
- Name (bold, links to /)
- Builds (links to /#builds)
- Experience (links to /experience)
- Let's Talk (mailto link)

---

## Files That Contain Content

**Primary content files (edit these for copy changes):**
- `src/app/page.tsx` — Homepage (all sections)
- `src/app/experience/page.tsx` — Experience narrative
- `src/app/builds/*/page.tsx` — 6 build case study pages
- `src/app/layout.tsx` — Metadata (title, description), nav labels

**Data files:**
- `src/lib/data.ts` — Build catalog data (names, descriptions, URLs, status). Not currently imported by any page but should stay in sync.

**Unused components (exist but not imported anywhere):**
- `src/components/nav.tsx` — Old nav component
- `src/components/footer.tsx` — Old footer component  
- `src/components/catalog-entry.tsx` — Old catalog card component

---

## Known Issues / TODOs

- All build page media sections are placeholders (no screenshots yet)
- Portrait placeholder in "The Mind" section needs a real photo
- Social links: only LinkedIn is real. No X/Twitter profile linked.
- Pre-existing TypeScript error: framer-motion `ease: number[]` type mismatch in page.tsx animation variants. Does not affect dev server, only strict build.
- The Gita Project status is "in-progress" in data.ts
