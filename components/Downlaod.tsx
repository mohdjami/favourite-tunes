import React from "react";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
const Downlaod = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-[#1e90ff] text-white dark:bg-transparent rounded mt-4"
      id="download"
    >
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center ">
          <div className="space-y-2 dark:te">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-stone-50">
              Ready to Discover Your Next Favourite Tune?
            </h1>
            <p className="mx-auto max-w-[700px] dark:text-stone-50">
              Download our app today and start exploring new music, creating
              playlists, and sharing your favourite tunes with friends.
            </p>
          </div>
          <div className="space-x-4 justify-between md:justify-center ">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#ff4757] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#ff6b81] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4757] disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              Download Now
            </Link>

            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-[#1e90ff] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4757] disabled:pointer-events-none disabled:opacity-50 dark:text-stone-50"
              href="/signin"
            >
              Sign Up for Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downlaod;
