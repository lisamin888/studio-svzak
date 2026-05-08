import type { Metadata } from "next";
import Separator from "@/components/Separator";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "스튜디오 스브작에 프로젝트를 문의하세요. 브랜딩, 로고, IR Deck, 키비주얼 등 초기 브랜드를 위한 모든 디자인 작업을 함께합니다.",
  openGraph: {
    title: "Contact – Studio SVZAK",
    description: "스튜디오 스브작에 프로젝트를 문의하세요.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Separator />
      <ContactClient />
    </>
  );
}
