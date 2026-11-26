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
      "주변 탐색: 선택한 곡과 소리가 비슷한 곡을 지도에서 찾습니다.",
      "여정 탐색: 출발곡과 도착곡을 고르면 두 곡 사이를 잇는 곡들을 탐색할 수 있습니다.",
      "따라가기: 다른 사용자의 지도 이동과 곡 재생을 실시간으로 따라갑니다.",
    ],
    tags: ["Award", "Leader", "Team", "NextJs", "React"],
    period: "2026.07 - 2026.09",
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
    links: {
      service: "https://ody-music-map.vercel.app",
      repository: "https://github.com/ijooha16/ody-music-map",
    },
    headlines: {
      demo: "지도를 떠나지 않고 곡 상세와 여정 탐색까지 이어집니다.",
      overview: "약 450만 곡을 소리의 유사도로 배치해 음악 지도를 만들었습니다.",
      decisions: "곡 상세부터 여정 탐색까지 하나의 지도에서 이어지도록 설계했습니다.",
      techs: "곡을 Canvas 2D에 그리고, 프레임 예산을 기준으로 병목을 찾았습니다.",
      implementations: "다음 레이어로 들어갔을 때 화면에 들어오는 곡의 비율을 40%에서 96%로 높였습니다.",
      results: "배경 그리기 비용을 줄이고, 재방문 시 지도 첫 곡을 더 빨리 표시했습니다.",
      troubleshooting: "줌할 때 한 프레임에 교체되는 앨범 커버를 최대 7개에서 1개로 줄였습니다.",
    },
    charts: [
      {
        kind: "compareColumns",
        title: "재방문 후 지도에 첫 곡이 표시되기까지",
        note: "PC Chrome에서 모바일 화면과 네트워크 속도를 모의 설정해 측정한 중앙값",
        rows: [
          { label: "LTE 모의 환경 (10Mbps)", before: 2.48, after: 1.33, unit: "초" },
          { label: "느린 네트워크 (1.6Mbps)", before: 10.24, after: 1.49, unit: "초" },
        ],
      },
      {
        kind: "compare",
        title: "캔버스 렌더링과 레이어 탐색",
        note: "렌더링은 동일 PC에서 511×743 뷰포트로 측정했습니다. 레이어 전환 시점은 화면 내 곡 밀도로 판단합니다.",
        rows: [
          { label: "프레임 처리 시간 (511×743)", before: 17.1, after: 12.3, unit: "ms" },
          { label: "다음 레이어에서 화면에 들어오는 곡의 비율", before: 40, after: 96, unit: "%" },
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
        caption: "보안상의 이유로 실서비스는 비공개입니다. 공개 데모는 프론트엔드에서 목데이터로 동작합니다.",
      },
      {
        type: "video",
        src: "/projects/ody/nearby.mp4",
        poster: "/projects/ody/nearby-poster.jpg",
        caption: "**주변 탐색** · 선택한 곡과 비슷한 곡을 지도에서 둘러봅니다.",
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
        title: "탐색 중에도 지도를 유지",
        illustration: "persistent-map",
        problem:
          "곡 상세, 여정, 따라가기를 별도 페이지로 나누면 보고 있던 지도에서 벗어나 탐색 흐름이 끊깁니다.",
        decision:
          "**지도를 유지하고 필요한 상태와 패널만 바뀌도록** 설계했습니다.",
        result:
          "곡 상세를 열거나 여정 탐색을 시작해도 지도에서 **현재 위치와 주변 곡**을 계속 확인할 수 있습니다.",
      },
      {
        title: "레이어 전환을 연속된 확대로 표현",
        illustration: "zoom",
        problem:
          "16차원 음향 특성을 PCA로 변환하고, 성분 두 개를 가로·세로 축으로 묶어 **2차원 레이어 8개**를 만들었습니다. 각 레이어에는 같은 곡의 좌표가 있지만, 사용하는 축이 달라 곡의 위치도 달라집니다. 레이어를 그대로 전환하면 확대하던 중 곡의 위치가 갑자기 바뀌어 탐색 흐름이 끊깁니다.",
        decision:
          "백엔드 팀과 **지도처럼 확대하며 탐색하는 방식**으로 합의했습니다. 사용자가 확대하던 영역의 곡만 다음 레이어에 표시하고, 두 레이어를 부드럽게 이어 연속된 확대처럼 보이게 했습니다.",
        result: "사용자는 **PCA나 레이어 구조를 몰라도** 익숙한 지도처럼 관심 있는 영역을 확대하면서 소리가 더 비슷한 곡을 발견할 수 있습니다.",
      },
    ],
    techs: [
      {
        title: "Canvas 2D & TypedArray",
        description:
          "곡마다 DOM 요소를 만드는 대신 **Canvas 2D 한 장**에 별을 그리고, 좌표는 **Float32Array**에 저장했습니다. 화면 안 곡 중 격자별로 고른 대표곡을 강조하고, 나머지는 흐린 별로 표시합니다.",
        points: [
          "1초에 60프레임을 표시하려면 한 프레임의 처리 시간이 **약 16.7ms** 안에 들어와야 합니다.",
          "같은 PC와 511×743 뷰포트에서 프레임 처리 시간이 **17.1ms → 12.3ms**로 줄어 60fps 기준 예산 안으로 들어왔습니다.",
        ],
      },
      {
        title: "Next.js Route Handler (BFF)",
        description:
          "화면은 **/bff/map/songs**를 호출합니다. BFF는 백엔드 곡 목록을 화면이 쓰는 MapPoint로 변환하거나, 백엔드 연동을 끄면 같은 형식의 목데이터를 반환합니다.",
        points: [
          "첫 레이어의 **곡 좌표·메타데이터 JSON**을 gzip으로 압축해 전송량을 **1.61MB → 0.58MB**로 줄였습니다.",
          "재방문 시 브라우저가 보낸 ETag를 현재 곡 목록과 비교합니다. 같으면 **본문 없는 304**를 반환해 브라우저가 저장한 목록을 재사용합니다.",
        ],
      },
      {
        title: "STOMP / WebSocket · YouTube IFrame",
        description:
          "인솔자의 지도 이동·재생 상태는 **STOMP over WebSocket**으로 보냅니다. 참여자는 구독한 큐의 이벤트로 지도 상태를 갱신하고, 재생 위치를 보정해 **YouTube IFrame** 플레이어에 반영합니다.",
        points: [
          "프론트는 전송 경로와 JSON 필드를 Spring 백엔드와 맞췄습니다. 예를 들어 재생 상태를 보낼 때 재생 여부와 재생 위치(ms)를 함께 전달합니다.",
          "재생 위치 보정처럼 브라우저 없이 검증할 수 있는 로직은 Node.js 테스트로 확인했습니다.",
        ],
      },
    ],
    implementations: [
      {
        title: "레이어 파고들기 / 떠오르기",
        description:
          "지도를 확대하면 **보고 있던 영역의 곡만 다음 레이어로** 가져옵니다. 진입한 영역의 경계를 레이어마다 기록하고, 가시 영역 마스크로 화면에 그릴 곡을 걸러냅니다. 현재 레이어를 서서히 흐리게 하면서 다음 레이어를 확대했습니다.",
        points: [
          "다음 레이어에서 화면에 들어오는 곡의 비율 **40% → 96%**",
          "**화면 내 곡 밀도**를 기준으로 레이어 전환 시점을 판단",
        ],
      },
      {
        title: "실시간 따라가기 / 지도 위 사람",
        description:
          "인솔자의 **레이어 이동, 곡 선택, 재생 시각**을 참여자 화면에 동기화했습니다. 연결이 끊기면 자동으로 재연결합니다. 지도에서 겹치는 사용자는 +N으로 표시하고, 누르면 개별 표시가 펼쳐집니다.",
        points: [
          "백그라운드 탭에서 타이머가 지연돼 접속자가 최대 1분 가까이 이탈 상태로 표시되던 문제를 **탭 복귀 즉시 접속 신호 전송**으로 해결",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "줌할 때 깜빡이는 앨범 커버",
        problem:
          "줌할 때 앨범 커버가 **불규칙하게 사라졌다 다시 나타났습니다.** 발생 조건이 일정하지 않았고, 캔버스에 그려지는 커버의 교체 수를 DOM에서 확인하기 어려웠습니다.",
        cause:
          "대표곡을 고르는 격자 크기가 **86 ÷ 배율**로 계산돼, 줌이 바뀔 때마다 격자 경계와 대표곡이 함께 바뀌었습니다. 실데이터의 정렬 가중치(weight)도 모두 0이어서 곡에 우선순위를 부여할 수 없었습니다.",
        process: [
          "**drawImage 호출을 후킹**해 프레임별 커버 교체를 기록하고, 한 프레임에 최대 **7장**이 바뀌는 것을 확인",
          "직전 프레임에 표시한 커버에 **유지 우선순위(히스테리시스)**를 부여",
          "겹치는 커버를 제거하고 새 커버를 **프레임당 한 장씩** 추가",
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
      {
        title: "배경 별 렌더링 비용 절감",
        problem:
          "지도에 표시하는 곡 수를 늘리는 과정에서 **프레임 처리 시간이 60fps 기준 예산을 넘어서는 문제**를 확인했습니다.",
        cause:
          "배경 별 네 겹이 프레임마다 drawImage를 **5,170회** 호출했습니다. 개발 환경의 초기 프로파일에서는 배경 그리기가 drawMap 시간의 **88%**를 차지했습니다.",
        process: [
          "Chrome 성능 프로파일에서 렌더링 시간을 항목별로 나눠 배경 렌더링 비용을 확인",
          "별 크기와 투명도를 각각 줄여 측정했으나 더 느려져, **그리기 호출 횟수**를 줄이는 방법을 검토",
          "멀리 있는 배경 별 두 겹을 **한 장의 이미지로 미리 합성**하고, CSS 픽셀 크기로 만들어 메모리 사용량을 절감",
        ],
        result: [
          "프레임당 배경 그리기 시간 **6.94ms → 4.52ms**",
          "drawImage 호출 **5,170회 → 3,308회**",
          "배경 타일을 CSS 픽셀 크기로 생성해 메모리를 **49MB → 12.2MB**로 줄였습니다(DPR 2 크기와 비교).",
        ],
        chart: {
          kind: "compareColumns",
          rows: [
            { label: "배경 그리기 시간 (프레임당)", before: 6.94, after: 4.52, unit: "ms" },
            { label: "drawImage 호출", before: 5170, after: 3308, unit: "회" },
            { label: "배경 타일 메모리 (DPR 2 vs CSS 픽셀)", before: 49, after: 12.2, unit: "MB" },
          ],
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
      "두 팀이 같은 단어를 동시에 치고, **먼저 완성한 팀이 가로챕니다**.\n키보드는 **팀원 수만큼 나뉘어** 있어 내 글자는 나만 칠 수 있습니다. **0.1초** 차로 갈리는 승부라 판정은 **서버가 누른 순서대로** 합니다.",
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
    headlines: {
      demo: "팀원 수만큼 나뉜 자판으로 같은 단어를 함께 칩니다.",
      overview: "12일 동안 혼자 기획부터 배포까지 끝내 가입자 121명을 모았습니다.",
      techs: "모든 키를 DB 함수 한 곳에서 판정해 점수가 어긋날 수 없습니다.",
      implementations: "설계와 검증은 직접, 구현은 Claude Code와 나눠 진행했습니다.",
      troubleshooting: "실제 기록을 재현해 오타 오판 4개를 0개로 고쳤습니다.",
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
    techs: [
      {
        title: "Supabase Realtime (WebSocket)",
        description:
          "판정 결과는 **방 채널**, 키 입력은 **팀 채널**로 바로 보낸다. **Presence**로 접속·이탈을 감지한다.",
        points: [
          "**초당 100개** 한도 → 판정 결과는 **0.25초마다 묶어** 전송",
          "놓친 메시지는 2초마다 방 상태를 다시 받아 복구",
        ],
      },
      {
        title: "Postgres RPC · 서버 권위 판정",
        description:
          "모든 키를 **DB 함수 한 곳**에서 판정하고, **방 단위로 잠가** 한 줄로 처리한다.",
        points: [
          "클라이언트끼리 점수를 다르게 셀 수 없음",
          "키마다 **처리 번호(ack)**를 돌려줘 화면 예측과 맞춤",
        ],
      },
      {
        title: "PGlite · DB 통합 테스트",
        description:
          "운영 중인 스키마 위에 새 SQL을 덮어써서 **실제 기록 순서 그대로** 재현한다.",
        points: ["2·4·10인 e2e, 회원가입 시뮬레이션"],
      },
    ],
    implementations: [
      {
        title: "클라이언트 예측 + 재생 (replay)",
        description:
          "**누르는 즉시** 화면에 그리고, 서버가 처리한 번호까지만 빼고 나머지를 다시 얹는다.",
        points: [
          "연타해도 친 글자가 사라졌다 생기지 않음",
          "팀원 키도 같은 방식으로 얹어 **0.08초** 안에 표시",
        ],
      },
      {
        title: "Claude Code와 페어 개발",
        description:
          "판정 규칙·채널 구조를 **설계 문서(md)로 먼저** 정하고, 구현은 Claude Code와 나눠 진행했다.",
        points: [
          "**규칙·우선순위 결정은 직접**, 코드 작성은 AI와 분담",
          "AI가 쓴 코드는 **PGlite 통합 테스트**와 **npm run check**로 자동 검증",
        ],
      },
      {
        title: "나가도 끊기지 않는 판",
        description:
          "Presence에서 **4초간** 안 보이면 퇴장 처리하고, 그 사람 키는 **봇이 바로 이어받는다**.",
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
          "팀전에서 맞는 키를 눌렀는데 **오타가 뜨고 안 쳐진다**. 둘 다 '쳤는데?' 하고 기다리다 단어가 멈춘다. 실제 기록: 한 단어에서 **3.7초, 7.5초** 정지.",
        cause:
          "판정 기준이 **'서버에 도착한 순서'**였다. 팀원 키보다 내 키가 먼저 도착하거나 시계가 어긋나면, 미리 쳐 둔 키는 0.25초 뒤 **오타(-3점)**로 처리되고 사라졌다.",
        process: [
          "키마다 **누른 시각**을 함께 보내 **누른 순서**로 판정",
          "내 기기와 서버의 시계 차이를 **접속 시 5번, 이후 30초마다** 재서 보정 (한 번만 재면 최대 280ms 어긋남)",
          "차례보다 먼저 친 글자는 버리지 않고 **들고 있다가** 차례가 오면 인정",
        ],
        result: [
          "'국제선' 실제 기록 재현: 오타 처리 **4개 → 0개**",
          "고치기 전 스키마에선 실패, 후엔 통과하는 **테스트로 고정**",
        ],
        chart: {
          kind: "compare",
          rows: [{ label: "맞게 쳤는데 오타로 처리된 키 ('국제선' 재현)", before: 4, after: 0, unit: "개" }],
        },
      },
      {
        title: "팀원 키가 늦게 보인다",
        problem:
          "팀원이 키를 눌러도 내 화면엔 **0.19~0.55초** 뒤에 보인다. 팀원 다음이 내 차례인데 화면이 늦어 **박자가 끊긴다**.",
        cause:
          "팀원 키가 **'서버 판정 → 방 전체 공유'**를 거쳐야 보였다. 서버 왕복 + 판정 결과 묶음 간격(0.25초) + 전달 시간이 **그대로 쌓였다**.",
        process: [
          "누르는 순간 **팀 전용 채널**로 팀원에게 바로 전송 (판정은 서버가 따로)",
          "받은 키를 **먼저 화면에 그리고**, 서버 확인이 오면 정리 (3초 안에 안 오면 취소)",
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
      demo: "캡슐 인체 모델이 복원한 실제 벽에서 동작을 따라 오릅니다.",
      overview: "예측 모델이 쓸 데이터와 검증 기준을 함께 만들었습니다.",
      decisions: "판정 이유를 설명할 수 있는 캡슐 모델 하나로 기준을 정했습니다.",
      implementations: "실제 성공 동작 42개 중 38개를 가능으로, 불가능 동작 10개는 모두 걸렀습니다.",
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
        title: "시뮬레이터 세 개로 시작해서 하나로",
        problem:
          "처음엔 근육 모델(MyoSuite), 캡슐 몸 모델, 물리 엔진(Isaac) **세 개가 모두 통과**해야 가능한 동작으로 인정하려 했다.",
        decision:
          "물리 엔진은 손발이 벽에 닿는 순간 **계산이 튀어 보류**, 근육 모델은 **느리고 결과가 들쭉날쭉**했다. 빠르고 왜 안 되는지 **관절 단위로 설명할 수 있는 캡슐 모델 하나**를 기준으로 삼았다.",
        result:
          "근육 모델의 장점은 관절별 힘 한도로 뽑아 캡슐 모델에 합쳤고, 판정 결과는 **거의 달라지지 않았다**.",
      },
    ],
    implementations: [
      {
        title: "영상 라벨링 도구",
        description:
          "학습에 쓸 영상 **약 1,000개**에 손발 위치, 홀드 위치·모양·색, 의미 있는 동작 구간 프레임을 기록해야 했다. 팀원마다 필요한 정보를 먼저 모은 뒤, 클릭 몇 번으로 구간을 자르고 좌표를 남기는 **웹 라벨링·검수 도구**를 만들었다.",
        points: [
          "영상당 **1시간** 넘게 걸리던 수기 작업 → **3~5분** (숙련 후 1시간에 30개)",
          "**약 1,000개** 라벨링 완료",
        ],
      },
      {
        title: "물리 시뮬레이션 판정 (MuJoCo 캡슐 인체 모델)",
        description:
          "모델이 추천한 다음 동작이 실제로 가능한지, **관절 힘·마찰·균형**으로 판정하는 규칙을 만들고 검증했다. 데이터를 찍은 벽은 이미 홀드가 바뀌어, **벽을 3D로 복원**하고 그 위에 몸 모델을 올렸다.",
        points: [
          "실제 성공 동작 42개 중 **38개(90%)**를 가능으로 판정",
          "일부러 만든 불가능 동작 10개는 **모두 걸러냄**",
          "모델 추천 후보 상위 3개 중 **76%**가 물리적으로 가능함을 확인",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "시뮬레이션으로 찾아낸 데이터 오류",
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
      demo: "감정 쿠키 캘린더와 감정 통계로 한 달을 돌아봅니다.",
      overview: "4주 동안 6명 팀을 이끌어 12팀 중 1위로 대상을 받았습니다.",
      techs: "쿼리 15개와 뮤테이션 11개를 하나의 캐시로 관리했습니다.",
      implementations: "캘린더에서 고른 날짜로 바로 가는 양방향 무한 스크롤을 만들었습니다.",
      troubleshooting: "발표 며칠 전, 쪼개진 캐시를 합쳐 전 기능 시연을 지켰습니다.",
      lessons: "팀장을 맡으며 초반 설계와 합의가 재작업을 줄인다는 것을 배웠습니다.",
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
    techs: [
      {
        title: "TanStack Query & QUERY_KEY",
        description:
          "일기·친구·음악 데이터를 여러 화면이 함께 쓰고 계속 바뀐다. 서버 데이터를 **캐시 한 곳에 모아** 관리했다.",
        points: [
          "**쿼리 15개·뮤테이션 11개**를 하나의 캐시로, 바뀌면 해당 키만 무효화",
          "주요 키를 **QUERY_KEY 상수**로 관리",
        ],
      },
      {
        title: "Polling",
        description:
          "친구 요청이 새로고침 전엔 보이지 않았다. 초 단위 실시간까지는 필요 없어 **WebSocket 대신 일정 간격으로 다시 묻는 방식**을 골랐다.",
        points: [
          "공통 훅 하나로 친구 쿼리 3개에 적용",
          "**5초 간격**, 탭 복귀 시 재요청, 비로그인 상태에선 요청 차단",
        ],
      },
      {
        title: "Framer Motion",
        description:
          "**'위로'**가 컨셉인 서비스인 만큼 **감성**이 중요했다. 4주 안에 완성도 있는 애니메이션을 내기 위해 라이브러리를 선택했다.",
        points: ["팝업, 배경, 그래프 막대, 더보기 등 전체 애니메이션 구현"],
      },
    ],
    implementations: [
      {
        title: "[리스트 페이지] 월 단위 양방향 무한 스크롤",
        description:
          "캘린더에서 **누른 날짜로 바로** 들어가 그 위치로 스크롤된다. 위로 올리면 이전 달, 아래로 내리면 다음 달을 **한 달씩** 불러온다.",
        points: [
          "처음엔 선택한 달 한 달치만 요청",
          "선택 날짜와 탭 상태는 Zustand로 캘린더 → 리스트에 전달",
        ],
      },
      {
        title: "[공통 컴포넌트] 감정 통계 그래프",
        description:
          "최근 3개월 일기에서 감정 10가지를 세어 **상위 5개를 비율**로 보여준다. 긍정 감정은 연두, 부정 감정은 코랄 계열로 나눴다.",
        points: [
          "컴포넌트 하나를 리스트, 마이페이지, 친구 목록 **3곳에서 재사용**",
          "**role·aria-label**로 스크린리더 대응",
        ],
      },
      {
        title: "[폴링] 친구 기록 탭",
        description:
          "친구별로 가장 최근 기록 하나만 추려 최신순으로 보여준다. 친구가 새로 쓴 기록은 폴링으로 **새로고침 없이** 올라온다.",
      },
    ],
    troubleshooting: [
      {
        title: "다른 화면에 반영되지 않는 상태값",
        problem:
          "각자 만든 기능을 합치자, 한 화면에서 내용을 고쳐도 다른 화면에는 **새로고침 전까지 예전 값**이 그대로 보였다. **발표 며칠 전**이라 기능을 줄이자는 의견도 나왔다.",
        cause:
          "핵심 쿼리 키 몇 개만 정하고, 나머지는 각자 필요할 때 추가하며 시작했다. 이미 있는 키인지 확인하지 않아 같은 데이터에 **키가 여러 개** 생겼고, 키가 쪼개진 만큼 **캐시도 쪼개졌다**.",
        process: [
          "정해 둔 날짜까지는 해결해 보자고 **팀을 설득**하고, 노션에 모든 오류를 목록화해 담당자 지정",
          "팀원별 쿼리 키를 **노션 표로 모아**, 어떤 데이터를 어디서 쓰는지 한눈에 보이게 함",
          "같은 데이터를 가리키는 키는 합치고, 조건이 다른 키는 역할에 맞게 분리한 뒤 **QUERY_KEY로 상수화**",
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
    lessons: [
      {
        title: "리더십 경험: 팀장의 역할과 책임",
        content:
          "팀원으로 참여할 때는 내가 맡은 부분에만 집중했지만, 팀장을 맡으면서 **프로젝트의 전체 흐름**을 파악해야 했습니다. 회의를 진행하며 프로젝트가 방향을 잃지 않도록 조율하는 과정과, 팀원들의 의견을 조율하고 타협점을 찾아가는 과정은 재미있으면서도 좋은 경험이 되었습니다. 또한, 일정과 진행상황을 공유하기 위해 보드를 만들고 관리 시스템을 도입하면서 **협업 도구의 중요성**도 느꼈습니다. 해야 할 일은 두 배였지만, 리더로서 팀 분위기와 진행 속도에 큰 영향을 끼친다는 것을 체감했고, **리더십이 팀 성과를 좌우**한다는 점을 배웠습니다.",
      },
      {
        title: "실시간 기능 구현: 작은 기능 속 큰 복잡성",
        content:
          "tanstack으로 상태 관리와 최신화는 경험이 있었지만, **서버 트리거를 감지해 알림·메시지를 실시간으로 반영하는 구조**는 처음 구현해봤습니다. 친구 기능만 해도 신청, 수락, 거절, 취소 등 다양한 경우의 수가 얽혀 있었고, 이 모든 흐름을 실시간으로 처리해야 했습니다. 이를 통해 겉보기에 단순해 보이는 기능도 사실은 수많은 디테일이 모여 복잡성을 만든다는 것을 알게 되었고, 실제 서비스에서 **실시간성이 주는 사용자 경험**의 중요성을 배웠습니다.",
      },
      {
        title: "설계의 중요성: 기획 단계에서의 소통과 합의",
        content:
          "이전에도 팀 프로젝트 경험은 있었지만, 이번처럼 규모가 큰 프로젝트는 처음이었습니다. 그 결과, 쿼리키나 함수 중복 같은 문제가 발생했고, 결국 중간에 **대규모 리팩토링**을 해야 했습니다. 이를 계기로 **“시작 단계에서의 기획과 설계, 역할 분배”**가 얼마나 중요한지를 뼈저리게 깨달았습니다. 사전에 정리와 합의를 해두는 것이 **불필요한 재작업**을 줄이고, 전체 개발 효율성을 크게 높인다는 사실을 배웠습니다.",
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
  | "demo"
  | "overview"
  | "results"
  | "decisions"
  | "techs"
  | "implementations"
  | "troubleshooting"
  | "achievements"
  | "lessons";

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
  chart?: ChartType;
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

export type LessonType = { title: string; content: string };

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
  techs?: TechType[];
  implementations?: TechType[];
  troubleshooting?: TroubleType[];
  achievements?: AchievementType[];
  lessons?: LessonType[];
};
