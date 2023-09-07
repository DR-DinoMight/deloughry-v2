import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config

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
  }), sitemap(), prefetch(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  adapter: netlify({
    builders: true,
    // edgeMiddleware: true,
  })
});
