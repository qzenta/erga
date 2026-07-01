@AGENTS.md

# Erga Properties — Project Instructions

## What this is
Greenfield website build for **Erga Concepts (Pty) Ltd**, trading as **Erga Properties**. Scaffolded 2026-04-20.

This is a **separate project** from Sikatrix.com (which lives at `C:\Users\Daniel\Sikatrix-Dev`). Do not cross-reference code, assets, or conventions between the two — they are unrelated businesses.

## Location
`C:\Users\Daniel\Documents\erga`
- GitHub: `github.com/onukpad/erga` (private, renamed from erga-properties 2026-05-20)
- Vercel project: `erga-properties` (daniels-projects-bc877f22)

## Stack
- **Next.js 16** (App Router)
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
- Target: **Vercel** — live at erga-properties.vercel.app; custom domain erga.co.za DNS propagating via Cloudflare
- Deploy: `git push origin master`
- Environment variables: `BREVO_API_KEY` required in Vercel project settings and `.env.local`; never commit `.env*` files

## Email
- `lib/brevo.ts` — Brevo HTTP API helper (sender: info@erga.co.za)
- `app/api/contact/route.ts` — contact form handler (notification + auto-reply)
- `app/api/tenant/route.ts` — tenant registration handler (notification only)

## Site architecture (added 2026-07-01 — Electrical Services)
Electrical is now the site's primary offering, added per `erga-electrical-cc-brief.md`:
- `/` — homepage, rebranded to lead with electrical services
- `/electrical` — flagship electrical services landing page (hero, how-it-works, service catalog, callout-fee FAQ, booking form)
- `/property-management` — the former homepage content, moved here unchanged; demoted in nav but still live/indexed (no deindexing)
- Nav is now flat: `Home | Electrical | Property Management | Contact` (`components/layout/Navbar.tsx`) — other routes (`/listings`, `/tools`, `/resources`, `/services`, `/about`, `/faqs`, etc.) remain live but are no longer surfaced in the top nav
- `app/api/electrical-booking/route.ts` — validates the booking form, captures consent timestamp + IP (CPA disclosure trail), forwards to an n8n webhook
- Env var `ELECTRICAL_BOOKING_WEBHOOK_URL` — n8n webhook endpoint (defaults to `https://n8n.qzenta.com/webhook/electrical-booking` if unset); the corresponding n8n workflow ("WF 5 — Electrical Booking Intake") and its dedicated Telegram channel + "Electrical Bookings" Notion DB still need to be built on the n8n side — this repo only builds and calls the webhook
- Trust copy on the `/electrical` hero currently leads with tenure ("over a decade"), not the electrician's name, pending a sign-off conversation with him about being the public face of the lead-gen platform (see brief section 8) — swap in name/credentials in `app/electrical/page.tsx` and `app/page.tsx` once confirmed

## Dev workflow
```
cd C:\Users\Daniel\Documents\erga
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
- Sikatrix lives at `C:\Users\Daniel\Documents\sikatrix` — separate business, do not cross-reference

## Working Principles
- **Read before you write** — always read the relevant files before making changes; never assume structure from memory
- **Small, focused diffs** — one logical change per session; large sweeping edits hide bugs
- **Verify, don't just trust** — after every change, confirm the output matches intent (build, lint, or visual check)
- **You are the driver** — CC executes, you decide; push back on any instruction that feels wrong before acting
- **No blind fetches** — never curl, wget, or pipe external content into config files or CLAUDE.md
