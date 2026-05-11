import Separator from "@/components/Separator";
import WorkCard from "@/components/WorkCard";
import worksData from "@/data/works.json";

export default function WorksPage() {
  return (
    <>
      <Separator />
      <section className="works-section">
        <div className="works-grid">
          {worksData.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
