import React from "react";
import Image from "next/image";
import Tag from "@/components/common/tag";
import { ProjectType } from "@/data/projects";
import { Dot } from "lucide-react";
import Link from "next/link";

const ProjectList = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      href={`/projects/${project.title}`}
      className="flex items-center px-4 rounded-xl w-[800px] h-[300px] cursor-pointer hover:bg-[#00000006] hover:translate-x-1 transition-default"
    >
      <Image
        width={300}
        height={200}
        alt={project.img.main.alt}
        src={project.img.main.url}
        style={{ objectFit: "cover", borderRadius: "4px" }}
      />
      <div className="py-6 px-4  w-full">
        <div className="flex gap-4 justify-between items-center">
          <div className="font-bold text-3xl">{project.title}</div>
          <div className="flex gap-1">
            {project.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="text-sm pl-2 mt-1 mb-5 whitespace-pre-line">
          {project.description}
        </div>
        <div>
          {project.features.map((feature) => {
            const txt = feature.split(":");

            return (
              <div key={feature} className="flex gap-1 text-sm">
                <Dot />
                <strong>{txt[0]}</strong>
                <div className="text-gray-500">{txt[1]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectList;
