import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchTerm } = await req.json();
  const data = await db.artist.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      songs: true,
    },
  });
  return NextResponse.json({ data }, { status: 200 });
}
