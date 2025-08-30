"use client";

import { projects, ProjectType } from "@/data/projects";
import { useParams } from "next/navigation";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";

const ProjectDetail = () => {
  const { id } = useParams();

  const project: ProjectType | undefined = projects.find(
    (p) => p.id.toString() === id
  );

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <SectionContainer>
      <SectionTitle>{project.title}</SectionTitle>
    </SectionContainer>
  );
};

export default ProjectDetail;
