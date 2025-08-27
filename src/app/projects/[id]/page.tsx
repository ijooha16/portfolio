import { projects, ProjectType } from "@/data/projects";
import ProjectDetailClient from "../_components/project-detail-client";

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const project: ProjectType = projects.find(
    (p) => p.id === parseInt(params.id)
  )!;

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetail;
