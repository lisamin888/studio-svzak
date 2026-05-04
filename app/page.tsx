import Separator from "@/components/Separator";
import WorkCard from "@/components/WorkCard";
import worksData from "@/data/works.json";

export default function WorksPage() {
  return (
    <>
      <Separator />
      <section
        style={{
          width: "90vw",
          margin: "0 auto",
          padding: "60px 5vw 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 40,
            rowGap: 56,
          }}
        >
          {worksData.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
