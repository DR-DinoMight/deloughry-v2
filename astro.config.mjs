import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tigris from "@tigrisdata/astro";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	site: "https://deloughry.co.uk",
	markdown: {
		shikiConfig: {
			theme: "poimandres",
			wrap: false,
		},
	},
	output: "server",
	integrations: [
		mdx({}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		prefetch(),
		react(),
		tigris({
			branch: import.meta.env.TIGRIS_DB_BRANCH,
			projectName: import.meta.env.TIGRIS_PROJECT,
			clientId: import.meta.env.TIGRIS_CLIENT_ID,
			clientSecret: import.meta.env.TIGRIS_CLIENT_SECRET,
		}),
	],
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	adapter: netlify(),
});
