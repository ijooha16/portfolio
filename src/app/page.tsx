import TypingEffect from "./components/typing-effect";
import ResetBtn from "./components/reset-btn";
import ScrollDownBtn from "./components/scroll-down-btn";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between h-screen py-20">
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
      </div>
    </div>
  );
};

export default Home;
