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

const Projects = () => {
  const [isList, setIsList] = useState(true);
  const [filtered, setFiltered] = useState<TagType[]>([]);
  const filteredList = projects.filter((project) =>
    project.tags.some((tag) => filtered.includes(tag))
  );

  return (
    <>
      <SectionContainer>
        <SectionTitle>PROJECTS</SectionTitle>
        <div className="flex flex-col w-[800px] pr-4 items-end gap-6">
          <div className="flex gap-2">
            <Icon active={isList} onClick={() => setIsList(true)}>
              <LayoutList />
            </Icon>
            <Icon active={!isList} onClick={() => setIsList(false)}>
              <LayoutGrid />
            </Icon>
          </div>
          <Filter filtered={filtered} setFiltered={setFiltered} />
        </div>
        {(filtered.length === 0 ? projects : filteredList).map((project) =>
          isList ? (
            <ProjectList key={project.title} project={project} />
          ) : (
            <ProjectCard key={project.title} project={project} />
          )
        )}
      </SectionContainer>
    </>
  );
};

export default Projects;
