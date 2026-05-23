# Northsoon

Source code for [northsoon.com](https://northsoon.com) — the public-facing site of
**Northsoon**, an independent studio building websites that load fast, read clearly, and age well.

The current deployment is a brand-aligned interim site while the full studio site is rebuilt.
The previous version remains preserved on the [`legacy-site`](https://github.com/) branch.

---

## Tech stack

| Layer            | Technology                                             |
| :--------------- | :----------------------------------------------------- |
| Framework        | [Astro 6](https://astro.build) (static)                |
| Styling          | [Tailwind CSS v4](https://tailwindcss.com)             |
| Typography       | Geist · Inter · Geist Mono (variable, via Fontsource)  |
| SEO              | [`@northsoon/astro-seo`](https://www.npmjs.com/package/@northsoon/astro-seo) |
| Icons            | [`@northsoon/phosphor-icons-astro`](https://www.npmjs.com/package/@northsoon/phosphor-icons-astro) |
| Image processing | [Sharp](https://sharp.pixelplumbing.com)               |
| Package manager  | [Bun](https://bun.com)                                 |
| Hosting          | [Vercel](https://vercel.com) (static, with Speed Insights + Analytics) |

---

## Project structure

```text
northsoon-web/
├── public/                       # Static runtime assets (favicons, manifest, OG banner)
├── src/
│   ├── assets/
│   │   └── brand/                # Brand source files (gitignored — see "Brand assets" below)
│   ├── components/
│   │   ├── BackLink.astro        # Reusable "← Back" link
│   │   ├── BaseHead.astro        # <head> wrapper using @northsoon/astro-seo
│   │   ├── Logo.astro            # Inline brand mark (mountain)
│   │   ├── SiteFooter.astro      # Centered footer with copyright + LinkedIn link
│   │   └── SiteNav.astro         # Top nav: logo, About link, theme toggle
│   ├── data/
│   │   ├── packages.ts           # Open-source packages listed on /work/tooling
│   │   ├── projects.ts           # Items rendered in "On the bench" on home
│   │   └── site-config.ts        # Site URL, SEO defaults, founder, contact, JSON-LD, etc.
│   ├── layouts/
│   │   └── BaseLayout.astro      # HTML shell + analytics + speed insights
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # /about
│   │   ├── 404.astro             # Custom not-found
│   │   └── work/                 # /work/* internal project pages
│   │       ├── maos.astro
│   │       ├── studio-site.astro
│   │       └── tooling.astro
│   └── styles/
│       └── global.css            # Tailwind directives, design tokens, scrollbar styling
├── astro.config.mjs              # Astro config with Tailwind + sitemap
├── vercel.json                   # Security headers
├── package.json
└── tsconfig.json                 # Path alias: @/* → src/*
```

---

## Getting started

### Prerequisites

- [Bun](https://bun.com) ≥ 1.3

### Install

```sh
bun install
```

### Develop

```sh
bun run dev
```

Local server at `http://localhost:4321` with hot reload.

### Build

```sh
bun run build
```

Static output to `./dist/`.

### Preview production build

```sh
bun run preview
```

---

## Available commands

| Command            | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| `bun run dev`      | Start dev server at `localhost:4321`                         |
| `bun run build`    | Build to `./dist/`                                           |
| `bun run preview`  | Preview production build locally                             |
| `bun run astro`    | Run any Astro CLI command (e.g. `bun run astro check`)       |

---

## Brand assets

The brand source files (`logo.svg`, `logo-mark.svg`, brand docs) live in `src/assets/brand/`
and are **gitignored**. They are the canonical reference for the visual identity but are
not required at runtime — `Logo.astro` defines the mark inline as SVG, and all favicons
in `public/` are already committed.

---

## Deployment

Pushes to `main` auto-deploy to Vercel. The `legacy-site` branch preserves the previous
Northsoon site and is intended for a separate Vercel project serving `old.northsoon.com`.

---

## License

[MIT](LICENSE) © Northsoon
