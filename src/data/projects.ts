import { TagType } from "@/constants/tags.constant";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Smookie",
    summary: "AI 기반 감정 기록 서비스",
    features: [
      "NLP: AI를 활용한 일기 감정 분석",
      "Polling: 실시간 데이터 갱신",
      "Framer Motion: 감성적인 UX를 위한 애니메이션 구현",
      "PWA: 웹앱 설치 기능과 오프라인 대응",
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
    id: 2,
    title: "Play Link",
    summary: "운동 매칭 서비스",
    features: [
      "사용자 맞춤 추천: 위치 및 관심 운동 기반 사용자 매칭",
      "웹소켓: 웹소켓 기반 채팅 및 알림 기능",
      "naver 지도 API: 위치 기반 서비스",
    ],
    tags: ["Team", "NextJs", "API"],
    team: 5,
    description:
      "Play Link는 위치나 흥미 있는 운동을 기반으로 서로를 찾아 함께 운동할 수 있는 서비스입니다.\n채팅을 통해 다른 사용자와 약속을 잡을 수 있습니다.\n현재 진행 중인 팀 프로젝트입니다.",
    role: "팀원",
    date: "Date",
    stacks: ["NextJs", "React"],
    link: "",
    repository: "",
    img: {
      main: {
        alt: "play link",
        url: "/play_link_main.png",
      },
      sub: [],
    },
  },
  {
    id: 3,
    title: "AI 목표 달성 서비스",
    summary: "AI와 함께 목표를 세우고 달성하는 개인 프로젝트",
    features: [
      "Gemini AI: 목표 달성 도우미",
      "Supabase: 데이터베이스 및 인증 인가",
    ],
    tags: ["Personal", "NextJs", "API"],
    team: 1,
    description:
      "프롬프트 형식으로 AI에게 목표 설정을 요청하면 AI가 도와주고\n 함께 목표를 달성해 나가는 서비스입니다.\n백엔드까지 모두 직접 구현했습니다.",
    role: "개발자",
    date: "Date",
    stacks: ["NextJs", "React", "Supabase"],
    link: "",
    repository: "https://github.com/ijooha16/ai-scheduler",
    img: {
      main: {
        alt: "ai goal",
        url: "/aigoal_main.png",
      },
      sub: [],
    },
  },
  {
    id: 4,
    title: "Hash-Cafe",
    summary: "현재 위치 기반 주변 카페 탐색 서비스",
    features: [
      "소통: 태그 기반 카페 후기 작성 기능",
      "TanStack Query: 데이터 패칭 및 캐싱",
      "카카오맵 API: 지도 API를 활용한 카페 위치 표시",
    ],
    tags: ["Team", "Leader", "React", "API"],
    team: 5,
    description:
      "Hash-Cafe는 현재 위치를 기준으로 주변 카페를 탐색하고,\n사용자들이 태그로 카페 후기를 남길 수 있는 서비스입니다.\n팀 프로젝트에서 리더를 맡아 지도 API 관련 작업과 전체 코드 총괄을 담당했습니다.",
    role: "팀 리더",
    date: "Date",
    stacks: ["React", "TanStack Query"],
    link: "",
    repository: "https://github.com/ijooha16/u-know-running",
    img: {
      main: {
        alt: "hash cafe",
        url: "/hash_cafe_main.png",
      },
      sub: [],
    },
  },
  {
    id: 5,
    title: "MBTI 검사 사이트",
    summary: "React로 만든 개인 프로젝트",
    features: ["반응형: 반응형 구현 ", "JSON server: 데이터 관리", "Zustand: 전역 상태 관리"],
    tags: ["Personal", "React"],
    team: 1,
    description:
      "React로 만든 개인 MBTI 검사 사이트입니다.\nJSON 서버를 사용해 데이터를 관리하고 Zustand를 이용해 전역 상태 관리를 구현했습니다.",
    role: "",
    date: "2025/02/19 - 2025/02/24 (6일)",
    stacks: ["React", "Zustand"],
    link: "https://free-mbti-test.vercel.app/",
    repository: "https://github.com/ijooha16/free-mbti-test",
    img: {
      main: {
        alt: "mbti test",
        url: "/mbti_main.png",
      },
      sub: [{
        alt: "mbti test sub",
        url: "/mbti_sub.png",
      }, {
        alt: "mbti test sub2",
        url: "/mbti_sub2.png",
      }, {
        alt: "mbti test sub3",
        url: "/mbti_sub3.png",
      }],
    },
  },
  {
    id: 6,
    title: "포켓몬 도감",
    summary: "React 개인 프로젝트",
    features: [
      "Redux: 상태 관리",
      "react-toastify: 알림 구현",
      "local storage: 잡은 포켓몬 유지",
    ],
    tags: ["Personal", "React"],
    team: 1,
    description:
      "포켓몬 도감 개인 프로젝트입니다.\nRedux로 상태를 관리하고 react-toastify로 알림 기능을 구현했습니다.\n로컬 스토리지를 사용해 잡은 포켓몬 데이터를 유지할 수 있습니다.",
    role: "",
    date: "2025/02/04 - 2025/02/06 (3일)",
    stacks: ["React", "Redux"],
    link: "https://pokemon-dex-neon.vercel.app/",
    repository: "https://github.com/ijooha16/pokemon-dex",
    img: {
      main: {
        alt: "pokemon dex",
        url: "/pokemon_main.png",
      },
      sub: [{
        alt: "pokemon dex sub",
        url: "/pokemon_sub.png",
      }],
    },
  },
  {
    id: 7,
    title: "Judie-movie",
    summary: "JS, 바닐라 JS 개인 프로젝트",
    features: [
      "TMDB API를 이용한 영화 데이터 호출",
      "로컬 스토리지를 이용한 북마크 기능",
    ],
    tags: ["Personal", "Js", "API"],
    team: 1,
    description:
      "Judie-movie는 첫 개인 프로젝트로, 자바스크립트(퓨어 바닐라)로 개발한 영화 검색 사이트입니다.\nTMDB API를 사용해 영화 데이터를 불러오고, 로컬 스토리지를 이용해 북마크 기능을 구현했습니다.",
    role: "",
    date: "2025/01/08 - 2025/01/17 (10일)",
    stacks: ["JavaScript"],
    link: "https://judie-movie.vercel.app/",
    repository: "https://github.com/ijooha16/judie-movie",
    img: {
      main: {
        alt: "judie movie",
        url: "/judie_movie_main.png",
      },
      sub: [],
    },
  },
];

export type ProjectType = {
  id: number;
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
