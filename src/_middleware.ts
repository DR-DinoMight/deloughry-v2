import { defineMiddleware, sequence } from "astro/middleware";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = defineMiddleware(async (context, next) => {
  // if route contains /api/protected/.., check for auth token
  if (context.url.pathname.startsWith("/api/protected/") && context.url.pathname !== "/api/protected/auth") {
    // check for auth token
    const token = context.request.headers.get("authorization")?.replace("Bearer ", "");
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
      const verfiedToken = jwt.verify(token, JWT_SECRET);
      context.locals.user = verfiedToken.user
      console.log('verified token', verfiedToken)
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

  return next();
});

export const onRequest = auth;
