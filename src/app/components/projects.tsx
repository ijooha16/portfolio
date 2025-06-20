import { ChevronsRight } from "lucide-react";
import SectionContainer from "./section-container";

const Projects = () => {
  return (
    <SectionContainer>
      <div className="font-bold text-2xl">My Latest Projects</div>
      <div className="flex flex-col items-end gap-4">
        <div className="flex gap-6 overflow-auto max-w-screen pb-1 px-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex items-center px-4 justify-end gap-2 text-gray-400 hover:text-gray-700 hover:scale-105 transition-default cursor-pointer">
          see more <ChevronsRight />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;

const ProjectCard = () => {
  const imageUrl =
    "https://www.smookie.co/_next/image?url=%2Fimages%2Fhome-tutorial.png&w=3840&q=75&dpl=dpl_Hdr4DTKBK1Wek8a4ENbQY3JZVbtF";

  return (
    <div
      className="relative flex flex-col shrink-0 justify-end py-6 px-5 bg-cover bg-center cursor-pointer w-52 h-60 rounded-xl shadow-xl hover:translate-y-1 transition-default"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000e0] to-transparent  w-52 h-60 rounded-xl"></div>
      <div className="text-xl font-bold text-white z-5">Project Name</div>
      <div className="text-gray-300 z-5">description</div>
    </div>
  );
};
