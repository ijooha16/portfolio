export const education: InfoType = {
  title: "Education",
  items: [
    {
      title: "서울여자대학교 산업디자인학과",
      date: "2018 - 2025",
      description: "제품 디자인 및 UX/UI 디자인 전공",
    },
  ],
};

export const language: InfoType = {
  title: "Language",
  items: [
    {
      title: "영어 (English)",
      date: "2025.07",
      description: "Opic - AL (Advanced Low)",
    },
    {
      title: "중국어 (中文)",
      date: "",
      description: "일상회화 가능",
    },
  ],
};

export const experience: InfoType = {
  title: "Experience",
  items: [
    {
      title: "(주)나두모두 _ 프론트엔드 개발 인턴",
      date: "2025.06 (1개월)",
      description:
        "Figma 디자인을 React·Next.js 공통 UI 컴포넌트로 옮겨 디자인 시스템 정리, 온보딩 페이지 설계·구현",
    },
    {
      title: "(주)키토크에이아이 _ UX 디자인 인턴",
      date: "2022.02 - 2022.08 (7개월)",
      description:
        "사용성 리서치로 개선 지점 도출·발표, 와이어프레임·Figma 프로토타입 설계, 배너·포스터 디자인. 이후 재택 프리랜서로 협업",
    },
  ],
};

export const training: InfoType = {
  title: "Training",
  items: [
    {
      title: "삼성청년SW·AI아카데미 (SSAFY) 15기",
      date: "2026.01 - 2026.12",
      description:
        "Java·Spring Boot 기반 SW 개발자 과정. 공통 modi(리더), 특화 ODY(기획·디자인 전담, 프론트엔드 리드), 자율 돌잡이(라벨링 도구·물리 판정)",
    },
    {
      title: "(주)팀스파르타 내일배움캠프 _ 프론트엔드 양성과정 (React)",
      date: "2024.12 - 2025.05",
      description:
        "팀 프로젝트 4회·개인 프로젝트 4회, 팀장 3회. TanStack Query, Zustand, Storybook 활용, 최종 프로젝트 Smookie 대상",
    },
  ],
};

export const abroad: InfoType = {
  title: "Abroad",
  items: [
    {
      title: "호주 워킹홀리데이",
      date: "2022.08 - 2024.02 (1년 7개월)",
      description:
        "현지 로컬 비즈니스와 다국적 동료들 사이에서 일하며 영어로 소통, 주거·비자·구직 문제를 스스로 해결",
    },
    {
      title: "중국 · 아제르바이잔 거주",
      description: "중국어 일상회화, 낯선 환경에 빠르게 적응하는 유연성",
    },
  ],
};

export const awards: InfoType = {
  title: "Awards",
  items: [
    {
      title: "삼성청년SW·AI아카데미 (SSAFY) 특화 프로젝트 2등",
      date: "2026.09",
      description:
        "ODY에서 서비스 기획·화면 정의서·UI/UX 디자인을 전담하고, 프론트엔드 리드로 지도 인터랙션을 포함한 클라이언트 전반을 구현",
    },
    {
      title: "(주)스파르타 내일배움캠프 최종 프로젝트 대상",
      date: "2025.05",
      description:
        "Smookie 팀장으로 기획·개발·발표를 이끌고, 쿼리 키 구조를 통일해 데이터 정합성 확보 (12팀 중 1위)",
    },
  ],
};

export type InfoType = {
  title: string;
  items: {
    title: string;
    date?: string;
    description?: string;
  }[];
};
