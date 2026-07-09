# Vitality Source — Claude Code Configuration

You are building the Vitality Source website for Web World.
This is a Next.js 16 site (App Router, TypeScript, CSS Modules) for Annette Agbontaen — a certified solo colon hydrotherapy and lymphatic drainage practitioner in Barrie, Ontario.

Client site: vitalitysource.com

## Source Documents (read before touching any component)

- Visual Design Spec: `C:\Users\HP\Downloads\vitality Docs\Vitality_Source_Visual_Design_Spec.md`
- Website Copy (all pages): `C:\Users\HP\Downloads\vitality Docs\Vitality_Source_Website_Copy_All_Pages.docx`
- Website Strategy / Wireframe: `C:\Users\HP\Downloads\vitality Docs\Vitality_Source_Website_Strategy_Wireframe.docx`

## Rules — internalize before writing a single line

- Page background is `#F0E6D8` (`--color-linen`). Never use white.
- Fonts are Cormorant Garamond (`--font-display`) and DM Sans (`--font-body`). No substitutions.
- All buttons have `border-radius: 2px`. Not rounded. Not pill.
- No drop shadows anywhere. Borders only (`1px solid var(--color-border)`).
- No gradients anywhere — not on heroes, buttons, or section backgrounds.
- Terracotta (`--color-terracotta`) is for CTAs and one accent per section maximum.
- H1 and H2 always use `--font-display`. H3 and below use `--font-body`.
- Maximum font weight anywhere: 500. No bold (700+).
- All spacing uses tokens from `src/styles/tokens.css`. Never hardcode px values.
- All hex values live in `tokens.css` only. If you write a hex anywhere else, stop.
- No dark mode. Light mode only.
- Primary button: terracotta background (#B5765A), 
  ivory text (#FBF8F3), border-radius: 2px.
- Secondary button: sage ghost border (#7C8B6F), 
  fills sage on hover, ivory text.

## Stack

- Next.js 16, App Router, TypeScript
- CSS Modules (co-located with components in `src/components/`)
- Global tokens: `src/styles/tokens.css`
- Global base styles + button classes: `src/app/globals.css`
- Fonts loaded via `next/font/google` in `src/app/layout.tsx`

## Project structure

```
src/
  styles/tokens.css          ← ALL color, type, spacing tokens
  app/
    globals.css              ← reset, base styles, .container, .section, .eyebrow, .btn-primary, .btn-secondary
    layout.tsx               ← fonts, metadata
    page.tsx                 ← Home page
  components/
    Nav.tsx / Nav.module.css
    Hero.tsx / Hero.module.css
    TrustStrip.tsx / TrustStrip.module.css
    Services.tsx / Services.module.css
    MeetAnnette.tsx / MeetAnnette.module.css
    PricingPreview.tsx / PricingPreview.module.css
    Reviews.tsx / Reviews.module.css
    FAQ.tsx / FAQ.module.css
    BookingCTA.tsx / BookingCTA.module.css
    Footer.tsx / Footer.module.css
	ImagePlaceholder.tsx
```

## Square booking link

`https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ`

## Outstanding items before launch

- [ ] Photos from Annette (treatment room, waiting area, Annette portrait)
- [x] Business hours — Tuesday–Saturday, 10:00 AM–6:00 PM (confirmed; already correct in Footer.tsx and pricing/page.tsx)
- [x] Phone number — 416-909-9320 (updated in Footer.tsx and pricing/page.tsx)
- [x] Email address — info@thevitalitysource.ca (updated in Footer.tsx and pricing/page.tsx)
- [x] Full business address — 5 Bradford St., Barrie, ON L4N 3B7 (updated in Footer.tsx and pricing/page.tsx)
- [x] Certification body name — The Canadian School of Colon Hydrotherapy (updated in about/page.tsx)
- [ ] Google Business Profile reviews (3–5 for Reviews section)
- [ ] Lymphatic drainage pricing confirmation
- [ ] Pricing ladder conversation (see copy doc internal notes on pricing page)
- [ ] Confirm Square booking widget and package flows
- [ ] Confirm Instagram and Facebook profile URLs
- [ ] Confirm vitalitysource.com domain is secured
