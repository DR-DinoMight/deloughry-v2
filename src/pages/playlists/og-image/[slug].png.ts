import type { APIContext, GetStaticPathsResult } from "astro";
import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";
import siteConfig from "@/site-config";
import { getFormattedDate } from "@/utils";
import { getPlaylistfromDB, getPlaylistsfromDB } from "@/data/models/playlist";
import { Resvg } from "@resvg/resvg-js";
import { JSDOM } from 'jsdom';

export const prerender = true;
const monoFontReg = await fetch(
	"https://api.fontsource.org/v1/fonts/jetbrains-mono/latin-400-normal.ttf"
);

const monoFontBold = await fetch(
	"https://api.fontsource.org/v1/fonts/jetbrains-mono/latin-800-normal.ttf"
);

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	embedFont: true,
	fonts: [
		{
			name: "JetBrains Mono",
			data: await monoFontReg.arrayBuffer(),
			weight: 400,
			style: "normal",
		},
		{
			name: "JetBrains Mono",
			data: await monoFontBold.arrayBuffer(),
			weight: 700,
			style: "normal",
		},
	],
};

const markup = (title: string, description: string, artwork?: string) => html`<div
	tw="flex flex-col w-full h-full bg-[#191919] text-[#e5e7eb]"
  style="background-image: url('${artwork}') opacity: 0.3; background-size: cover; background-position: center; backdrop-filter: blur(10px);)"
>
	<div tw="flex items-center justify-between w-full p-10 flex-grow">
		<img src="${artwork}" height="300px" width="300px" tw="rounded-xl" />
		<div tw="flex flex-col pl-8 w-full">
			<h1 tw="text-6xl font-bold leading-snug text-white flex-wrap w-2/3" >${title.replaceAll("&", "and")}</h1>
			<p tw="ml-3 text-xl font-semibold text-[#00f701]">${description}</p>
		</div>
	</div>
	<div tw="flex items-center justify-between w-full p-10 border-t border-[#00f701] text-xl">
		<div tw="flex items-center">
			<img
				src="https://res.cloudinary.com/dr-dinomight/image/upload/v1676719004/192x192_hdl78r.png"
				height="60px"
				width="60px"
			/>
			<p tw="ml-3 font-semibold">${siteConfig.title.replaceAll("&amp;", "&")}</p>
		</div>
		<p class="font-bold leading-snug text-[#00f701]">by ${siteConfig.author}</p>
	</div>
</div>`;

export async function get({ params: { slug } }: APIContext) {
	//check if slug is string if not bail
	if (typeof slug !== "string") {
		return {
			status: 404,
		};
	}

	const playlist = await getPlaylistfromDB(slug);
	const title = playlist?.name ?? siteConfig.title;
  const artwork = (playlist?.artwork && playlist?.artwork.length > 0) ? playlist?.artwork : 'https://res.cloudinary.com/dr-dinomight/image/upload/v1676719004/192x192_hdl78r.png';
  console.log("ARTIST",artwork);
	const svg = await satori(markup(parseString(title), parseString(playlist?.description), artwork), ogOptions);
  const png = new Resvg(svg).render().asPng();
	return {
		body: png,
		encoding: "binary",
	};
}

function parseString(text: string): string {
  const { window } = new JSDOM(`<!doctype html><body>${text}</body></html>`);
  return window.document.body.textContent || '';
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const playlists = await getPlaylistsfromDB();
	const data = playlists.map(({ id }) => ({ params: { slug: id } }));
	return data;
}


