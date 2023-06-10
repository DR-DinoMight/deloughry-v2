import type { Artwork, Playlist } from "@prisma/client"
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
