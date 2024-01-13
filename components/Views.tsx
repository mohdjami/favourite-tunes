"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "./seperator";
import { PodcastEmptyPlaceholder } from "./podcast-empty-placeholder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { AlbumArtwork } from "./album-artwork";
import { Button } from "./button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import SkeletonLoader from "./Skeleton";
import { useSession } from "next-auth/react";
import { Song } from "@/types";

export default function Views() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, isLoading] = useState(true);
  const { data: session } = useSession();
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
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="music" className="h-full space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="music" className="relative">
                Music
              </TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              <TabsTrigger value="live" disabled>
                Live
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto mr-4">
              <Button>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                Add music
              </Button>
            </div>
          </div>
          <TabsContent value="music" className="border-none p-0 outline-none">
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
                <div className="flex-col space-y-4 pb-4">
                  {songs.map((song) => (
                    <AlbumArtwork
                      key={song.title}
                      title={song.title}
                      artist={song.artistName}
                      className="w-full"
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
        </Tabs>
      </div>
    </div>
  );
}
