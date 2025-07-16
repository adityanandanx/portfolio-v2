import { navLinks } from "@/lib/content";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-xl z-50">
      <nav className="mx-auto py-6 px-10 flex justify-between">
        <Link href={"/"} className="font-serif text-4xl italic font-thin">
          AN
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((navLink, i) => (
            <li key={navLink.href + i}>
              <NavLink href={navLink.href} n={i + 1}>
                {navLink.text}
              </NavLink>
            </li>
          ))}
          <li>
            <Button>Resume</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

type NavLinkProps = {
  children?: ReactNode;
  href: string;
  n: number;
};

const NavLink = ({ children, href, n }: NavLinkProps) => {
  return (
    <Link href={href} className="inline-flex gap-2">
      <span className="text-primary">{n.toString().padStart(2, "0")}.</span>
      {children}
    </Link>
  );
};

export default NavBar;
