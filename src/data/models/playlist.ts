import { PrismaClient } from "@prisma/client";
import * as crypto from 'crypto';
import { makeDateFromPlaylistName } from "src/utils/date";

const prisma = new PrismaClient();

export const getPlaylistsfromDB = async (name?: string, exact?: boolean) => {

  let whereClause;

  if (name) {
    whereClause = exact
      ? { name: { equals: name } }
      : { name: { contains: name } };
  }

  if (name && whereClause) {
    return await prisma.playlist.findMany({
      where: whereClause,
      include: {
        artwork: true,

        tracks: {
          include: {
            artists: true,
            artwork: true
          }
        }
      },
      orderBy: {
        addedAt: "desc"
      }
    })
  } else {
    return await prisma.playlist.findMany({
      include: {
        artwork: true,

        tracks: {
          include: {
            artists: true,
            artwork: true
          }
        }
      },
      orderBy: {
        addedAt: "desc"
      }
    })
  }
};

export const getPlaylistfromDB = async (id: string) => {
  return await prisma.playlist.findUnique({
    include: {
      artwork: true,
      tracks: {
        include: {
          artists: true,
          artwork: true
        }
      }
    },
    where: {
      id: id
    }
  });
};

export async function addTracksToPlaylistDb(
  playlist: SpotifyApi.PlaylistObjectSimplified,
  tracks: SpotifyApi.TrackObjectFull[],
  fromAPI = false): Promise<string | false> {

  try {
    if (!playlist) {
      return false;
    }

    let artworks = playlist?.images.map((image) => {
      const hash = crypto.createHash('sha256').update(image.url).digest('hex');
      return {
        create: {
          //hex of the image url
          id: hash,
          url: image.url,
          width: image.width ?? 64,
          height: image.height ?? 64
        },
        where: {
          id: hash
        }
      }
    });
    //unique artworks
    artworks = [...new Map(artworks.map(item => [item.create.id, item])).values()];

    //@ts-ignore
    let tracksToAdd = tracks.map((track, index) => {

      let artists = track.artists.map((artist) => {
        return {
          create: {
            id: artist.id,
            name: artist.name,
          },
          where: {
            id: artist.id
          }
        }
      });

      //unique artworks
      artists = [...new Map(artists.map(item => [item.create.id, item])).values()];

      let trackArtworks = track.album.images.map((image) => {
        const hash = crypto.createHash('sha256').update(image.url).digest('hex');
        return {
          create: {
            id: hash,
            url: image.url,
            width: image.width ?? 64,
            height: image.height ?? 64
          },
          where: {
            id: hash
          }
        }
      });

      //unique artworks
      trackArtworks = [...new Map(trackArtworks.map(item => [item.create.id, item])).values()];

      return {
        create: {
          id: track.id,
          name: track.name,
          uri: track.uri,
          previewUrl: track.preview_url,
          externalUrl: track.external_urls["spotify"] ?? '',
          artists: {
            connectOrCreate: artists
          },
          artwork: {
            connectOrCreate: trackArtworks
          },
        },
        where: {
          id: track.id
        }
      }
    });
    //unique artworks
    tracksToAdd = [...new Map(tracksToAdd.map(item => [item.create.id, item])).values()];

    const playlistData = {
      id: playlist.id,
      name: playlist.name,
      description: playlist.description ?? '',
      spotifyUri: playlist.uri,
      externalUrl: playlist.external_urls["spotify"],
      addedAt: makeDateFromPlaylistName(playlist.name, isMonthlyLikedPlaylist(playlist.name)),
      artwork: {
        connectOrCreate: artworks,
      },
      tracks: {
        connectOrCreate: tracksToAdd,
      }
    };

    const dbPlaylist = await prisma.playlist.upsert({
      where: {
        id: playlist.id
      },
      include: {

        tracks: {
          include: {
            artists: true,
            artwork: true
          }
        },
        artwork: true
      },
      //@ts-ignore
      update: {
        ...playlistData
      },
      //@ts-ignore
      create: {
        ...playlistData
      }
    });
    console.log('added');
    // tx.commit();
    prisma.$disconnect();
    return playlist.id;
  }
  catch (e) {
    prisma.$disconnect();
    console.log(e);
    return false;
  }
}

function isMonthlyLikedPlaylist(playlistName: string) {
  const pattern = /^(January|February|March|April|May|June|July|August|September|October|November|December) '\d{2}$/;
  return pattern.test(playlistName);
}
