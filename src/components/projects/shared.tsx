import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const projectSlugs = ["heimdall", "cinema-rag", "bitflip", "nirbhay"] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

export function PageHero({
  kicker,
  title,
  tagline,
  links,
}: {
  kicker: string;
  title: string;
  tagline: string;
  links: { label: string; href: string }[];
}) {
  return (
    <header className="pt-28 pb-10">
      <Link
        href="/#projects"
        className="font-mono text-sm text-primary hover:underline underline-offset-4"
      >
        &larr; All projects
      </Link>
      <p className="font-mono text-sm text-primary mt-8">{kicker}</p>
      <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">
        {title}
      </h1>
      <p className="text-xl opacity-70 mt-4 max-w-3xl">{tagline}</p>
      <div className="flex flex-wrap gap-3 mt-6">
        {links.map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-8 border-t border-border">
      <h2 className="text-2xl font-mono flex items-center gap-3 mb-5">
        <span className="text-primary">{index}.</span> {title}
      </h2>
      <div className="space-y-4 opacity-80 leading-relaxed max-w-4xl">
        {children}
      </div>
    </section>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border p-4 text-center"
        >
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-sm opacity-60 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1156}
        height={650}
        className="rounded-xl border border-border w-full h-auto"
      />
      {caption && (
        <figcaption className="text-sm opacity-60 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArchList({ items }: { items: string[] }) {
  return (
    <ul className="list-outside ml-5 list-disc space-y-2">
      {items.map((i) => (
        <li key={i.slice(0, 48)}>{i}</li>
      ))}
    </ul>
  );
}
