import { db } from "@/lib/db";
import { Context } from "@/types";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: Request, context: Context) {
  try {
    const artist = await db.artist.findUnique({
      where: {
        id: Number(context.params.id),
      },
      include: {
        songs: true,
      },
    });
    return NextResponse.json(
      {
        artist: artist,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
