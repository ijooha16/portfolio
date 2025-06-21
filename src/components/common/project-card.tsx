import React from "react";
import { ProjectType } from "@/data/projects";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="relative flex flex-col shrink-0 justify-end py-6 px-5 bg-cover bg-center cursor-pointer w-52 h-60 rounded-xl shadow-xl hover:translate-y-1 transition-default"
      style={{ backgroundImage: `url(${project.img.main.url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000e0] to-transparent  w-52 h-60 rounded-xl"></div>
      <div className="text-xl font-bold text-white z-5">{project.title}</div>
      <div className="text-gray-300 z-5">{project.summary}</div>
    </div>
  );
};

export default ProjectCard;
