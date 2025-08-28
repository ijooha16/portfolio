import { projects, ProjectType } from "@/data/projects";
import ProjectDetailClient from "../_components/project-detail-client";

type PageParams = Promise<{ id: string }>

const ProjectDetail = async({ params }: { params: PageParams  }) => {
  const {id} = await params;
  
  const project: ProjectType | undefined = projects.find(
    (p) => p.title === id
  );

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetail;
