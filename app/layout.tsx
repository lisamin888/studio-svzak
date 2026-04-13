import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BASE_URL = "https://studiosvzak.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Studio SVZAK",
    template: "%s – Studio SVZAK",
  },
  description:
    "초기 브랜드를 위한 브랜딩 스튜디오. 로고, 브랜드 가이드, IR Deck, 키비주얼까지 브랜드가 태어나는 첫 순간부터 함께합니다.",
  keywords: ["브랜딩", "로고 디자인", "브랜드 아이덴티티", "IR Deck", "스타트업 브랜딩", "스튜디오 스브작", "Studio SVZAK"],
  authors: [{ name: "Studio SVZAK" }],
  creator: "Studio SVZAK",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "Studio SVZAK",
    title: "Studio SVZAK — 브랜딩 스튜디오",
    description: "초기 브랜드를 위한 브랜딩 스튜디오. 로고, 브랜드 가이드, IR Deck, 키비주얼까지 함께합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio SVZAK — 브랜딩 스튜디오",
    description: "초기 브랜드를 위한 브랜딩 스튜디오. 로고, 브랜드 가이드, IR Deck, 키비주얼까지 함께합니다.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Studio SVZAK",
  url: "https://studiosvzak.vercel.app",
  email: "studiosvzak@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "마포대로 114",
    addressLocality: "마포구",
    addressRegion: "서울특별시",
    postalCode: "04213",
    addressCountry: "KR",
  },
  description: "초기 브랜드를 위한 브랜딩 스튜디오. 로고, 브랜드 가이드, IR Deck, 키비주얼.",
  knowsAbout: ["브랜딩", "로고 디자인", "브랜드 아이덴티티", "IR Deck", "키비주얼"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ maxWidth: "100vw", paddingLeft: 0, paddingRight: 0 }}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
