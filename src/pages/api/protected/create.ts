import type { APIRoute } from "astro";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { auth } from "@/lib/lucia.server";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_ALGORITHM = 'HS256';

export const post: APIRoute = async ({ params, request }) => {

  if (process.env.NODE_ENV === 'development') {

    //get the json body and parse it
    const b64auth = (request.headers.get('authorization') || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (typeof login === "string" && typeof password === "string") {
      try {
        const user = await auth.createUser({
          primaryKey: {
            providerId: "email",
            providerUserId: login,
            password: password ?? ''
          },
          attributes: {
            email: login,
          }
        });

        const authToken = jwt.sign({
          userId: user.userId,
          name: user.name,
        }, JWT_SECRET, { algorithm: JWT_ALGORITHM, expiresIn: '1d' });

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

      } catch (err) {
        console.log(err)
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
    }

  }
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


};
