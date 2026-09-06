import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  AudioWaveform,
  BookOpenText,
  Brain,
  CircleDot,
  Clapperboard,
  Cpu,
  Crosshair,
  Database,
  ExternalLink,
  Film,
  Gamepad2,
  Gauge,
  Github,
  GraduationCap,
  ImageIcon,
  Layers,
  Lightbulb,
  Lock,
  Microscope,
  Network,
  Presentation,
  Route,
  Smartphone,
  Target,
  Timer,
  Trophy,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { ReactNode } from "react";

export const projectSlugs = ["heimdall", "cinema-rag", "bitflip", "nirbhay"] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

function LinkIcon({ label }: { label: string }) {
  const l = label.toLowerCase();
  if (l.includes("github")) return <Github size={16} />;
  if (l.includes("deck")) return <Presentation size={16} />;
  if (l.includes("itch") || l.includes("play")) return <Gamepad2 size={16} />;
  if (l.includes("issue")) return <CircleDot size={16} />;
  return <ExternalLink size={16} />;
}

function SectionIcon({ title }: { title: string }) {
  const t = title.toLowerCase();
  const cls = "text-primary shrink-0";
  if (t.includes("problem")) return <Target size={26} className={cls} />;
  if (t.includes("approach") || t.includes("role"))
    return <Route size={26} className={cls} />;
  if (t.includes("architecture")) return <Network size={26} className={cls} />;
  if (t.includes("learning")) return <Lightbulb size={26} className={cls} />;
  if (t.includes("measurement")) return <Gauge size={26} className={cls} />;
  if (t.includes("demo")) return <Clapperboard size={26} className={cls} />;
  if (t.includes("deep dive") || t.includes("bug"))
    return <Microscope size={26} className={cls} />;
  return <Layers size={26} className={cls} />;
}

export const statIcons = {
  issues: <CircleDot size={22} className="text-primary mx-auto" />,
  speed: <Zap size={22} className="text-primary mx-auto" />,
  chip: <Cpu size={22} className="text-primary mx-auto" />,
  lock: <Lock size={22} className="text-primary mx-auto" />,
  film: <Film size={22} className="text-primary mx-auto" />,
  database: <Database size={22} className="text-primary mx-auto" />,
  target: <Crosshair size={22} className="text-primary mx-auto" />,
  brain: <Brain size={22} className="text-primary mx-auto" />,
  timer: <Timer size={22} className="text-primary mx-auto" />,
  trophy: <Trophy size={22} className="text-primary mx-auto" />,
  users: <Users size={22} className="text-primary mx-auto" />,
  gamepad: <Gamepad2 size={22} className="text-primary mx-auto" />,
  phone: <Smartphone size={22} className="text-primary mx-auto" />,
  audio: <AudioWaveform size={22} className="text-primary mx-auto" />,
  person: <UserRound size={22} className="text-primary mx-auto" />,
  cap: <GraduationCap size={22} className="text-primary mx-auto" />,
  book: <BookOpenText size={22} className="text-primary mx-auto" />,
};

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
        className="font-mono text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-2"
      >
        <ArrowLeft size={16} /> All projects
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
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            <LinkIcon label={l.label} />
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
        <SectionIcon title={title} />
        <span>
          <span className="text-primary">{index}.</span> {title}
        </span>
      </h2>
      <div className="space-y-4 opacity-80 leading-relaxed max-w-4xl">
        {children}
      </div>
    </section>
  );
}

export function Stats({
  items,
}: {
  items: { value: string; label: string; icon?: ReactNode }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border p-4 text-center"
        >
          {s.icon}
          <div className="text-2xl font-bold mt-2">{s.value}</div>
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
        <figcaption className="text-sm opacity-60 mt-2 text-center inline-flex items-center justify-center gap-2 w-full">
          <ImageIcon size={14} className="shrink-0" />
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
