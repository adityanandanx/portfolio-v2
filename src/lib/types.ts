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

export type AwardItem = {
  title: string; // e.g., competition / award title
  organization: string; // hosting org or institution
  from?: string; // year or date label
  to?: string; // optional end (range)
  location?: string; // optional location
  details: string[]; // bullet points
};
