import { Playlists } from './src/data/models/playlist';
import { Tigris } from '@tigrisdata/core';
import { Track } from './src/data/models/tracks';
import { addTracksToPlaylistDb, PlaylistTracks } from './src/data/models/playlist_tracks';
import { getTracksForPlaylist } from 'src/lib/spotify';
import { defineConfig, loadEnv } from 'vite'
import dotenv from 'dotenv'


async function main() {
  dotenv.config() // load env vars from .env

  const tigrisClient = new Tigris()

  await tigrisClient.registerSchemas([
    // Playlists,
    Track,
    PlaylistTracks
  ]);

  // populate the March track
  const tracks = await getTracksForPlaylist('4SPTGV08UtHOEpdd3IQ3mM');
  await addTracksToPlaylistDb('4SPTGV08UtHOEpdd3IQ3mM', tracks);
}


main().then( async () => {


  console.log("Setup complete...");
  process.exit(0);
})
.catch (async (e) => {
  console.error(e);
  process.exit(1);
})
