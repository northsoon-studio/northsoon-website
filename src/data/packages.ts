export type Package = {
  name: string;
  version: string;
  desc: string;
  desc_es: string;
  npm: string;
  github: string;
};

export const PACKAGES: Package[] = [
  {
    name: "@northsoon/astro-seo",
    version: "v3",
    desc: "Drop-in component for full SEO meta tags and JSON-LD across an Astro site. Fully typed, zero runtime.",
    desc_es: "Componente para SEO completo con JSON-LD en Astro. Tipado, sin JavaScript en el cliente.",
    npm: "https://www.npmjs.com/package/@northsoon/astro-seo",
    github: "https://github.com/northsoon-studio/astro-seo",
  },
  {
    name: "@northsoon/phosphor-icons-astro",
    version: "v1",
    desc: "Phosphor icons (1500+, six weights) as fully-typed Astro components. Zero client JavaScript.",
    desc_es: "Iconos Phosphor (1500+, seis pesos) como componentes Astro tipados. Sin JavaScript en el cliente.",
    npm: "https://www.npmjs.com/package/@northsoon/phosphor-icons-astro",
    github: "https://github.com/northsoon-studio/phosphor-icons-astro",
  },
];
