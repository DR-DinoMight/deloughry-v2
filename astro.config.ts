import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";


// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

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
  }), sitemap(), prefetch(), react(), compress()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  adapter: vercel()
});
