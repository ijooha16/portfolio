const AboutMe = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl mb-3">About Me</span>
        <span className="h-[1px] flex-1 bg-gray-300" />
      </div>
       <div className="flex flex-col gap-2 pl-4">
        도전을 즐기며 사용자 경험을 고민하는 개발자 윤주하입니다.
       </div>
    </div>
  );
};

export default AboutMe;
