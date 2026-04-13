import type { MetadataRoute } from "next";
import worksData from "@/data/works.json";

const BASE_URL = "https://studiosvzak.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = worksData.map((work) => ({
    url: `${BASE_URL}/works/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...workPages,
  ];
}
