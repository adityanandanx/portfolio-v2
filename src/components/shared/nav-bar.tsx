"use client";
import { navLinks, socialLinks } from "@/lib/content";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import ResumeLink from "../specific/resume-link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-xl z-50 border-b border-border/50">
      <nav className="mx-auto py-4 px-6 md:px-10 flex justify-between items-center max-w-[1200px]">
        {/* <Link href={"/"} className="font-serif text-4xl italic font-thin">
          AN
        </Link> */}

        <Link
          href={"/"}
          className="font-serif text-4xl italic font-thin text-left group flex"
        >
          A
          <span className="group-hover:max-w-full max-w-0 inline-block self-baseline overflow-hidden transition-all opacity-0 group-hover:opacity-100 duration-700">
            ditya
          </span>
          N
          <span className="group-hover:max-w-full max-w-0 inline-block self-baseline overflow-hidden transition-all opacity-0 group-hover:opacity-100 duration-700">
            andan
          </span>
        </Link>
        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((navLink, i) => (
            <li key={navLink.href + i}>
              <NavLink href={navLink.href} n={i + 1}>
                {navLink.text}
              </NavLink>
            </li>
          ))}
          <li>
            <ResumeLink>
              <Button>Resume</Button>
            </ResumeLink>
          </li>
        </ul>
        {/* Mobile menu trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-md">
                <MenuIcon className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="flex flex-col h-full">
                <SheetTitle className="p-6 border-b flex items-center justify-between">
                  <Link
                    href={"/"}
                    className="font-serif text-3xl italic font-thin text-left group flex flex-wrap"
                  >
                    A
                    <span className="group-hover:max-w-full max-w-0 inline-block self-baseline overflow-hidden transition-all opacity-0 group-hover:opacity-100 duration-700">
                      ditya
                    </span>
                    N
                    <span className="group-hover:max-w-full max-w-0 inline-block self-baseline overflow-hidden transition-all opacity-0 group-hover:opacity-100 duration-700">
                      andan
                    </span>
                  </Link>
                </SheetTitle>
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col px-6 py-4 gap-2">
                    {navLinks.map((navLink, i) => (
                      <SheetClose asChild key={navLink.href + i}>
                        <Link
                          href={navLink.href}
                          className="flex items-center gap-3 py-3 text-lg font-medium group"
                        >
                          <span className="text-primary font-mono text-sm">
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          <span className="relative">
                            {navLink.text}
                            <span className="absolute inset-x-0 -bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                          </span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <SheetFooter className="p-6 border-t gap-4">
                  <ResumeLink>
                    <Button className="w-full" variant="default">
                      Resume
                    </Button>
                  </ResumeLink>
                  <div className="flex items-center gap-3 justify-center pt-2">
                    {socialLinks.map((s, i) => (
                      <Link
                        key={s.href + i}
                        href={s.href}
                        target="_blank"
                        className="text-xl opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {s.icon}
                      </Link>
                    ))}
                  </div>
                  <SheetDescription className="text-center text-xs">
                    © {new Date().getFullYear()} Aditya Nandan
                  </SheetDescription>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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
