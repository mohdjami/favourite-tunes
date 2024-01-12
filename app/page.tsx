import Hero from "@/components/Hero";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function Index() {
  return <Hero />;
}
