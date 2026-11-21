import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import Tag from "@/components/common/tag";
import RichText from "@/components/common/rich-text";
import {
  MediaType,
  ProjectType,
  SectionKey,
  TechType,
} from "@/data/projects";
import VideoPlayer from "./video-player";
import { Chart } from "./charts";

type Neighbor = Pick<ProjectType, "id" | "title"> | undefined;

const LABEL: Record<SectionKey, string> = {
  demo: "DEMO",
  overview: "OVERVIEW",
  results: "RESULTS",
  decisions: "DESIGN DECISIONS",
  techs: "TECH",
  implementations: "IMPLEMENTATION",
  troubleshooting: "TROUBLE SHOOTING",
  achievements: "ACHIEVEMENTS",
  lessons: "LESSONS",
};

const DEFAULT_TITLE: Record<SectionKey, string> = {
  demo: "실제 사용 화면",
  overview: "프로젝트 개요",
  results: "숫자로 본 결과",
  decisions: "기획·디자인 결정",
  techs: "사용 기술",
  implementations: "구현 사항",
  troubleshooting: "트러블슈팅",
  achievements: "주요 성과",
  lessons: "배운 점",
};

const pad = (n: number) => String(n).padStart(2, "0");

const ProjectDetail = ({
  project,
  prev,
  next,
}: {
  project: ProjectType;
  prev: Neighbor;
  next: Neighbor;
}) => {
  const [hero, ...gallery] = project.media ?? [];
  const hasVideo = project.media?.some((m) => m.type === "video");

  const sections: { key: SectionKey; body: ReactNode }[] = [];

  if (hero) {
    sections.push({
      key: "demo",
      body: (
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
      ),
    });
  }

  if (project.decisions) {
    sections.push({
      key: "decisions",
      body: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.decisions.map((d, idx) => (
            <Card key={d.title} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-brand">
                  {pad(idx + 1)}
                </span>
                <span className="text-lg font-bold text-ink break-keep">
                  {d.title}
                </span>
              </div>
              <Labeled label="고민">{d.problem}</Labeled>
              <Labeled label="결정">{d.decision}</Labeled>
              <Labeled label="결과">{d.result}</Labeled>
            </Card>
          ))}
        </div>
      ),
    });
  }

  if (project.techs) {
    sections.push({
      key: "techs",
      body: <TechGrid items={project.techs} />,
    });
  }

  if (project.implementations) {
    sections.push({
      key: "implementations",
      body: <ImplementationRows items={project.implementations} />,
    });
  }

  if (project.charts) {
    sections.push({
      key: "results",
      body: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.charts.map((c, i) => (
            <Card
              key={c.title ?? i}
              className={`flex flex-col gap-6 ${
                (c.kind === "ring" && c.rings.length >= 3) ||
                (c.kind !== "ring" &&
                  project.charts!.filter((x) => x.kind !== "ring").length === 1)
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {(c.title || c.note) && (
                <div className="flex flex-col gap-1">
                  {c.title && <span className="font-bold text-ink break-keep">{c.title}</span>}
                  {c.note && <span className="text-xs text-mute break-keep">{c.note}</span>}
                </div>
              )}
              <Chart chart={c} />
            </Card>
          ))}
        </div>
      ),
    });
  }

  if (project.troubleshooting) {
    sections.push({
      key: "troubleshooting",
      body: (
        <div className="flex flex-col gap-6">
          {project.troubleshooting.map((t, idx) => (
            <Card key={t.title} className="flex flex-col gap-6">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-brand">
                  {pad(idx + 1)}
                </span>
                <span className="text-lg md:text-xl font-bold text-ink break-keep">
                  {t.title}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-6 md:gap-10">
                <div className="flex flex-col gap-4">
                  <Labeled label="문제">{t.problem}</Labeled>
                  <Labeled label="원인">{t.cause}</Labeled>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-brand">해결 과정</span>
                  {t.process.map((step, i) => (
                    <div key={step} className="flex gap-3 text-sm">
                      <span className="font-bold text-brand shrink-0">
                        {pad(i + 1)}
                      </span>
                      <span className="leading-6 text-text break-keep">
                        <RichText text={step} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {(() => {
                const result = (
                  <div className="rounded-lg bg-surface2 px-5 py-4 flex flex-col gap-2">
                    <span className="text-xs font-bold text-brand-deep tracking-[0.15em]">
                      RESULT
                    </span>
                    <ul className="flex flex-col gap-1 text-sm text-ink">
                      {t.result.map((r) => (
                        <li key={r} className="break-keep">
                          <RichText text={r} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
                if (!t.chart) return result;

                const single =
                  (t.chart.kind === "compare" && t.chart.rows.length === 1) ||
                  (t.chart.kind === "ring" && t.chart.rings.length === 1);
                return single ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <Chart chart={t.chart} />
                    {result}
                  </div>
                ) : (
                  <>
                    <Chart chart={t.chart} />
                    {result}
                  </>
                );
              })()}
            </Card>
          ))}
        </div>
      ),
    });
  }

  if (project.achievements) {
    sections.push({
      key: "achievements",
      body: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.achievements.map((a, idx) => (
            <Card key={a.title} className="flex flex-col gap-3">
              <div className="flex items-baseline gap-3">
                <span className="font-bold text-brand">{pad(idx + 1)}</span>
                <span className="font-bold text-ink">{a.title}</span>
              </div>
              <Labeled label="문제">{a.issue}</Labeled>
              <Labeled label="해결">{a.solution}</Labeled>
            </Card>
          ))}
        </div>
      ),
    });
  }

  if (project.lessons) {
    sections.push({
      key: "lessons",
      body: (
        <div className="flex flex-col">
          {project.lessons.map((l) => (
            <div
              key={l.title}
              className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-2 md:gap-8 py-6 border-t border-[#eef0f4] first:border-t-0 first:pt-0"
            >
              <div className="font-bold text-ink break-keep">{l.title}</div>
              <p className="text-sm leading-7 text-text break-keep">
                <RichText text={l.content} />
              </p>
            </div>
          ))}
        </div>
      ),
    });
  }

  return (
    <article className="w-full max-w-5xl flex flex-col gap-20 md:gap-28">
      <Hero project={project} />

      {sections.map((section, idx) => (
        <Section
          key={section.key}
          chapter={`${pad(idx + 1)} · ${
            section.key === "demo" && !hasVideo ? "SCREENS" : LABEL[section.key]
          }`}
          title={
            project.headlines?.[section.key] ??
            (section.key === "demo" && !hasVideo
              ? "서비스 화면"
              : DEFAULT_TITLE[section.key])
          }
        >
          {section.body}
        </Section>
      ))}

      <nav className="flex justify-between gap-4 border-t border-[#eef0f4] pt-8 text-sm">
        {prev ? (
          <Link
            href={`/projects/${prev.id}`}
            className="flex items-center gap-2 text-mute hover:text-ink transition-default"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/projects"
          className="text-mute hover:text-ink transition-default"
        >
          전체 프로젝트
        </Link>
        {next ? (
          <Link
            href={`/projects/${next.id}`}
            className="flex items-center gap-2 text-mute hover:text-ink transition-default"
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
    <header className="flex flex-col gap-5">

      <span className="block w-10 h-1 rounded-full bg-accent" />
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
        <h1 className="text-4xl md:text-6xl font-bold text-ink">
          {project.title}
        </h1>
      </div>
      <p className="text-lg md:text-2xl font-semibold text-text break-keep">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>

      <div className="flex flex-col gap-8 pt-4 max-w-3xl">
        <p className="whitespace-pre-line leading-8 text-ink break-keep">
          <RichText text={project.description} />
        </p>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-brand tracking-[0.15em]">
            KEY FEATURES
          </span>
          {project.features.map((feature, idx) => {
            const [name, ...rest] = feature.split(":");
            return (
              <div key={feature} className="flex gap-3 text-sm md:text-base">
                <span className="font-bold text-brand w-6 shrink-0">
                  {pad(idx + 1)}
                </span>
                <span className="break-keep">
                  <strong className="text-ink">{name}</strong>
                  <span className="text-mute"> {rest.join(":").trim()}</span>
                </span>
              </div>
            );
          })}
        </div>

        <dl className="flex flex-col gap-3 pt-6 border-t border-[#e6e8ec]">
          <SummaryRow label="기간" value={project.period} />
          {project.context && <SummaryRow label="소속" value={project.context} />}
          <SummaryRow label="역할" value={project.role} detail={project.roleDetail} />
          <SummaryRow label="인원" value={project.team} />
          {project.award && <SummaryRow label="성과" value={project.award} />}
          <SummaryRow label="기술" value={project.stacks.join(" · ")} />
        </dl>
      </div>

      {hasLink && (
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
        </div>
      )}
    </header>
  );
};

const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`rounded-2xl bg-white p-6 md:p-7 shadow-default ${className}`}>
    {children}
  </div>
);

const Section = ({
  chapter,
  title,
  children,
}: {
  chapter: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-8">
    <div className="flex flex-col gap-3">
      <span className="text-xs font-bold text-brand tracking-[0.15em]">
        {chapter}
      </span>
      <h2 className="text-2xl md:text-[28px] leading-snug font-bold text-ink break-keep">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

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
      primary ? "bg-brand text-white" : "bg-white text-ink shadow-default"
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
    <figcaption className="text-sm text-mute px-1 break-keep">
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
    <dt className="w-10 shrink-0 font-bold text-brand">{label}</dt>
    <dd className="flex flex-col text-ink break-keep">
      {value}
      {detail && <span className="text-xs text-mute pt-0.5">{detail}</span>}
    </dd>
  </div>
);

const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex gap-4 text-sm">
    <span className="w-8 shrink-0 font-bold text-brand">{label}</span>
    <span className="leading-6 text-text break-keep">{typeof children === "string" ? <RichText text={children} /> : children}</span>
  </div>
);

const TechGrid = ({ items }: { items: TechType[] }) => (
  <div
    className={`grid grid-cols-1 gap-5 ${
      items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
    }`}
  >
    {items.map((item) => (
      <Card key={item.title} className="flex flex-col gap-3">
        <div className="font-bold text-ink break-keep">{item.title}</div>
        <p className="text-sm text-mute leading-6 break-keep">
          <RichText text={item.description} />
        </p>
        {item.points && (
          <ul className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-[#eef0f4]">
            {item.points.map((p) => (
              <li key={p} className="text-sm text-ink break-keep">
                <RichText text={p} />
              </li>
            ))}
          </ul>
        )}
      </Card>
    ))}
  </div>
);

const ImplementationRows = ({ items }: { items: TechType[] }) => (
  <Card className="flex flex-col !py-2">
    {items.map((item) => (
      <div
        key={item.title}
        className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-2 md:gap-8 py-6 border-t border-[#eef0f4] first:border-t-0"
      >
        <div className="font-bold text-ink break-keep">{item.title}</div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-text leading-6 break-keep">
            <RichText text={item.description} />
          </p>
          {item.points && (
            <ul className="flex flex-col gap-1">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink break-keep">
                  <span className="text-brand-t3">·</span>
                  <RichText text={p} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </Card>
);
