import { TagType } from "@/constants/tags.constant";

const odyMainVideo = {
  src: "/projects/ody/demo.mp4",
  poster: "/projects/ody/demo-poster.jpg",
};

export const projects: ProjectType[] = [
  // ODY
  {
    id: 8,
    title: "ODY",
    summary: "소리가 비슷한 곡을 지도에서 발견하는 음악 탐색 서비스",
    description:
      "약 **450만 곡**을 16차원 음향 특성으로 분석해, 소리가 비슷한 곡을 지도에서 가깝게 배치했습니다.\n지도를 확대하며 **8개 레이어**를 탐색하거나, 다른 사용자의 탐색을 **실시간으로 따라가며** 새로운 곡을 발견할 수 있습니다.",
    features: [
      "주변 탐색: 선택한 곡과 소리가 비슷한 곡을 찾습니다.",
      "여정 탐색: 출발곡과 도착곡을 고르면 두 곡이 자연스럽게 이어지는 플레이리스트가 만들어집니다. ",
      "따라가기: 다른 사용자의 지도 이동과 곡 재생을 실시간으로 따라갑니다.",
    ],
    tags: ["Award", "Team", "NextJs", "React"],
    period: "2026.07 - 2026.09",
    team: "6명 (프론트엔드 2, 백엔드 3, 인프라 1)",
    role: "기획·디자인 전담 / 프론트엔드 리드",
    roleDetail: "지도 엔진 · 레이어 탐색 · 실시간 따라가기 · BFF",
    award: "SSAFY 프로젝트 2등",
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
    links: {
      service: "https://ody-music-map.vercel.app",
      repository: "https://github.com/ijooha16/ody-music-map",
    },
    headlines: {
      decisions: "지도를 움직이고 확대하는 익숙한 방식으로, 소리가 비슷한 곡을 탐색하도록 설계했습니다.",
      results: "재방문 시 캐시를 재사용해 지도에 첫 곡이 표시되는 시간을 줄였습니다.",
      troubleshooting: "재생 중인 곡의 탐색 경로를 복원하고, 확대할 때 앨범 커버가 깜빡이는 현상을 줄였습니다.",
    },
    charts: [
      {
        kind: "compareColumns",
        title: "재방문 후 지도에 첫 곡이 보이기까지",
        note: "PC Chrome에서 모바일 화면과 네트워크 속도를 모의 설정해 측정한 중앙값",
        rows: [
          { label: "LTE 모의 환경 (10Mbps)", before: 2.48, after: 1.33, unit: "초" },
          { label: "느린 네트워크 (1.6Mbps)", before: 10.24, after: 1.49, unit: "초" },
        ],
      },
    ],
    img: {
      main: { url: "/projects/ody/map.jpg", alt: "ODY 지도 화면" },
      logo: "/projects/ody/logo.png",
      video: odyMainVideo.src,
      poster: odyMainVideo.poster,
    },
    media: [
      {
        type: "video",
        ...odyMainVideo,
        caption: "실서비스는 보안상 비공개입니다. 공개 데모에서는 일부 기능을 샘플 데이터로 체험할 수 있습니다.",
      },
      {
        type: "video",
        src: "/projects/ody/nearby.mp4",
        poster: "/projects/ody/nearby-poster.jpg",
        caption: "**주변 탐색** · 선택한 곡과 비슷한 곡을 탐색합니다.",
      },
      {
        type: "video",
        src: "/projects/ody/follow.mp4",
        poster: "/projects/ody/follow-poster.jpg",
        caption: "**따라가기** · 다른 사용자의 지도 이동과 곡 재생을 실시간으로 따라갑니다.",
      },
    ],
    decisions: [
      {
        title: "장르 칸 대신 소리 지도",
        illustration: "sound-map",
        problem:
          "장르별로 곡을 나누면 다른 장르의 비슷한 곡을 발견하기 어렵고, 내 취향이 전체 음악에서 어디쯤인지 알기 어렵습니다.",
        decision:
          "**소리의 유사도**로 곡의 위치를 정하고, 장르는 별 색과 필터로 표시했습니다.",
        result: "장르를 넘나들며 두 곡 사이를 잇는 **여정 탐색**을 할 수 있습니다.",
      },
      {
        title: "레이어 전환을 연속된 확대로 표현",
        illustration: "zoom",
        problem:
          "16차원 음향 특성을 PCA로 변환하고, 성분 두 개를 가로·세로 축으로 묶어 **2차원 레이어 8개**를 만들었습니다. 각 레이어에는 같은 곡의 좌표가 있지만, 사용하는 축이 달라 곡의 위치도 달라집니다. 레이어를 그대로 전환하면 확대하던 중 곡의 위치가 갑자기 바뀌어 탐색 흐름이 끊깁니다.",
        decision:
          "백엔드 팀과 **지도처럼 확대하며 탐색하는 경험**을 제공하기로 합의했습니다. 사용자가 확대하던 영역의 곡만 다음 레이어에 표시하고, 두 레이어를 부드럽게 이어 연속된 확대처럼 보이게 했습니다.",
        result: "사용자는 **PCA나 레이어 구조를 몰라도** 익숙한 지도처럼 관심 있는 영역을 확대하면서 소리가 더 비슷한 곡을 발견할 수 있습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "다른 레이어에서 재생 중인 곡으로 돌아가기",
        problem:
          "같은 곡도 **8개 레이어에서 서로 다른 2차원 좌표**를 가집니다. 다른 갈래를 탐색한 뒤 ‘내 위치로 가기’를 누르면 재생 중인 곡이 있는 레이어로 돌아가야 했지만, 우주선이 중앙에서 벗어나거나 이전에 듣던 곡으로 돌아갔습니다.",
        cause:
          "현재 레이어에 재생 곡이 없으면 카메라의 기준점을 잡으면서 **우주선이 가리키는 곡 ID**도 가까운 곡으로 바뀌었습니다. 주변 탐색에서 레이어 목록 밖 곡을 재생하면 복귀 목적지가 이전 곡으로 남았습니다.",
        process: [
          "레이어 이동 전후의 우주선 곡 ID와 복귀 목적지를 비교해 각각 값이 달라지는 시점을 찾았습니다.",
          "카메라 기준점 계산을 분리하고, 재생 곡은 지도 이동에 필요한 좌표를 확인하기 전에 기록했습니다.",
          "레이어 진입 시 해당 범위를 이력에 추가하고, 빠져나올 때 마지막 기록을 제거해 **최대 8개 레이어의 탐색 이력**을 관리했습니다.",
        ],
        decision:
          "지도에서 보고 있는 위치와 재생 중인 곡의 복귀 위치를 브라우저 저장소에 따로 기록했습니다. 복귀 버튼을 누르면 현재 경로와 재생 당시 경로가 마지막으로 겹치는 레이어까지 올라갔다가, 재생 곡이 있는 갈래로 내려가 곡 상세를 열도록 했습니다.",
        result: [
          "레이어 복귀 재현 테스트에서 **우주선과 지도 중앙의 오차 0px**",
          "레이어 목록 밖 곡을 재생한 뒤에도 **현재 재생 곡으로 복귀**",
          "갈래 사이를 **상승 1회·하강 1회**로 이동하고, 복귀 경로를 엔진 테스트로 검증",
        ],
        showReturnRoute: true,
        media: {
          type: "video",
          src: "/projects/ody/go-home.mp4",
          caption: "**내 위치로 가기** · 탐색 중 재생하고 있는 곡의 위치와 상세로 돌아갑니다.",
        },
      },
      {
        title: "줌할 때 깜빡이는 앨범 커버",
        decision: "기존 커버에 유지 우선순위를 주고, 겹치는 후보를 걸러낸 뒤 새 커버를 프레임당 한 장씩 추가했습니다. 격자는 대표곡을 고르는 데 계속 사용했습니다.",
        problem:
          "줌할 때 앨범 커버가 **불규칙하게 사라졌다 다시 나타났습니다.** 발생 조건이 일정하지 않았고, 캔버스에 그려지는 커버의 교체 수를 DOM에서 확인하기 어려웠습니다.",
        cause:
          "대표곡을 고르는 격자 크기가 **86 ÷ 배율**로 계산돼, 줌이 바뀔 때마다 격자 경계와 대표곡이 함께 바뀌었습니다. 실데이터의 정렬 가중치(weight)도 모두 0이어서 곡에 우선순위를 부여할 수 없었습니다.",
        process: [
          "**drawImage 호출을 후킹**해 프레임별 커버 교체를 기록하고, 한 프레임에 최대 **7장**이 바뀌는 것을 확인",
          "직전 프레임에 표시한 커버에 **유지 우선순위**를 부여",
        ],
        result: [
          "프레임당 최대 교체 수 **7개 → 1개** (줌 배율 21.8 → 34.2 구간에서 동일한 방식으로 측정)",
          "정지 상태에서는 개선 전후 모두 커버 교체 0건",
        ],
        chart: {
          kind: "compare",
          rows: [{ label: "한 프레임에 동시에 바뀌는 앨범 커버 (최대)", before: 7, after: 1, unit: "개" }],
        },
      },
    ],
  },
  // 타짝
  {
    id: 9,
    title: "타짝",
    summary: "키보드를 나눠 쓰는 실시간 협동 타이핑 게임",
    description:
      "두 팀이 같은 단어를 동시에 치고, **먼저 완성한 팀이 가로챕니다**.\n키보드는 **팀원 수만큼 나뉘어** 있어 내 글자는 나만 칠 수 있습니다. **0.1초** 차로 갈리는 승부라 서버가 입력 순서를 판정합니다.\n12일 동안 기획부터 배포까지 진행해 가입자 **121명**을 확보했습니다.",
    features: [
      "단어 쟁탈전: 먼저 완성한 팀이 단어를 가로챈다",
      "쪼개진 키보드: 자판을 팀원 수만큼 나눠 맡는다",
      "라운드마다 바뀌는 자판: 매 라운드 맡는 글자가 무작위로 바뀐다",
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
    headlines: {
      decisions: "점수와 오타를 서버에서 판정하고, 라운드마다 담당 글자를 다시 나눴습니다.",
      troubleshooting: "실제 플레이에서 발생한 오타 오판과 팀원 입력 지연을 개선했습니다.",
    },
    img: {
      main: { url: "/projects/tajjak/main.jpg", alt: "타짝 게임 화면" },
      logo: "/projects/tajjak/logo.png",
    },
    media: [
      {
        type: "image",
        src: "/projects/tajjak/main.jpg",
        caption: "팀전 화면: 위는 단어 쟁탈 현황, 아래는 내가 맡은 자판",
      },
    ],
    decisions: [
      {
        title: "점수와 오타 판정을 서버에서 확정",
        problem: "팀원이 보내는 키가 브라우저마다 다른 순서로 도착해 점수와 단어 진행이 어긋날 수 있었습니다.",
        decision: "같은 방의 키 입력을 서버에서 순서대로 처리하고, 어디까지 판정했는지 각 화면에 알려줬습니다.",
        result: "누른 키는 화면에 즉시 보이고, 점수와 단어 진행은 모든 팀원에게 같은 서버 판정으로 표시됩니다.",
      },
      {
        title: "라운드마다 자판을 다시 나누기",
        problem: "팀전에서는 각자 맡은 글자만 입력할 수 있어서, 단어를 완성하려면 팀원이 번갈아 키를 눌러야 했습니다.",
        decision: "매 라운드 시작할 때 자판을 팀원 수에 맞게 나누고, 각자 맡을 글자를 무작위로 정했습니다.",
        result: "라운드마다 누가 어떤 글자를 칠지 달라져, 팀원이 새 자판 배치에 맞춰 입력 순서를 맞춥니다.",
      },
    ],
    troubleshooting: [
      {
        title: "맞게 쳤는데 오타가 뜬다",
        decision: "보정된 입력 시각으로 순서를 정하고, 차례보다 먼저 누른 키는 보관했다가 차례가 오면 처리하도록 바꿨습니다.",
        problem:
          "팀전에서 맞는 키를 눌렀는데 **오타가 뜨고 안 쳐진다**. 둘 다 '쳤는데?' 하고 기다리다 단어가 멈춘다. 실제 기록: 한 단어에서 **3.7초, 7.5초** 정지.",
        cause:
          "판정 기준이 **'서버에 도착한 순서'**였다. 팀원 키보다 내 키가 먼저 도착하거나 시계가 어긋나면, 미리 쳐 둔 키는 0.25초 뒤 **오타(-3점)**로 처리되고 사라졌다.",
        process: [
          "키마다 **누른 시각**을 함께 보내 **누른 순서**로 판정",
          "내 기기와 서버의 시계 차이를 **접속 시 5번, 이후 30초마다** 재서 보정 (한 번만 재면 최대 280ms 어긋남)",
        ],
        result: [
          "'국제선' 실제 기록 재현: 오타 처리 **4개 → 0개**",
          "실제 데이터베이스 판정 함수를 PGlite에서 실행해, 수정 전에는 실패하고 수정 후에는 통과하는 **테스트로 검증**",
        ],
        chart: {
          kind: "compare",
          rows: [{ label: "맞게 쳤는데 오타로 처리된 키 ('국제선' 재현)", before: 4, after: 0, unit: "개" }],
        },
      },
      {
        title: "팀원 키가 늦게 보인다",
        decision: "팀 채널로 임시 입력을 먼저 보여주고, 점수와 단어 진행은 서버 판정으로 확정했습니다. 3초 안에 서버 확인이 오지 않으면 임시 입력을 취소합니다.",
        problem:
          "팀원이 키를 눌러도 내 화면엔 **0.19~0.55초** 뒤에 보인다. 팀원 다음이 내 차례인데 화면이 늦어 **박자가 끊긴다**.",
        cause:
          "팀원 키가 **'서버 판정 → 방 전체 공유'**를 거쳐야 보였다. 서버 왕복 + 판정 결과 묶음 간격(0.25초) + 전달 시간이 **그대로 쌓였다**.",
        process: [
          "누르는 순간 **팀 전용 채널**로 팀원에게 바로 전송 (판정은 서버가 따로)",
          "입력 순서 검사를 자동 점검(npm run check)에 추가",
        ],
        result: [
          "**0.19~0.55초 → 0.08초** (실제 계정 2개로 측정)",
          "판정은 그대로 서버라 **공정성 영향 없음**",
        ],
        chart: {
          kind: "compare",
          rows: [
            {
              label: "팀원 키가 내 화면에 보이기까지",
              before: 0.55,
              after: 0.08,
              unit: "초",
              beforeText: "0.19~0.55초",
            },
          ],
        },
      },
    ],
  },
  // 돌잡이
  {
    id: 10,
    title: "돌잡이",
    summary: "클라이밍 다음 동작 예측 AI (R&D)",
    description:
      "클라이밍 영상을 학습해 **다음 동작을 예측**하고, 그 동작이 사람 몸으로 가능한지 **물리 시뮬레이션**으로 확인하는 연구 프로젝트입니다.\n학습 데이터를 만드는 **라벨링 도구**와, 추천 동작을 검증하는 **물리 판정**을 맡았습니다.",
    features: [
      "라벨링 도구: 영상 구간·손발·홀드 좌표를 클릭 몇 번으로 기록",
      "물리 판정: 관절 힘·마찰·균형으로 동작 가능 여부 판정",
      "추천 검증: 모델 추천 후보가 실제로 가능한지 확인",
    ],
    tags: ["Team", "AI"],
    charts: [
      {
        kind: "compare",
        title: "영상 1개 라벨링 시간",
        note: "손발·홀드 좌표와 동작 구간을 클릭 몇 번으로 기록하는 웹 도구",
        rows: [
          {
            label: "수기 작업 → 라벨링 도구",
            before: 60,
            after: 5,
            unit: "분",
            beforeText: "1시간 이상",
            afterText: "3~5분",
          },
        ],
      },
      {
        kind: "ring",
        title: "물리 시뮬레이션 판정",
        note: "MuJoCo 캡슐 인체 모델, 관절 힘·마찰·균형 기준",
        rings: [
          { label: "실제 성공 동작을 가능으로 판정", value: 38, total: 42 },
          { label: "일부러 만든 불가능 동작을 걸러냄", value: 10, total: 10 },
          { label: "모델 추천 후보 중 물리적으로 가능", value: 37, total: 49, caption: "상위 3개" },
        ],
      },
    ],
    period: "2026.10 - 2026.11",
    context: "SSAFY 자율 프로젝트",
    team: "5명 (AI R&D)",
    role: "데이터 파이프라인 · 물리 시뮬레이션 검증",
    roleDetail: "라벨링 도구 · 스켈레톤 추출 · 3D 벽 물리 판정",
    stacks: ["Python", "MuJoCo", "SciPy", "OSQP", "RTMW", "MediaPipe", "YOLO", "COLMAP"],
    links: {},
    headlines: {
      decisions: "영상 라벨링 도구를 만들고, 동작 판정은 MuJoCo 캡슐 모델로 통일했습니다.",
      results: "라벨링을 영상당 3~5분으로 줄이고, 실제 성공 동작의 90%를 가능으로 판정했습니다.",
      troubleshooting: "시뮬레이션이 영상 데이터의 홀드 번호 오류 13건을 찾아냈습니다.",
    },
    img: {
      main: { url: "/projects/doljabi/main.jpg", alt: "돌잡이 표지" },
    },
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
        title: "영상에서 학습 데이터를 기록하는 도구",
        problem: "학습 영상 약 1,000개에 손발과 홀드 위치, 동작 구간을 같은 기준으로 기록해야 했습니다.",
        decision: "팀원이 필요한 항목을 모아, 영상에서 구간을 선택하고 좌표를 찍은 뒤 같은 화면에서 검수하는 웹 도구를 만들었습니다.",
        result: "팀이 같은 방식으로 약 1,000개의 영상에 라벨을 붙였습니다.",
      },
      {
        title: "시뮬레이터 세 개로 시작해서 하나로",
        problem:
          "처음엔 근육 모델(MyoSuite), 캡슐 몸 모델, 물리 엔진(Isaac) **세 개가 모두 통과**해야 가능한 동작으로 인정하려 했다.",
        decision:
          "물리 엔진은 손발이 벽에 닿는 순간 **계산이 튀어 보류**, 근육 모델은 **느리고 결과가 들쭉날쭉**했다. 빠르고 왜 안 되는지 **관절 단위로 설명할 수 있는 캡슐 모델 하나**를 기준으로 삼았다.",
        result:
          "실제 벽을 3D로 복원하고 근육 모델의 관절별 힘 한도를 반영해, 힘·마찰·균형을 기준으로 판정했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "시뮬레이션으로 찾아낸 데이터 오류",
        decision: "판정 규칙을 그대로 두고, 원본 영상과 대조해 잘못 기록된 홀드 번호를 고친 뒤 다시 판정했습니다.",
        problem:
          "처음 보는 실제 성공 동작인데도 시뮬레이션에서 **불가능으로 나오는 경우**가 반복됐다.",
        cause:
          "판정 규칙이 아니라 **영상 데이터가 틀려 있었다**. 볼륨을 손 홀드로, 볼륨 위에 디딘 발을 벽으로 적은 기록이 섞여 있었다.",
        process: [
          "불가능으로 나온 동작을 프레임 단위로 다시 보며 **홀드 번호**를 대조",
          "홀드 번호 오류를 고친 뒤 같은 규칙으로 다시 판정",
        ],
        result: [
          "영상 데이터의 홀드 번호 오류 **13건**을 찾아 수정",
          "처음 보는 동작 30개 중 **27개(90%)** 가능 판정",
        ],
        chart: {
          kind: "ring",
          rings: [{ label: "처음 보는 성공 동작을 가능으로 판정", value: 27, total: 30, caption: "데이터 오류 수정 후" }],
        },
      },
    ],
  },
  // Smookie
  {
    id: 1,
    title: "Smookie",
    summary: "감정을 기록하면 음악으로 위로받는 AI 다이어리",
    description:
      "하루를 일기로 쓰면 **AI가 감정을 분석**해 쿠키 이모지로 캘린더에 남기고,\n그 감정에 어울리는 **음악을 추천**합니다. 친구의 오늘 감정도 함께 보며 서로의 하루를 살핍니다.",
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
    headlines: {
      decisions: "캘린더에서 기록을 바로 열고, 친구 기록은 짧은 간격으로 갱신했습니다.",
      troubleshooting: "발표 며칠 전, 쪼개진 캐시를 합쳐 전 기능 시연을 지켰습니다.",
    },
    img: {
      main: { url: "/smookie_image.png", alt: "Smookie 메인" },
      logo: "/smookie/logo.png",
    },
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
    decisions: [
      {
        title: "선택한 날짜부터 기록 탐색",
        problem: "캘린더에서 날짜를 눌렀을 때 목록을 처음부터 열면 원하는 기록을 다시 찾아야 했습니다.",
        decision: "선택한 날짜와 탭을 Zustand로 전달하고, 해당 날짜로 바로 스크롤한 뒤 위아래로 탐색할 때 한 달씩 불러왔습니다.",
        result: "첫 요청은 선택한 한 달치로 좁히고, 이전 달과 다음 달 기록을 같은 목록에서 탐색할 수 있게 했습니다.",
      },
      {
        title: "친구 기록만 주기적으로 갱신",
        problem: "친구 요청과 기록이 새로고침 전에는 표시되지 않았습니다.",
        decision: "TanStack Query의 친구 쿼리를 5초마다 갱신하고, 탭에 돌아올 때도 다시 요청하도록 했습니다.",
        result: "로그인한 사용자는 페이지를 새로고침하지 않아도 친구의 최신 기록을 확인할 수 있습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "다른 화면에 반영되지 않는 상태값",
        decision: "동일 데이터는 키를 통일하고 조회 조건이 다른 데이터는 별도 키로 관리했습니다. 공통 QUERY_KEY를 기준으로 변경된 캐시를 갱신하도록 맞췄습니다.",
        problem:
          "각자 만든 기능을 합치자, 한 화면에서 내용을 고쳐도 다른 화면에는 **새로고침 전까지 예전 값**이 그대로 보였다. **발표 며칠 전**이라 기능을 줄이자는 의견도 나왔다.",
        cause:
          "핵심 쿼리 키 몇 개만 정하고, 나머지는 각자 필요할 때 추가하며 시작했다. 이미 있는 키인지 확인하지 않아 같은 데이터에 **키가 여러 개** 생겼고, 키가 쪼개진 만큼 **캐시도 쪼개졌다**.",
        process: [
          "정해 둔 날짜까지는 해결해 보자고 **팀을 설득**하고, 노션에 모든 오류를 목록화해 담당자 지정",
          "팀원별 쿼리 키를 **노션 표로 모아**, 어떤 데이터를 어디서 쓰는지 한눈에 보이게 함",
        ],
        result: [
          "같은 닉네임을 두 키로 따로 캐시하던 것을 하나로 합침",
          "친구 게시물 키를 POSTS 아래로 옮겨, 게시물이 바뀌면 친구 화면도 함께 갱신",
          "**훅 26개 중 16개, 파일 36개** 수정 → 한 화면의 변경이 **새로고침 없이 모든 화면에 반영**",
        ],
        chart: {
          kind: "ring",
          rings: [{ label: "쿼리 키를 통일하며 고친 훅", value: 16, total: 26, caption: "파일 36개 수정" }],
        },
      },
    ],
  },
  // 포켓몬 도감
  {
    id: 6,
    title: "포켓몬 도감",
    summary: "React 개인 프로젝트",
    description:
      "포켓몬 정보를 보고, 잡은 포켓몬을 도감에 모으는 서비스입니다.\n**Redux**로 상태를 관리하고 **react-toastify**로 알림을 구현했습니다. **로컬 스토리지**로 잡은 포켓몬을 유지합니다.",
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
      "첫 개인 프로젝트로, 순수 자바스크립트로 만든 영화 검색 사이트입니다.\n**TMDB API**로 영화 데이터를 불러오고, **로컬 스토리지**로 북마크 기능을 구현했습니다.",
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

export type SectionKey =
  | "results"
  | "decisions"
  | "troubleshooting"
  | "achievements";

export type MediaType = {
  type: "video" | "image";
  src: string;
  poster?: string;
  caption: string;
};

export type DecisionType = {
  illustration?: "sound-map" | "persistent-map" | "zoom";
  title: string;
  problem: string;
  decision: string;
  result: string;
};

export type TroubleType = {
  title: string;
  problem: string;
  cause: string;
  process: string[];
  decision: string;
  result: string[];
  chart?: ChartType;
  media?: MediaType;
  showReturnRoute?: boolean;
};

export type CompareRowType = {
  label: string;
  before: number;
  after: number;
  unit: string;
  beforeText?: string;
  afterText?: string;
};

export type RingType = {
  label: string;
  value: number;
  total: number;
  caption?: string;
};

export type ColumnBarType = {
  label: string;
  value: number;
  text?: string;
  strong?: boolean;
};

export type ChartType = { title?: string; note?: string } & (
  | { kind: "compare"; rows: CompareRowType[] }
  | { kind: "compareColumns"; rows: CompareRowType[] }
  | { kind: "columns"; unit: string; bars: ColumnBarType[] }
  | { kind: "ring"; rings: RingType[] }
);

export type AchievementType = {
  title: string;
  issue: string;
  solution: string;
};

export type ProjectType = {
  id: number;
  title: string;
  summary: string;
  description: string;
  features: string[];
  tags: TagType[];
  period: string;
  context?: string;
  team: string;
  role: string;
  roleDetail?: string;
  award?: string;
  stacks: string[];
  links: { service?: string; repository?: string; presentation?: string };
  headlines?: Partial<Record<SectionKey, string>>;
  img: {
    main: { alt: string; url: string };
    logo?: string;
    video?: string;
    poster?: string;
  };
  charts?: ChartType[];
  media?: MediaType[];
  decisions?: DecisionType[];
  troubleshooting?: TroubleType[];
  achievements?: AchievementType[];
};
