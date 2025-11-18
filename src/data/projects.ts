import { TagType } from "@/constants/tags.constant";

export const projects: ProjectType[] = [
  //smookie
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
    tags: ["Leader", "Team", "NextJs", "React", "API"],
    team: 5,
    description:
      "Smookie는 AI 기반 감정 기록 서비스입니다.\n사용자가 하루를 일기처럼 적으면, 자연어처리(NLP) 기술로 텍스트를 분석해\n감정을 도출하고, 그 감정에 어울리는 음악까지 자동으로 추천해줍니다.",
    role: "팀 리더",
    presentation: "/smookie/presentation.pdf",
    details: [
      {
        type: "summary",
        title: "프로젝트 개요",
        items: [
          { title: "프로젝트명", content: "Smookie" },
          {
            title: "서비스 설명",
            content:
              "사용자가 쓴 일기의 감정을 분석하여 음악을 추천해주는 서비스",
          },
          { title: "팀 구성원", content: "개발자(5인) 디자이너(1인)" },
          { title: "작업 기간", content: "2025.04 - 2025.05 (1개월)" },
          {
            title: "사용 스택",
            content: "next.js, tailwindcss, tanstack, zustand, framer-motion",
          },
          {
            title: "맡은 역할",
            content:
              "팀장, List 페이지, 공통 컴포넌트, tanstack 도입, Polling 적용",
          },
        ],
      },
      {
        type: "achievement",
        title: "프로젝트 주요 성과",
        items: [
          {
            title: "최종 팀프로젝트 대상 수상",
            issue: "",
            solution: "팀장으로서 팀을 이끌어 최종 프로젝트 대상 수상",
          },
          {
            title: "리스트 렌더링 최적화",
            issue: "모든 일기를 한 번에 가져와 콘텐츠가 많을 때 렌더링 지연",
            solution: "무한스크롤을 적용하여 렌더링 속도 및 사용성 향상",
          },
          {
            title: "공통 컴포넌트화로 중복 제거",
            issue: "버튼, 모달, 그래프 등 유사 UI가 각 화면마다 중복 구현",
            solution:
              "공통 컴포넌트를 제작하여 중복 코드, 신규 화면 개발 시간 감소",
          },
          {
            title: "Tanstack Query로 네트워크 최적화",
            issue: "동일 데이터 중복 요청으로 불필요한 트래픽과 리렌더링 발생",
            solution:
              "쿼리 캐싱으로 중복 요청 제거로 API 요청 수 감소, 체감 속도 개선",
          },
          {
            title: "Polling으로 친구 상태 실시간화",
            issue:
              "친구 추가/요청/취소/거절 등 상태가 새로고침 전까지 반영되지 않음",
            solution: "Polling + Tanstack Query로 실시간 반영하여 지연 감소",
          },
        ],
      },
      {
        type: "lesson",
        title: "배운 점",
        items: [
          {
            title: "리더십 경험: 팀장의 역할과 책임",
            content:
              "팀원으로 참여할 때는 내가 맡은 부분에만 집중했지만, 팀장을 맡으면서 프로젝트의 전체 흐름을 파악해야 했습니다. 회의를 진행하며 프로젝트가 방향을 잃지 않도록 조율하는 과정과, 팀원들의 의견을 조율하고 타협점을 찾아가는 과정은 재미있으면서도 좋은 경험이 되었습니다. 또한, 일정과 진행상황을 공유하기 위해 보드를 만들고 관리 시스템을 도입하면서 협업 도구의 중요성도 느꼈습니다. 해야 할 일은 두 배였지만, 리더로서 팀 분위기와 진행 속도에 큰 영향을 끼친다는 것을 체감했고, 리더십이 팀 성과를 좌우한다는 점을 배웠습니다.",
          },
          {
            title: "실시간 기능 구현: 작은 기능 속 큰 복잡성",
            content:
              "tanstack으로 상태 관리와 최신화는 경험이 있었지만, 서버 트리거를 감지해 알림·메시지를 실시간으로 반영하는 구조는 처음 구현해봤습니다. 친구 기능만 해도 신청, 수락, 거절, 취소 등 다양한 경우의 수가 얽혀 있었고, 이 모든 흐름을 실시간으로 처리해야 했습니다. 이를 통해 겉보기에 단순해 보이는 기능도 사실은 수많은 디테일이 모여 복잡성을 만든다는 것을 알게 되었고, 실제 서비스에서 실시간성이 주는 사용자 경험의 중요성을 배웠습니다.",
          },
          {
            title: "설계의 중요성: 기획 단계에서의 소통과 합의",
            content:
              "이전에도 팀 프로젝트 경험은 있었지만, 이번처럼 규모가 큰 프로젝트는 처음이었습니다. 그 결과, 쿼리키나 함수 중복 같은 문제가 발생했고, 결국 중간에 대규모 리팩토링을 해야 했습니다. 이를 계기로 “시작 단계에서의 기획과 설계, 역할 분배”가 얼마나 중요한지를 뼈저리게 깨달았습니다. 사전에 정리와 합의를 해두는 것이 불필요한 재작업을 줄이고, 전체 개발 효율성을 크게 높인다는 사실을 배웠습니다.",
          },
        ],
      },
    ],
    date: "Date",
    stacks: ["NextJs", "React"],
    link: "https://smookie.co",
    repository: "https://github.com/fourkie/fourkie",
    img: {
      main: {
        alt: "main",
        url: "/smookie_image.png",
      },
      sub: { alt: "main", url: "/smookie/main_phone.png" },
    },
  },
  //play link
  {
    id: 2,
    title: "Play Link",
    summary: "운동 매칭 서비스",
    features: [
      "사용자 맞춤 추천: 위치 및 관심 운동 기반 사용자 매칭",
      "웹소켓: 웹소켓 기반 채팅 및 알림 기능",
      "naver 지도 API: 위치 기반 서비스",
    ],
    tags: ["Team", "NextJs", "React", "API"],
    team: 5,
    description:
      "Play Link는 위치나 흥미 있는 운동을 기반으로 서로를 찾아 함께 운동할 수 있는 서비스입니다.\n채팅을 통해 다른 사용자와 약속을 잡을 수 있습니다.\n현재 진행 중인 팀 프로젝트입니다.",
    role: "팀원",
    date: "Date",
    stacks: ["NextJs", "React"],
    link: "",
    repository: "https://github.com/orgs/MO-M-PlayLink/repositories",
    img: {
      main: {
        alt: "play link",
        url: "/play-link/main.png",
      },
      sub: { alt: "play link sub", url: "/play-link/main.png" },
    },
    details: [
      {
        type: "summary",
        title: "프로젝트 개요",
        items: [
          { title: "프로젝트명", content: "PlayLink" },
          {
            title: "서비스 설명",
            content: "내 근처 사람들과 관심 운동을 기반으로 매칭해주는 서비스",
          },
          {
            title: "팀 구성원",
            content: "프론트엔드(2인) 백엔드(1인) 디자이너(1인) 기획자(1인)",
          },
          { title: "작업 기간", content: "2025.08 ~ (12월 출시 예정)" },
          {
            title: "사용 스택",
            content: "expo, next.js, axios, tailwindcss, tanstack, zustand",
          },
          {
            title: "맡은 역할",
            content:
              "메인 개발자, 매칭 플로우 관련 기능 및 페이지 구현, 공통 컴포넌트 구현",
          },
        ],
      },
      {
        type: "achievement",
        title: "프로젝트 주요 성과",
        items: [
          {
            title: "디자인 시스템 도입",
            issue:
              "반복되는 코드, 스타일링으로 코드 가독성 저하 및 유지보수 어려움",
            solution:
              "Input, Button, Layout 등 공통 컴포넌트 구현, 개발 효율성 향상",
          },
        ],
      },
      {
        type: "lesson",
        title: "배운 점",
        items: [
          {
            title: "다양한 직무와 협업: 역할의 전문성과 시너지",
            content:
              "기획, 디자이너, 백엔드와 함께하는 진짜 팀 프로젝트는 처음이었습니다. 그동안은 프론트엔드에서 직접 DB를 다루거나 supabase로 구조를 짜왔는데, 이번에는 백엔드 개발자가 작성한 명세서에 따라 RESTful API 요청과 응답을 처리하는 새로운 방식을 경험했습니다. 처음에는 데이터 형식을 엄격히 맞추는 것이 낯설어 실수도 있었지만, 이를 통해 백엔드의 전문성과 중요성을 배웠습니다. 또한 기획자와 디자이너와 협업하면서 더 정밀한 사용자 경험을 만들어낼 수 있었고, 역할이 분리되니 오히려 내 역할에 집중할 수 있어 효율적이었습니다. UX 전공자로서 그동안 아쉬웠던 기획 파트를 다른 기획자가 채워주니 훨씬 재미있게 프로젝트에 몰입할 수 있었습니다. 이번 경험을 통해 각 직무의 전문성과 협업의 시너지를 깊이 느꼈습니다.",
          },
          {
            title: " Axios Middleware 도입: 더 편리하고 체계적인 네트워크 관리",
            content:
              "팀원분이 axios를 middleware 패턴으로 도입해주셨는데, 단순 패칭만 써봤던 저에게는 신선한 경험이었습니다. 공통된 요청/응답 처리와 에러 핸들링을 한 곳에서 관리할 수 있어서 훨씬 효율적이었고, 코드가 깔끔해졌습니다. “도구는 단순히 쓰는 것”과 “프로젝트에 맞게 구조화해서 활용하는 것”의 차이를 배웠고, 다음 프로젝트에서는 제가 직접 axios middleware를 설계해보고 싶다는 동기부여가 생겼습니다.",
          },
          {
            title: "소통의 중요성: 비동기 협업의 힘",
            content:
              "팀원 대부분이 직장인이어서 저녁·주말에만 참여할 수 있었고, 저는 주로 낮에 작업을 했습니다. 실시간으로 상의하며 개발하던 방식과 달리 이번에는 문서화와 공유가 필수였습니다. 제가 작업한 내용과 다음 계획을 꼼꼼히 기록해 노션 보드에 매일 정리하면서, 서로의 진행 상황을 명확히 공유하는 습관을 들일 수 있었습니다. 이를 통해 비동기 협업에서도 팀워크를 유지할 수 있고, 명확한 기록과 커뮤니케이션이 프로젝트 완성도의 핵심이라는 사실을 배웠습니다.",
          },
        ],
      },
    ],
  },
  //ai goal
  {
    id: 3,
    title: "AI 목표 달성 서비스",
    summary: "AI와 함께 목표를 세우고 달성하는 개인 프로젝트",
    features: [
      "Gemini AI: 목표 달성 도우미",
      "Supabase: 데이터베이스 및 인증 인가",
    ],
    tags: ["Personal", "NextJs", "React", "API"],
    team: 1,
    description:
      "프롬프트 형식으로 AI에게 목표 설정을 요청하면 AI가 도와주고\n 함께 목표를 달성해 나가는 서비스입니다. 진행중입니다.",
    role: "개발자",
    date: "Date",
    stacks: ["NextJs", "React", "Supabase"],
    link: "",
    repository: "https://github.com/ijooha16/ai-scheduler",
    img: {
      main: {
        alt: "ai goal",
        url: "/letsgoal/main.png",
      },
      sub: { alt: "ai goal sub", url: "/letsgoal/sub_01.png" },
    },
    details: [
      {
        type: "summary",
        title: "프로젝트 개요",
        items: [
          { title: "프로젝트명", content: "LetsGoal" },
          {
            title: "서비스 설명",
            content: "ai과 함께 목표를 설정하고 달성해 나가는 서비스",
          },
          { title: "팀 구성원", content: "개인" },
          { title: "작업 기간", content: "2025.07 ~ (진행중)" },
          {
            title: "사용 스택",
            content: "next.js, supabase, react-dnd, tailwindcss, tanstack",
          },
        ],
      },
      // {
      //   type: "achievement",
      //   title: "주요 성과",
      //   items: [
      //     {
      //       title: "최종 팀프로젝트 대상 수상",
      //       issue: "",
      //       solution: "팀장으로서 팀을 이끌어 최종 프로젝트 대상 수상",
      //     },
      //   ],
      // },
      {
        type: "lesson",
        title: "배운 점",
        items: [
          {
            title: "React DnD 라이브러리 활용: 새로운 기술을 탐구하고 응용하기",
            content:
              "처음으로 react-dnd 라이브러리를 사용해봤습니다. 오픈소스로 이렇게 활용도 높은 기능을 공유한다는 점이 인상적이었고, 저도 언젠가 기여해보고 싶다는 생각을 했습니다. 러닝 커브가 높아 처음에는 어려웠지만, 문서를 보며 하나씩 이해하고 구현해 나가면서 점점 재미를 느꼈습니다. 특히 기본적으로 제공되는 단일 리스트 정렬(sorting) 기능을 넘어, 여러 스텝을 연동한 복합 드래그 앤 드롭을 구현해야 했습니다. 검색과 시행착오를 반복하며 결국 원하는 결과를 만들 수 있었고, “남이 만든 라이브러리를 내 상황에 맞게 응용하는 능력”을 키울 수 있었습니다.",
          },
          {
            title: "AI 프롬프트 활용: 원하는 데이터를 얻기 위한 설계 능력",
            content:
              "Gemini 같은 AI 모델을 활용해 데이터를 가져오는 기능을 구현했습니다. 대화형 모델이다 보니 단순 응답을 받는 것이 아니라, 내가 원하는 형태의 데이터를 얻기 위해 프롬프트를 정교하게 설계하는 것이 중요했습니다. 이 과정을 통해 “AI를 활용하는 핵심은 질문을 어떻게 설계하느냐에 달려 있다”는 것을 다시 깨달았습니다. 또한, 이전 대화를 기억하도록 연결하는 로직도 시도했지만 구조가 정돈되지 않아 아쉬움이 남았습니다. 앞으로는 프롬프트 엔지니어링과 대화 맥락 관리를 더 체계적으로 개선해보고 싶습니다.",
          },
        ],
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Hash-Cafe",
  //   summary: "현재 위치 기반 주변 카페 탐색 서비스",
  //   features: [
  //     "소통: 태그 기반 카페 후기 작성 기능",
  //     "TanStack Query: 데이터 패칭 및 캐싱",
  //     "카카오맵 API: 지도 API를 활용한 카페 위치 표시",
  //   ],
  //   tags: ["Team", "Leader", "React", "API"],
  //   team: 5,
  //   description:
  //     "Hash-Cafe는 현재 위치를 기준으로 주변 카페를 탐색하고,\n사용자들이 태그로 카페 후기를 남길 수 있는 서비스입니다.\n팀 프로젝트에서 리더를 맡아 지도 API 관련 작업과 전체 코드 총괄을 담당했습니다.",
  //   role: "팀 리더",
  //   date: "Date",
  //   stacks: ["React", "TanStack Query"],
  //   link: "",
  //   repository: "https://github.com/ijooha16/u-know-running",
  //   img: {
  //     main: {
  //       alt: "hash cafe",
  //       url: "/hash_cafe_main.png",
  //     },
  //     sub: [],
  //   },
  // },
  // {
  //   id: 5,
  //   title: "MBTI 검사 사이트",
  //   summary: "React로 만든 개인 프로젝트",
  //   features: ["반응형: 반응형 구현 ", "JSON server: 데이터 관리", "Zustand: 전역 상태 관리"],
  //   tags: ["Personal", "React"],
  //   team: 1,
  //   description:
  //     "React로 만든 개인 MBTI 검사 사이트입니다.\nJSON 서버를 사용해 데이터를 관리하고 Zustand를 이용해 전역 상태 관리를 구현했습니다.",
  //   role: "",
  //   date: "2025/02/19 - 2025/02/24 (6일)",
  //   stacks: ["React", "Zustand"],
  //   link: "https://free-mbti-test.vercel.app/",
  //   repository: "https://github.com/ijooha16/free-mbti-test",
  //   img: {
  //     main: {
  //       alt: "mbti test",
  //       url: "/mbti_main.png",
  //     },
  //     sub: [{
  //       alt: "mbti test sub",
  //       url: "/mbti_sub.png",
  //     }, {
  //       alt: "mbti test sub2",
  //       url: "/mbti_sub2.png",
  //     }, {
  //       alt: "mbti test sub3",
  //       url: "/mbti_sub3.png",
  //     }],
  //   },
  // },

  //pokemon dex
  {
    id: 6,
    title: "포켓몬 도감",
    summary: "React 개인 프로젝트",
    features: [
      "Redux: 상태 관리",
      "react-toastify: 알림 구현",
      "local storage: 잡은 포켓몬 유지",
    ],
    tags: ["Personal", "React", "API"],
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
        url: "/pokemon/sub_01.png",
      },
      sub: {
        alt: "pokemon dex sub",
        url: "/pokemon/sub_01.png",
      },
    },
    details: [
      {
        type: "summary",
        title: "프로젝트 개요",
        items: [
          { title: "프로젝트명", content: "포켓몬 도감" },
          {
            title: "서비스설명",
            content:
              "포켓몬 정보를 제공하고, 사용자가 포켓몬을 잡아 도감에 추가할 수 있는 서비스",
          },
          { title: "팀 구성원", content: "개인" },
          { title: "작업 기간", content: "2025.02.04 - 2025.02.06 (3일)" },
          {
            title: "사용 스택",
            content: "react, redux, react-toastify",
          },
        ],
      },
      {
        type: "achievement",
        title: "주요 성과",
        items: [
          {
            title: "UI 디테일 개선",
            issue:
              "서비스 자체가 단순한 기능만 제공하다 보니, 사용자 입장에서 재미 요소 부족",
            solution:
              "react-toastify 라이브러리를 적용하고, 다양한 마이크로 인터랙션을 추가",
          },
          {
            title: "새로고침 시 데이터 소실 문제 해결",
            issue: "새로고침을 하면 사용자가 잡은 포켓몬 데이터가 모두 사라짐",
            solution:
              "Local Storage를 활용하여 잡은 포켓몬 데이터를 저장하고, 새로고침이나 재접속 시에도 데이터를 불러오도록 구현",
          },
        ],
      },
    ],
  },
  //judie movie
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
      sub: { alt: "judie movie sub", url: "/judie-movie/sub_01.png" },
    },
    details: [
      {
        type: "summary",
        title: "프로젝트 개요",
        items: [
          { title: "프로젝트명", content: "Judie-movie" },
          {
            title: "서비스 설명",
            content:
              "다양한 영화를 검색하고, 관심있는 영화를 북마크에 저장해 확인할 수 있는 사이트",
          },
          { title: "팀 구성원", content: "개인" },
          { title: "작업 기간", content: "2025.01.08 - 2025.01.17 (10일)" },
          {
            title: "사용 스택",
            content: "vanilla js, HTML, CSS",
          },
        ],
      },
      {
        type: "achievement",
        title: "주요 성과",
        items: [
          {
            title: "사용성 중심 UI 개선",
            issue: "단순한 기능 제공으로 사용자 재미와 편의성 부족",
            solution:
              "반응형 레이아웃과 window.scrollTo, 토스트·인터랙션 효과로 사용성 강화",
          },
          {
            title: "실시간 데이터 최신화",
            issue: "정적 데이터로 최신 영화 정보를 확인할 수 없음",
            solution: "TMDB API 연동으로 실시간 최신 콘텐츠 자동 업데이트",
          },
          {
            title: "데이터 지속성 확보",
            issue: "새로고침 시 북마크 데이터가 소실되어 사용자 경험 저하",
            solution:
              "LocalStorage를 활용해 북마크 데이터 새로고침 후에도 유지",
          },
        ],
      },
    ],
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
  presentation?: string;
  details?: DetailInformationType[];
  img: {
    main: { alt: string; url: string };
    sub?: { alt: string; url: string };
  };
};

export type DetailInformationType = {
  type: "achievement" | "summary" | "lesson";
  title: string;
  items: {
    title: string;
    issue?: string;
    solution?: string;
    content?: string;
  }[];
};
