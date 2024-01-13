import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { HandMetal, MusicIcon } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { Session, getServerSession } from "next-auth";
import UserAccountNav from "./UserAccountNav";
import { ModeToggle } from "./ui/mode-toggle";
import { cva } from "class-variance-authority";
const session: Session | null = await getServerSession(authOptions);

const Navbar = async () => {
  return (
    <div>
      <main>
        {" "}
        <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
          <div className="container flex items-center justify-between">
            <Link className="flex items-center justify-center" href="/">
              <MusicIcon className="h-6 w-6 text-[#ff4757]" />
              <span className="ml-2 text-lg font-bold text-[#2f3542]">
                My Favourite Tunes
              </span>
            </Link>
            <div className="hidden sm:flex items-center">
              <header className="px-4 lg:px-6 h-16 flex items-center">
                {session ? (
                  <nav className="ml-auto flex gap-4 sm:gap-6">
                    {" "}
                    <Link
                      className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                    {session?.user?.role === "normal" ? (
                      <Link
                        className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                        href="/music"
                      >
                        Music
                      </Link>
                    ) : (
                      <>
                        <Link
                          className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                          href="/music"
                        >
                          Music
                        </Link>
                        <Link
                          className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                          href="/admin"
                        >
                          Admin Panel
                        </Link>
                      </>
                    )}
                  </nav>
                ) : (
                  <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                      className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                      href="/#features"
                    >
                      Features
                    </Link>
                    <Link
                      className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                      href="/#testimonials"
                    >
                      Testimonials
                    </Link>
                    <Link
                      className="text-sm font-medium hover:underline underline-offset-4 text-[#2f3542]"
                      href="/#download"
                    >
                      Download
                    </Link>
                  </nav>
                )}
              </header>
            </div>
            <div className="sm:hidden">{/* Hamburger menu icon here */}</div>
            <div className="flex items-center">
              {session?.user ? (
                <UserAccountNav />
              ) : (
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href="/signin"
                >
                  Log in / Sign up
                </Link>
              )}{" "}
              &nbsp; &nbsp;
              <ModeToggle />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
