import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import FeatureCards from "./Features";
import Testimonials from "./Testimonials";
import Downlaod from "./Downlaod";
export default async function Hero() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-4">
      <div className="flex flex-wrap mx-2">
        <main className="flex-1">
          <section
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1e90ff] text-white dark:bg-inherit rounded mt-4"
            id="overview"
          >
            <div className="container px-4 md:px-6 dark:text-cyan-900">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-stone-50">
                    Discover Your Next Favourite Tune
                  </h1>
                  <p className="mx-auto max-w-[700px] hover:bg-teal-600 dark:text-cyan-100 ">
                    With our app, you can explore new music, create playlists,
                    and share your favourite tunes with friends. Get started
                    today!
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#ff4757] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#ff6b81] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4757] disabled:pointer-events-none disabled:opacity-50 dark:text-white"
                    href="/signin"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-[#1e90ff] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4757] disabled:pointer-events-none disabled:opacity-50 "
                    href="https://www.github.com/mohdjami"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <FeatureCards />
          <Testimonials />
          <Downlaod />
        </main>
      </div>
    </div>
  );
}

function ListMusicIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M21 15V6" />
      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M12 12H3" />
      <path d="M16 6H3" />
      <path d="M12 18H3" />
    </svg>
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

function ShareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
