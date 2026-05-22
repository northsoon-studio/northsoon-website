/**
 * Site-wide configuration. All hardcoded site metadata, SEO defaults,
 * contact info, and head-level config live here.
 *
 * Consumers: components/BaseHead, SiteFooter, page-level layouts.
 */

export const SITE_URL = "https://northsoon.com";
export const CONTACT_EMAIL = "manuel@northsoon.com";

export const FOUNDER = {
  name: "Manuel Caballero",
  linkedin: "https://www.linkedin.com/in/by-manuel-caballero/",
};

export const SOCIAL = {
  twitterHandle: "@northsoon_dev",
};

export const DEFAULT_SEO = {
  title: "Northsoon — Independent web design studio",
  description:
    "Small independent studio building websites that load fast, read clearly, and age well.",
  ogImage: `${SITE_URL}/social_banner.png`,
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Northsoon",
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  areaServed: "Worldwide",
};

export const ADDITIONAL_LINK_TAGS = [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/manifest.webmanifest" },
];

export const ADDITIONAL_META_TAGS = [
  { name: "theme-color", content: "#2139E1" },
  { name: "author", content: "Northsoon" },
];
