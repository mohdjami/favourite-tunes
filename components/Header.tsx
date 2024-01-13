import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { ModeToggle } from "./ui/mode-toggle";
import Script from "next/script";
import HeaderRoutes from "./header-routes";

const Header = () => {
  const routes = [
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
      label: "Dashboard",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-12 items-center justify-between w-full mx-auto max-w-7xl">
        <HeaderRoutes />
        <div className="flex items-center justify-center">
          <ModeToggle /> &nbsp; &nbsp;
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
