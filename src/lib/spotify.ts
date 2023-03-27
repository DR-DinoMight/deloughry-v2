import { Playlists } from "../data/models/playlist";
import { addTracksToPlaylistDb } from "../data/models/playlist_tracks";
import type { SpotifyTrack } from "./types/spotify";

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const BASE_URL = "https://api.spotify.com/v1";
const NOW_PLAYING_URL = `${BASE_URL}/me/player/currently-playing`;
const TOP_PLAYING_TRACK_URL = `${BASE_URL}/me/top/tracks?time_range=medium_term&limit=3`;
const TOP_PLAYING_ARTIST_URL = `${BASE_URL}/me/top/artists?time_range=medium_term&limit=3`;
const RECENTLY_PLAYED_URL = `${BASE_URL}/me/player/recently-played?limit=1`;

export type NowPlayingSong = {
	isPlaying: boolean;
	song?: SpotifySong;
};

export type SpotifySong = {
	name: string;
	artist: string;
	album: string;
	albumArt: any[];
	uri: string;
	liked?: boolean;
};

// GET ACCESS TOKEN
const getAccessToken = async () => {
	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `grant_type=refresh_token&refresh_token=${refresh_token}&user-library-read&user-top-read&playlist-modify-private&playlist-modify-public`,
	});
	const json = await response.json();
	return json.access_token;
};

const authHeaders = async () => {
	const accessToken = await getAccessToken();

  return {
    Authorization: `Bearer ${accessToken}`,
  }
}

// GET CURRENTLY PLAYING
const getCurrentlyPlaying = async (): Promise<SpotifyApi.CurrentlyPlayingObject | undefined> => {
	const response = await fetch(NOW_PLAYING_URL, {
    headers : {
      ... await authHeaders(),
    }
	});
	if (response.status === 204 || response.status > 404) {
		return undefined;
	}
	return await response.json();
};

// GET LAST SONG
const getLastSong = async (): Promise<SpotifyApi.TrackObjectFull | undefined> => {
	const response = await fetch(RECENTLY_PLAYED_URL, {
		headers: {
			... await authHeaders(),
		},
	});
	const json = await response.json();
	return json.items[0]?.track;
};

// GET TOP TRACKS
const getTopTracks = async (): Promise<SpotifyApi.TrackObjectFull[] | undefined> => {
	const response = await fetch(TOP_PLAYING_TRACK_URL, {
		headers: {
			... await authHeaders(),
		},
	});
	const json = await response.json();
	return json.items;
};

// GET TOP ARTISTS
const getTopArtists = async () => {
	const response = await fetch(TOP_PLAYING_ARTIST_URL, {
		headers: {
			... await authHeaders(),
		},
	});
	const json = await response.json();
	return json;
};

const getLikedTracks = async (totalTracks: number = 20, offset: number = 0) => {
  const response = await fetch(`${BASE_URL}/me/tracks?limit=${totalTracks}&offset=${offset}`, {
    headers: {
      ...await authHeaders(),
      'Content-Type': 'application/json'
    }
  });

  const json = await response.json();

  const tracks = [];

  tracks.push(...json.items.map((item) => {
    return {
      id: item.track.id,
      name: item.track.name,
      artists: item.track.artists.map((artist) => {return {id: artist.id, name: artist.name}}),
      images: item.track.album.images,
      uri: item.track.uri,
      preview_url: item.track.preview_url,
      external_urls: item.track.external_urls,
      release_date: item.release_date,
      added_at: item.added_at
    } ;
  }))

	return {
    tracks,
    nextOffset: json?.next !== null ? json?.offset + totalTracks : null
  };
}

const getTracksForPlaylist = async (playlistId: string) => {
  const tracks: any[] = [];
  let nextUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;


  while (nextUrl) {
    const response = await fetch(nextUrl, {
      headers: {
        ...await authHeaders(),
      },
    });

    if (!response.ok) {

      throw new Error(`Failed to fetch playlist tracks: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // extract ids of the tracks in the current page and add them to the array
    for (const item of data.items) {
      if (item.track) {
        tracks.push(item.track);
      }
    }

    // check if there are more pages
    nextUrl = data.next;
  }

  return tracks;
}


const areTracksLiked = async (ids: string[]) => {
  const response = await fetch(`${BASE_URL}/me/tracks/contains?ids=${ids.join(',')}`, {
    headers: {
      ...await authHeaders(),
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
}


const getAllPlaylists = async () => {
  let response = await fetch(`${BASE_URL}/me/playlists`, {
    headers: {
      ...await authHeaders(),
      'Content-Type': 'application/json'
    }
  });

  let json = await response.json();
  let items = [];
  items.push(...json.items);

  let loop = false;
  if (json.next !== null) {
    loop = true;
    while (loop) {
      let url = json.next;
      response = await fetch(url, {
        headers: {
          ...await authHeaders(),
          'Content-Type': 'application/json'
        }
      });
      json = await response.json();
      items.push(...json.items);

      if (json.next === null) loop = false;
    }
  }

  return items;

}


const createPlaylist = async (name: string) => {

  let response = await fetch(`${BASE_URL}/users/fblade1987/playlists`, {
    headers: {
      ...await authHeaders(),
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      public: true,
      description: 'Liked songs for ' + name
    })
  });

  return response.ok;
}

const addTracksToPlaylist = async (id: string, tracks: string[]) => {

  let response = await fetch(`${BASE_URL}/playlists/${id}/tracks`, {
    headers: {
      ...await authHeaders(),
    },
    method: 'POST',
    body: JSON.stringify({
      uris: tracks
    })
  });

  if (response.ok){
    return true;
  }


  return false;
}


export { getCurrentlyPlaying, getTopTracks, getTracksForPlaylist, getTopArtists, getLastSong, getLikedTracks, areTracksLiked, getAllPlaylists, createPlaylist, addTracksToPlaylist };
