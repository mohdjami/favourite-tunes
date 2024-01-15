import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const artists = await db.artist.findMany();
    return NextResponse.json(
      {
        artists: artists,
        message: "artists are listed above",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error,
        message: "error",
      },
      { status: 500 }
    );
  }
}
