import { servicesData } from "@/app/data/services";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  const service = servicesData[id];

  if (!service) {
    return new NextResponse(JSON.stringify({ error: "Service not found" }), {
      status: 404,
    });
  }

  return NextResponse.json(service);
}
