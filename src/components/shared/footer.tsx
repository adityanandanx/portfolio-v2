"use client";
import Link from "next/link";
import { EMAIL, socialLinks } from "@/lib/content";
import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  return (
    <footer className="px-6 md:px-10 py-10 border-t mt-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 items-center text-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {socialLinks.map((s, i) => (
            <Link
              key={s.href + i}
              href={s.href}
              target="_blank"
              className="group relative inline-flex size-9 items-center justify-center rounded-md border border-border/60 hover:border-primary/60 transition-colors"
              aria-label={`Visit my profile: ${s.href}`}
            >
              <span className="absolute inset-0 rounded-md bg-primary/10 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform]" />
              <span className="text-lg group-hover:text-primary transition-colors">
                {s.icon}
              </span>
            </Link>
          ))}
        </div>
        <button
          onClick={() =>
            navigator.clipboard.writeText(EMAIL).then(() => setCopied(true))
          }
          className="relative font-mono text-xs tracking-wide uppercase opacity-60 group hover:opacity-100 transition-opacity"
          aria-label="Copy email to clipboard"
        >
          <span className="inline-block">
            {copied ? (
              <>
                <CheckIcon size={12} className="mr-1 inline-block" />
                Email copied to clipboard
              </>
            ) : (
              <>
                <CopyIcon size={12} className={`mr-2 inline-block`} />
                {EMAIL}
              </>
            )}
          </span>
        </button>
        <p className="text-xs opacity-40 font-mono">
          © {year} Aditya Nandan. Built with Next.js, Tailwind CSS and shadcn.
          Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
