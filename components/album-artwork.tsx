import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/context-menu";

import { Album } from "@/components/data/Albums";
import { playlists } from "@/components/data/Playlist";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Container from "./ui/container";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  artist: string;
}

export function AlbumArtwork({
  title,
  artist,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3 ", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <Card className={cn("w-[1000px]  space-y-10", className)} {...props}>
            {" "}
            <CardHeader>
              {" "}
              <CardTitle className="text-sm">{title}</CardTitle>
            </CardHeader>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/yellow 500x500.jpg"
                alt="album artwork"
                width={300}
                height={300}
              />
            </div>
            <CardFooter>
              {" "}
              <div className=" text-sm">
                {" "}
                <p className="text-xs text-muted-foreground">
                  Artist: {artist}
                </p>
              </div>
            </CardFooter>
          </Card>
        </ContextMenuTrigger>
      </ContextMenu>
    </div>
  );
}
