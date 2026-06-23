"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Work {
  id: number;
  slug: string;
  title: string;
  tags: string;
  year: string;
  thumbnail: string;
}

interface Props {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/works/${work.slug}`}
      style={{
        display: "block",
        animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${0.04 + index * 0.07}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#f4f4f5",
          aspectRatio: "4/3",
        }}
      >
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 991px) calc(50vw - 48px), calc(33vw - 48px)"
          style={{
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(24,24,27,0.82)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "20px 24px",
              animation: "fadeIn 0.25s ease both",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 6,
                opacity: 0.6,
              }}
            >
              {work.tags}
            </p>
            <p
              style={{
                color: "#fff",
                fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              View Project →
            </p>
          </div>
        )}
      </div>

      <div style={{ paddingTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#18181b",
            }}
          >
            {work.title}
          </h3>
          <span
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 12,
              color: "#a1a1aa",
            }}
          >
            {work.year}
          </span>
        </div>
        <p
          style={{
            marginTop: 4,
            fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            fontSize: 14,
            color: "#71717a",
            lineHeight: 1.5,
          }}
        >
          {work.tags}
        </p>
      </div>
    </Link>
  );
}
