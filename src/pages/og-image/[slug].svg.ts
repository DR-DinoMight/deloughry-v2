import type { APIContext, GetStaticPathsResult } from "astro";
import { getCollection, getEntryBySlug } from "astro:content";
import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";
import siteConfig from "@/site-config";
import { getFormattedDate } from "@/utils";
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

const markup = (title: string, pubDate: string) => html`<div
	tw="flex flex-col w-full h-full bg-[#191919] text-[#e5e7eb]"
>
	<div tw="flex flex-col flex-1 w-full p-10 justify-center">
		<p tw="text-2xl mb-6 text-[#00f701]">${pubDate}</p>
		<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
	</div>
	<div tw="flex items-center justify-between w-full p-10 border-t border-[#00f701] text-xl">
		<div tw="flex items-center">
			<img
				src="https://res.cloudinary.com/dr-dinomight/image/upload/v1676719004/192x192_hdl78r.png"
				height="60px"
				width="60px"
			/>
			<p tw="ml-3 font-semibold">${siteConfig.title}</p>
		</div>
		<p class="font-bold leading-snug text-[#00f701]">by ${siteConfig.author}</p>
	</div>
</div>`;

export async function get({ params: { slug } }: APIContext) {
	const post = await getEntryBySlug("post", slug!);
	const title = post?.data.title ?? siteConfig.title;
	const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
		weekday: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	return {
		body: svg,
		encoding: "binary",
	};
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const posts = await getCollection("post");
	return posts.filter(({ data }) => !data.ogImage).map(({ slug }) => ({ params: { slug } }));
}
