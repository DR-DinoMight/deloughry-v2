// pages/api/logout.ts
import { auth } from "@/lib/lucia.server";
import type { APIRoute } from "astro";

export const post: APIRoute = async (Astro) => {
  //@ts-ignore
  const authRequest = auth.handleRequest(Astro);
  const { session } = await authRequest.validateUser();
  if (!session) {
    return new Response(null, {
      status: 400
    });
  }
  await auth.invalidateSession(session.sessionId); // invalidate current session
  authRequest.setSession(null); // clear session cookie

  // redirect to login page
  return new Response(null, {
    status: 302,
    headers: {
      location: "/auth/login"
    }
  });
};
