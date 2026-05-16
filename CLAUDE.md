@AGENTS.md

# Erga Properties — Project Instructions

## What this is
Greenfield website build for **Erga Concepts (Pty) Ltd**, trading as **Erga Properties**. Scaffolded 2026-04-20.

This is a **separate project** from Sikatrix.com (which lives at `C:\Users\Daniel\Sikatrix-Dev`). Do not cross-reference code, assets, or conventions between the two — they are unrelated businesses.

## Location
`C:\Users\Daniel\Erga-Dev` (git repo auto-initialized by `create-next-app`, no remote yet)

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint** (`eslint-config-next`)
- **npm** as package manager
- Import alias: `@/*`
- No `src/` directory — `app/` lives at the repo root

## Brand
- **Navy:** `#1B2A4A`
- **Gold:** `#9A7B2F`
- Contact email: `info@erga.co.za`

Define these as Tailwind theme tokens (e.g. `navy`, `gold`) so they are used consistently across components rather than inlined as hex.

## Deployment
- Target: **Vercel**
- No production deploy yet — set up when the user is ready to push
- Environment variables will live in Vercel project settings; never commit `.env*` files

## Dev workflow
```
cd /c/Users/Daniel/Erga-Dev
npm run dev        # start dev server
npm run build      # production build
npm run lint       # ESLint
```

## Conventions
- Prefer Server Components by default; only mark `"use client"` when interactivity genuinely requires it
- Use the App Router's built-in conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`) rather than custom wrappers
- Keep shared components in a single location (`components/` at repo root, or `app/_components/`) — pick one and stay consistent

## Constraints
- Never commit secrets, API keys, or `.env*` files
- Do not touch `C:\Users\Daniel\Sikatrix-Dev` from this project — it is a live WordPress mirror for an unrelated business
