import type { APIContext, APIRoute } from "astro";

import { addTracksToPlaylist, createPlaylist, getAllPlaylists, getLikedTracks, getTrackUrisForPlaylist } from "src/lib/spotify";

export const post: APIRoute = async ({ request }) => {

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()

  let currentDate =  `${monthNames[month]} '${year.toString().slice(-2)}`

  const playlists = await getAllPlaylists();
  let playlistID = null;

  //get liked tracks and filter all of them for the current month, return a list of uris in csv format
  const likedTracks = (await getLikedTracks(50,0))?.tracks.filter(track => {
    let addedAt = new Date(track.added_at);
    return addedAt.getMonth ()== date.getMonth() && addedAt.getFullYear() == date.getFullYear()
  });

  let uris = likedTracks.map((track: any) => track.uri);

  if (playlists.findIndex( x => x.name === currentDate) == -1) {
    playlistID = createPlaylist(currentDate);
  } else  {
    playlistID = playlists.find(x => x.name === currentDate).id;

    // get the playlist tracks, return a list of uris in csv format
    const playlistTracks = await getTrackUrisForPlaylist(playlistID);

    // filter the liked tracks with the playlist tracks and remove already present tracks from the list
    uris = uris.filter( uri =>  !playlistTracks.includes(uri) );
  }

  if (uris.length > 0 && !(await addTracksToPlaylist(playlistID, uris))) {
    return new Response(
      JSON.stringify({
        message: 'Failed to add tracks to playlist',
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
		JSON.stringify({
			message: 'Successfully added tracks to playlist, count:' + uris.length
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
