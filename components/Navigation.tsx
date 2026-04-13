"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-8 h-[60px] flex items-center justify-between">
        <Link
          href="/"
          className="font-['Roboto_Condensed'] font-bold text-[15px] tracking-[0.12em] text-[#2c2c2c] uppercase hover:opacity-70 transition-opacity"
        >
          STUDIO SVZAK
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className={`font-['Roboto'] text-[13px] tracking-[0.05em] transition-opacity ${
              pathname === "/about"
                ? "text-[#2c2c2c] opacity-100"
                : "text-[#2c2c2c] opacity-60 hover:opacity-100"
            }`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`font-['Roboto'] text-[13px] tracking-[0.05em] transition-opacity ${
              pathname === "/"
                ? "text-[#2c2c2c] opacity-100"
                : "text-[#2c2c2c] opacity-60 hover:opacity-100"
            }`}
          >
            Works
          </Link>
          <Link
            href="/contact"
            className={`font-['Roboto'] text-[13px] tracking-[0.05em] transition-opacity ${
              pathname === "/contact"
                ? "text-[#2c2c2c] opacity-100"
                : "text-[#2c2c2c] opacity-60 hover:opacity-100"
            }`}
          >
            Contact
          </Link>
          <a
            href="https://www.instagram.com/studiosvzak"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Roboto'] text-[13px] tracking-[0.05em] text-[#2c2c2c] opacity-60 hover:opacity-100 transition-opacity"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
