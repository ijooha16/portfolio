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
      date: "2025.08",
      description: "Opic - AL (Advanced Low)",
    },
    {
      title: "중국어 (中文)",
      date: "2010 - 2016",
      description: "의사소통 가능 (중국 상하이 거주)",
    },
  ],
};

export const experience: InfoType = {
  title: "Experience",
  items: [
    {
      title: "(주)나두모두 _ 프론트엔드 개발 인턴",
      date: "2025.06 - 2025.07",
      description: "온보딩 페이지 개발 및 공통 컴포넌트 개발",
    },
    {
      title: "(주)AI 키토크 _ UX 디자인 인턴",
      date: "2022.02 - 2022.08",
      description: "UX 리서치 및 프로토타입 제작, 포스터 디자인, UI 디자인",
    },
  ],
};

export const awards: InfoType = {
  title: "Awards",
  items: [
    {
      title: "(주)스파르타 최종프로젝트 대상",
      date: "2025.05",
      description:
        "리더로 참여하여 팀 프로젝트를 성공적으로 완수, Smookie 프로젝트로 대상 수상",
    },
  ],
};

export type InfoType = {
  title: string;
  items: {
    title: string;
    date: string;
    description: string;
  }[];
};
