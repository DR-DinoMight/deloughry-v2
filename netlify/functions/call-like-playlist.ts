import { Handler, HandlerEvent, HandlerContext, schedule } from "@netlify/functions";
import fetch from 'node-fetch';

const myHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const response = await fetch('https://deloughry.co.uk/api/spotify/liked-tracks-playlist',
    {
      method: 'POST'
    });

    console.log(await response.json());
};

const handler = schedule("*/5 * * * *", myHandler)

export { handler };
