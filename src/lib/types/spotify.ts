export interface SpotifyTrack {
  id: string;
  name: string;
  artits: string | string[];
  images: {
    height: number;
    width: number;
    url: string;
  }[],
  release_date: string;
  uri: string;
  preview_url: string;
  external_url: string;
  added_at: string;
}
