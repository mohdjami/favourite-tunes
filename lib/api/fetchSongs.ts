import { fetchArtistById } from "./fetchArtist";

export const fetchSongs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/songs`);
  const data = await res.json();
  const songsWithArtistNames = await Promise.all(
    data.songs.map(async (song: { artistId: any }) => {
      const artistName = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/artists/${song.artistId}`
      );
      return { ...song, artistName };
    })
  );
  return songsWithArtistNames;
};
