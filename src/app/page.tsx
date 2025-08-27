import TypingEffect from "@/components/typing-effect";
import ScrollDownBtn from "@/components/scroll-down-btn";
import Projects from "@/components/projects";
import SectionContainer from "@/components/common/section-container";
import Stacks from "@/components/stacks";

const Home = () => {
  return (
    <>
      <SectionContainer className="h-screen -translate-y-[72px] justify-between">
        <div></div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold text-title animate-slideInLeft mb-2 from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            JUHA YOON
          </div>
          <div className="font-bold text-sub animate-slideInRight delay-700">
            FRONT - END DEVELOPER
          </div>
          <TypingEffect />
        </div>
        <ScrollDownBtn />
      </SectionContainer>
      <Stacks />
      <Projects />
    </>
  );
};

export default Home;
