"use client";

import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "/common/logo.webp";
const INSTA_ICON_URL = "/common/insta-icon.webp";

export default function SiteHeader() {
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
          <h1
            className="header-heading"
            style={{
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 20,
              paddingBottom: 20,
              fontFamily: "'NanumSquareNeoTTF Brg', 'NanumSquareNeo', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            야생의 브랜드 디렉터가 등장했다!
            <br />
            스튜디오 스브작은 브랜드가 태어나는 첫 순간부터 함께 합니다.
          </h1>
          <p
            className="header-subheading"
            style={{
              marginBottom: 0,
              fontFamily: "'NanumSquareNeoTTF Cbd', 'NanumSquareNeoBold', Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            로고와 키비주얼을 포함한 브랜드 아이덴티티 개발과 브랜드의 서비스
            소개, IR Deck을 함께 다룹니다.
          </p>
        </div>
      </div>

      {/* nav */}
      <nav className="header-nav">
        <div
          className="header-nav-inner"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="header-nav-menu">
            <Link href="/about">About</Link>
            <Link href="/">
              <span>Works</span>
            </Link>
            <Link href="/contact">Contact</Link>
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
