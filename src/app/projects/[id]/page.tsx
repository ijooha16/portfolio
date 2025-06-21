"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects, ProjectType } from "@/data/projects";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";

const ProjectDetail = () => {
  const router = useParams();
  const id = router.id;
  const project: ProjectType = projects.find(
    (project) => project.title === id
  )!;

  return (
    <div>
      <SectionContainer>
        <SectionTitle>{project.title}</SectionTitle>
      </SectionContainer>
    </div>
  );
};

export default ProjectDetail;
