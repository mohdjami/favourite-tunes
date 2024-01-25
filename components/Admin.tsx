"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps, SetStateAction, useEffect, useState } from "react";

import { Song } from "@/types";
import { redirect, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CreateSongForm from "./CreateSongForm";
import { Skeleton } from "./ui/skeleton";

export default function Admin() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, isLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/songs/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm }),
      }
    );
    const data = await res.json();
    // setSongs(data.songs);
  };

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/songs`);
      const data = await res.json();
      const songsWithArtistNames = await Promise.all(
        data.songs.map(async (song: { artistId: any }) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/artists/${song.artistId}`
          );
          const artistData = await response.json();
          const artistName = artistData.artist.name;
          return { ...song, artistName };
        })
      );
      isLoading(false);
      setSongs(songsWithArtistNames);
    };

    fetchData();
  }, []);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]  ">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/music"
            >
              <MusicIcon className="h-6 w-6" />
              <span className="">Music Admin</span>
            </Link>
          </div>
          <CreateSongForm />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="/">
            <MusicIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search by Email..."
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Songs</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Song Name</TableHead>
                  <TableHead>Artist</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <Skeleton />
                ) : (
                  songs.map((song: Song, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {song.title}
                      </TableCell>
                      <TableCell>{song.artistName}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="block lg:hidden justify-center mt-5 p-5">
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col justify-center">
                  <span className="text-base font-bold leading-none text-gray-70">
                    Create Songs
                  </span>
                </CardTitle>
                <CreateSongForm />
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
