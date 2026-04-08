# Design Philosophy & Guidelines

This document outlines the overarching design philosophy and aesthetic taste for this personal portfolio. These are not strict system rules with specific hex codes or tokens. Instead, they serve as a conceptual North Star. Any AI or developer referencing this document must understand the *vibe*, the *taste*, and the *intent* behind these decisions before generating layouts or writing CSS.

---

## 1. The Core Objective: "Benchmark, Not Slop"
The goal is to create an "Awwwards-level" experience that feels undeniably hand-crafted, intentional, and memorable. It should serve as an industry benchmark for a personal portfolio.
- **Human Intentionality:** Every pixel, interaction, typography choice, and whitespace block must feel like a deliberate, opinionated decision. 
- **Reject Defaults:** Actively avoid standard templates, basic SaaS marketing layouts, or safe out-of-the-box component library aesthetics.

---

## 2. Aesthetics & Atmosphere
The space should feel like a high-end physical object, a cultural gallery, or a premium editorial magazine. 
- **Tactile Materiality:** Move away from flat, sterile digital planes. Introduce subtle analog texture (e.g., a faint 4% grain overlay), considered lighting, shadows, and physical metaphors. It should feel like it has weight and physical presence.
- **Luminous Depth:** Do not default to flat, solid background colors. Create atmosphere through layered gradients, geometric masks, or contextual effects. 
- **Cohesive, Distinctive Palettes:** Avoid timid, evenly-distributed pastel palettes. Commit to strong dominant tones with sharp, meaningful accents (e.g., a warm alabaster canvas with deep indigo ink and striking gold or terracotta accents). 

---

## 3. Typography as Structure
Typography is not just for reading; it is a primary structural and emotional element of the site.
- **No Safe Defaults:** Do not use Inter, Space Grotesk, Poppins, Arial, or standard system fonts. These are heavily overused by AI and communicate "generic web default."
- **Editorial & Distinctive:** Choose beautiful, character-rich typefaces. A common pairing approach is a highly distinctive, high-contrast serif (like Zodiak or Playfair) for massive display moments, paired with an elegant, refined sans-serif (like Satoshi) for body text. 
- **Asymmetry & Scale:** Let large, bespoke typography dictate the grid rather than forcing text into rigid boxes. 

---

## 4. Motion & The "Experience" First
The website is an experience, not a whitepaper.
- **Choreographed Orchestration:** Prioritize one well-orchestrated, high-impact page load or section reveal (using staggered delays) over a dozen noisy, scattered micro-interactions.
- **Scroll-Driven Pacing:** Animations should be tied to the scroll position, allowing the user to control the narrative pacing. Avoid auto-playing distractions.
- **The Horizontal Exhibition:** Break the monotony of vertical scrolling by introducing horizontal scroll sequences for galleries or case studies, simulating the physical act of walking through an exhibition.
- **Subtle Light & Physics:** Introduce custom interaction mechanics, like a warm cursor glow that follows the pointer or buttons that respond with physical "weight" and deceleration.

---

## 5. Explicit Anti-Patterns (The "AI Slop" Filter)
If a generated component contains any of the following, it must be redesigned:
- **Clichéd Colors:** Purple gradients on white backgrounds.
- **Generic Hero Text:** "Welcome to my portfolio," "Hi, I'm [Name], a developer," or empty, contextless statements. 
- **Identical Card Grids:** Three perfectly spaced white cards with a drop shadow. It screams "template." Use asymmetry and varied container shapes.
- **Cookie-Cutter Layouts:** Any section that easily looks like it belongs on a B2B SaaS website. 
- **Stock Imagery Vibe:** Using generic UI illustrations or floating 3D isometric shapes. If visuals are needed, use architectural blueprints, high-contrast abstract textures, or beautiful typographic layouts. 

---

## The Mandate
Whenever you (the AI) are asked to build a new section or component for this site, interpret creatively and make unexpected choices. Push beyond the distribution curve of standard web design. Surprise and delight the user.
