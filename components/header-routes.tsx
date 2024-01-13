import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MusicIcon } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "./ui/button";

const HeaderRoutes = async () => {
  const session = await getServerSession(authOptions);

  const loggedIn = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/music",
      label: "Music",
    },
    {
      href: "/#features",
      label: "Features",
    },
    {
      href: "/#testimonials",
      label: "Testimonials",
    },
    {
      href: "/#download",
      label: "Download",
    },
  ];
  const loggedOut = [
    {
      href: "/overview",
      label: "Overview",
    },
    {
      href: "/#features",
      label: "Features",
    },
    {
      href: "/#testimonials",
      label: "Testimonials",
    },
    {
      href: "/#download",
      label: "Download",
    },
  ];
  const user = session?.user;
  if (session?.user.role === "admin") {
    loggedIn.push({
      href: "/admin",
      label: "Admin",
    });
  }
  const routes = user ? loggedIn : loggedOut;
  return (
    <>
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 md:hidden w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  className="block px-2 py-1 text-lg"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link className="flex items-center justify-center" href="/">
          <MusicIcon className="h-6 w-6 text-[#ff4757]" />
          <span className="ml-2 text-lg font-bold text-[#2f3542] dark:text-stone-50">
            My Favourite Tunes
          </span>
        </Link>
      </div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
        {routes.map((route, i) => (
          <Button asChild variant="ghost" key={i}>
            <Link
              key={i}
              href={route.href}
              className="text-sm font-medium transition-colors"
            >
              {route.label}
            </Link>
          </Button>
        ))}
      </nav>
    </>
  );
};

export default HeaderRoutes;
