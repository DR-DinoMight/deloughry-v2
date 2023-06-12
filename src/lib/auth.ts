import jwt, { JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
import type { Params } from "astro";
dotenv.config();

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

  const JWT_SECRET = process.env.JWT_SECRET || '';
  const JWT_ALGORITHM = 'HS256';
  // verify token
  try {
    console.log('token', token);
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
