import jwt, { JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
import type { Params } from "astro";
import type { Key } from "lucia-auth/auth";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_ALGORITHM = 'HS256';

export const protectedRoute = (params: Params, request: Request) => {
  // check for auth token
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    return new Response(
      JSON.stringify({
        error: "Invalid credentials",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  // verify token
  try {
    const verfiedToken = jwt.verify(token, JWT_SECRET);
    return verfiedToken;
  } catch (e) {
    return new Response(
      JSON.stringify({
        error: "Invalid credentials",
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

export const getToken = async (userId: string) => {
  const authToken = jwt.sign({
    userId,
  }, JWT_SECRET, { algorithm: JWT_ALGORITHM, expiresIn: '1d' });

  return authToken;
}
