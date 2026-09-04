// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://northsoon.com",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/work/lab/"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CL",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
