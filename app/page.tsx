import Image from "next/image";
import Link from "next/link";
import Separator from "@/components/Separator";
import worksData from "@/data/works.json";

export default function WorksPage() {
  return (
    <>
      <Separator />

      {/* section-4 */}
      <section
        style={{
          width: "90vw",
          paddingTop: 80,
          paddingBottom: 120,
          paddingLeft: "5vw",
          paddingRight: "5vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="works-grid">
          {worksData.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={1280}
                height={720}
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 33vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ paddingLeft: 0, paddingRight: 0 }}>
                <h3
                  style={{
                    color: "#18181B",
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: 1.4,
                    marginTop: 20,
                    marginBottom: 6,
                  }}
                >
                  {work.title}
                </h3>
                <p style={{ color: "#71717A", fontSize: 14, lineHeight: 1.5, marginBottom: 0 }}>{work.tags}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
