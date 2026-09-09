# Best Enough Driving School — Website

A React + Vite + Tailwind CSS + Framer Motion marketing site for Best Enough
Driving School (Mmabatho & Mafikeng, North West).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  assets/photos/   real client & team photographs supplied by the client
  components/      one file per section (Hero, Pricing, Booking, FAQ, ...)
  data/            business.js — single source of truth for pricing,
                   locations, services, FAQ copy. Edit this file to update
                   any factual content on the site.
  utils/           whatsapp.js — builds wa.me deep links
  App.jsx          assembles all sections in order
  index.css        design tokens (colors, fonts) + global styles
```

## Editing content

Almost everything factual (pricing, packages, locations, phone/WhatsApp
number, FAQ answers) lives in **`src/data/business.js`**. Change a number or
line of text there and it updates everywhere it's used across the site.

## Things intentionally left as placeholders

The source flyer did not include some information, so per the project brief
these were **not invented** and are marked clearly in the UI for the client
to fill in later:

- **Testimonials** — placeholder cards say "Student testimonial to be added
  by Best Enough Driving School." Replace the copy in
  `src/components/Testimonials.jsx` once real reviews are supplied.
- **Team names & roles** — the "Meet the Team" section uses the supplied
  photo but does not assign names/titles, since these weren't confirmed.
  Update `src/components/TeamSection.jsx` once confirmed.
- **Package guarantee terms** — the flyer references "Guaranteed pass for
  Package." The site notes this exists and points people to ask the team
  directly, rather than advertising an unconditional guarantee. Update
  `packageGuaranteeNote` in `src/data/business.js` once official terms are
  defined.

## Logo

The client's existing logo was only available as a photograph of a printed
flyer, which isn't sharp enough for web use. `src/components/Logo.jsx`
recreates it as a clean, scalable SVG (`LogoMark`) that preserves the
original identity — red triangle, black aero wings, red sports car — and
works on both light and dark backgrounds. If the client later supplies a
vector version of their logo, drop it in and swap out `LogoMark`.

## Tech

React 19, Vite, Tailwind CSS v4 (via `@tailwindcss/vite`), Framer Motion,
Lucide icons. No backend — the booking form and service finder both open a
pre-filled WhatsApp conversation (+27 78 281 6263) rather than simulating
real-time availability.
