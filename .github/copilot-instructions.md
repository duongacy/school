## Copilot / AI Agent instructions for this repository

Short: this is a Next.js App Router project (Next 16) using TypeScript, Tailwind CSS v4, and Chakra UI v2. Read the key files below before editing; follow the repo conventions for routing, styling, and color-mode handling.

Key files to read first
- `app/layout.tsx` — root layout and server-side cookie read for initial color mode. Providers and Header are mounted here.
- `components/Providers.tsx` — wraps `ChakraProvider`, includes `ColorModeScript` and `CookieSync` (writes the `chakra-ui-color-mode` cookie from client color changes).
- `components/Header.tsx` — client header/navigation. Uses `usePathname()` and a segment-aware `isActive()` helper for active-route styling.
- `components/ColorModeToggle.tsx` — client toggle that calls Chakra's `toggleColorMode()`.
- `components/UserMenu.tsx` — client avatar + dropdown (placeholder sign-out logic).
- `app/globals.css` — global CSS imported by the app layout; Tailwind directives live here for v4 (`@import "tailwindcss/preflight"` + `@tailwind utilities`).
- `tailwind.config.js` and `postcss.config.js` — Tailwind v4 plugin settings. Note: preflight disabled in config to avoid reset conflicts with Chakra.
- `lib/programs.ts` — small data module used by dynamic routes as an example of server-side data in App Router.

Architecture & why
- App Router (`app/`) is used as the primary router. Pages Router is not used for most routes — there's a `pages/_document.tsx` kept only for Pages Router SSR needs. Avoid creating overlapping routes in `pages/` and `app/` for the same path.
- Chakra UI provides UI primitives and color-mode handling. Tailwind is used for utility classes. To avoid CSS reset conflicts the Tailwind preflight is disabled in `tailwind.config.js` (see `corePlugins.preflight = false`). The project uses a cookie-based SSR color-mode approach: the server reads the `chakra-ui-color-mode` cookie in `app/layout.tsx` and sets HTML attributes accordingly; the client writes that cookie via `CookieSync` in `components/Providers.tsx` when the color mode changes.

Developer workflows (commands)
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Type-check only: `npx tsc --noEmit`
- Generate route types (App Router): `npx next typegen` — run after adding/removing routes
- Quick Tailwind compile check (useful when utilities seem missing):
  `npx tailwindcss -i ./app/globals.css -c ./tailwind.config.js -o /tmp/tw.css --minify`
  then inspect `/tmp/tw.css` for expected utilities (e.g. `.p-8`, `.text-gray-700`).

Project-specific conventions & gotchas
- Tailwind v4 differences: this repo uses `@import "tailwindcss/preflight"` and `@tailwind utilities` per v4 conventions. Do NOT replace directives with v3-style directives without verifying PostCSS config.
- Unknown CSS at-rules (for example `@theme`) will break PostCSS processing and prevent Tailwind from emitting utilities. If utilities are missing, inspect `app/globals.css` for unknown at-rules or syntax errors.
- Don't create conflicting Pages Router files (e.g., `pages/index.tsx`) that overlap `app/` routes — Next will error about competing route handlers.
- Client vs Server components: App Router default is server components. For interactive pieces (header, color toggle, user menu), the component is marked with `"use client"`. Keep that pattern.
- Dynamic route pattern: see `app/admissions/programs/[slug]/page.tsx` — uses `params` and server-side helper `getProgramBySlug()` from `lib/programs.ts`. Use `notFound()` from `next/navigation` for 404 flow.

Integration points & external deps
- Chakra UI (+ emotion) and Framer Motion are installed and used. Chakra version was pinned to v2.x for stable ColorModeScript typings — be careful if changing package versions.
- Tailwind v4 uses `@tailwindcss/postcss` plugin (`devDependencies`). PostCSS config is in `postcss.config.js`.

When editing
- Add new pages under `app/<path>/page.tsx` (server components). If you need client interactivity, add `"use client"` at the top of that component or create child client components.
- For API endpoints prefer the App Router `app/api/.../route.ts` pattern if you need route handlers. If you add Pages Router API under `pages/api`, ensure no path conflicts with `app/`.
- Update `lib/` for small data fixtures or sync code used by multiple pages (e.g., `lib/programs.ts`).
- Update `components/Providers.tsx` for any global Chakra theme or cookie behavior changes.

Examples to look at when implementing features
- How to read server cookie for color-mode: `app/layout.tsx` (uses `next/headers` cookies())
- How to persist color-mode: `components/Providers.tsx` `CookieSync` writes `chakra-ui-color-mode` cookie on color change
- Active nav logic example: `components/Header.tsx` uses a `normalizePath()` + segment-based matcher `isActive()` to avoid false positives when matching parents

If you read this and something is unclear, tell me which file or flow you'd like expanded (e.g., cookie color-mode flow, Tailwind setup, or App Router routing rules) and I will update this file.
