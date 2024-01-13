import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeadingText from "@/components/heading-text";
import { ListMusicIcon, MusicIcon, ShareIcon } from "lucide-react";

function Cards() {
  return (
    <>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
        <MusicIcon className="h-12 w-12" />
        <CardTitle>Discover New Music</CardTitle>
        <CardDescription>
          Explore a vast library of tracks from all genres and find your next
          favourite tune.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
        <ListMusicIcon className="h-12 w-12" />
        <CardTitle>Create Playlists</CardTitle>
        <CardDescription>
          Create and manage your own playlists. Add, remove, and reorder songs
          with ease.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
        <ShareIcon className="h-12 w-12" />
        <CardTitle>Share with Friends</CardTitle>
        <CardDescription>
          Share your favourite songs or playlists with friends and discover what
          they&apos;re listening to.
        </CardDescription>
      </Card>
    </>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-secondary rounded mt-4 " id="features">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <HeadingText subtext="What does Favourite Tunes offer?">
          Features
        </HeadingText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <Cards />
        </div>
      </div>
    </section>
  );
}
