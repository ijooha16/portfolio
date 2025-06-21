import { ChevronsRight } from "lucide-react";
import SectionContainer from "./common/section-container";
import SectionTitle from "./common/section-title";
import ProjectCard from "./common/project-card";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionTitle>My Latest Projects</SectionTitle>
      <div className="flex flex-col items-end gap-4">
        <div className="flex gap-6 overflow-auto max-w-screen pb-1 px-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="flex items-center px-4 justify-end gap-2 text-gray-400 hover:text-gray-700 hover:scale-105 transition-default cursor-pointer">
          see more <ChevronsRight />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
