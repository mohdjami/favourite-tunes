//route to get all users
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const songs = await db.song.findMany();
  return NextResponse.json(
    {
      songs: songs,
      message: "Songs are listed above",
    },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  const { title, artist } = await req.json();

  let artistExists = await db.artist.findUnique({
    where: { name: artist },
    select: { id: true },
  });
  if (!artistExists) {
    const newArtist = await db.artist.create({
      data: {
        name: artist,
      },
    });
    artistExists = newArtist;
  }
  const song = await db.song.create({
    data: {
      title: title,
      artistId: artistExists?.id,
    },
  });
  return NextResponse.json(
    {
      song,
      message: "Song successfully created",
    },
    { status: 201 }
  );
}
