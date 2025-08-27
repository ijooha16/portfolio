import { projects, ProjectType } from "@/data/projects";
import ProjectDetailClient from "../_components/project-detail-client";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const project: ProjectType | undefined = projects.find(
    (p) => p.id === parseInt(params.id)
  );

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetail;
