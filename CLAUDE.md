# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
```

No linter or test suite is configured.

## Architecture

Static marketing website for **GHAutotech**, an auto repair shop in Vila-seca (Tarragona, Spain). Built with **Astro 6** and **Tailwind CSS v4**.

### Page routing

Each file in `src/pages/` maps directly to a URL route (Astro file-based routing). Pages are purely `.astro` — no framework components (React/Vue/etc.) are used.

### Layout system

`src/layouts/Layout.astro` is the single shared layout. It accepts `title` and `description` props and handles:
- All `<head>` SEO metadata (Open Graph, Twitter Card, canonical URL)
- Schema.org structured data injected globally: `AutoRepair` (LocalBusiness) + `BreadcrumbList` on every page
- Lazy-loading of `<video class="lazy-video">` elements via IntersectionObserver (inline `<script>` in the layout body)

Pages compose `<Header>`, `<Footer>`, and section components inside the layout's `<slot />`.

### Styling conventions

- **Tailwind CSS v4** loaded via Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.*` file; configuration is done through CSS.
- `src/styles/global.css` defines CSS custom properties (brand colors, font, layout vars) and the `.site-container` utility class used for max-width + responsive padding across all sections.
- Brand primary color: `#e8003e` (red). Dark palette uses `#000`, `#1a1a1a`, `#2d2d2d`, `#484848`, `#696969`.
- Font: **Public Sans** (Google Fonts, loaded in `global.css`).
- Headings are `font-weight: 900; text-transform: uppercase` by default via global CSS.

### Static assets

All assets live in `public/assets/` and are referenced with absolute paths (e.g. `/assets/images/...`). Sub-directories: `brand/`, `gifs/`, `icons/`, `iconos-servicio/`, `images/`, `videos/`.

### SEO

The site targets local SEO for "taller mecánico Vila-seca / Tarragona". The `Layout.astro` injects a comprehensive LocalBusiness schema on every page. The `@astrojs/sitemap` integration generates a sitemap automatically on build. Canonical URLs are computed from `Astro.site` (`https://ghautotech.com`) to prevent duplicate-content issues.

### Design reference

The visual design is in Figma (VARIS project). Access via MCP is currently blocked (Starter plan, wrong team). Manual export workflow is documented in `docs/FIGMA-DISEÑO-VARIS.md`.
