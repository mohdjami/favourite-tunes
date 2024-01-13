import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./button";
import LogoutAlert from "./LogutAlert";

const ProfileButton = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user;
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={
                  user.image ??
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4="
                }
              />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              Hi, {user?.name?.split(" ")[0] ?? user.email?.split("@")[0]}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/account">
              <DropdownMenuItem className="cursor-pointer">
                Account
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard">
              <DropdownMenuItem className="cursor-pointer">
                My Dashboard
              </DropdownMenuItem>
            </Link>
            <Link href="/music">
              <DropdownMenuItem className="cursor-pointer">
                Listen Music
              </DropdownMenuItem>
            </Link>
            <Link href="/admin">
              <DropdownMenuItem className="cursor-pointer">
                Admin Panel
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <LogoutAlert />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link className={buttonVariants()} href="/signin">
          Login
        </Link>
      )}
    </>
  );
};

export default ProfileButton;
