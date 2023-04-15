import type { APIContext, APIRoute } from "astro";

import { getAllPlaylists } from "src/lib/spotify";

export const get: APIRoute = async ({ request }: APIContext) => {
	const spotifyResponse = await getAllPlaylists();

	if (spotifyResponse) {
		return new Response(JSON.stringify({ ...spotifyResponse }), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return new Response(
		JSON.stringify({
			isPlaying: false,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
