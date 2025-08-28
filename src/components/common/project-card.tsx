import React from "react";
import { ProjectType } from "@/data/projects";
import Link from "next/link";
import Tag from "./tag";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className="relative flex flex-col shrink-0 justify-between py-6 px-5 bg-cover bg-center cursor-pointer w-full h-60 rounded-xl shadow-md hover:translate-y-1 transition-default"
      style={{ backgroundImage: `url(${project.img.main.url})` }}
    >
      <div className="flex gap-2 z-5 flex-wrap">
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} noDecoration />
        ))}
      </div>
      <div className="flex-1 z-5 justify-end flex flex-col gap-1">
        <div className="text-xl font-bold text-white">{project.title}</div>
        <div className="text-gray-300">{project.summary}</div>
      </div>
      <Link href={`/projects/${project.id}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000e0] to-transparent  w-full h-60 rounded-xl"></div>
      </Link>
    </div>
  );
};

export default ProjectCard;
