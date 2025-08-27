"use client";

import { ProjectType } from "@/data/projects";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";

const ProjectDetailClient = ({ project }: { project: ProjectType }) => {
  return (
    <div>
      <SectionContainer>
        <SectionTitle>{project.title}</SectionTitle>
      </SectionContainer>
    </div>
  );
};

export default ProjectDetailClient;
