import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "favourite-tunes",
  author: "mohdjami",
  description: "Listen to your favourite songs for free",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/mohdjami",
  },
  links: {
    github: "https://github.com/mohdjami/favourite-tunes",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
