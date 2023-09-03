import { type Handler, type HandlerEvent, type HandlerContext, schedule } from "@netlify/functions";
import fetch from "node-fetch";

const myhandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const response = await fetch("https://deloughry.co.uk/api/spotify/liked-tracks-playlist", {
    method: "POST",
  });
};

const handler = schedule("*/5 * * * *", myhandler);

export { handler };
