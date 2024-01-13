import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
const Testimonials = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-[#b6bdd3] rounded mt-4 "
      id="testimonials"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-[#2f3542]">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-16 w-16 bg-slate-50 dark:bg-white">
              <AvatarImage alt="Mohd Jami" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-lg font-semibold text-[#2f3542]">
              Mohd Jami
            </h3>
            <p className="mt-2 text-gray-600">
              &quot;My Favourite Tunes has completely changed the way I listen
              to music. I love the playlist feature!&quot;
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User 2" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-lg font-semibold text-[#2f3542]">
              User 2
            </h3>
            <p className="mt-2 text-gray-600">
              &quot;I&apos;ve discovered so many new artists through this app.
              It&apos;s a game changer.&quot;
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User 3" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-lg font-semibold text-[#2f3542]">
              User 3
            </h3>
            <p className="mt-2 text-gray-600">
              &quot;The user interface is intuitive and easy to navigate. I
              highly recommend My Favourite Tunes.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
