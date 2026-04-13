import type { Metadata } from "next";
import Image from "next/image";
import Separator from "@/components/Separator";

export const metadata: Metadata = {
  title: "About – Studio SVZAK",
};

const ARROW_ICON = "/common/arrow.webp";

const processSteps = [
  { num: "(01)", en: "Understanding\nthe Project", ko: "프로젝트의 이해" },
  { num: "(02)", en: "Research\nIdeation", ko: "리서치 진행 및\n아이데이션" },
  { num: "(03)", en: "Goal Alignment\nPlanning", ko: "목표 동기화와 조율" },
  { num: "(04)", en: "Design\nExecution", ko: "디자인 진행" },
  { num: "(05)", en: "Final Review\nRefinement", ko: "최종 리뷰 및 조율", last: true },
];

export default function AboutPage() {
  return (
    <>
      <Separator />

      {/* section-6 */}
      <section
        style={{
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Block 1: 뭐 하는 곳 인가요? */}
        <div style={{ padding: "0 5vw 10px" }}>
          <h1
            style={{
              paddingTop: 0,
              paddingBottom: 10,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 38,
              fontWeight: 700,
              display: "block",
            }}
          >
            뭐 하는 곳 인가요?
          </h1>
          <p
            style={{
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 28,
              fontWeight: 600,
              lineHeight: "46px",
            }}
          >
            초기 브랜드 빌드업 스튜디오
            <br />
            브랜드 에셋 연구 개발
            <br />
            일관적인 브랜드 그래픽 제작 전반
          </p>
          <p
            style={{
              display: "flex",
              flexFlow: "row",
              marginTop: 0,
              marginBottom: "auto",
              paddingTop: 20,
              paddingBottom: 0,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "32px",
            }}
          >
            &apos;사부작대다&apos;의 감각과 &apos;스몰 브랜드 작업실&apos;이라는 의미를
            언어유희적으로 결합한 브랜딩 스튜디오입니다.
            <br />
            다년간 스타트업과 초기 브랜드를 위한 로고, 회사 소개서, 브랜드
            가이드, 브랜드 에셋 등을 개발해 왔으며,
            <br />
            패키지 디자인, 상세페이지, 온·오프라인 마케팅에 필요한 시각 언어
            전반을 함께 다룹니다.
            <br />
            브랜드가 처음 태어나는 순간부터, 스브작은 가장 가까운 자리에
            함께합니다.
          </p>
          <p
            style={{
              color: "#424242",
              paddingTop: 20,
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            <strong>Studio SVZAK</strong> is a branding studio rooted in the
            playful Korean word <em>&ldquo;sabujakda,&rdquo;</em> meaning to
            craft gently and attentively—just like we do with small brands.
            <br />
            We build core brand assets for startups: logos, decks, guides, and
            visual systems.
            <br />
            We also design packaging, pages, and everything a young brand needs
            to speak clearly and beautifully. At SVZAK, we stay close—quietly
            shaping the story from the very first step.
          </p>
        </div>

        <Separator />

        {/* Block 2: 뭘 할 수 있나요? */}
        <div style={{ padding: "0 5vw 10px" }}>
          <h1
            style={{
              paddingTop: 0,
              paddingBottom: 10,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 38,
              fontWeight: 700,
              display: "block",
            }}
          >
            뭘 할 수 있나요?
          </h1>
          <div className="about-services">
            <div style={{ paddingRight: "7vw" }}>
              <p
                style={{
                  marginTop: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: "46px",
                }}
              >
                Brand Design
              </p>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 22,
                  lineHeight: "40px",
                }}
              >
                <strong>ㆍ</strong>Naming
                <br />
                <strong>ㆍ</strong>Slogan
                <br />
                <strong>ㆍ</strong>Brand Story
                <br />
                <strong>ㆍ</strong>Logo
                <br />
                <strong>ㆍ</strong>Bx System
                <br />
                <strong>ㆍ</strong>IR Deck
              </p>
            </div>
            <div style={{ paddingRight: "7vw" }}>
              <p
                style={{
                  marginTop: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: "46px",
                }}
              >
                Visual Identity
              </p>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 22,
                  lineHeight: "40px",
                }}
              >
                <strong>ㆍ</strong>Graphic Design
                <br />
                <strong>ㆍ</strong>Illustration
                <br />
                <strong>ㆍ</strong>Key Visual
                <br />
                <strong>ㆍ</strong>Art Work
                <br />
                <strong>ㆍ</strong>Label Design
                <br />
                <strong>ㆍ</strong>Motion Graphic
              </p>
            </div>
            <div>
              <p
                style={{
                  marginTop: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: "46px",
                }}
              >
                Marketing Contents
              </p>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                  fontSize: 22,
                  lineHeight: "40px",
                }}
              >
                <strong>ㆍ</strong>SNS Contents
                <br />
                <strong>ㆍ</strong>Landing Page
                <br />
                <strong>ㆍ</strong>Banner
                <br />
                <strong>ㆍ</strong>Detailed page
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Block 3: 어떻게 일하나요? */}
        <div style={{ padding: "0 5vw 10px" }}>
          <h1
            style={{
              paddingTop: 0,
              paddingBottom: 10,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 38,
              fontWeight: 700,
              display: "block",
            }}
          >
            어떻게 일하나요?
          </h1>
          <p
            style={{
              display: "flex",
              flexFlow: "row",
              marginTop: 0,
              marginBottom: "auto",
              paddingTop: 20,
              paddingBottom: 0,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "32px",
            }}
          >
            프로젝트 내용에 대한 깊은 이해를 통해, 리서치와 아이데이션을
            진행합니다. 진행된 내용을 바탕으로 세부 사항을 조율 하고, 의견을
            취합합니다.
            <br />
            이 과정을 충분히 거치며 목표에 대해 명확한 비전을 제시합니다. 이후
            도출된 아이디어와 리서치 결과를 바탕으로 본격적인 디자인을
            진행하며, 이를 시각적으로 구체화합니다.
          </p>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Through a deep understanding of the project, we conduct thorough
            research and ideation.
            <br />
            Based on the findings, we align detailed requirements and gather
            insights to ensure everyone is on the same page.
            <br />
            This collaborative process helps define a clear and shared vision.
            <br />
            With well-developed ideas and research in place, we move into
            full-scale design and bring the concept to life through visual
            execution.
          </p>

          {/* div-block-14: process steps */}
          <div className="about-process">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                {/* div-block-11 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {step.num}
                  </div>
                  <h1
                    style={{
                      marginTop: 10,
                      fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
                      fontSize: 28,
                      lineHeight: "32px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {step.en}
                  </h1>
                  <p
                    style={{
                      marginTop: 10,
                      fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
                      fontSize: 22,
                      fontWeight: 500,
                      lineHeight: "28px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {step.ko}
                  </p>
                </div>
                {/* arrow (not on last step) */}
                {!step.last && (
                  <div className="process-arrow">
                    <Image
                      src={ARROW_ICON}
                      alt="→"
                      width={40}
                      height={20}
                      style={{ maxWidth: 40 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Block 4: Contact */}
        <div style={{ padding: "0 5vw 10px" }}>
          <h1
            style={{
              paddingTop: 0,
              paddingBottom: 10,
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 38,
              fontWeight: 700,
              display: "block",
            }}
          >
            Contact
          </h1>
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
          <h1
            style={{
              fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
            }}
          >
            E : studiosvzak@gmail.com
          </h1>
          <p
            style={{
              color: "#2c2c2c",
              fontFamily: "'Pretendard Variable', Pretendard, Arial, sans-serif",
              fontSize: 18,
              lineHeight: "28px",
              textDecoration: "none",
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
