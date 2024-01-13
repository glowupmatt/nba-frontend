import axios from "axios";
import { dailyUpdateCall } from "@/apiFunctions/dailyUpdateCall";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    console.log("CRON JOB STARTED");
    await dailyUpdateCall();
    return new NextResponse();
  } catch (err) {
    console.log(err);
  }
}
