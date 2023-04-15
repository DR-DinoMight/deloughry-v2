import {
	Field,
	LogicalOperator,
	PrimaryKey,
	SearchField,
	SelectorFilterOperator,
	Session,
	Tigris,
	TigrisCollection,
	TigrisDataTypes,
	TigrisSearchIndex,
} from "@tigrisdata/core";
import { Artist, PlaylistTrack, Track, getManyChunked, upsertTrack } from "./tracks";
import { getAllPlaylists } from "../../lib/spotify";
import tigrisDB, { tigrisClient } from "../../lib/tigris";

export class TrackId {
	@Field(TigrisDataTypes.STRING)
	id!: string;
}

@TigrisCollection("playlists")
@TigrisSearchIndex("playlists")
export class Playlists {
	@PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
	id!: string;

	@SearchField(TigrisDataTypes.STRING)
	@Field(TigrisDataTypes.STRING)
	name: string;

	@Field(TigrisDataTypes.STRING)
	description: string;

	@Field(TigrisDataTypes.STRING)
	artwork: string;

	@Field(TigrisDataTypes.STRING)
	spotifyUri: string;

	@Field(TigrisDataTypes.STRING)
	externalUrl: string;

	@Field(TigrisDataTypes.ARRAY, { elements: TrackId })
	tracks?: Array<TrackId>;

	@Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
	createdAt?: Date;

	@Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
	updatedAt?: Date;
}

export const tracksForPlaylistDB = async (playlistId: string) => {
	const dbTracks = tigrisDB.getCollection<Track>("tracks");

	const tracks = dbTracks.findMany({
		filter: {
			playlists: {
				$elemMatch: {
					id: playlistId,
				},
			},
		},
	});
	const foundTracks: Array<Tracks> = [];

	for await (var t of tracks) {
		foundTracks.push(t);
	}

	return foundTracks;
};

export const getPlaylistsfromDB = async (name: string = "", exact: boolean = false) => {
	const dbPlaylists = tigrisDB.getCollection<Playlists>("playlists");

	const playlistsHits = new Array<Playlists>();

	const search = exact ? `"${name}"` : name;

	const playlists = dbPlaylists.search({
		q: search,
		searchFields: ["name"],
		// sort: [
		// 	{
		// 		field: "name",
		// 		order: "$desc",
		// 	},
		// ],
	});

	for await (const result of playlists) {
		result.hits.forEach((hit) => playlistsHits.push(hit.document));
	}
	return playlistsHits;
};

export const getPlaylistfromDB = async (id: string, tx?: Session) => {
	const dbPlaylists = tigrisDB.getCollection<Playlists>("playlists");
	const query = { filter: { id } };

	if (tx) {
		return await dbPlaylists.findOne(query, tx);
	}
	return await dbPlaylists.findOne(query);
};

export async function addTracksToPlaylistDb(id: string, tracks: any[], fromAPI: bool = false) {
	const dbPlaylists = tigrisDB.getCollection<Playlists>("playlists");
	const playlists = await getAllPlaylists();
	const playlist = playlists.find((x) => x.id === id);

	if (playlist) {
		// const tx = await tigrisDB.beginTransaction();
		// insert or update the track to the db

		if (!(await getPlaylistfromDB(id))) {
			await dbPlaylists.insertOrReplaceOne(
				{
					id: playlist.id,
					name: playlist.name,
					description: playlist.description,
					artwork: playlist?.images[0]?.url ?? "",
					spotifyUri: playlist.uri,
					externalUrl: playlist.external_urls["spotify"],
					updatedAt: new Date(),
				}
				// tx
			);
		} else {
			dbPlaylists.updateOne({
				filter: { id: playlist.id },
				fields: {
					id: playlist.id,
					name: playlist.name,
					description: playlist.description,
					artwork: playlist?.images[0]?.url ?? "",
					spotifyUri: playlist.uri,
					externalUrl: playlist.external_urls["spotify"],
				},
			});
		}

		let tracksInDB: Track[] = [];
		if (tracks.length > 0) {
			for await (const track of tracks) {
				tracksInDB.push(await upsertTrack(track, playlist.id));
			}

			console.log("Inserting or updating tracks : " + tracksInDB.length + "/" + tracks.length);

			if (fromAPI && import.meta.env.BUILD_HOOK) {
				fetch(import.meta.env.BUILD_HOOK);
			}
		}

		// tx.commit();

		return playlist.id;
	}
}
