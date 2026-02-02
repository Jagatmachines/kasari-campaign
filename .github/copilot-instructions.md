# Copilot instructions for Kasari website

Purpose
- Help contributors and AI agents make safe, consistent changes to this Next.js + Tailwind project.

Big picture
- Next.js App Router app lives in `src/app` (server-first routes, `layout.tsx`, `page.tsx`).
- UI primitives and patterns are in `src/app/components` and `src/app/components/ui` (Radix wrappers + small utilities).
- Styling uses Tailwind configured in `tailwind.config.ts` and CSS files under `src/styles`.

Key workflows
- Install: `npm i` (see README.md).
- Dev: `npm run dev` (uses `next dev`).
- Build / Start: `npm run build` then `npm run start`.
- Lint: `npm run lint` (uses `next lint`).

Project-specific conventions
- Prefer small, focused components in `src/app/components/*`. Follow the existing wrapper patterns in `ui/` (Radix primitives with local props and `className` merging).
- Use Tailwind utility classes; global styles live in `src/styles/*` (fonts, theme). Avoid adding new global CSS unless necessary.
- When a component needs browser APIs or hooks, mark it as a client component with `"use client"` at top of the file.

Integration points & dependencies
- Radix UI wrappers: see `src/app/components/ui/*` for examples (accordion, dialog, etc.).
- Icons: `lucide-react` (used in components like `About.tsx`).
- Animations: `framer-motion`; toasts: `sonner`; charts: `recharts`.

Editing guidance (examples)
- To add a new UI pattern, mirror `src/app/components/ui/button.tsx` and export from `components/index` if used app-wide.
- To update layout, edit `src/app/layout.tsx` (Next App Router top-level layout).
- Static assets belong in `public/` (images referenced directly from components).

What NOT to change without confirmation
- Major framework swaps (Next.js config) or package versions in `package.json`.
- The shape of top-level `src/app` routes — changing routes affects deployment and CI (`.github/workflows/nextjs.yml`).

Ask the user if unclear
- If you need backend/data contracts, ask where data comes from (no API routes detected in the repo snapshot).

If you modify this file, keep it concise and reference the exact file paths above.
