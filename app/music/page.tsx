import Music from "@/components/Music";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const MusicPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex overflow-auto w-full">
      <Music />
    </main>
  );
};

export default MusicPage;
