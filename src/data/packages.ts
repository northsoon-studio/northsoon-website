export type Package = {
  name: string;
  version: string;
  desc: string;
  npm: string;
  github: string;
};

export const PACKAGES: Package[] = [
  {
    name: "@northsoon/astro-seo",
    version: "v3",
    desc: "Drop-in component for full SEO meta tags and JSON-LD across an Astro site. Fully typed, zero runtime.",
    npm: "https://www.npmjs.com/package/@northsoon/astro-seo",
    github: "https://github.com/northsoon-studio/astro-seo",
  },
  {
    name: "@northsoon/phosphor-icons-astro",
    version: "v1",
    desc: "Phosphor icons (1500+, six weights) as fully-typed Astro components. Zero client JavaScript.",
    npm: "https://www.npmjs.com/package/@northsoon/phosphor-icons-astro",
    github: "https://github.com/northsoon-studio/phosphor-icons-astro",
  },
];
