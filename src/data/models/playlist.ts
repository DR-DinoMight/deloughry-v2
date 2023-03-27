import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";


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

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "createdAt" })
  createdAt?: Date;

  @Field(TigrisDataTypes.DATE_TIME, { timestamp: "updatedAt" })
  updatedAt?: Date;
}
