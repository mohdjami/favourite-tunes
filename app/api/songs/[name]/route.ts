//route to get all users
import { db } from "@/lib/db";
import { Context } from "@/types";
import { NextResponse } from "next/server";
//get songs by id we will on clicking this url we are gonna get the songs by id
export async function GET(req: Request, context: Context) {
  const name = context.params.name;
  const songs = await db.song.findMany({
    where: { id: Number(name) },
    include: {
      artist: true,
    },
  });
  return NextResponse.json(
    {
      songs: songs,
      message: "Songs are listed above",
    },
    { status: 200 }
  );
}
