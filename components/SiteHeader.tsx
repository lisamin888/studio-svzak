"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_URL = "/common/logo.webp";
const INSTA_ICON_URL = "/common/insta-icon.webp";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/works");
    return pathname === href;
  };

  return (
    <section className="header-section">
      {/* logo + headline */}
      <div className="header-container">
        <div>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src={LOGO_URL}
              alt="Studio SVZAK"
              width={206}
              height={60}
              priority
              style={{ display: "block", height: "auto" }}
            />
          </Link>
        </div>

        <div>
          {pathname === "/" ? (
            <h1
              className="header-heading"
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 20,
                paddingBottom: 10,
                fontFamily: "'NanumSquareNeoTTF Brg', 'NanumSquareNeo', Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              야생의 브랜드 디렉터가 등장했다!
            </h1>
          ) : (
            <p
              className="header-heading"
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 20,
                paddingBottom: 10,
                fontFamily: "'NanumSquareNeoTTF Brg', 'NanumSquareNeo', Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              야생의 브랜드 디렉터가 등장했다!
            </p>
          )}
          <h2
            className="header-subheading"
            style={{
              marginBottom: 0,
              fontFamily: "'NanumSquareNeoTTF Cbd', 'NanumSquareNeo', Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            로고 · 브랜드 아이덴티티 · 서비스 소개서 · IR Deck까지.<br />브랜드의 첫 출발과 함께합니다.
          </h2>
        </div>
      </div>

      {/* nav */}
      <nav className="header-nav">
        <div
          className="header-nav-inner"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="header-nav-menu">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{ opacity: isActive(href) ? 1 : 0.4 }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="header-nav-insta">
            <a
              href="https://www.instagram.com/studiosvzak/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              <Image
                src={INSTA_ICON_URL}
                alt="Instagram"
                width={31}
                height={31}
                style={{ maxWidth: "none" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
