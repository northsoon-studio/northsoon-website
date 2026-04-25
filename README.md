# Northsoon — Agency Website

Corporate website for **Northsoon**, a web development agency. Built for performance, scalability, and clean presentation.

---

## Tech Stack

| Layer              | Technology                                   |
| :----------------- | :------------------------------------------- |
| Framework          | [Astro 5](https://astro.build)               |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com)   |
| Fonts              | Bricolage Grotesque · Inter Tight (variable) |
| Image optimization | Sharp                                        |
| Package manager    | [pnpm](https://pnpm.io)                      |

---

## Project Structure

```text
northsoon-website/
├── public/                   # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/               # Processed assets (imported in components)
│   ├── components/
│   │   ├── global/
│   │   │   ├── Navigation.astro
│   │   │   └── Footer.astro
│   │   └── landing/
│   │       ├── Hero.astro
│   │       ├── Banner.astro
│   │       ├── About.astro
│   │       ├── Services.astro
│   │       ├── Work.astro
│   │       ├── Testimonials.astro
│   │       └── Cta.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  # Root HTML shell + BaseHead
│   ├── pages/
│   │   └── index.astro       # Landing page
│   └── styles/
│       └── global.css        # Tailwind directives & base styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9

### Install dependencies

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

Opens a local dev server at `http://localhost:4321` with hot-reload.

### Production build

```sh
pnpm build
```

Outputs a fully static site to `./dist/`.

### Preview production build locally

```sh
pnpm preview
```

---

## Available Commands

| Command                        | Description                          |
| :----------------------------- | :----------------------------------- |
| `pnpm dev`                     | Start dev server at `localhost:4321` |
| `pnpm build`                   | Build for production to `./dist/`    |
| `pnpm preview`                 | Preview the production build locally |
| `pnpm astro check`             | Type-check all `.astro` files        |
| `pnpm astro add <integration>` | Add an official Astro integration    |

---

## License

[MIT](LICENSE) © Northsoon
