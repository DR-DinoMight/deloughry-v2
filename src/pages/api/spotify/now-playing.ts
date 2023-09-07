import type { APIRoute } from "astro";

import { areTracksLiked, getCurrentlyPlaying } from "src/lib/spotify";

export const get: APIRoute = async () => {
  const spotifyResponse = await getCurrentlyPlaying();

  if (spotifyResponse) {
    const song = spotifyResponse;
    const isPlaying = song.is_playing;

    const isMusic = song.currently_playing_type === "track";
    const isLiked =
      isPlaying && isMusic && song.item?.id ? await areTracksLiked([song.item?.id]) : false;

    if (song && song.item && isPlaying && isMusic) {
      return new Response(
        JSON.stringify({
          isPlaying: true,
          song: {
            name: song.item.name,
            artist:
              "artists" in song.item
                ? song.item.artists.map((_artist: { name: any }) => _artist.name).join(", ")
                : "N/A",
            album: "album" in song.item ? song.item.album.name : null,
            albumArt: "album" in song.item ? song.item.album.images : null,
            duration: song.item.duration_ms,
            progress: song.progress_ms,
            uri: song.item.external_urls.spotify,
            isLiked: isLiked[0],
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
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
