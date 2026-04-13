import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Studio SVZAK",
  description:
    "Branding studio crafting quiet beginnings. Logos, decks, guides & visuals for small, growing brands. From first step, with care — SVZAK.",
  openGraph: {
    title: "Studio SVZAK",
    description:
      "Branding studio crafting quiet beginnings. Logos, decks, guides & visuals for small, growing brands.",
    siteName: "Studio SVZAK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ maxWidth: "100vw", paddingLeft: 0, paddingRight: 0 }}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
