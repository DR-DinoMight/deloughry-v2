import { protectedRoute } from "@/lib/auth";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  const results = await protectedRoute(params, request);

  if (results instanceof Response) {
    return results;
  }

  return new Response(
    JSON.stringify({
      tess: "test",
      results: results,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
