"use client";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/button";
import { ScrollBar, ScrollArea } from "@/components/scroll-area";
import { Separator } from "@/components/seperator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { AlbumArtwork } from "@/components/album-artwork";
import { Menu } from "@/components/menu";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/components/data/Playlist";
import Container from "@/components/ui/container";
import { useEffect, useState } from "react";
import { Song } from "@/types";
import SkeletonLoader from "@/components/Skeleton";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Views from "@/components/Views";
import { redirect } from "next/navigation";
import { PlaylistEmptyPlaceholder } from "./playlist-empty-placeholder";
import { MusicEmptyPlaceholder } from "./add-music-placeholder";

export default function MusicPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, isLoading] = useState(true);
  const { data: session } = useSession();
  const user = session?.user;
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
      console.log(songsWithArtistNames);
      isLoading(false);
      setSongs(songsWithArtistNames);
    };

    fetchData();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }
  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center justify-center ">
      {" "}
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="playlist">Playlist</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <MusicEmptyPlaceholder />
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex  space-x-4 pb-4">
                            {" "}
                            {songs.map((song) => (
                              <AlbumArtwork
                                key={song.title}
                                title={song.title}
                                artist={song.artistName}
                                className="w-[250px]"
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                    <TabsContent
                      value="playlist"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Sart Creating Your own Playlists{" "}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Soon to be added functionality{" "}
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PlaylistEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="block lg:hidden justify-center ">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="lg:block" />
            </div>
          </div>
        </div>
        <Views />
      </div>
    </main>
  );
}
