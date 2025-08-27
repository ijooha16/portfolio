"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/common/project-card";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import ProjectList from "./_components/project-list";
import { LayoutGrid, LayoutList } from "lucide-react";
import Icon from "@/components/common/icon";
import { projects } from "@/data/projects";
import { TagType } from "@/constants/tags.constant";
import Filter from "./_components/filter";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const [isList, setIsList] = useState(true);
  const [filtered, setFiltered] = useState<TagType[]>([]);
  const filteredList = projects.filter((project) =>
    filtered.every((tag) => project.tags.includes(tag))
  );

  const isMobile = useMediaQuery({ maxWidth: 920 });

  return (
    <>
      <SectionContainer>
        <SectionTitle>PROJECTS</SectionTitle>
        <div className="flex flex-col w-full flex-wrap md:w-[800px] pr-4 items-end gap-6">
          {!isMobile && (
            <div className="flex gap-2">
              <Icon active={isList} onClick={() => setIsList(true)}>
                <LayoutList />
              </Icon>
              <Icon active={!isList} onClick={() => setIsList(false)}>
                <LayoutGrid />
              </Icon>
            </div>
          )}
          <Filter filtered={filtered} setFiltered={setFiltered} />
        </div>
        <div
          className={`${
            isList && !isMobile
              ? "flex flex-col items-center gap-6"
              : "grid grid-cols-1 md:grid-cols-3 min-w-full sm:grid-cols-2 gap-6"
          }`}
        >
          {(filtered.length === 0 ? projects : filteredList).map((project) =>
            isList && !isMobile ? (
              <ProjectList key={project.title} project={project} />
            ) : (
              <ProjectCard key={project.title} project={project} />
            )
          )}
        </div>
      </SectionContainer>
    </>
  );
};

export default Projects;
