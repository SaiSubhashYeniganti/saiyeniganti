# Brand System: "Industrial Humanism"

This document defines the foundational design primitives as actually implemented in code. For the conceptual philosophy behind these choices, see `00-design-philosophy.md`.

---

## 1. Colors (as defined in `globals.css`)

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Base / Canvas | `--color-canvas` | `#F4F1ED` | Primary background. Warm, uncoated paper feel. |
| Canvas Alt | `--color-canvas-alt` | `#EAE6DF` | Slightly darker canvas for section contrast (e.g., principles section). |
| Primary Text | `--color-ink` | `#1A1A1A` | All primary typography, headings, structural text. |
| Secondary Text | `--color-ink-muted` | `#73716E` | Body copy, metadata, captions. |
| Accent / Action | `--color-accent` | `#C16E5B` | Interactive moments only: hover fills, active states, selection highlight. Never decorative. |

No dark mode. The brand is anchored to the warm canvas.

---

## 2. Typography (as loaded in `layout.tsx`)

### The Narrative (Display & Storytelling)
**Family:** Playfair Display (loaded via `next/font/google`, variable: `--font-narrative`)
**Fallback:** Georgia, serif

Used for:
- Hero headlines (clamp from 4.5rem to 12rem)
- Section titles
- Body text in narrative sections
- Italics for emphasis moments (e.g., headline second lines)

### The Blueprint (Structural & Metadata)
**Family:** Geist Mono (loaded via `next/font/google`, variable: `--font-blueprint`)
**Fallback:** monospace

Applied via `.blueprint` utility class which adds:
- `text-transform: uppercase`
- `letter-spacing: 0.1em`

Used for:
- Navigation labels
- Stat labels ("REVENUE SHIPPED", "STARTUPS LED")
- Date ranges ("2024 — 2026")
- Role titles ("HEAD OF PRODUCT")
- Tech stack lists
- Buttons and CTAs
- Typically at 10px-12px for extreme contrast against massive Narrative headlines

---

## 3. Visual Texture

- **Grain overlay:** 4% fractal noise SVG applied to `body::after`, `mix-blend-mode: multiply`, `opacity: 0.6`. Gives analog, tactile feel.
- **Selection color:** Accent background + canvas text
- **No scrollbars** on horizontal scroll sections (`.no-scrollbar` utility)

---

## 4. Design Principles (from `00-design-philosophy.md`)

- Desktop-first. Don't sacrifice scale or typography for mobile on first pass.
- Reject template aesthetics. No SaaS landing page vibes.
- Typography IS structure. Let large type dictate the grid.
- Motion should be choreographed, not scattered. One well-timed reveal > twelve noisy animations.
- Horizontal scroll for builds section simulates walking through a gallery.

---

## Important: Doc vs. Reality

The original brand system doc referenced `Zodiak` as the narrative font. The actual implementation uses **Playfair Display**. This document reflects what's in the code. If the font changes, update this doc.
