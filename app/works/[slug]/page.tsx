import { notFound } from "next/navigation";
import worksData from "@/data/works.json";
import Separator from "@/components/Separator";
import WorkDetailClient from "@/components/WorkDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return worksData.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);
  if (!work) return {};
  return { title: `${work.title} – Studio SVZAK` };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);
  if (!work) notFound();

  const idx = worksData.findIndex((w) => w.slug === slug);
  const prevWork = idx > 0 ? worksData[idx - 1] : null;
  const nextWork = idx < worksData.length - 1 ? worksData[idx + 1] : null;

  return (
    <>
      <Separator />
      <WorkDetailClient work={work} prevWork={prevWork} nextWork={nextWork} />
    </>
  );
}
