import TypingEffect from "@/components/typing-effect";
import ScrollDownBtn from "@/components/scroll-down-btn";
import Projects from "@/components/projects";
import Stacks from "@/components/stacks";

const Home = () => {
  return (
    <>
      <div className="pt-[112px] pb-[62px] lg:pt-[172px] overflow-hidden flex flex-col items-center gap-10 px-4 w-full max-w-screen h-screen justify-between">
        <div></div>
        <div className=" flex flex-col items-center gap-1">
          <div className="font-bold text-title animate-slideInLeft mb-2 from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            JUHA YOON
          </div>
          <div className="font-bold text-sub animate-slideInRight delay-700">
            FRONT - END DEVELOPER
          </div>
          <TypingEffect />
        </div>
        <ScrollDownBtn />
      </div>
      <Stacks />
      <Projects />
    </>
  );
};

export default Home;
