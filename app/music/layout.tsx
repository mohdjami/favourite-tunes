import { playlists } from "@/components/data/Playlist";
import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";

export default function MusicLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="hidden md:block">
        <Menu />
      </div>
      <div className="block lg:hidden justify-center">
        {" "}
        <Menu />
      </div>
      <div> {children}</div>
    </section>
  );
}
