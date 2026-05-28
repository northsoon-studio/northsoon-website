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
    desc_es: "Componente listo para usar que incluye todas las meta tags de SEO y JSON-LD en un sitio Astro. Tipado completo, sin JavaScript en el cliente.",
    npm: "https://www.npmjs.com/package/@northsoon/astro-seo",
    github: "https://github.com/northsoon-studio/astro-seo",
  },
  {
    name: "@northsoon/phosphor-icons-astro",
    version: "v1",
    desc: "Phosphor icons (1500+, six weights) as fully-typed Astro components. Zero client JavaScript.",
    desc_es: "Los iconos de Phosphor (1500+, seis pesos visuales) como componentes de Astro completamente tipados. Sin JavaScript en el cliente.",
    npm: "https://www.npmjs.com/package/@northsoon/phosphor-icons-astro",
    github: "https://github.com/northsoon-studio/phosphor-icons-astro",
  },
];
