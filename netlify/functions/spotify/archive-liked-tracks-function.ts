import { Handler, HandlerEvent, HandlerContext, schedule } from "@netlify/functions";
import { getAllPlaylists, createPlaylist } from "src/lib/spotify";


const archiveTracks: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()

  let currentDate =  `${monthNames[month]} '${year.toString().slice(-2)}`

  //get the current
  //look if a playlist with the name of "MONTH YEAR" has already been created for todays date if not create it
  const playlists = await getAllPlaylists();

  if (playlists.findIndex( x => x.name == currentDate) == -1) {
    createPlaylist(currentDate)
  }



  console.log("Received event:", event);

    return {
        statusCode: 200,
    };
};

const handler = schedule("*/5 * * * *", archiveTracks)

export { handler };
