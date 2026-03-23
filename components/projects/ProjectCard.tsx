"use client";

import Image from "next/image";
import { useTransition } from "../ui-self/TransitionContext";

interface ProjectCardProps {
  slug: string;
  title: string;
  tags: string[];
  thumbnail: string;
}

export default function ProjectCard({
  slug,
  title,
  tags,
  thumbnail,
}: ProjectCardProps) {
  const { startTransition } = useTransition();

  return (
    <div
      onClick={() => startTransition(`/projects/${slug}`)}
      className="disabled-hovered-object group cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl aspect-[16/9] relative">
        <Image
          src={thumbnail}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover transition-transform duration-500 group-hover:scale-[102%]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h2 className="text-xl font-profont uppercase">{title}</h2>
        <div className="flex flex-wrap justify-end gap-2 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-0.5 text-xs text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
