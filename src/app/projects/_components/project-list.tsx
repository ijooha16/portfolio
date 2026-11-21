import React from "react";
import Image from "next/image";
import Tag from "@/components/common/tag";
import { ProjectType } from "@/data/projects";
import RichText from "@/components/common/rich-text";
import AutoVideo from "@/components/common/auto-video";
import Link from "next/link";

const ProjectList = ({ project }: { project: ProjectType }) => {
  return (
    <Link
      href={`projects/${project.id}`}
      className="flex items-center gap-8 p-6 rounded-2xl w-full bg-white shadow-default hover:-translate-y-0.5 hover:shadow-md transition-default"
    >
      <div className="relative w-[300px] h-[200px] shrink-0 rounded-xl overflow-hidden bg-[#f1f2f4]">
        {project.img.video ? (
          <AutoVideo
            src={project.img.video}
            poster={project.img.poster}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            fill
            sizes="300px"
            alt={project.img.main.alt}
            src={project.img.main.url}
            className="object-cover"
          />
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-3">
        <div className="flex gap-4 justify-between items-start">
          <div className="font-bold text-3xl text-ink">{project.title}</div>
          <div className="flex flex-wrap justify-end gap-1">
            {project.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="text-xs text-mute flex flex-wrap gap-x-2">
          <span>{project.period}</span>
          <span className="text-caption">|</span>
          <span>{project.role}</span>
          {project.award && (
            <>
              <span className="text-caption">|</span>
              <span className="font-semibold text-brand">{project.award}</span>
            </>
          )}
        </div>
        <div className="text-sm text-text leading-6 whitespace-pre-line break-keep">
          <RichText text={project.description} />
        </div>
        <div className="flex flex-col gap-1">
          {project.features.map((feature) => {
            const [name, ...rest] = feature.split(":");
            return (
              <div key={feature} className="flex gap-2 text-sm">
                <span className="text-brand">·</span>
                <strong className="text-ink shrink-0">{name}</strong>
                <span className="text-mute">{rest.join(":").trim()}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectList;
