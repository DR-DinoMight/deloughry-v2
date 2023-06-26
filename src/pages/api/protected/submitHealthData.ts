import { protectedRoute } from "@/lib/auth";
import type { APIRoute } from "astro";
import { PrismaClient, DatapointTypes } from "@prisma/client";

export type HealthDataFormData = {
  id: string;
  type: DatapointTypes;
  value: number;
  unit: string;
}

export const post: APIRoute = async ({ request, params }) => {
  const results = await protectedRoute(params, request);

  if (results instanceof Response) {
    return results;
  }

  const body: HealthDataFormData | HealthDataFormData[] = await request.json();
  console.log(body);
  const prisma = new PrismaClient();

  //get body and get each health data point
  let datapoints = [];
  if (Array.isArray(body)) {
    datapoints = body.map((datapoint) => {
      return {
        id: datapoint.id,
        type: datapoint.type,
        value: Number(datapoint.value),
        unit: datapoint.unit,
      };
    });
  } else {
    datapoints = [
      {
        id: body.id,
        type: body.type,
        value: Number(body.value),
        unit: body.unit,
      },
    ];
  }

  const healthData = await prisma.healthData.create({
    data: {
      date: new Date(),
      datapoint: {
        createMany: {
          data: datapoints,
        }
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
