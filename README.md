# Northsoon

Source code for [northsoon.com](https://northsoon.com) — an independent web design studio
focused on marketing sites, landing pages, and conversion-focused websites that load fast,
read clearly, and age well.

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

## Deployment

Pushes to `main` auto-deploy to Vercel.

---

## License

[MIT](LICENSE) © Northsoon
