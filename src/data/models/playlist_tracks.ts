import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";
import { getAllPlaylists, getTracks } from "../../lib/spotify";
import tigrisDB from "../../lib/tigris";
import type { Playlists } from "./playlist";
import type { Artist, Track } from "./tracks";

@TigrisCollection("playlistTracks")
export class PlaylistTracks {
  @PrimaryKey(TigrisDataTypes.STRING, {order: 1})
  playlistId!: string;

  @PrimaryKey(TigrisDataTypes.STRING, {order: 1})
  trackId!: string;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
  createdAt?: Date;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
  updatedAt?: Date;
}

export async function addTracksToPlaylistDb(id: string, tracks: any[]) {
  const dbPlaylists = tigrisDB.getCollection<Playlists>("playlists");
  const dbTracks = tigrisDB.getCollection<Track>("tracks");
  const dbPlaylistTracks = tigrisDB.getCollection<PlaylistTracks>("playlistTracks");

  const playlists = await getAllPlaylists();
  const playlist = playlists.find(x => x.id === id);

  if (playlist) {

    await dbPlaylists.insertOrReplaceOne({
      id: playlist.id,
      name: playlist.name,
      description: playlist.description,
      artwork: playlist.images[0].url,
      spotifyUri: playlist.uri,
      externalUrl: playlist.external_urls['spotify']
    })

    // insert or update the track to the db

    for await (const track of tracks) {

      const artists : Artist[] = track.artists.map( artist => {
        return {
          id: artist.id,
          name: artist.name
        }
      });
      await dbTracks.insertOrReplaceOne({
          id: track.id,
          artists: artists,
          name: track.name,
          artwork: track?.images ?? track.album.images,
          uri: track?.uri,
          previewUrl: track?.preview_url ?? '',
          externalUrl: track?.album?.external_urls['spotify'] ?? '',
          addedAt: new Date()
      });

      await dbPlaylistTracks.insertOrReplaceOne({
        trackId: track.id,
        playlistId: id
      })
    }


    return playlist.id;
  }
}

