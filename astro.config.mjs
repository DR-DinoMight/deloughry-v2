import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config;
import auth from "auth-astro"

// https://astro.build/config
export default defineConfig({
  site: "https://deloughry.co.uk",
  markdown: {
    shikiConfig: {
      theme: "poimandres",
      wrap: false
    }
  },
  output: "server",
  integrations: [mdx({}), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }),
  sitemap(),
  prefetch(),
  react(),
  auth({
    configFile: "auth.config.ts",
    injectEndpoints: false
  }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  adapter: netlify()
});
