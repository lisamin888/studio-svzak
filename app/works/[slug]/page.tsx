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

  const BASE_URL = "https://svzak.com";
  const description = work.description.split("\n")[0];

  return {
    title: work.title,
    description,
    openGraph: {
      title: `${work.title} – Studio SVZAK`,
      description,
      images: [{ url: `${BASE_URL}${work.thumbnail}`, width: 1200, height: 630, alt: work.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} – Studio SVZAK`,
      description,
      images: [`${BASE_URL}${work.thumbnail}`],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);
  if (!work) notFound();

  const idx = worksData.findIndex((w) => w.slug === slug);
  const prevWork = idx > 0 ? worksData[idx - 1] : null;
  const nextWork = idx < worksData.length - 1 ? worksData[idx + 1] : null;

  const BASE_URL = "https://svzak.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.description.split("\n")[0],
    image: `${BASE_URL}${work.thumbnail}`,
    url: `${BASE_URL}/works/${work.slug}`,
    creator: { "@type": "Organization", name: "Studio SVZAK", url: BASE_URL },
    keywords: work.tags,
    dateCreated: work.year,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Separator />
      <WorkDetailClient work={work} prevWork={prevWork} nextWork={nextWork} />
    </>
  );
}
