import { Field, PrimaryKey, Tigris, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";
import tigrisDB from "../../lib/tigris";

import {
	Field,
	PrimaryKey,
	SearchField,
	TigrisCollection,
	TigrisDataTypes,
	TigrisSearchIndex,
} from "@tigrisdata/core";

export class TrackArtwork {
	@Field(TigrisDataTypes.NUMBER)
	height: number;

	@Field(TigrisDataTypes.NUMBER)
	width: number;

	@Field(TigrisDataTypes.STRING)
	url: string;
}

@TigrisCollection("tracks")
@TigrisSearchIndex("tracks")
export class Track {
	@PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
	@SearchField(TigrisDataTypes.STRING)
	id!: string;

	@Field(TigrisDataTypes.ARRAY, { elements: TigrisDataTypes.STRING })
	artists?: Array<String>;

	@Field(TigrisDataTypes.STRING)
	@SearchField(TigrisDataTypes.STRING)
	name!: string;

	@Field(TigrisDataTypes.ARRAY, { elements: TrackArtwork })
	artwork?: Array<TrackArtwork>;

	@Field(TigrisDataTypes.STRING)
	uri: string;

	@Field(TigrisDataTypes.STRING)
	previewUrl?: string;

	@Field(TigrisDataTypes.STRING)
	externalUrl: string;

	@Field(TigrisDataTypes.DATE_TIME)
	addedAt?: Date;

	@Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
	createdAt?: Date;

	@Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
	updatedAt?: Date;

	@Field(TigrisDataTypes.ARRAY, { elements: TigrisDataTypes.STRING })
	@SearchField(TigrisDataTypes.ARRAY, { elements: TigrisDataTypes.STRING, facet: true })
	playlists!: Array<String>;
}

export const upsertTrack = async (spotifyData, playlistId: string) => {
	const dbTracks = tigrisDB.getCollection<Track>("tracks");
	const tx = await tigrisDB.beginTransaction();
	let track: Track | undefined = await dbTracks.findOne({ filter: { id: spotifyData.id } }, tx);
	const artists: String[] = spotifyData.artists.map((artist) => artist.name);
	const trackData: Track = {
		id: spotifyData.id,
		artists,
		name: spotifyData.name,
		artwork: spotifyData?.images ?? spotifyData.album.images,
		uri: spotifyData.uri,
		previewUrl: spotifyData.preview_url,
		externalUrl: spotifyData?.external_urls?.spotify ?? "",
		playlists: [],
	};

	if (track) {
		const playlistExists = track.playlists?.some((playlist) => playlist.id === playlistId);

		if (!playlistExists) {
			const playlist = [...(track.playlists ?? []), playlistId];
			trackData.playlists = playlist;
		}

		await dbTracks.updateOne(
			{
				filter: { id: spotifyData.id },
				fields: trackData,
			},
			tx
		);
	} else {
		trackData.playlists.push(playlistId);
		console.log("new Tracks", trackData);
		track = await dbTracks.insertOne(trackData, tx);
	}
	const tigrisClient = new Tigris();
	const search = tigrisClient.getSearch();
  const tracksSearch = await search.createOrUpdateIndex<Track>(Track);
	const result = await tracksSearch.createOrReplaceOne(track);

	tx.commit();

	return track;
};
