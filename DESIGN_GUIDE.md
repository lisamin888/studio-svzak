# Studio SVZAK Design & Development Guide

## 1. Design Identity: "Ancient Future"
- **Philosophy:** 불필요한 데코레이션을 배제하고, 여백과 타이포그래피의 힘으로 정보를 전달한다.
- **Mood:** 정갈함, 신뢰감, 현대적이면서도 유행을 타지 않는(Timeless) 느낌.
- **Color Palette:**
  - Background: `#FFFFFF` (Pure White)
  - Text Primary: `#18181B` (Zinc-900)
  - Text Secondary: `#71717A` (Zinc-500)
  - Accent: 브랜딩 포인트 컬러 1종만 제한적으로 사용.

## 2. UI/UX Principles (Webflow Reference)
- **Grid System:**
  - Desktop: 2열 또는 3열 그리드 (Work 리스트).
  - Mobile: 1열로 유연하게 대응.
  - 여백(Gap)은 `gap-6` 또는 `gap-8` (32px~48px) 정도로 넉넉하게 설정한다.
- **Typography:**
  - Font: 'Pretendard'를 기본으로 하며, 제목은 `font-bold`, 본문은 `font-normal`로 대비를 준다.
  - Line-height: 본문 가독성을 위해 `leading-relaxed` (1.625) 이상을 유지한다.
- **Components:**
  - 모든 컴포넌트는 `shadcn/ui`를 베이스로 하되, 기본 패딩과 보더 라운드 값을 줄여서 더 날카롭고 모던하게 커스텀한다.
  - Card: 그림자 효과보다는 얇은 보더(`border-zinc-200`)나 순수 여백을 활용한다.

## 3. Interaction (Framer Motion)
- **Entrance:** 페이지 진입 시 섹션들이 아래에서 위로 부드럽게 올라오는 `y: 20, opacity: 0` -> `y: 0, opacity: 1` 효과를 적용한다.
- **Hover:** 포트폴리오 썸네일 호버 시 미세한 스케일 업(`scale: 1.02`) 또는 오버레이 텍스트 노출 효과를 선호한다.

## 4. Coding Standard
- Next.js 14+ App Router 기반.
- 스타일은 오직 Tailwind CSS만 사용하며, 하드코딩된 HEX값 보다는 `tailwind.config.ts`에 정의된 변수를 사용한다.
- SEO를 위해 각 프로젝트 페이지에 적절한 Metadata 설정을 포함한다.
