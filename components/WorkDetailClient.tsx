"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Work {
  id: number;
  slug: string;
  title: string;
  tags: string;
  thumbnail: string;
  year: string;
  duration?: string;
  description: string;
  descriptionEn?: string;
  images: string[];
}

interface Props {
  work: Work;
  prevWork: Work | null;
  nextWork: Work | null;
}

export default function WorkDetailClient({ work, prevWork, nextWork }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <section className="detail-section">
        {/* ← Works */}
        <div style={{ marginBottom: 40 }}>
          <Link
            href="/"
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 13,
              color: "#71717a",
              letterSpacing: "0.04em",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#18181b")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#71717a")}
          >
            ← Works
          </Link>
        </div>

        <div className="detail-layout">
          {/* LEFT: sticky info panel */}
          <div className="detail-left">
            <div className="detail-sticky">
              <h1
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 40,
                  fontWeight: 700,
                  marginTop: 0,
                  marginBottom: 0,
                  color: "#18181b",
                }}
              >
                {work.title}
              </h1>

              <h3
                style={{
                  marginTop: 0,
                  paddingTop: 30,
                  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Project Overview
              </h3>

              {/* 한글 설명 — 18px, 500 */}
              <div
                style={{
                  paddingTop: 20,
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                {work.description.split("\n").map((line, i) => (
                  <p key={i} style={{ marginBottom: 8 }}>
                    {line}
                  </p>
                ))}
              </div>

              {/* 영문 설명 — 16px, 400 */}
              {work.descriptionEn && (
                <div
                  style={{
                    paddingTop: 16,
                    fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                    fontSize: 16,
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

              {/* Prev / Next */}
              {(prevWork || nextWork) && (
                <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                  {prevWork && (
                    <Link
                      href={`/works/${prevWork.slug}`}
                      style={{
                        flex: 1,
                        padding: "10px 0",
                        border: "1px solid #e4e4e7",
                        textAlign: "center",
                        fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                        fontSize: 12,
                        color: "#71717a",
                        transition: "border-color 0.2s, color 0.2s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "#18181b";
                        el.style.color = "#18181b";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "#e4e4e7";
                        el.style.color = "#71717a";
                      }}
                    >
                      ← Prev
                    </Link>
                  )}
                  {nextWork && (
                    <Link
                      href={`/works/${nextWork.slug}`}
                      style={{
                        flex: 1,
                        padding: "10px 0",
                        border: "1px solid #e4e4e7",
                        textAlign: "center",
                        fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                        fontSize: 12,
                        color: "#71717a",
                        transition: "border-color 0.2s, color 0.2s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "#18181b";
                        el.style.color = "#18181b";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "#e4e4e7";
                        el.style.color = "#71717a";
                      }}
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: image stack */}
          <div className="detail-right">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {work.images.map((src, i) => (
                <div
                  key={i}
                  style={{ width: "100%", cursor: "zoom-in" }}
                  onClick={() => setLightboxSrc(src)}
                >
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

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            animation: "fadeIn 0.2s ease both",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxSrc}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
