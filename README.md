# Blueprint Shirdi — Frontend Internship Assignment

## Overview

A premium single-page marketing website for **Blueprint Shirdi**, a private collection of Balinese-inspired villas in Shirdi Central. This is an original Next.js recreation inspired by the provided reference website — all copy, layout code, and styles were written from scratch for this assignment. No source code from the original site was copied.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- CSS Modules
- Lucide React
- Swiper

## Features

- Fully responsive landing page (375px / 768px / 1280px / 1440–1600px)
- Sticky transparent-to-solid header with mobile menu (Escape to close, scroll lock)
- Cinematic hero with scroll cue and invitation CTAs
- Editorial collection, destination, investment, and ownership sections
- Video modal with Escape/backdrop close and missing-file fallback
- Responsive hotel-vs-villa comparison (stacked blocks on mobile, no horizontal scroll)
- 8-step ownership journey timeline (4×2 desktop, vertical mobile)
- Balinese retreat dark feature, 10-item amenities index, immersive gallery slider
- Promise, developer, and illustrative testimonial slider
- Location, invitation CTA, single-open FAQ accordion, validated enquiry form, footer

## Project Structure

```
src/app            — layout, globals, page composition
src/components     — one folder per section (component + CSS Module)
src/data           — typed content arrays (stats, services, comparison, steps, amenities, gallery, testimonials, faq)
public/images      — final local asset targets (see Placeholder Media)
public/videos      — project film target (blueprint-film.mp4)
```

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

No environment variables are currently required.

## Placeholder Media

Demonstration imagery is currently loaded from remote Unsplash placeholders and should be replaced with final project assets before launch:

- `public/images/hero/villa-dusk.jpg` — hero background
- `public/images/collection/collection-villa.jpg` — collection feature
- `public/images/film/film-poster.jpg` — film poster
- `public/videos/blueprint-film.mp4` — project film (modal shows a styled fallback until present)
- `public/images/shirdi/shirdi-legacy.jpg` — Shirdi legacy feature
- `public/images/investment/investment-villa.jpg` — investment feature
- `public/images/villas/villa-ownership.jpg` — villa ownership feature
- `public/images/hospitality/managed-hospitality.jpg` — hospitality feature
- `public/images/retreat/balinese-retreat.jpg` — retreat feature
- `public/images/amenities/*.jpg` — 10 files: tropical-landscape, infinity-pool, private-forest, nature-trail, yoga-pilates, meditation, fitness, spiritual-library, orchard, amphitheatre
- `public/images/gallery/*.jpg` — 7 files: villa-exterior-dusk, pool-midday, courtyard-pavilion, interior-living, bedroom-morning, villa-facade-garden, nature-trail-forest
- `public/images/promise/project-promise.jpg` — promise cinematic
- `public/images/developer/developer.jpg` — developer feature
- `public/images/location/location-map.jpg` — location visual
- `public/images/cta/invitation-cta.jpg` — invitation CTA background

Testimonial entries in `src/data/testimonials.ts` are illustrative demo content and must be replaced with verified owner words before presenting them as genuine reviews. Connectivity times in the Location section are indicative placeholders.

## Improvements Over Reference

1. **Better mobile navigation** — full-screen staggered menu with large touch targets, visible enquiry CTA, body scroll-lock, and Escape-to-close instead of a cramped dropdown.
2. **Better responsive gallery experience** — touch/mouse/keyboard Swiper with next-slide peek and live counter that reflows cleanly at every breakpoint instead of a fixed desktop carousel.
3. **Better accessible enquiry form validation** — semantic labels, inline `aria-describedby` errors, `aria-invalid` states, and a `role="status"` success message instead of placeholder-only inputs.

## Notes

- Frontend-only assignment; no backend is integrated.
- The enquiry form uses client-side validation only and shows a local success state — no server submission is implemented.
- All content and images can be swapped for production assets without changing the layout system.
