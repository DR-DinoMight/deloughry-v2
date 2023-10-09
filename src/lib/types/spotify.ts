
import { Prisma } from "@prisma/client"

export interface SpotifyTrack extends SpotifyApi.TrackObjectFull {
  added_at?: string,
}

export interface GetLikedTracksResponse {
  tracks: SpotifyTrack[],
  nextOffset: number | null
}

const playlistWithAllRelationships = Prisma.validator<Prisma.PlaylistArgs>()({
  include: {
    artwork: true,
    tracks: {
      orderBy: {
        addedAt: "desc"
      },
      include: {
        artists: true,
        artwork: true
      },
    }
  }
});

export type PlaylistWithAllRelationships = Prisma.PlaylistGetPayload<typeof playlistWithAllRelationships>


const trackWithAllRelationships = Prisma.validator<Prisma.TrackArgs>()({
  include: {
    artists: true,
    artwork: true
  }
});

export type TrackWithAllRelationships = Prisma.TrackGetPayload<typeof trackWithAllRelationships>

export type Playlist = {
  id: string,
  name: string,
  description: string,
  owner: string,
  tracks: TrackWithAllRelationships[],
  artwork: Artwork[]
}

export type Track = {
  id: string,
  playlistId: string,
  name: string,
  uri: string,
  previewUrl: string,
  externalUrl: string,
  addedAt: string,
  createdAt: string,
  updatedAt: string,
  artists: Artist[],
  artwork: Artwork[]
}


export type Artist = {
  id: string,
  name: string
}

export type Artwork = {
  id: string,
  url: string,
  height: number,
  width: number
  trackId: string,
  playlistId: string | null
}
