import { Playlists, addTracksToPlaylistDb } from './src/data/models/playlist';
import { Tigris } from '@tigrisdata/core';
import { Track } from './src/data/models/tracks';
import { getPastJamsPlaylists, getTracksForPlaylist, getYearSoFarPlaylistsFromDB } from './src/lib/spotify';
import { defineConfig, loadEnv } from 'vite'
import dotenv from 'dotenv'


async function main() {
  dotenv.config() // load env vars from .env

  const tigrisClient = new Tigris()

  await tigrisClient.registerSchemas([
    Playlists,
    Track,
  ]);

  for await ( const playlist of await getYearSoFarPlaylistsFromDB()) {
    console.log("Getting Tracks for playlist: " + playlist.name);
    const tracks = await getTracksForPlaylist(playlist.id);
    await addTracksToPlaylistDb(playlist.id, tracks);
  }

  for await (const playlist of await getPastJamsPlaylists()) {
    console.log("Getting Tracks for playlist: " + playlist.name);
    const tracks = await getTracksForPlaylist(playlist.id);
    await addTracksToPlaylistDb(playlist.id, tracks);
  }

}


main().then( async () => {

  console.log("Setup complete...");
  process.exit(0);
})
.catch (async (e) => {
  console.error(e);
  process.exit(1);
})
