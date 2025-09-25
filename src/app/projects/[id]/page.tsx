"use client";

import { projects, ProjectType } from "@/data/projects";
import { useParams } from "next/navigation";
import SectionContainer from "@/components/common/section-container";
import SectionTitle from "@/components/common/section-title";
import Information from "../_components/detail-information";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import Tag from "@/components/common/tag";
import Image from "next/image";

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
      <SectionTitle>
        <div className="flex flex-col items-center gap-3">
          {project.title}
          <div className="flex gap-2 pb-3">
            {project.tags.map((tag) => (
              <Tag key={tag} tag={tag} noDecoration />
            ))}
          </div>
        </div>
      </SectionTitle>
      <div className="flex flex-col gap-12 justify-start pt-12 max-w-5xl">
        {project.details &&
          project.details.map((e) => (
            <Information
              key={e.title}
              data={e}
              img={project.img.sub || project.img.main}
              site={
                <div className="flex gap-2">
                  <SiteLink
                    site={{ title: project.title, url: project.link }}
                  />
                  <SiteLink
                    site={{ title: "github", url: project.repository }}
                  />
                  <SiteLink
                    site={{ title: "presentation", url: project.presentation }}
                  />
                </div>
              }
            />
          ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectDetail;

const SiteLink = ({ site }: { site: { title: string; url?: string } }) => {
  if (!site.url) return null;

  return (
    <Link
      href={site.url}
      target="_blank"
      className={`px-3 py-1.5 ${
        site.title === "github"
          ? "text-black border border-black"
          : site.title === "presentation"
          ? "text-black border border-secondary bg-secondary/10"
          : "bg-gradient-to-tr from-primary to-secondary text-white"
      } rounded-full text-sm font-semibold hover:opacity-80 transition-opacity flex gap-2 items-center`}
    >
      {site.title === "github" && (
        <div className="w-6">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="github"
          />
        </div>
      )}
      {site.title === "presentation" && <LinkIcon size={16} />}
      {site.title === "github"
        ? "gitHub"
        : site.title === "presentation"
        ? "발표자료"
        : "서비스 둘러보기"}
    </Link>
  );
};
