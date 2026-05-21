# Utility 1

A premium commercial utilities landing site for Utility 1 Ltd, built with Astro and Tailwind CSS v4.

## Run & Operate

- `pnpm --filter @workspace/utility1 run dev` — run the frontend (port 19303)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: **Astro 5** (static output) + Tailwind CSS v4 via `@tailwindcss/vite`
- Fonts: DM Sans (headings) + Inter (body) via Google Fonts
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (not used by this site)

## Where things live

- `artifacts/utility1/` — Astro site (pages, components, styles)
- `artifacts/utility1/src/pages/index.astro` — main landing page
- `artifacts/utility1/src/components/` — all section components
- `artifacts/utility1/src/styles/global.css` — Tailwind theme + CSS variables
- `artifacts/utility1/astro.config.mjs` — Astro config (port from `$PORT`)
- `artifacts/utility1/tailwind.config.mjs` — Tailwind custom colors/fonts (legacy, unused by v4)
- `artifacts/api-server/` — Express API (health endpoint only for now)

## Architecture decisions

- Astro static output (`output: 'static'`) — no server-side rendering needed for a marketing site
- Tailwind CSS v4 via `@tailwindcss/vite` (not `@astrojs/tailwind` which only supports v3)
- CSS custom properties defined in `@theme` block inside global.css for brand colors
- All section content is co-located inside each `.astro` component (no CMS)
- Unsplash images used for all industrial/warehouse photography

## Product

A full-page marketing site for Utility 1 Ltd, a UK commercial utilities broker. Sections:
- Hero with animated sticky nav and warehouse background
- Stats bar (£12,400 avg savings, 28% cost reduction, etc.)
- Social proof / partner logos
- Services grid (Gas, Electric, Water, Waste, Merchant, Asset Management)
- Pain points (numbered list on dark background)
- Why choose us (split with image)
- How it works (4-step process)
- Testimonials (2 quotes on dark bg)
- Case studies (3 cards with images and savings figures)
- CTA banner with value props
- Insights / blog preview (3 articles)
- Final CTA with contact form + phone/email
- Footer

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always use `@tailwindcss/vite` not `@astrojs/tailwind` — workspace uses Tailwind v4
- Brand custom colors are defined in `src/styles/global.css` `@theme` block (not tailwind.config.mjs)
- Tailwind v4 class names use the `--color-*` CSS var pattern internally; custom colors need `brand-*` prefix in classes
- PORT env var is set by the workflow; astro.config.mjs reads it via `process.env.PORT`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
