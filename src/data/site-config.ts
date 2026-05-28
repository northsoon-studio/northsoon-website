export const SITE_URL = "https://northsoon.com";
export const CONTACT_EMAIL = "hello@northsoon.com";

export const FOUNDER = {
  name: "Manuel Caballero",
  linkedin: "https://www.linkedin.com/in/by-manuel-caballero/",
};

export const SOCIAL = {
  github: "https://github.com/northsoon-studio",
  linkedin: "https://www.linkedin.com/company/northsoon-studio",
  twitterHandle: "",
};

export const DEFAULT_SEO = {
  title: "Northsoon · Sitios web y automatización simple",
  description:
    "Northsoon ayuda a negocios pequeños a tener una web clara, captar más consultas y automatizar tareas repetitivas sin sistemas innecesarios.",
  ogImage: `${SITE_URL}/social_banner.png`,
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Northsoon",
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  image: DEFAULT_SEO.ogImage,
  description: DEFAULT_SEO.description,
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  founder: {
    "@type": "Person",
    name: FOUNDER.name,
    url: FOUNDER.linkedin,
  },
  knowsAbout: [
    "Sitios web rápidos",
    "Landing pages",
    "Automatización simple",
    "Formularios automatizados",
    "Astro",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Northsoon",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sitios web rápidos",
          description:
            "Sitios web livianos y profesionales para negocios pequeños.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing pages",
          description:
            "Páginas enfocadas en explicar servicios y captar consultas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatizaciones simples",
          description:
            "Formularios, flujos internos y tareas repetitivas conectadas con herramientas existentes.",
        },
      },
    ],
  },
};

export const ADDITIONAL_LINK_TAGS = [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/manifest.webmanifest" },
];

export const ADDITIONAL_META_TAGS = [
  { name: "theme-color", content: "#2139E1" },
  { name: "author", content: "Northsoon" },
];
