"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { JSX, SVGProps, SetStateAction, useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Container from "@/components/ui/container";
import { fetchSongs } from "@/lib/api/fetchSongs";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Song } from "@/types";
// const session = await getServerSession(authOptions);

const FormSchema = z.object({
  title: z.string().min(1, "title is required").max(100),
  artistName: z.string().min(1, "artist is required"),
});

export default function Admin() {
  const [songs, setSongs] = useState<Song[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      artistName: "",
    },
  });
  // const songsWithArtistNames = await Promise.all(
  //   data.songs.map(async (song: { artistId: any }) => {
  //     const artistName = await fetchArtistById(song.artistId);
  //     return { ...song, artistName };
  //   })
  // );

  useEffect(() => {
    const fetchData = async () => {
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
      console.log(songsWithArtistNames);
      setSongs(songsWithArtistNames);
    };

    fetchData();
  }, []);

  const { data: session } = useSession();

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        artist: values.artistName,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  if (session?.user.role === "normal" || !session) {
    return (
      <Container>
        <div className="  min-h-screen w-full mt-20">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            You are not authorized to see the admin page
          </div>
        </div>
      </Container>
    );
  }
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] mt-20">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <MusicIcon className="h-6 w-6" />
              <span className="">Music Admin</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <Form {...form}>
              <form
                className="grid gap-4 px-4 text-sm font-medium"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Song Name</FormLabel>
                      <FormControl>
                        <Input placeholder="song name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="artistName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of Artist" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mt-4" type="submit">
                  Add Song
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <MusicIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search songs..."
                  type="search"
                />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
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
                {songs.map((song: Song, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{song.title}</TableCell>
                    <TableCell>{song.artistName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
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
