# PhiLab-AISPortal

This repository hosts the static web front-end for **PhiLab-AISPortal**: a lightweight public
landing site for ESA Φ-lab’s AIS data platform.

The site presents the AISHub mission, key capabilities, and a direct path to the deployed AIS web app
on Hugging Face.

## Contents

- `docs/index.html`  
  Main page structure and content.
- `docs/assets/css/styles.css`  
  Styling and responsive layout for the portal.
- `docs/assets/js/main.js`  
  Small page behavior (smooth scrolling, active section highlighting, year auto-update).
- `docs/package.json`  
  Package metadata placeholder for this static site.
- `docs/assets/img/` and `docs/src/`  
  Project logos and branding assets.

## Features

- Single-page responsive layout with:
  - Sticky header and in-page navigation.
  - Mission/capability/use-case sections.
  - Static global coverage map section with legend and descriptive text.
- Accessibility-minded markup:
  - Semantic sections and landmarks.
  - Skip link.
  - Keyboard-focus-visible styles.
- Vanilla front-end stack (no frameworks required).

## Prerequisites

- A terminal with any static file server available.
- Optional: Node.js if you want to use npm-based tooling for local serving.

## Run locally

From the repository root:

```sh
cd docs
python -m http.server 5173
```

Then open:

- http://localhost:5173/index.html

You can also use any static-server equivalent:

```sh
npx serve docs
```

## Customize and contribute

1. Edit `docs/index.html` for content and structure.
2. Tune styles in `docs/assets/css/styles.css`.
3. Update interaction behavior in `docs/assets/js/main.js`.
4. Keep any external links up to date (Hugging Face app, contact, branding links).

### Common tweaks

- Update section copy in `docs/index.html`.
- Add/remove cards in the “Core capabilities” grid.
- Update map markers in `docs/index.html` (`<svg class="world-overlay">` circles).
- Replace placeholder contact details if needed (currently `contact@philaishub.example`).

## Deployment

This is a static site and can be deployed to any static hosting provider
(GitHub Pages, Netlify, Vercel, S3 + CloudFront, etc.) by serving the `docs/` directory.

## Notes

- No build step is required for the current implementation.
- No automated tests or CI pipeline are configured in this repository.

## About the project

The page describes AISHub as a structured AIS platform for daily global vessel movement data.
The live/interactive app is linked directly from the portal.

