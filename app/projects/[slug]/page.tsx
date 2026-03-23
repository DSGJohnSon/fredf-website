import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { projects } from "@/lib/projects";
import { ProjectContentBlocks, ContentSection } from "@/components/projects/ProjectContentBlocks";
import ProjectStack from "@/components/projects/ProjectStack";
import ProjectFooter from "@/components/projects/ProjectFooter";
import TransitionLink from "@/components/ui-self/TransitionLink";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <main className="min-h-screen px-4 pt-32 pb-20 lg:px-32">
      {/* Back */}
      <TransitionLink
        href="/projects"
        className="group mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        <FaArrowLeft
          size={11}
          className="transition duration-300 group-hover:-translate-x-1"
        />
        Tous les projets
      </TransitionLink>

      {/* Hero */}
      <div className="mb-12 md:mb-16">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-0.5 text-xs text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="font-profont text-5xl uppercase leading-tight md:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          {project.siteUrl && (
            <Link
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Voir le site →
            </Link>
          )}
        </div>
      </div>

      {/* Intro — 2 colonnes */}
      <div className="mb-16 grid grid-cols-1 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="mb-3 font-profont text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Contexte
          </h2>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.shortDescription}
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-profont text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Le besoin
          </h2>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.promise}
          </p>
        </div>
      </div>

      {/* Stack */}
      <ProjectStack stack={project.stack ?? []} />

      {/* Content blocks */}
      <ProjectContentBlocks sections={project.sections as ContentSection[]} />

      {/* Footer — autres projets + CTA */}
      <ProjectFooter otherProjects={otherProjects} />
    </main>
  );
}
