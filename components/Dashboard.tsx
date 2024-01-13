import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col ">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Music App</h1>
          <form className="relative w-full">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8"
              placeholder="Search for songs or artists..."
              type="search"
            />
          </form>
        </div>
        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
          <nav className="text-sm text-gray-500 grid gap-4 dark:text-gray-400">
            <Link
              className="font-semibold text-gray-900 dark:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link href="#">Library</Link>
            <Link href="#">Playlists</Link>
            <Link href="#">Discover</Link>
            <Link href="#">Settings</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recently Played</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <img
                      alt="Album Cover"
                      className="rounded-md"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="text-sm font-medium">Song Title</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Artist Name
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      alt="Album Cover"
                      className="rounded-md"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="text-sm font-medium">Song Title</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Artist Name
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Favorite Playlists</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <img
                      alt="Album Cover"
                      className="rounded-md"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="text-sm font-medium">Playlist Name</div>
                    <Button className="mt-2" variant="outline">
                      Play
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      alt="Album Cover"
                      className="rounded-md"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="text-sm font-medium">Playlist Name</div>
                    <Button className="mt-2" variant="outline">
                      Play
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
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
