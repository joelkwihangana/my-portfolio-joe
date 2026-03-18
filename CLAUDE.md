# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript check + production build (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Architecture

Personal portfolio website built with React 19 + TypeScript + Vite. Tailwind CSS 4 for styling, Framer Motion for animations.

**App shell flow:** `main.tsx` → `App.tsx` → `AppShell.tsx`

`AppShell` composes the full page in order: `Navbar` → sections → `Footer` + `WhatsAppFloat`. The sections rendered are: `Hero`, `ProofStrip`, `SystemThinking`, `CaseStudies`, `EngineeringLabs`, `Skills`, `About`, `Contact`.

**Source layout:**
- `src/sections/` — Full-page sections (one file per section)
- `src/components/layout/` — Navbar, Footer, WhatsAppFloat
- `src/components/ui/` — Reusable primitives: BentoGrid, Badge, Button, Container, etc.
- `src/content/` — Static data exported as TypeScript modules (case studies, skills, socials, engineering labs)
- `src/utils/` — `cn` (className util), format helpers, stagger animation config, `useInView` hook
- `src/assets/images/` — Project screenshots and logos

**Dark mode** is detected once at startup in `main.tsx` via `window.matchMedia("(prefers-color-scheme: dark)")` and applied as a class on `<html>`.

**Tailwind CSS 4** is configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is in CSS or via the plugin).
