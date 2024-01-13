import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  //   const session = await getServerSession(authOptions);
  //   if (session?.user.role === "normal" || !session) {
  //     redirect("/");
  //   }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-center mt-8">
          <span className="text-gray-600 dark:text-gray-300 text-2xl font-semibold">
            Music App
          </span>
        </div>
        <nav className="mt-10 px-6 ">
          <Link
            className="flex items-center mt-4 text-gray-600 dark:text-gray-300"
            href="#"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <Link
            className="flex items-center mt-4 text-gray-600 dark:text-gray-300"
            href="#"
          >
            <SearchIcon className="w-5 h-5" />
            <span className="mx-4 font-medium">Search</span>
          </Link>
          <Link
            className="flex items-center mt-4 text-gray-600 dark:text-gray-300"
            href="#"
          >
            <LibraryIcon className="w-5 h-5" />
            <span className="mx-4 font-medium">Library</span>
          </Link>
          <Link
            className="flex items-center mt-4 text-gray-600 dark:text-gray-300"
            href="#"
          >
            <ListMusicIcon className="w-5 h-5" />
            <span className="mx-4 font-medium">Playlist</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-6 border-b-4 border-indigo-500">
          <h2 className="text-2xl font-semibold">Your Favorite Tunes</h2>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                alt="Album Cover"
                className="w-full h-48 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Song Title</h3>
                <p className="text-gray-500">Artist Name</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <footer className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-t-4 border-indigo-500">
          <div className="flex items-center">
            <Image
              alt="Album Cover"
              className="rounded-full"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <div className="mx-4">
              <h4 className="text-lg font-semibold">Currently Playing Song</h4>
              <p className="text-gray-500">Artist Name</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button size="icon" variant="ghost">
              <SkipBackIcon className="w-5 h-5" />
            </Button>
            <Button className="mx-2" size="icon" variant="ghost">
              <PlayIcon className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <SkipForwardIcon className="w-5 h-5" />
            </Button>
          </div>
        </footer>
      </main>
    </div>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LibraryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
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

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
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

function SkipBackIcon(
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
      <polygon points="19 20 9 12 19 4 19 20" />
      <line x1="5" x2="5" y1="19" y2="5" />
    </svg>
  );
}

function SkipForwardIcon(
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
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" x2="19" y1="5" y2="19" />
    </svg>
  );
}
