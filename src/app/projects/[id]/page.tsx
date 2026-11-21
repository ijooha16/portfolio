import { notFound } from "next/navigation";
import SectionContainer from "@/components/common/section-container";
import { projects } from "@/data/projects";
import ProjectDetail from "../_components/project-detail";

export const generateStaticParams = () =>
  projects.map((p) => ({ id: p.id.toString() }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  return project
    ? { title: `${project.title} | 윤주하 포트폴리오`, description: project.summary }
    : {};
};

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id.toString() === id);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <SectionContainer>
      <ProjectDetail
        project={project}
        prev={prev && { id: prev.id, title: prev.title }}
        next={next && { id: next.id, title: next.title }}
      />
    </SectionContainer>
  );
};

export default ProjectPage;
