import Image from "next/image";
import { notFound } from "next/navigation";
import worksData from "@/data/works.json";
import Separator from "@/components/Separator";
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

  return (
    <>
      <Separator />

      <section className="detail-section">
        <div className="detail-layout">
          {/* LEFT: sticky info panel — 30% */}
          <div className="detail-left">
            <div className="detail-sticky">
              <h1
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {work.title}
              </h1>

              <h3
                style={{
                  marginTop: 0,
                  paddingTop: 30,
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Project Overview
              </h3>

              <div
                style={{
                  paddingTop: 20,
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                {work.description.split("\n").map((line, i) => (
                  <p key={i} style={{ marginBottom: 8 }}>
                    {line}
                  </p>
                ))}
              </div>

              {work.descriptionEn && (
                <div
                  style={{
                    paddingTop: 16,
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "#555",
                  }}
                >
                  {work.descriptionEn.split("\n").map((line, i) => (
                    <p key={i} style={{ marginBottom: 6 }}>
                      {line}
                    </p>
                  ))}
                </div>
              )}

              <div style={{ paddingTop: 30 }}>
                <p
                  style={{
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 4,
                  }}
                >
                  {work.tags}
                </p>
                {work.duration && (
                  <p
                    style={{
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontSize: 12,
                      color: "#888",
                    }}
                  >
                    {work.duration}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: image list — 70% */}
          <div className="detail-right">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {work.images.map((src, i) => (
                <div key={i} style={{ width: "100%" }}>
                  <Image
                    src={src}
                    alt={`${work.title} ${i + 1}`}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 991px) 100vw, 60vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
