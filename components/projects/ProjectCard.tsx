"use client";

import Image from "next/image";
import { useTransition } from "../ui-self/TransitionContext";

interface ProjectCardProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  thumbnail: string;
}

export default function ProjectCard({
  slug,
  title,
  date,
  tags,
  thumbnail,
}: ProjectCardProps) {
  const { startTransition } = useTransition();

  return (
    <div
      onClick={() => startTransition(`/projects/${slug}`)}
      className="disabled-hovered-object group cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl aspect-square relative">
        <Image
          src={thumbnail}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[102%]"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-profont uppercase">{title}</h2>
        <p className="text-xs uppercase">{date}</p>
        <div className="flex flex-wrap gap-2 mt-1">
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
