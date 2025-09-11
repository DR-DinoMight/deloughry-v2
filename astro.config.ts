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
  security: {
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://umami-ss8o8so.loki.m4p.uk",
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.bunny.net"],
        "style-src-elem": ["'self'", "'unsafe-inline'", "https://fonts.bunny.net"],
        "font-src": ["'self'", "https://fonts.bunny.net", "data:"],
        "img-src": ["'self'", "data:", "blob:", "https:"],
        "connect-src": [
          "'self'",
          "https://umami-ss8o8so.loki.m4p.uk",
        ],
        "media-src": ["'self'", "https:"],
        "object-src": ["'none'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"]
      }
    }
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
