import type { Metadata } from "next";
import Separator from "@/components/Separator";

export const metadata: Metadata = {
  title: "Contact – Studio SVZAK",
};

export default function ContactPage() {
  return (
    <>
      <Separator />

      {/* section-2 reused as contact content container */}
      <section
        style={{
          width: "90vw",
          height: "auto",
          padding: "20px 5vw 40px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      >
        {/* div-block-18 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 33,
          }}
        >
          <p
            style={{
              color: "#2c2c2c",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 0,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "32px",
            }}
          >
            프로젝트 문의는 아래 메일로 부탁드립니다 :)
          </p>
          <p
            className="contact-email-text"
            style={{ color: "#2c2c2c", marginBottom: 0 }}
          >
            E : <span>studiosvzak@gmail.com</span>
          </p>
          <p
            style={{
              color: "#2c2c2c",
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "28px",
              textDecoration: "none",
              marginBottom: 0,
            }}
          >
            (04213) 서울특별시 마포구 마포대로 114
            <br />
            114, Mapo-daero 11-gil, Mapo-gu, Seoul
          </p>
        </div>
      </section>
    </>
  );
}
