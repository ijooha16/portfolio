import { TagType } from "@/constants/tags.constant";

export const projects: ProjectType[] = [
  {
    title: "Smookie",
    summary: "AI 기반 감정 기록 서비스",
    features: [
      "NLP:AI를 활용한 일기 감정 분석",
      "Polling:실시간 데이터 갱신",
      "Framer Motion:감성적인 ux를 위한 애니메이션 구현",
      "PWA:웹앱 설치 기능, 오프라인 대응",
    ],
    tags: ["Personal", "Leader", "NextJs", "React", "API"],
    team: 5,
    description:
      "Smookie는 AI 기반 감정 기록 서비스입니다.\n사용자가 하루를 일기처럼 적으면, 자연어처리(NLP) 기술로 텍스트를 분석해\n감정을 도출하고, 그 감정에 어울리는 음악까지 자동으로 추천해줍니다.",
    role: "역할",
    date: "Date",
    stacks: ["NextJs", "React"],
    link: "",
    repository: "Repository Link",
    img: {
      main: {
        alt: "main",
        url: "/smookie_image.png",
      },
      sub: [{ alt: "main", url: "" }],
    },
  },
  {
    title: "2",
    summary: "AI 기반 감정 기록 서비스",
    features: [
      "NLP:AI를 활용한 일기 감정 분석",
      "Polling:실시간 데이터 갱신",
      "Framer Motion:감성적인 ux를 위한 애니메이션 구현",
      "PWA:웹앱 설치 기능, 오프라인 대응",
    ],
    tags: ["Team", "Leader", "NextJs", "React", "API"],
    team: 5,
    description:
      "Smookie는 AI 기반 감정 기록 서비스입니다.\n사용자가 하루를 일기처럼 적으면, 자연어처리(NLP) 기술로 텍스트를 분석해\n감정을 도출하고, 그 감정에 어울리는 음악까지 자동으로 추천해줍니다.",
    role: "역할",
    date: "Date",
    stacks: ["NextJs", "React"],
    link: "",
    repository: "Repository Link",
    img: {
      main: {
        alt: "main",
        url: "/smookie_image.png",
      },
      sub: [{ alt: "main", url: "" }],
    },
  },
];

export type ProjectType = {
  title: string;
  summary: string;
  features: string[];
  tags: TagType[];
  team?: number;
  description: string;
  role?: string;
  date?: string;
  stacks: string[];
  link?: string;
  repository: string;
  img: {
    main: { alt: string; url: string };
    sub?: { alt: string; url: string }[];
  };
};
