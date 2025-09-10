import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import node from "@astrojs/node";



// https://astro.build/config
import compress from "astro-compress";


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
      applyBaseStyles: false
  }), sitemap(), prefetch(), react(), compress()],
  experimental: {
    csp: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  adapter: node({
    mode: "standalone"
  })
});
