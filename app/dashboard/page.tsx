"use client";
import Container from "@/components/ui/container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1e90ff] text-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-sky-500">
              Ready to Discover Your Next Favourite Tune?
            </h1>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#ff4757] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#ff6b81] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4757] disabled:pointer-events-none disabled:opacity-50 dark:bg-white text-pretty text-black"
              href="/music"
            >
              Start Listening Music
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
