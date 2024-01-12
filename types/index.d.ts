import { IconKeys } from "@/components/Icons";
export type Context = {
  params: {
    [key: string]: string;
  };
};
export type Song = {
  artistName: any;
  id: number;
  title: string;
  artistId: number;
};
export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
  };
  ogImage: string;
};

export type Navigation = {
  data: NavItem[];
};

export type SearchParams = {
  from: string;
  to: string;
};
