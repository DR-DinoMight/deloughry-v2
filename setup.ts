import { addTracksToPlaylistDb } from "./src/data/models/playlist";
import {
  getPastJamsPlaylists,
  getTracksForPlaylist,
  getYearSoFarPlaylists,
} from "./src/lib/spotify";
import dotenv from "dotenv";

async function main() {
  dotenv.config(); // load env vars from .env


  for await (const playlist of await getYearSoFarPlaylists()) {
    console.log("Getting Tracks for playlist: " + playlist.name);
    if (playlist.name == "June '23") {
      const tracks = await getTracksForPlaylist(playlist.id);

      await addTracksToPlaylistDb(playlist, tracks, true);
    }
  }

  // for await (const playlist of await getPastJamsPlaylists()) {
  //   console.log("Getting Tracks for playlist: " + playlist.name);
  //   const tracks = await getTracksForPlaylist(playlist.id);

  //   await addTracksToPlaylistDb(playlist, tracks, true);
  // }
}

main()
  .then(async () => {
    console.log("Setup complete...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
