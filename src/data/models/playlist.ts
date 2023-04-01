import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";
import { Artist, Track } from "./tracks";
import { getAllPlaylists } from "../../lib/spotify";
import tigrisDB from "../../lib/tigris";


@TigrisCollection("playlists")
export class Playlists {
  @PrimaryKey(TigrisDataTypes.STRING, { order: 1})
  id!: string;

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

  @Field(TigrisDataTypes.ARRAY, { elements: Track})
  tracks?: Array<Track>;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
  createdAt?: Date;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
  updatedAt?: Date;
}


export async function addTracksToPlaylistDb(id: string, tracks: any[]) {
  const dbPlaylists = tigrisDB.getCollection<Playlists>("playlists");
  const dbTracks = tigrisDB.getCollection<Track>("tracks");

  const playlists = await getAllPlaylists();
  const playlist = playlists.find(x => x.id === id);

  if (playlist) {

        // insert or update the track to the db
        const tracksInDB = await dbTracks.insertOrReplaceMany(
          tracks.map( track => {

            const artists : Artist[] = track.artists.map( artist => {
              return {
                id: artist.id,
                name: artist.name
              }
            });


            return {
              id: track.id,
              artists: artists,
              name: track.name,
              artwork: track?.images ?? track.album.images,
              uri: track?.uri,
              previewUrl: track?.preview_url ?? '',
              externalUrl: track?.album?.external_urls['spotify'] ?? '',
              addedAt: new Date()
            }
          })
        );

        // if ( ! await dbPlaylists.findOne({ filter: { id: playlist.id}})){
          // console.log("No playlist found with id: " + playlist.id);s
          await dbPlaylists.insertOrReplaceOne({
            id: playlist.id,
            name: playlist.name,
            description: playlist.description,
            artwork: playlist.images[0].url,
            spotifyUri: playlist.uri,
            externalUrl: playlist.external_urls['spotify'],
            tracks: tracksInDB,
            updatedAt: new Date()
          })

        // }

        return playlist.id;
      }
}
