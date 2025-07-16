import {
  SiGithub,
  SiInstagram,
  SiWhatsapp,
  SiX,
} from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "lucide-react";
import { ReactNode } from "react";

export const navLinks: {
  href: string;
  text: string;
}[] = [
  { href: "/", text: "About" },
  { href: "/", text: "Experience" },
  { href: "/", text: "Projects" },
  { href: "/", text: "Award" },
  { href: "/", text: "Contact" },
];

export const socialLinks: { href: string; icon: ReactNode }[] = [
  { href: "https://github.com/adityanandanx", icon: <SiGithub /> },
  {
    href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
    icon: <LinkedinIcon />,
  },
  { href: "https://www.instagram.com/adityanandan.zip", icon: <SiInstagram /> },
  { href: "https://x.com/adithatsit", icon: <SiX /> },
  { href: "https://wa.link/8z1d77", icon: <SiWhatsapp /> },
];

export const stuff: string[] = [
  "websites",
  "mobile apps",
  "ui/ux designs",
  "machine learning",
  "ai",
];
