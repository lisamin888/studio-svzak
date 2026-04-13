import Image from "next/image";
import Link from "next/link";

interface Work {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  thumbnail: string;
  year: string;
}

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <div className="overflow-hidden bg-[#f5f5f5] aspect-[4/3] relative">
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-['Roboto'] font-medium text-[14px] text-[#2c2c2c] tracking-[0.01em]">
          {work.title}
        </h3>
        <p className="mt-1 font-['Roboto'] font-light text-[12px] text-[#2c2c2c] opacity-50 tracking-[0.02em]">
          {work.tags.join(", ")}
        </p>
      </div>
    </Link>
  );
}
