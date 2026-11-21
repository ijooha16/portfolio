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
      </div>
    </div>
  );
};

export default AboutMe;
