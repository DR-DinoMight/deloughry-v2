import type { APIContext, APIRoute } from "astro";

import { getLikedTracks } from "src/lib/spotify";

export const get: APIRoute = async ({ request }: APIContext) => {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)

  let offset : number = 0;
  let trackCount : number = 20;

  if (params.get('offset') !== undefined && Number(params.get('offset'))) {
    offset = Number(params.get('offset'));
  }

  if (params.get('tracks') !== undefined && (Number(params.get('tracks')) < 0 || Number(params.get('tracks')) > 50)) {
    return new Response(
      JSON.stringify({
        message: "Track Count is out of bounds"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else if (params.get('tracks') !== undefined && Number(params.get('tracks'))) {
    trackCount = Number(params.get('tracks'));
  }



	const spotifyResponse = await getLikedTracks(trackCount, offset);

	if (spotifyResponse) {

			return new Response(
        JSON.stringify({...spotifyResponse}),
				{
					status: 200,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
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
