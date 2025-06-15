import TypingEffect from "./components/typing-effect";
import ResetBtn from "./components/reset-btn";
import ScrollDownBtn from "./components/scroll-down-btn";
import Projects from "./components/projects";
import SectionContainer from "./components/section-container";

const Home = () => {
  return (
    <>
      <SectionContainer className="h-screen justify-between">
        <ResetBtn />
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold text-[110px] animate-slideInLeft">
            JUHA YOON
          </div>
          <div className="font-bold text-2xl animate-slideInRight delay-700">
            FRONT - END DEVELOPER
          </div>
          <TypingEffect />
        </div>
        <ScrollDownBtn />
      </SectionContainer>
      <Projects />
    </>
  );
};

export default Home;
