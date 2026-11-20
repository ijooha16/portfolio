import { TagType } from "@/constants/tags.constant";

export const projects: ProjectType[] = [
  // ODY
  {
    id: 8,
    title: "ODY",
    summary: "지도로 보는 음악 탐색 서비스",
    description:
      "약 450만 곡을 음향 특성 16차원 좌표에 배치해, 추천이 이루어지는 공간 전체를 지도처럼 보여 주는 서비스입니다.\n8겹 레이어로 파고들며 탐색하거나, 다른 사용자를 실시간으로 따라가며 음악을 발견합니다.",
    features: [
      "주변 탐색: 지금 곡 주변의 비슷한 곡을 탐색",
      "여정 탐색: 두 곡을 골라 그 사이를 잇는 곡들을 탐색",
      "따라가기: 다른 사용자의 탐험을 실시간으로 동기화",
    ],
    tags: ["Award", "Leader", "Team", "NextJs", "React"],
    period: "2026.07 - 2026.09",
    context: "SSAFY 특화 프로젝트",
    team: "6명 (프론트엔드 2, 백엔드 3, 인프라 1)",
    role: "기획·디자인 전담 / 프론트엔드 리드",
    roleDetail: "지도 엔진 · 레이어 탐색 · 실시간 따라가기 · BFF",
    award: "SSAFY 특화 프로젝트 2등",
    stacks: [
      "React 19",
      "TypeScript",
      "Next.js 16",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Canvas 2D",
      "STOMP / WebSocket",
      "YouTube IFrame",
    ],
    links: {},
    linkNote:
      "SSAFY 사내 GitLab 비공개 저장소라 실제 사용 화면 녹화로 대신합니다.",
    accent: "#6366f1",
    img: {
      main: { url: "/projects/ody/main.jpg", alt: "ODY 지도 화면" },
      logo: "/projects/ody/logo.png",
    },
    metrics: [
      { value: "60fps", label: "상주 곡 7,200개(8.5배)에서도 유지" },
      { value: "0.56MB", label: "지도 데이터 1.6MB에서 압축" },
      { value: "40→96%", label: "파고든 겹에서 화면 안에 들어오는 곡" },
      { value: "550개", label: "브라우저 없이 도는 Node 테스트" },
    ],
    media: [
      {
        type: "video",
        src: "/projects/ody/demo.mp4",
        poster: "/projects/ody/demo-poster.jpg",
        caption: "지도 탐색 → 곡 상세 → 여정 탐색 (실제 사용 화면)",
      },
      {
        type: "video",
        src: "/projects/ody/dive.mp4",
        poster: "/projects/ody/dive-poster.jpg",
        caption: "레이어 파고들기: 확대하면 그 영역 곡만 다음 겹으로",
      },
      {
        type: "image",
        src: "/projects/ody/main.jpg",
        caption: "별 하나가 곡 하나, 오른쪽은 곡 상세 패널",
      },
    ],
    decisions: [
      {
        title: "장르 칸 대신 소리 지도",
        problem:
          "장르로 나누면 같은 칸 안에서만 맴돌고, 내 취향이 전체에서 어디쯤인지 보여줄 수 없다.",
        decision:
          "곡을 소리 특징만으로 하나의 지도에 배치. 장르는 지우지 않고 별 색과 필터로 남겼다.",
        result: "장르 경계를 넘어 두 곡 사이를 잇는 '여정 탐색'이 가능해졌다.",
      },
      {
        title: "지도는 절대 사라지지 않는다",
        problem:
          "곡 상세·여정·따라가기를 페이지로 나누면 매번 지도를 떠나 탐색 맥락이 끊긴다.",
        decision:
          "하나의 지도 위에서 상태만 바뀌는 구조. 화면을 페이지 / 지도 상태 / 패널 3종으로 분류했다.",
        result:
          "화면 31개 정의 → MVP 12개. 화면 ID를 기능 코드와 1:1로 맞춰 기획·API·QA가 같은 이름을 쓴다.",
      },
      {
        title: "확대하면 그 영역만, 다음 두 축으로",
        problem:
          "16차원은 한 화면에 담을 수 없고, 두 축만 남기면 나머지 특징이 사라진다. 두 축씩 전부 펼치면 좌표만 바꿔 보는 병렬 탐색이 되어 파고드는 느낌이 없다.",
        decision:
          "PCA 두 축으로 한 겹을 만들고, 확대하면 그 영역의 곡만 다음 PCA 두 축으로 다시 펼친다. 이렇게 8겹을 쌓았다.",
        result:
          "사용자는 축이 바뀌는 걸 의식하지 않고, 지도를 확대하며 점점 좁은 취향으로 파고든다.",
      },
      {
        title: "재배치는 숨기고, 확대처럼 보이게",
        problem:
          "백엔드는 레이어마다 곡이 재배치되는 실제 데이터 구조를 그대로 보여주자고 했지만, 사용자에게는 필터를 차례로 지나는 느낌이었다.",
        decision:
          "재배치는 숨기고 지도 확대처럼 보이게 하자고 설득해 합의했다. 현재 탐색 위치와 재생 곡 위치는 두 개의 스택으로 따로 관리했다.",
        result: "레이어를 오가도 사용자가 길을 잃지 않는다.",
      },
    ],
    techs: [
      {
        title: "Canvas 2D & TypedArray",
        description:
          "별이 1만 개라 DOM 요소로는 감당이 안 돼 캔버스 한 장에 직접 그린다. 좌표는 숫자 배열(Float32Array)로 들고 있다.",
        points: [
          "화면에 상주하는 곡이 850 → 7,200개로 8.5배 늘어도 60fps 유지",
          "한 화면 그리는 데 1.64ms, 60fps 예산(16.7ms)의 10%만 사용",
        ],
      },
      {
        title: "Next.js Route Handler (BFF)",
        description:
          "브라우저가 백엔드를 직접 부르지 않고 우리 서버를 거친다. 토큰·응답 변환·목 전환이 라우트 파일 하나에 모여 있어 백엔드가 바뀌어도 화면 코드는 건드리지 않는다.",
        points: [
          "압축으로 지도 데이터 1.6MB → 0.56MB, 재방문은 304만 받아 전송량 사실상 0",
          "폰 LTE 재방문 2.5초 → 1.3초, 신호 약한 곳은 10초 → 1.5초",
        ],
      },
      {
        title: "STOMP / WebSocket · YouTube IFrame",
        description:
          "인솔자가 곡을 바꾸면 서버가 먼저 알려야 해서 WebSocket을 쓰고, 백엔드 Spring STOMP와 규칙을 맞췄다. 음원은 YouTube IFrame으로 재생한다.",
        points: [
          "엔진이 DOM에 의존하지 않아 브라우저 없이 Node 테스트 550개(83개 파일)로 검증",
        ],
      },
    ],
    implementations: [
      {
        title: "레이어 파고들기 / 떠오르기",
        description:
          "확대하면 보던 영역의 곡만 다음 겹으로 따라온다. 겹마다 '들어온 사각형'을 쌓아 두고, 가시 영역 마스크로 화면 안 곡만 거른 뒤 지금 겹이 흐려지며 다음 겹이 커지는 전환.",
        points: [
          "파고든 겹에서 화면에 들어오는 곡 40% → 96%",
          "넘어갈 시점을 배율이 아니라 화면 안 곡 밀도로 판단해, 데이터가 8.5배 늘었을 때 숫자 하나만 바꿈",
        ],
      },
      {
        title: "실시간 따라가기 / 지도 위 사람",
        description:
          "인솔자가 겹을 옮기고 곡을 고르고 재생하는 시각까지 내 화면에 그대로 동기화한다. 소켓이 끊기면 사용자 컨트롤 없이 다시 붙고, 겹치는 사람은 +N으로 묶어 누르면 펼친다.",
        points: [
          "탭을 숨기면 타이머가 늦춰져 1분 가까이 '나간 사람'으로 처리되던 문제 → 탭 복귀 순간 신호를 보내 해결",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "줌할 때 반짝이는 앨범 커버",
        problem:
          "줌할 때 지도 위 앨범 커버가 불규칙하게 사라졌다 나타난다. 재현 조건이 없고, 캔버스에 그려져 DOM으로 셀 수도 없다.",
        cause:
          "대표곡을 뽑는 격자 칸 크기가 '86 ÷ 배율'이라, 줌 한 단계마다 칸 경계가 전부 이동해 칸의 대표곡이 통째로 바뀐다. 정렬 키(weight)는 실데이터에서 전부 0이라 기준도 없었다.",
        process: [
          "그려지는 사진을 프레임마다 기록(drawImage 후킹)해, 확대 한 번에 7장이 전부 바뀌는 것을 확인",
          "매번 새로 뽑지 않고 직전에 보이던 사진을 우선 유지(히스테리시스)",
          "겹친 사진만 내리고, 새 사진은 한 프레임에 1장씩만 추가",
        ],
        result: [
          "한 프레임 최대 동시 교체 7개 → 1개 (배율 21.8 → 34.2 구간, 같은 후킹으로 측정)",
          "정지 상태에서는 전후 모두 변화 0",
        ],
      },
      {
        title: "별 그리기 성능 개선",
        problem:
          "밀도 가중으로 상주곡이 850 → 7,200개(8.5배)가 되면서 탐색 프레임이 떨어졌다.",
        cause:
          "곡이 늘어서라고 생각했는데 배경 별밭이 문제였다. 배경 별 네 겹이 프레임마다 drawImage를 5,170회 호출해 그리기 시간의 88%를 차지했다.",
        process: [
          "Chrome 성능 기록으로 그리기 시간을 쪼개 배경이 88%임을 확인",
          "별 크기·투명도를 줄이는 두 가설을 재보니 더 느려 폐기 → 방식이 아니라 횟수가 문제라는 결론",
          "멀리 있는 별 2겹을 미리 이미지 한 장으로 구워 붙이기만 함 (CSS 픽셀 크기로 구워 메모리도 절감)",
        ],
        result: [
          "배경 그리기 6.94 → 4.52ms / frame (1.54배)",
          "drawImage 5,170 → 3,300회",
          "메모리 49 → 12MB",
        ],
      },
    ],
  },
  // 타짝
  {
    id: 9,
    title: "타짝",
    summary: "키보드를 나눠 쓰는 실시간 협동 타이핑 게임",
    description:
      "두 팀이 같은 단어를 동시에 치고, 먼저 완성한 팀이 가로챕니다.\n키보드는 팀원 수만큼 나뉘어 있어 내 글자는 나만 칠 수 있습니다. 0.1초 차로 갈리는 승부라 판정은 서버가 누른 순서대로 합니다.",
    features: [
      "단어 쟁탈전: 먼저 완성한 팀이 단어를 가로챈다",
      "쪼개진 키보드: 자판을 팀원 수만큼 나눠 맡는다",
      "끊기지 않는 판: 나간 자리는 봇이 바로 이어받는다",
    ],
    tags: ["Personal", "AI", "NextJs", "React"],
    period: "2026.10.14 - 2026.10.26",
    context: "개인 프로젝트",
    team: "1인",
    role: "1인 개발 (기획·디자인·FE·BE)",
    roleDetail: "Claude Code 페어 개발 (설계·판정 규칙·검증은 직접)",
    stacks: [
      "React 19",
      "TypeScript",
      "Next.js 16",
      "PostgreSQL",
      "Supabase Realtime",
      "WebRTC",
      "Vercel",
      "Claude Code",
    ],
    links: { service: "https://keyboard-game-ebon.vercel.app/" },
    accent: "#e85d7a",
    img: {
      main: { url: "/projects/tajjak/main.jpg", alt: "타짝 게임 화면" },
      logo: "/projects/tajjak/logo.png",
    },
    metrics: [
      { value: "121명", label: "실제 가입자" },
      { value: "5.8만 회", label: "서버가 판정한 키 입력" },
      { value: "0.08초", label: "팀원 키가 내 화면에 보이기까지 (기존 0.19~0.55초)" },
      { value: "4→0개", label: "맞게 쳤는데 오타로 처리된 키 (실제 기록 재현)" },
    ],
    media: [
      {
        type: "image",
        src: "/projects/tajjak/main.jpg",
        caption: "팀전 화면: 위는 단어 쟁탈 현황, 아래는 내가 맡은 자판",
      },
    ],
    techs: [
      {
        title: "Supabase Realtime (WebSocket)",
        description:
          "판정 결과는 방 채널, 키 입력은 팀 채널로 바로 보낸다. Presence로 접속·이탈을 감지한다.",
        points: [
          "초당 100개 한도 → 판정 결과는 0.25초마다 묶어 전송",
          "놓친 메시지는 2초마다 방 상태를 다시 받아 복구",
        ],
      },
      {
        title: "Postgres RPC · 서버 권위 판정",
        description:
          "모든 키를 DB 함수 한 곳에서 판정하고, 방 단위로 잠가 한 줄로 처리한다.",
        points: [
          "클라이언트끼리 점수를 다르게 셀 수 없음",
          "키마다 처리 번호(ack)를 돌려줘 화면 예측과 맞춤",
        ],
      },
      {
        title: "PGlite · DB 통합 테스트",
        description:
          "운영 중인 스키마 위에 새 SQL을 덮어써서 실제 기록 순서 그대로 재현한다.",
        points: ["2·4·10인 e2e, 회원가입 시뮬레이션"],
      },
    ],
    implementations: [
      {
        title: "클라이언트 예측 + 재생 (replay)",
        description:
          "누르는 즉시 화면에 그리고, 서버가 처리한 번호까지만 빼고 나머지를 다시 얹는다.",
        points: [
          "연타해도 친 글자가 사라졌다 생기지 않음",
          "팀원 키도 같은 방식으로 얹어 0.08초 안에 표시",
        ],
      },
      {
        title: "Claude Code와 페어 개발",
        description:
          "판정 규칙·채널 구조를 설계 문서(md)로 먼저 정하고, 구현은 Claude Code와 나눠 진행했다.",
        points: [
          "규칙·우선순위 결정은 직접, 코드 작성은 AI와 분담",
          "AI가 쓴 코드는 PGlite 통합 테스트와 npm run check로 자동 검증",
        ],
      },
      {
        title: "나가도 끊기지 않는 판",
        description:
          "Presence에서 4초간 안 보이면 퇴장 처리하고, 그 사람 키는 봇이 바로 이어받는다.",
        points: [
          "팀원이 나간 팀은 그 판 순위에서 제외",
          "남은 팀원에게 알림 + 나가기 / 계속하기 선택",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "맞게 쳤는데 오타가 뜬다",
        problem:
          "팀전에서 맞는 키를 눌렀는데 오타가 뜨고 안 쳐진다. 둘 다 '쳤는데?' 하고 기다리다 단어가 멈춘다. 실제 기록: 한 단어에서 3.7초, 7.5초 정지.",
        cause:
          "판정 기준이 '서버에 도착한 순서'였다. 팀원 키보다 내 키가 먼저 도착하거나 시계가 어긋나면, 미리 쳐 둔 키는 0.25초 뒤 오타(-3점)로 처리되고 사라졌다.",
        process: [
          "키마다 누른 시각을 함께 보내 누른 순서로 판정",
          "내 기기와 서버의 시계 차이를 접속 시 5번, 이후 30초마다 재서 보정 (한 번만 재면 최대 280ms 어긋남)",
          "차례보다 먼저 친 글자는 버리지 않고 들고 있다가 차례가 오면 인정",
        ],
        result: [
          "'국제선' 실제 기록 재현: 오타 처리 4개 → 0개",
          "고치기 전 스키마에선 실패, 후엔 통과하는 테스트로 고정",
        ],
      },
      {
        title: "팀원 키가 늦게 보인다",
        problem:
          "팀원이 키를 눌러도 내 화면엔 0.19~0.55초 뒤에 보인다. 팀원 다음이 내 차례인데 화면이 늦어 박자가 끊긴다.",
        cause:
          "팀원 키가 '서버 판정 → 방 전체 공유'를 거쳐야 보였다. 서버 왕복 + 판정 결과 묶음 간격(0.25초) + 전달 시간이 그대로 쌓였다.",
        process: [
          "누르는 순간 팀 전용 채널로 팀원에게 바로 전송 (판정은 서버가 따로)",
          "받은 키를 먼저 화면에 그리고, 서버 확인이 오면 정리 (3초 안에 안 오면 취소)",
          "입력 순서 검사를 자동 점검(npm run check)에 추가",
        ],
        result: [
          "0.19~0.55초 → 0.08초 (실제 계정 2개로 측정)",
          "판정은 그대로 서버라 공정성 영향 없음",
        ],
      },
    ],
  },
  // 돌잡이
  {
    id: 10,
    title: "돌잡이",
    summary: "클라이밍 다음 동작 예측 AI (R&D)",
    description:
      "클라이밍 영상을 학습해 다음 동작을 예측하고, 그 동작이 사람 몸으로 가능한지 물리 시뮬레이션으로 확인하는 연구 프로젝트입니다.\n학습 데이터를 만드는 라벨링 도구와, 추천 동작을 검증하는 물리 판정을 맡았습니다.",
    features: [
      "라벨링 도구: 영상 구간·손발·홀드 좌표를 클릭 몇 번으로 기록",
      "물리 판정: 관절 힘·마찰·균형으로 동작 가능 여부 판정",
      "추천 검증: 모델 추천 후보가 실제로 가능한지 확인",
    ],
    tags: ["Team", "AI"],
    period: "2026.10 - 2026.11",
    context: "SSAFY 자율 프로젝트",
    team: "SSAFY 자율 프로젝트 팀 (A203)",
    role: "데이터 라벨링 도구 개발 / 물리 시뮬레이션 판정",
    stacks: ["MuJoCo", "MyoSuite", "웹 라벨링 도구"],
    links: {},
    linkNote:
      "SSAFY 사내 GitLab 비공개 저장소라 시뮬레이션 화면 녹화로 대신합니다.",
    accent: "#e4572e",
    img: {
      main: { url: "/projects/doljabi/main.jpg", alt: "돌잡이 표지" },
    },
    metrics: [
      { value: "1시간→3~5분", label: "영상 1개 라벨링 시간" },
      { value: "약 1,000개", label: "라벨링 완료한 학습 영상" },
      { value: "90%", label: "실제 성공 동작 42개 중 38개를 가능으로 판정" },
      { value: "10/10", label: "일부러 만든 불가능 동작을 모두 걸러냄" },
    ],
    media: [
      {
        type: "video",
        src: "/projects/doljabi/sim-route.mp4",
        poster: "/projects/doljabi/sim-route-poster.jpg",
        caption: "캡슐 인체 모델로 파랑 루트를 스타트부터 탑까지 재현",
      },
      {
        type: "video",
        src: "/projects/doljabi/sim-fail.mp4",
        poster: "/projects/doljabi/sim-fail-poster.jpg",
        caption: "판정 실패 예시: 너무 먼 홀드로 손 뻗기 (떨어지는 장면은 발표용 연출)",
      },
      {
        type: "image",
        src: "/projects/doljabi/capsule.jpg",
        caption: "판정 화면: 동작마다 부하·접촉·균형을 함께 기록",
      },
      {
        type: "image",
        src: "/projects/doljabi/judge.jpg",
        caption: "같은 자세라도 물리 판정으로 실패 / 가능을 가른다",
      },
    ],
    decisions: [
      {
        title: "시뮬레이터 세 개로 시작해서 하나로",
        problem:
          "처음엔 근육 모델(MyoSuite), 캡슐 몸 모델, 물리 엔진(Isaac) 세 개가 모두 통과해야 가능한 동작으로 인정하려 했다.",
        decision:
          "물리 엔진은 손발이 벽에 닿는 순간 계산이 튀어 보류, 근육 모델은 느리고 결과가 들쭉날쭉했다. 빠르고 왜 안 되는지 관절 단위로 설명할 수 있는 캡슐 모델 하나를 기준으로 삼았다.",
        result:
          "근육 모델의 장점은 관절별 힘 한도로 뽑아 캡슐 모델에 합쳤고, 판정 결과는 거의 달라지지 않았다.",
      },
    ],
    implementations: [
      {
        title: "영상 라벨링 도구",
        description:
          "학습에 쓸 영상 약 1,000개에 손발 위치, 홀드 위치·모양·색, 의미 있는 동작 구간 프레임을 기록해야 했다. 팀원마다 필요한 정보를 먼저 모은 뒤, 클릭 몇 번으로 구간을 자르고 좌표를 남기는 웹 라벨링·검수 도구를 만들었다.",
        points: [
          "영상당 1시간 넘게 걸리던 수기 작업 → 3~5분 (숙련 후 1시간에 30개)",
          "약 1,000개 라벨링 완료",
        ],
      },
      {
        title: "물리 시뮬레이션 판정 (MuJoCo 캡슐 인체 모델)",
        description:
          "모델이 추천한 다음 동작이 실제로 가능한지, 관절 힘·마찰·균형으로 판정하는 규칙을 만들고 검증했다. 데이터를 찍은 벽은 이미 홀드가 바뀌어, 벽을 3D로 복원하고 그 위에 몸 모델을 올렸다.",
        points: [
          "실제 성공 동작 42개 중 38개(90%)를 가능으로 판정",
          "일부러 만든 불가능 동작 10개는 모두 걸러냄",
          "모델 추천 후보 상위 3개 중 76%가 물리적으로 가능함을 확인",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "시뮬레이션으로 찾아낸 데이터 오류",
        problem:
          "처음 보는 실제 성공 동작인데도 시뮬레이션에서 불가능으로 나오는 경우가 반복됐다.",
        cause:
          "판정 규칙이 아니라 영상 데이터가 틀려 있었다. 볼륨을 손 홀드로, 볼륨 위에 디딘 발을 벽으로 적은 기록이 섞여 있었다.",
        process: [
          "불가능으로 나온 동작을 프레임 단위로 다시 보며 홀드 번호를 대조",
          "홀드 번호 오류를 고친 뒤 같은 규칙으로 다시 판정",
        ],
        result: [
          "영상 데이터의 홀드 번호 오류 13건을 찾아 수정",
          "처음 보는 동작 30개 중 27개(90%) 가능 판정",
        ],
      },
    ],
  },
  // Smookie
  {
    id: 1,
    title: "Smookie",
    summary: "감정을 기록하면 음악으로 위로받는 AI 다이어리",
    description:
      "하루를 일기로 쓰면 AI가 감정을 분석해 쿠키 이모지로 캘린더에 남기고,\n그 감정에 어울리는 음악을 추천합니다. 친구의 오늘 감정도 함께 보며 서로의 하루를 살핍니다.",
    features: [
      "감정 일기: 일기를 쓰면 AI가 감정을 분석해 이모지로 기록",
      "감정 캘린더: 한 달의 감정을 달력과 통계로 확인",
      "음악 추천: 오늘의 감정에 맞는 플레이리스트 추천",
    ],
    tags: ["Award", "Leader", "Team", "NextJs", "React", "API"],
    period: "2025.04 (4주)",
    context: "스파르타 내일배움캠프 최종 프로젝트",
    team: "6명 (프론트엔드 5, 디자이너 1)",
    role: "팀장 / 프론트엔드",
    roleDetail: "리스트 페이지 · 공통 컴포넌트 · 폴링",
    award: "최종 프로젝트 대상 (12팀 중 1위)",
    stacks: [
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Framer Motion",
      "Supabase",
      "Hugging Face",
      "Spotify API",
      "PWA",
    ],
    links: {
      service: "https://www.smookie.co/tutorial",
      repository: "https://github.com/fourkie/fourkie",
      presentation: "/smookie/presentation.pdf",
    },
    accent: "#6a9c3c",
    img: {
      main: { url: "/smookie_image.png", alt: "Smookie 메인" },
      logo: "/smookie/logo.png",
    },
    metrics: [
      { value: "대상", label: "12팀 중 1위" },
      { value: "15 + 11", label: "쿼리·뮤테이션을 하나의 캐시로 관리" },
      { value: "3곳", label: "감정 통계 그래프 컴포넌트 재사용" },
      { value: "16/26", label: "쿼리 키 통일로 고친 훅 (파일 36개)" },
    ],
    media: [
      {
        type: "image",
        src: "/smookie_image.png",
        caption: "감정 캘린더와 친구들의 오늘 감정",
      },
      {
        type: "image",
        src: "/smookie/main_phone.jpg",
        caption: "PWA로 설치해 쓰는 모바일 화면",
      },
      {
        type: "image",
        src: "/smookie/emotion-graph.png",
        caption: "직접 만든 공통 컴포넌트: 최근 3개월 감정 통계 그래프",
      },
      {
        type: "image",
        src: "/smookie/diary-card.png",
        caption: "일기 카드: 감정 쿠키와 오늘의 기록",
      },
    ],
    techs: [
      {
        title: "TanStack Query & QUERY_KEY",
        description:
          "일기·친구·음악 데이터를 여러 화면이 함께 쓰고 계속 바뀐다. 서버 데이터를 캐시 한 곳에 모아 관리했다.",
        points: [
          "쿼리 15개·뮤테이션 11개를 하나의 캐시로, 바뀌면 해당 키만 무효화",
          "주요 키를 QUERY_KEY 상수로 관리",
        ],
      },
      {
        title: "Polling",
        description:
          "친구 요청이 새로고침 전엔 보이지 않았다. 초 단위 실시간까지는 필요 없어 WebSocket 대신 일정 간격으로 다시 묻는 방식을 골랐다.",
        points: [
          "공통 훅 하나로 친구 쿼리 3개에 적용",
          "5초 간격, 탭 복귀 시 재요청, 비로그인 상태에선 요청 차단",
        ],
      },
      {
        title: "Framer Motion",
        description:
          "'위로'가 컨셉인 서비스인 만큼 감성이 중요했다. 4주 안에 완성도 있는 애니메이션을 내기 위해 라이브러리를 선택했다.",
        points: ["팝업, 배경, 그래프 막대, 더보기 등 전체 애니메이션 구현"],
      },
    ],
    implementations: [
      {
        title: "[리스트 페이지] 월 단위 양방향 무한 스크롤",
        description:
          "캘린더에서 누른 날짜로 바로 들어가 그 위치로 스크롤된다. 위로 올리면 이전 달, 아래로 내리면 다음 달을 한 달씩 불러온다.",
        points: [
          "처음엔 선택한 달 한 달치만 요청",
          "선택 날짜와 탭 상태는 Zustand로 캘린더 → 리스트에 전달",
        ],
      },
      {
        title: "[공통 컴포넌트] 감정 통계 그래프",
        description:
          "최근 3개월 일기에서 감정 10가지를 세어 상위 5개를 비율로 보여준다. 긍정 감정은 연두, 부정 감정은 코랄 계열로 나눴다.",
        points: [
          "컴포넌트 하나를 리스트, 마이페이지, 친구 목록 3곳에서 재사용",
          "role·aria-label로 스크린리더 대응",
        ],
      },
      {
        title: "[폴링] 친구 기록 탭",
        description:
          "친구별로 가장 최근 기록 하나만 추려 최신순으로 보여준다. 친구가 새로 쓴 기록은 폴링으로 새로고침 없이 올라온다.",
      },
    ],
    troubleshooting: [
      {
        title: "다른 화면에 반영되지 않는 상태값",
        problem:
          "각자 만든 기능을 합치자, 한 화면에서 내용을 고쳐도 다른 화면에는 새로고침 전까지 예전 값이 그대로 보였다. 발표 며칠 전이라 기능을 줄이자는 의견도 나왔다.",
        cause:
          "핵심 쿼리 키 몇 개만 정하고, 나머지는 각자 필요할 때 추가하며 시작했다. 이미 있는 키인지 확인하지 않아 같은 데이터에 키가 여러 개 생겼고, 키가 쪼개진 만큼 캐시도 쪼개졌다.",
        process: [
          "정해 둔 날짜까지는 해결해 보자고 팀을 설득하고, 노션에 모든 오류를 목록화해 담당자 지정",
          "팀원별 쿼리 키를 노션 표로 모아, 어떤 데이터를 어디서 쓰는지 한눈에 보이게 함",
          "같은 데이터를 가리키는 키는 합치고, 조건이 다른 키는 역할에 맞게 분리한 뒤 QUERY_KEY로 상수화",
        ],
        result: [
          "같은 닉네임을 두 키로 따로 캐시하던 것을 하나로 합침",
          "친구 게시물 키를 POSTS 아래로 옮겨, 게시물이 바뀌면 친구 화면도 함께 갱신",
          "훅 26개 중 16개, 파일 36개 수정 → 한 화면의 변경이 새로고침 없이 모든 화면에 반영",
        ],
      },
    ],
    lessons: [
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
  // Play Link: 이력서·포트폴리오에서 빠져 사이트에서도 내림 (데이터는 git 기록에 남아 있음)
  // 포켓몬 도감
  {
    id: 6,
    title: "포켓몬 도감",
    summary: "React 개인 프로젝트",
    description:
      "포켓몬 정보를 보고, 잡은 포켓몬을 도감에 모으는 서비스입니다.\nRedux로 상태를 관리하고 react-toastify로 알림을 구현했습니다. 로컬 스토리지로 잡은 포켓몬을 유지합니다.",
    features: [
      "Redux: 상태 관리",
      "react-toastify: 알림 구현",
      "local storage: 잡은 포켓몬 유지",
    ],
    tags: ["Personal", "React", "API"],
    period: "2025.02.04 - 2025.02.06 (3일)",
    context: "스파르타 내일배움캠프 개인 과제",
    team: "개인",
    role: "개발",
    stacks: ["React", "Redux", "react-toastify"],
    links: {
      service: "https://pokemon-dex-neon.vercel.app/",
      repository: "https://github.com/ijooha16/pokemon-dex",
    },
    img: {
      main: { alt: "pokemon dex", url: "/pokemon/sub_01.png" },
    },
    media: [
      { type: "image", src: "/pokemon/sub_01.png", caption: "도감 화면" },
    ],
    achievements: [
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
  // Judie-movie
  {
    id: 7,
    title: "Judie-movie",
    summary: "바닐라 JS 개인 프로젝트",
    description:
      "첫 개인 프로젝트로, 순수 자바스크립트로 만든 영화 검색 사이트입니다.\nTMDB API로 영화 데이터를 불러오고, 로컬 스토리지로 북마크 기능을 구현했습니다.",
    features: [
      "TMDB API: 영화 데이터 호출",
      "로컬 스토리지: 북마크 기능",
    ],
    tags: ["Personal", "Js", "API"],
    period: "2025.01.08 - 2025.01.17 (10일)",
    context: "스파르타 내일배움캠프 개인 과제",
    team: "개인",
    role: "개발",
    stacks: ["Vanilla JS", "HTML", "CSS"],
    links: {
      service: "https://judie-movie.vercel.app/",
      repository: "https://github.com/ijooha16/judie-movie",
    },
    img: {
      main: { alt: "judie movie", url: "/judie_movie_main.png" },
    },
    media: [
      { type: "image", src: "/judie_movie_main.png", caption: "메인 화면" },
      { type: "image", src: "/judie-movie/sub_01.png", caption: "상세 화면" },
    ],
    achievements: [
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
        solution: "LocalStorage를 활용해 북마크 데이터 새로고침 후에도 유지",
      },
    ],
  },
];

export type MediaType = {
  type: "video" | "image";
  src: string;
  poster?: string;
  caption: string;
};

export type MetricType = { value: string; label: string };

export type DecisionType = {
  title: string;
  problem: string;
  decision: string;
  result: string;
};

export type TechType = {
  title: string;
  description: string;
  points?: string[];
};

export type TroubleType = {
  title: string;
  problem: string;
  cause: string;
  process: string[];
  result: string[];
};

export type AchievementType = {
  title: string;
  issue: string;
  solution: string;
};

export type LessonType = { title: string; content: string };

export type ProjectType = {
  id: number;
  title: string;
  /** 한 줄 소개 */
  summary: string;
  /** 소개 문단 (\n 줄바꿈) */
  description: string;
  /** 목록용 핵심 기능, "이름: 설명" */
  features: string[];
  tags: TagType[];
  period: string;
  /** 어디서 한 프로젝트인지 (SSAFY 특화 등) */
  context?: string;
  team: string;
  role: string;
  roleDetail?: string;
  award?: string;
  stacks: string[];
  links: { service?: string; repository?: string; presentation?: string };
  /** 링크가 없을 때 이유 */
  linkNote?: string;
  /** 상세 페이지 포인트 색 */
  accent?: string;
  img: {
    main: { alt: string; url: string };
    logo?: string;
  };
  metrics?: MetricType[];
  media?: MediaType[];
  decisions?: DecisionType[];
  techs?: TechType[];
  implementations?: TechType[];
  troubleshooting?: TroubleType[];
  achievements?: AchievementType[];
  lessons?: LessonType[];
};
