import { ReactNode } from "react";

export type Project = {
  coverImg?: string;
  href?: string;
  githubLink: string;
  title: string;
  desc: string;
  tags: string[];
};

export type NavLink = {
  href: string;
  text: string;
};

export type SocialLink = {
  href: string;
  icon: ReactNode;
};
