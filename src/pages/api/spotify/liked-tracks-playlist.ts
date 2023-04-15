import { addTracksToPlaylistDb, Playlists } from "@/data/models/playlist";
import type { APIContext, APIRoute } from "astro";

import {
	addTracksToPlaylist,
	createPlaylist,
	getAllPlaylists,
	getLikedTracks,
	getTracksForPlaylist,
	getTrackUrisForPlaylist,
} from "src/lib/spotify";
import tigrisDB from "src/lib/tigris";

export const post: APIRoute = async ({ request }) => {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();

	let currentDate = `${monthNames[month]} '${year.toString().slice(-2)}`;

	const playlists = await getAllPlaylists();
	let playlist;

	//get liked tracks and filter all of them for the current month, return a list of uris in csv format
	const likedTracks = (await getLikedTracks(50, 0))?.tracks.filter((track) => {
		let addedAt = new Date(track.added_at);
		return addedAt.getMonth() == date.getMonth() && addedAt.getFullYear() == date.getFullYear();
	});

	if (playlists.findIndex((x) => x.name === currentDate) == -1) {
		createPlaylist(currentDate);
	}

	playlist = playlists.find((x) => x.name === currentDate);
	// get the playlist tracks, return a list of uris in csv format
	const playlistTracks = await getTracksForPlaylist(playlist.id);

	// filter the liked tracks with the playlist tracks and remove already present tracks from the list
	let tracksToAdd = likedTracks.filter(
		(likedTrack) => !playlistTracks.some((playlistTrack) => playlistTrack.id == likedTrack.id)
	);

	if (
		tracksToAdd.length > 0 &&
		!(await addTracksToPlaylist(
			playlist.id,
			tracksToAdd.map((x) => x.uri)
		))
	) {
		return new Response(
			JSON.stringify({
				message: "Failed to add tracks to playlist",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}

	await addTracksToPlaylistDb(playlist.id, tracksToAdd);

	return new Response(
		JSON.stringify({
			message: "Successfully added tracks to playlist, count:" + tracksToAdd.length,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};
