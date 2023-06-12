import type { APIRoute } from "astro";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_ALGORITHM = 'HS256';

export const post: APIRoute = async ({ params, request }) => {

  //get the json body and parse it
  const b64auth = (request.headers.get('authorization') || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  if (login !== process.env.USER_NAME || password !== process.env.PASSWORD) {
    return new Response(
      JSON.stringify({
        error: 'Invalid credentials',
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  const authToken = jwt.sign({}, JWT_SECRET, { algorithm: JWT_ALGORITHM, expiresIn: '1d' });

  return new Response(
    JSON.stringify({
      token: authToken,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
