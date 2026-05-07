"use client";

import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import TransitionLink from "@/components/ui-self/TransitionLink";
import type { Project } from "@/types/project";

export default function ProjectFooter({ otherProjects }: { otherProjects: Project[] }) {
  return (
    <>
      {/* Autres projets */}
      {otherProjects.length > 0 && (
        <div className="mt-20 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-profont text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Autres projets
            </h2>
            <TransitionLink
              href="/projects"
              className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Voir tous les projets
              <FaArrowRight size={11} className="transition duration-300 group-hover:translate-x-1" />
            </TransitionLink>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p) => (
              <ProjectCard
                date={p.date}
                key={p.slug}
                slug={p.slug}
                title={p.title}
                tags={p.tags}
                thumbnail={p.thumbnail}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA contact */}
      <div className="mt-20 border-t border-zinc-200 dark:border-zinc-800 pt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
          Envie de travailler ensemble ?
        </p>
        <div className="flex gap-4">
          <TransitionLink
            href="/projects"
            className="group flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Tous les projets
            <FaArrowRight size={12} className="-rotate-45 transition duration-300 group-hover:rotate-0" />
          </TransitionLink>
          <Link
            href="mailto:fred.florkowski@outlook.fr"
            className="flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm text-white transition hover:bg-rose-600"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </>
  );
}
