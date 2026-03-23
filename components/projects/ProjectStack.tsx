"use client";

import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiNodedotjs,
  SiStripe,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiRedux,
  SiFramer,
} from "react-icons/si";

const ICON_MAP: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Prisma": SiPrisma,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Supabase": SiSupabase,
  "Firebase": SiFirebase,
  "Node.js": SiNodedotjs,
  "Stripe": SiStripe,
  "Vercel": SiVercel,
  "Docker": SiDocker,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Figma": SiFigma,
  "Adobe Illustrator": SiAdobeillustrator,
  "Adobe Photoshop": SiAdobephotoshop,
  "Adobe XD": SiAdobexd,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "GraphQL": SiGraphql,
  "Redux": SiRedux,
  "Framer Motion": SiFramer,
};

export default function ProjectStack({ stack }: { stack: string[] }) {
  if (!stack || stack.length === 0) return null;

  return (
    <div className="mb-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
      <h2 className="mb-4 font-profont text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => {
          const Icon = ICON_MAP[tech];
          return (
            <div
              key={tech}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
            >
              {Icon ? <Icon size={15} className="shrink-0" /> : null}
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}
