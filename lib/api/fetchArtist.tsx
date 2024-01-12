import { db } from "../db";

export const fetchArtistById = async (id: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/artists/${id}`
    );
    const data = await res.json();
    return data.artist;
  } catch (error) {
    console.log(error);
  }
};
