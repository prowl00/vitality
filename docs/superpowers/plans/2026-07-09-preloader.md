# Branded Splash Preloader Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a brief, branded splash overlay that appears once on a fresh page load (or hard reload) and fades away on its own, without adding any client-side JavaScript.

**Architecture:** A single Server Component (`Preloader.tsx`) rendered as the first child inside `<body>` in the root layout, styled entirely by a CSS Module that drives the show/hold/fade sequence via `@keyframes` — no state, no props, no hooks, no client component.

**Tech Stack:** Next.js 16 App Router, CSS Modules, existing design tokens in `src/styles/tokens.css`. No new dependencies.

## Global Constraints

- No JavaScript / client component for the dismiss logic — pure CSS animation only (per spec's Non-goals).
- Background must be `var(--color-linen)` — matches page background, no color flash (per spec's Visual design).
- Wordmark uses `var(--font-display)`, `font-weight: 500`, `color: var(--color-walnut)` (per spec's Visual design — matches existing `.logo` style in `Nav.module.css`).
- Terracotta bar matches the existing `.rule` divider convention (`width: 40px; height: 2px; background-color: var(--color-sage)` in `Services.module.css`, but using `var(--color-terracotta)` per spec).
- Hold ~700ms, fade ~400ms, total ~1100ms (per spec's Dismiss mechanics) — fixed duration, not tied to asset load completion.
- `pointer-events: none` must land at the same point opacity reaches 0, so the overlay never blocks clicks after it's invisible (per spec's Dismiss mechanics, step 3).
- `@media (prefers-reduced-motion: reduce)` must disable the pulse and shorten to a plain fade (per spec's Reduced motion section).
- No hex values outside `tokens.css` — use CSS custom properties throughout (per project CLAUDE.md rule).
- This project has no test runner configured (no jest/vitest in `package.json`) — verification uses `npm run build` plus manual browser checks, not unit tests. Introducing a test framework is out of scope for this feature.

---

### Task 1: Create the Preloader component and its styles

**Files:**
- Create: `src/components/Preloader.tsx`
- Create: `src/components/Preloader.module.css`

**Interfaces:**
- Produces: `export default function Preloader()` — a zero-prop Server Component, consumed by Task 2 as `<Preloader />`.

- [ ] **Step 1: Create the CSS Module**

Create `src/components/Preloader.module.css`:

```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-linen);
  animation: fadeOut 1100ms ease forwards;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-h2);
  color: var(--color-walnut);
  letter-spacing: -0.01em;
  margin: 0;
}

.bar {
  width: 40px;
  height: 2px;
  background-color: var(--color-terracotta);
  animation: pulse 700ms ease-in-out infinite;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  64% { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .overlay {
    animation: fadeOutReduced 500ms ease forwards;
  }

  .bar {
    animation: none;
    opacity: 1;
  }
}

@keyframes fadeOutReduced {
  0% { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}
```

- [ ] **Step 2: Create the component**

Create `src/components/Preloader.tsx`:

```tsx
import styles from './Preloader.module.css';

export default function Preloader() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      <div className={styles.content}>
        <p className={styles.wordmark}>Vitality Source</p>
        <div className={styles.bar} />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify it compiles in isolation**

Run: `cd C:\webdev\projects\vitality && npx tsc --noEmit`
Expected: no output (no type errors).

- [ ] **Step 4: Commit**

```bash
git add src/components/Preloader.tsx src/components/Preloader.module.css
git commit -m "Add branded splash Preloader component"
```

---

### Task 2: Wire the Preloader into the root layout

**Files:**
- Modify: `src/app/layout.tsx:1-34`

**Interfaces:**
- Consumes: `Preloader` (default export, zero props) from Task 1 — `src/components/Preloader.tsx`.

Current relevant content of `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
```

and:

```tsx
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 1: Add the import**

In `src/app/layout.tsx`, change:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
```

to:

```tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Preloader from '@/components/Preloader';
import './globals.css';
```

- [ ] **Step 2: Render Preloader before children**

In the same file, change:

```tsx
      <body>{children}</body>
```

to:

```tsx
      <body>
        <Preloader />
        {children}
      </body>
```

- [ ] **Step 3: Verify the full site still builds under static export**

Run: `cd C:\webdev\projects\vitality && npm run build`
Expected: build succeeds, ends with the same 5-route table as before (`/`, `/about`, `/colonic-hydrotherapy`, `/lymphatic-drainage`, `/pricing`) all marked `○ (Static)`.

- [ ] **Step 4: Confirm the preloader markup is present in every page's static output**

Run: `cd C:\webdev\projects\vitality && grep -l "Vitality Source</p>" out/index.html out/about.html out/colonic-hydrotherapy.html out/lymphatic-drainage.html out/pricing.html`
Expected: all 5 file paths printed (the wordmark string appears once per page — note the homepage also has "Vitality Source" as the footer logo text and nav logo, so this grep will still match there via the preloader's own instance; the important confirmation is that the command lists all 5 files without error).

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Render Preloader in root layout"
```

---

### Task 3: Manual verification and deploy

**Files:** none (verification only)

- [ ] **Step 1: Local smoke test**

Run: `cd C:\webdev\projects\vitality && npm run dev`

In a browser, hard-reload (Ctrl+Shift+R) each of:
- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/colonic-hydrotherapy`
- `http://localhost:3000/lymphatic-drainage`
- `http://localhost:3000/pricing`

Confirm for each: the linen-background splash with the "Vitality Source" wordmark and pulsing terracotta bar appears briefly, then fades to reveal the real page; the page is fully clickable/scrollable immediately after the fade (no invisible overlay blocking input).

- [ ] **Step 2: Confirm it does NOT reappear on internal navigation**

From the homepage, click a nav link (e.g. "Pricing"). Confirm the splash does **not** appear again — only the page content changes.

- [ ] **Step 3: Reduced-motion check**

Enable "reduce motion" at the OS level (Windows: Settings → Accessibility → Visual effects → Animation effects, off). Hard-reload a page and confirm: the terracotta bar is static (no pulsing) and the overlay fades out over a shorter, simple transition.

- [ ] **Step 4: Push and deploy**

```bash
cd C:\webdev\projects\vitality
git push
```

Then redeploy the server (same manual redeploy sequence used throughout this project):

```bash
ssh root@74.208.36.112 "cd /var/www/vhosts/thevitalitysource.ca/vitality && git pull origin main && npm run build && rsync -a --delete out/ /var/www/vhosts/thevitalitysource.ca/httpdocs/ && chown -R thevitalitysource.ca_fk0afovg7tj:psaserv /var/www/vhosts/thevitalitysource.ca/httpdocs && echo DEPLOY_OK"
```

Expected: `DEPLOY_OK` printed at the end.

- [ ] **Step 5: Live verification**

Run: `curl -s -o /dev/null -w "%{http_code}\n" https://thevitalitysource.ca/`
Expected: `200`

Then hard-reload `https://thevitalitysource.ca/` in a real browser and confirm the splash behaves the same as in local dev (Step 1).
