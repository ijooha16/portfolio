const AboutMe = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl mb-3">About Me</span>
        <span className="h-[1px] flex-1 bg-gray-300" />
      </div>
      <div className="flex flex-col gap-3 pl-4 text-sm leading-7 break-keep max-w-2xl">
        <p className="text-base font-semibold">
          사용자 경험을 고민하는 프론트엔드 개발자 윤주하입니다.
        </p>
        <p>
          산업디자인을 전공하고 UX 디자이너로 일하다 개발로 넘어왔습니다. UI/UX에
          대한 이해를 바탕으로 기획과 디자인의 의도를 정확히 파악하고, 직관적이고
          인터랙티브한 인터페이스로 완성합니다.
        </p>
        <p>
          화면이 느리거나 어색하면 감으로 고치지 않고 먼저 측정합니다. 원인을
          숫자로 확인하고, 고친 뒤에도 같은 방법으로 다시 재서 확인합니다.
        </p>
        <p>
          Claude Code와 페어로 개발하되, 설계·규칙·검증은 직접 합니다. AI가 쓴
          코드는 테스트로 자동 검증해 실제로 쓰이는 수준까지 다듬습니다.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
