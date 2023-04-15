import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";
import { getAllPlaylists, getTracks } from "../../lib/spotify";
import tigrisDB from "../../lib/tigris";
import type { Playlists } from "./playlist";
import type { Artist, Track } from "./tracks";

@TigrisCollection("playlistTracks")
export class PlaylistTracks {
	@PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
	playlistId!: string;

	@PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
	trackId!: string;
}
