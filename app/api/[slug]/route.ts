import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ messsage: `GET request to ${req.url}`})
}
