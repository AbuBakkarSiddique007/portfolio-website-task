# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Quick reference

| What | Command |
|---|---|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` |
| Lint | `pnpm lint` |
| Typecheck | `npx tsc --noEmit` (no script in package.json) |
| Production build | `pnpm build` |
| Preview deploy | `pnpm dlx vercel` |
| Production deploy | `pnpm dlx vercel --prod` |

No test suite exists. There is no `test` script.

## Toolchain

- **Package manager**: pnpm (v10.28.1 — use `pnpm`, not `npm` or `yarn`)
- **Next.js 16** with Turbopack, App Router, `src/` directory
- **React 19**, **Tailwind CSS v4** (via `@tailwindcss/postcss` plugin)
- **ESLint 9** flat config (`eslint.config.mjs`) with `eslint-config-next`
- **No typecheck script** — run `npx tsc --noEmit` directly to check types

## Path alias

`@/*` resolves to `./src/*`. Use it for all imports (e.g. `@/components/hero`).

## Gotchas

- `AGENTS.md` contains a Next.js auto-generated block between `<!-- BEGIN:nextjs-agent-rules -->` / `<!-- END:nextjs-agent-rules -->` comments. `next dev` regenerates it — do not edit that block manually.
- Tailwind CSS v4 uses `@tailwindcss/postcss` (not the old `tailwindcss` PostCSS plugin). Config is in `postcss.config.mjs`.
- `motion` is the package name for framer-motion (v13+). Import from `motion/react`.
- Static assets (certificates, images) live in `public/assets/`. Vercel sets immutable cache headers for that path.

## Project layout

```
src/
  app/
    layout.tsx        # Root layout, font loading
    page.tsx          # Single-page landing — assembles all sections
    globals.css       # Global theme
  components/
    hero.tsx          # Landing hero + interactive SVG map
    navbar.tsx        # Glassmorphic sticky nav
    about.tsx         # Executive bio
    expertise.tsx     # Skills grid
    casefiles.tsx     # Project case studies
    experience.tsx    # Career timeline
    certificates.tsx  # Certifications grid
    qualifications.tsx# Academic qualifications
    contact.tsx       # Contact form (SweetAlert2 modals)
    footer.tsx        # Footer
    marquee.tsx       # Animated ticker
public/
  assets/             # Certificates, qualifications, images
```
