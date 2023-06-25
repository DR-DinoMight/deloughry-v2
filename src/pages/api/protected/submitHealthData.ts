import { protectedRoute } from "@/lib/auth";
import type { APIRoute } from "astro";
import { PrismaClient, DatapointTypes } from "@prisma/client";



export type HealthDataFormData = {
  type: DatapointTypes;
  value: number;
  unit: string;
}

export const post: APIRoute = async ({ request, params }) => {
  const results = await protectedRoute(params, request);

  if (results instanceof Response) {
    return results;
  }

  const body: HealthDataFormData = await request.json();

  const prisma = new PrismaClient();

  const healthData = await prisma.healthData.create({
    data: {
      date: new Date(),
      datapoint: {
        create: {
          type: body.type,
          value: body.value,
          unit: body.unit,
        },
      },
    }
  });

  await prisma.$disconnect();

  return new Response(
    JSON.stringify({
      message: "Health data submitted successfully!",
      results: healthData,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
