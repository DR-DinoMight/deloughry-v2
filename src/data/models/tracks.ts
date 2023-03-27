import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";

export class Artist  {
  @Field(TigrisDataTypes.STRING)
  id!: string;
  @Field(TigrisDataTypes.STRING)
  name: string;
}

export class TrackArtwork {
  @Field(TigrisDataTypes.NUMBER)
  height: number;

  @Field(TigrisDataTypes.NUMBER)
  width: number;

  @Field(TigrisDataTypes.STRING)
  url: string;
}

@TigrisCollection("tracks")
export class Track {
  @PrimaryKey(TigrisDataTypes.STRING, {order: 1})
  id!: string;

  @Field(TigrisDataTypes.ARRAY, {elements: Artist})
  artists?: Array<Artist>;

  @Field(TigrisDataTypes.STRING)
  name: string;

  @Field(TigrisDataTypes.ARRAY, {elements: TrackArtwork})
  artwork?: Array<TrackArtwork>;

  @Field(TigrisDataTypes.STRING)
  uri: string;

  @Field(TigrisDataTypes.STRING)
  previewUrl?: string;

  @Field(TigrisDataTypes.STRING)
  externalUrl: string;

  @Field(TigrisDataTypes.DATE_TIME)
  addedAt?: Date;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
  createdAt?: Date;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
  updatedAt?: Date;
}
