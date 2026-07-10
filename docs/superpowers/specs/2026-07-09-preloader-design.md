# Branded Splash Preloader — Design

## Purpose

Show a brief, branded loading moment on a fresh page load (hard navigation or reload), giving the site a more polished first impression before content is revealed. Should not reappear on internal client-side navigation between pages.

## Component

- `src/components/Preloader.tsx` + `src/components/Preloader.module.css`
- Rendered once in `src/app/layout.tsx`, as the first child inside `<body>`, before `{children}`.
- Server Component — no client-side JavaScript or hydration required. Because the Next.js App Router keeps the root layout mounted across internal `<Link>` navigation (only page content swaps), placing the preloader here means it naturally renders only on a genuine fresh load/reload, never on in-app navigation — with zero extra logic needed to suppress it.

## Visual design

- Fixed, full-viewport overlay: `position: fixed; inset: 0; z-index: 9999`.
- Background: `var(--color-linen)` — matches the page background, so there's no color flash when it fades away.
- Centered content, in a flex column:
  - Wordmark "Vitality Source" — `font-family: var(--font-display)`, `font-weight: 500`, sized larger than the nav logo (e.g. `var(--text-h2)`), `color: var(--color-walnut)`.
  - A thin terracotta bar below the wordmark (`width: 40px; height: 2px; background: var(--color-terracotta)`), matching the existing `.rule` divider style used in `Services.module.css`. This bar pulses gently (subtle opacity/scale animation) to signal activity, rather than sitting static.
- `aria-hidden="true"` on the overlay — it's decorative; the real page content is already present underneath in the markup.

## Dismiss mechanics — pure CSS, no JavaScript

A single `@keyframes` animation on the overlay:
1. Holds fully visible (`opacity: 1`) for ~700ms.
2. Fades to `opacity: 0` over ~400ms (total ~1100ms).
3. `pointer-events: none` is set at the same keyframe stop where opacity reaches 0, so the overlay stops intercepting clicks/taps the moment it's invisible — no separate timer or JS needed to "unblock" the page.
4. `animation-fill-mode: forwards` keeps the final (hidden, non-interactive) state after the animation completes.

The terracotta bar's pulse is a separate, independent `@keyframes` (e.g. animating `opacity` between 0.4 and 1, or a subtle `scaleX`), looping only for the ~700ms hold period — it doesn't need to be manually stopped since the whole overlay fades out and becomes non-interactive/invisible right after.

### Reduced motion

Wrapped in `@media (prefers-reduced-motion: reduce)`: the pulse animation is disabled (bar renders static), and the overlay uses a simple, shorter opacity fade instead of the full timed sequence — respects user preference without losing the dismiss behavior.

## Non-goals

- Not tied to actual asset/font/image load completion — fixed duration only, per user's explicit choice (simpler, no risk of hanging on a slow resource, no fallback-timeout logic needed).
- Not shown on internal page-to-page navigation (Home → Pricing, etc.) — only on a fresh document load.
- No JavaScript, no client component, no external dependencies.

## Testing / verification

- `npm run build` succeeds under static export (`output: 'export'`) with no new client-side JS bundle added for this component.
- Manual check in a browser: hard-reload each of the 5 pages (`/`, `/about`, `/colonic-hydrotherapy`, `/lymphatic-drainage`, `/pricing`) and confirm the splash appears once, fades out cleanly, and the page underneath is fully interactive afterward (no leftover click-blocking).
- Click an internal nav link after the splash has faded — confirm the splash does *not* reappear (layout stays mounted, only page content swaps).
- Toggle OS-level "reduce motion" and confirm the pulse animation is disabled and the fade still works.
