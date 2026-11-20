import { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
  Lock,
} from "lucide-react";
import Tag from "@/components/common/tag";
import { MediaType, ProjectType, TechType } from "@/data/projects";
import VideoPlayer from "./video-player";

type Neighbor = Pick<ProjectType, "id" | "title"> | undefined;

const ProjectDetail = ({
  project,
  prev,
  next,
}: {
  project: ProjectType;
  prev: Neighbor;
  next: Neighbor;
}) => {
  const accentStyle = {
    "--accent": project.accent ?? "#8360c3",
  } as CSSProperties;

  const [hero, ...gallery] = project.media ?? [];

  return (
    <article
      style={accentStyle}
      className="w-full max-w-5xl flex flex-col gap-20 md:gap-28"
    >
      <Hero project={project} />

      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-8 md:-mt-14">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl bg-white p-5 shadow-default flex flex-col gap-1"
            >
              <span className="text-xl md:text-2xl font-bold text-[var(--accent)] break-keep">
                {m.value}
              </span>
              <span className="text-xs md:text-sm text-gray-500 break-keep">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {hero && (
        <Section
          title={project.media?.some((m) => m.type === "video") ? "Demo" : "Screens"}
          sub={
            project.media?.some((m) => m.type === "video")
              ? "실제 사용 화면 녹화"
              : "서비스 화면"
          }
        >
          <div className="flex flex-col gap-6">
            <Media media={hero} priority />
            {gallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gallery.map((m) => (
                  <Media key={m.src} media={m} />
                ))}
              </div>
            )}
          </div>
        </Section>
      )}

      <Section title="Overview" sub="프로젝트 개요">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10">
          <div className="flex flex-col gap-6">
            <p className="whitespace-pre-line leading-7 break-keep">
              {project.description}
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-sm font-bold text-[var(--accent)]">
                KEY FEATURES
              </div>
              {project.features.map((feature, idx) => {
                const [name, ...rest] = feature.split(":");
                return (
                  <div key={feature} className="flex gap-3 text-sm">
                    <span className="font-bold text-[var(--accent)]/60 w-6 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong>{name}</strong>
                      <span className="text-gray-500">
                        {" "}
                        {rest.join(":").trim()}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-default flex flex-col gap-4 h-fit">
            <SummaryRow label="기간" value={project.period} />
            {project.context && (
              <SummaryRow label="소속" value={project.context} />
            )}
            <SummaryRow
              label="역할"
              value={project.role}
              detail={project.roleDetail}
            />
            <SummaryRow label="인원" value={project.team} />
            {project.award && (
              <SummaryRow label="성과" value={project.award} />
            )}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {project.stacks.map((stack) => (
                <span
                  key={stack}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {project.decisions && (
        <Section title="Design Decisions" sub="기획·디자인 단계에서 내린 결정">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.decisions.map((d, idx) => (
              <div
                key={d.title}
                className="rounded-2xl bg-white p-6 shadow-default flex flex-col gap-4"
              >
                <div>
                  <div className="text-2xl font-bold text-[var(--accent)]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-bold">{d.title}</div>
                </div>
                <LabeledText label="고민">{d.problem}</LabeledText>
                <LabeledText label="결정">{d.decision}</LabeledText>
                <LabeledText label="결과">{d.result}</LabeledText>
              </div>
            ))}
          </div>
        </Section>
      )}

      {(project.techs || project.implementations) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          {project.techs && (
            <Section title="Tech" sub="사용 기술">
              <TechList items={project.techs} />
            </Section>
          )}
          {project.implementations && (
            <Section title="Implementation" sub="구현 사항">
              <TechList items={project.implementations} />
            </Section>
          )}
        </div>
      )}

      {project.troubleshooting && (
        <Section title="Trouble Shooting" sub="문제를 찾고 풀어낸 과정">
          <div className="flex flex-col gap-8">
            {project.troubleshooting.map((t, idx) => (
              <div
                key={t.title}
                className="rounded-2xl bg-white p-6 md:p-8 shadow-default flex flex-col gap-6"
              >
                <div className="text-lg md:text-xl font-bold text-[var(--accent)]">
                  {String(idx + 1).padStart(2, "0")} {t.title}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="flex flex-col gap-4">
                    <LabeledText label="문제">{t.problem}</LabeledText>
                    <LabeledText label="원인">{t.cause}</LabeledText>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-bold text-[var(--accent)]">
                      해결과정
                    </span>
                    {t.process.map((step, i) => (
                      <div key={step} className="flex gap-3 text-sm">
                        <span className="font-bold text-[var(--accent)]/60 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-6 break-keep">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-5 flex flex-col md:flex-row gap-2 md:gap-6 bg-[color-mix(in_srgb,var(--accent)_8%,white)]">
                  <span className="text-sm font-bold text-[var(--accent)] shrink-0">
                    결과
                  </span>
                  <ul className="flex flex-col gap-1 text-sm">
                    {t.result.map((r) => (
                      <li key={r} className="break-keep">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.achievements && (
        <Section title="Achievements" sub="주요 성과">
          <div className="flex flex-col gap-4">
            {project.achievements.map((a, idx) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white p-6 shadow-default flex flex-col gap-3"
              >
                <div className="font-bold">
                  <span className="text-[var(--accent)] mr-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {a.title}
                </div>
                <LabeledText label="문제">{a.issue}</LabeledText>
                <LabeledText label="해결">{a.solution}</LabeledText>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.lessons && (
        <Section title="Lessons" sub="배운 점">
          <div className="flex flex-col gap-8">
            {project.lessons.map((l) => (
              <div key={l.title} className="flex flex-col gap-2">
                <div className="font-bold">{l.title}</div>
                <p className="text-sm leading-7 text-gray-700 break-keep">
                  {l.content}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <nav className="flex justify-between gap-4 border-t border-gray-200 pt-8 text-sm">
        {prev ? (
          <Link
            href={`/projects/${prev.id}`}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-default"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/projects"
          className="text-gray-500 hover:text-gray-900 transition-default"
        >
          전체 프로젝트
        </Link>
        {next ? (
          <Link
            href={`/projects/${next.id}`}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-default"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
};

export default ProjectDetail;

const Hero = ({ project }: { project: ProjectType }) => {
  const { links } = project;
  const hasLink = links.service || links.repository || links.presentation;

  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{project.period}</span>
        {project.context && (
          <>
            <span className="text-gray-300">|</span>
            <span>{project.context}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        {project.img.logo && (
          <Image
            src={project.img.logo}
            alt={`${project.title} 로고`}
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl"
          />
        )}
        <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
      </div>
      <p className="text-lg md:text-2xl font-semibold text-gray-700 break-keep">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} noDecoration />
        ))}
      </div>
      {(hasLink || project.linkNote) && (
        <div className="flex flex-wrap items-center gap-2">
          {links.service && (
            <LinkButton href={links.service} primary>
              <ExternalLink size={16} /> 서비스 둘러보기
            </LinkButton>
          )}
          {links.repository && (
            <LinkButton href={links.repository}>
              <GithubIcon /> GitHub
            </LinkButton>
          )}
          {links.presentation && (
            <LinkButton href={links.presentation}>
              <FileText size={16} /> 발표자료
            </LinkButton>
          )}
          {project.linkNote && (
            <span className="flex items-center gap-1.5 text-sm text-gray-500 break-keep">
              <Lock size={14} className="shrink-0" /> {project.linkNote}
            </span>
          )}
        </div>
      )}
    </header>
  );
};

const LinkButton = ({
  href,
  primary = false,
  children,
}: {
  href: string;
  primary?: boolean;
  children: ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 rounded-full text-sm font-semibold flex gap-2 items-center hover:opacity-80 transition-default ${
      primary
        ? "bg-[var(--accent)] text-white"
        : "bg-white text-gray-800 border border-gray-300"
    }`}
  >
    {children}
  </Link>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const Section = ({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-8">
    <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <span className="text-sm font-semibold text-[var(--accent)] pb-1">
        {sub}
      </span>
    </div>
    {children}
  </section>
);

const Media = ({
  media,
  priority = false,
}: {
  media: MediaType;
  priority?: boolean;
}) => (
  <figure className="flex flex-col gap-3">
    <div className="rounded-2xl overflow-hidden shadow-default bg-white">
      {media.type === "video" ? (
        <VideoPlayer src={media.src} poster={media.poster} />
      ) : (
        <Image
          src={media.src}
          alt={media.caption}
          width={1600}
          height={900}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="w-full h-auto block"
        />
      )}
    </div>
    <figcaption className="text-sm text-gray-500 px-1 break-keep">
      {media.caption}
    </figcaption>
  </figure>
);

const SummaryRow = ({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) => (
  <div className="flex gap-4 text-sm">
    <span className="w-10 shrink-0 font-bold text-[var(--accent)]">
      {label}
    </span>
    <span className="flex flex-col break-keep">
      {value}
      {detail && <span className="text-xs text-gray-500 pt-0.5">{detail}</span>}
    </span>
  </div>
);

const LabeledText = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="flex gap-4 text-sm">
    <span className="w-8 shrink-0 font-bold text-[var(--accent)]">
      {label}
    </span>
    <span className="leading-6 break-keep">{children}</span>
  </div>
);

const TechList = ({ items }: { items: TechType[] }) => (
  <div className="flex flex-col gap-8">
    {items.map((item) => (
      <div key={item.title} className="flex flex-col gap-2">
        <div className="font-bold">{item.title}</div>
        <p className="text-sm text-gray-600 leading-6 break-keep">
          {item.description}
        </p>
        {item.points && (
          <ul className="flex flex-col gap-1 pt-1">
            {item.points.map((p) => (
              <li key={p} className="flex gap-2 text-sm break-keep">
                <span className="text-[var(--accent)]">•</span>
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
