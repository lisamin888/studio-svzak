"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("studiosvzak@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box", padding: "60px 5vw 100px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

        {/* 문의 + 이메일 */}
        <div className="stagger-1">
          <p
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.65,
              color: "#3f3f46",
              marginBottom: 16,
            }}
          >
            프로젝트 문의는 아래 메일로 부탁드립니다 :)
          </p>
          <button
            onClick={handleCopy}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#18181b",
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              borderBottom: "2px solid #18181b",
              paddingBottom: 4,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            E : studiosvzak@gmail.com
            <span
              style={{
                fontSize: "clamp(11px, 1vw, 14px)",
                fontWeight: 400,
                color: "#71717a",
                letterSpacing: "0.04em",
              }}
            >
              {copied ? "✓ Copied!" : "click to copy"}
            </span>
          </button>
        </div>

        {/* spacer — extra gap between email and Location */}
        <div className="stagger-2" style={{ height: 0 }} />

        {/* Location */}
        <div className="stagger-3">
          <p
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              marginBottom: 12,
            }}
          >
            Location
          </p>
          <p
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 1.8,
              color: "#3f3f46",
            }}
          >
            (04213) 서울특별시 마포구 마포대로 114
            <br />
            114, Mapo-daero 11-gil, Mapo-gu, Seoul
          </p>
        </div>

        {/* Social */}
        <div className="stagger-4">
          <p
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              marginBottom: 12,
            }}
          >
            Social
          </p>
          <a
            href="https://www.instagram.com/studiosvzak/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "#3f3f46",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid transparent",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#3f3f46")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent")
            }
          >
            @studiosvzak
            <Image src="/common/insta-icon.webp" alt="Instagram" width={18} height={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
