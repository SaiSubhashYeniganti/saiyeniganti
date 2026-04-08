# Agent Instructions

## Before writing any code or content

1. Read `docs/00-sai-profile.md` first. It has Sai's full career context, voice rules, and content guidelines. The voice rules are strict.
2. Read `docs/01-site-structure.md` to understand what's built and where content lives.
3. Read `docs/01-brand-system.md` for actual colors, fonts, and design tokens.
4. Read `docs/00-design-philosophy.md` for the conceptual design north star.

## Content rules (non-negotiable)

- No em dashes. Sai doesn't use them.
- No filler words: "leveraging," "architecting," "orchestrating," "production-grade."
- No invented experience. Every claim must trace back to `docs/00-sai-profile.md`.
- No Awwwards claims. Don't call any project "Awwwards-level."
- Peer energy, not petitioner energy. Sai is presenting work, not selling himself.
- NI framing: Qualcomm and Verizon are CUSTOMERS of National Instruments. Sai built test and measurement solutions. He did not work for or write code for Qualcomm/Verizon.
- When describing builds, match the tone from Sai's actual LinkedIn messages (see examples in `docs/00-sai-profile.md`). Short, factual, no fluff.

## Next.js specifics

This uses Next.js 16 with breaking changes. Read `node_modules/next/dist/docs/` before writing framework code.
