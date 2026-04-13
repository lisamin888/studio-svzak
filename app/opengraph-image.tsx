import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Studio SVZAK — 브랜딩 스튜디오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: "#18181B", letterSpacing: "-2px", marginBottom: 24 }}>
          Studio SVZAK
        </div>
        <div style={{ fontSize: 28, color: "#71717A", lineHeight: 1.5, maxWidth: 800 }}>
          브랜드가 태어나는 첫 순간부터 함께합니다.
          <br />
          로고, 브랜드 가이드, IR Deck, 키비주얼
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 100,
            fontSize: 18,
            color: "#71717A",
          }}
        >
          studiosvzak.vercel.app
        </div>
      </div>
    ),
    size
  );
}
