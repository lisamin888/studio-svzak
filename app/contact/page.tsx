import type { Metadata } from "next";
import Separator from "@/components/Separator";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact – Studio SVZAK",
};

export default function ContactPage() {
  return (
    <>
      <Separator />
      <ContactClient />
    </>
  );
}
