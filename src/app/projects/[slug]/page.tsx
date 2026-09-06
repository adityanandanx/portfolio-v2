import { Metadata } from "next";
import { notFound } from "next/navigation";
import BitFlipPage from "@/components/projects/bitflip";
import CinemaRagPage from "@/components/projects/cinema-rag";
import HeimdallPage from "@/components/projects/heimdall";
import NirbhayPage from "@/components/projects/nirbhay";
import { projectSlugs, type ProjectSlug } from "@/components/projects/shared";

const titles: Record<ProjectSlug, string> = {
  heimdall: "Heimdall: Local AI Screen Memory",
  "cinema-rag": "Hybrid RAG: Conversational Movie Agent",
  bitflip: "BitFlip: Story Based 2D Platformer",
  nirbhay: "Nirbhay: Automated Emergency Detection",
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = (await params) as { slug: ProjectSlug };
  if (!projectSlugs.includes(slug)) return {};
  return { title: titles[slug] };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: ProjectSlug };
  if (!projectSlugs.includes(slug)) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      {slug === "heimdall" && <HeimdallPage />}
      {slug === "cinema-rag" && <CinemaRagPage />}
      {slug === "bitflip" && <BitFlipPage />}
      {slug === "nirbhay" && <NirbhayPage />}
    </main>
  );
}
