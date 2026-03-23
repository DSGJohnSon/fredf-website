import { FaArrowRight } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiReact,
  SiFigma,
  SiJira,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiNotion,
  SiStripe,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { LucideMessageCircleQuestion } from "lucide-react";
import type { IconType } from "react-icons";

type StackItem = { icon: IconType; label: string } | { icon: null; label: "shadcn/ui" };

const stackCategories: { label: string; items: StackItem[] }[] = [
  {
    label: "Langages",
    items: [
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiHtml5, label: "HTML5" },
      { icon: SiCss3, label: "CSS3" },
    ],
  },
  {
    label: "Frameworks & UI",
    items: [
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiReact, label: "React" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
      { icon: null, label: "shadcn/ui" },
    ],
  },
  {
    label: "Back-end & BDD",
    items: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiSupabase, label: "Supabase" },
      { icon: SiFirebase, label: "Firebase" },
      { icon: SiPrisma, label: "Prisma" },
    ],
  },
  {
    label: "Design",
    items: [
      { icon: SiFigma, label: "Figma" },
    ],
  },
  {
    label: "Infra & outils",
    items: [
      { icon: SiVercel, label: "Vercel" },
      { icon: SiDocker, label: "Docker" },
      { icon: SiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
      { icon: SiJira, label: "Jira" },
      { icon: SiNotion, label: "Notion" },
      { icon: SiStripe, label: "Stripe" },
    ],
  },
];

function StackBadge({ item }: { item: StackItem }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300">
      {item.icon === null ? (
        <span className="flex size-4 items-center justify-center rounded bg-zinc-900 dark:bg-zinc-50 text-[8px] font-bold text-zinc-50 dark:text-zinc-900 leading-none shrink-0">
          cn
        </span>
      ) : (
        <item.icon size={16} className="shrink-0" />
      )}
      {item.label}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 lg:px-32">

      {/* HERO — photo grande à droite */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12 mb-20 md:mb-28">
        {/* Texte */}
        <div className="flex flex-col justify-end md:col-span-3">
          <p className="mb-3 font-profont text-sm uppercase tracking-widest text-rose-500">
            About
          </p>
          <h1 className="mb-8 font-profont text-5xl uppercase leading-tight md:text-6xl lg:text-7xl">
            Fred Florkowski
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Je suis un{" "}
            <span className="cursor-help text-rose-500 underline underline-offset-4 relative mr-1 group disabled-hovered-object">
              Devsigner
              <LucideMessageCircleQuestion className="absolute size-3 -right-[15px] -top-[1px]" />
              <span className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[200%] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-xl px-2 py-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[140%] z-10 pointer-events-none">
                <span className="text-xs text-zinc-950 dark:text-zinc-50 whitespace-nowrap">Développeur &amp; Designer UI/UX</span>
              </span>
            </span>{" "}
            basé à
            Lyon — à mi-chemin entre le développement front-end et le design
            UI/UX. J&apos;aime construire des interfaces qui ont du sens, du
            style, et qui fonctionnent vraiment.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Que ce soit pour une startup en pleine croissance ou un studio
            créatif, j&apos;accompagne mes clients de l&apos;idée au produit
            final — design, intégration, et tout ce qu&apos;il y a entre les
            deux.
          </p>
        </div>

        {/* Photo */}
        <div className="relative md:col-span-2 aspect-[3/4] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/placeholder/me-placeholder.webp"
            alt="Fred Florkowski"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* CE QUE JE FAIS */}
      <div className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <h2 className="mb-8 font-profont uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Ce que je fais
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Développement front-end (Next.js, React)",
            "Création de web applications",
            "Design UI/UX (Figma)",
            "Identité visuelle & Brandbook",
            "Intégration responsive & animations",
            "Conseil & accompagnement produit",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
            >
              <span className="size-1.5 rounded-full bg-rose-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* STACK */}
      <div className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <h2 className="mb-10 font-profont uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Ma stack
        </h2>
        <div className="flex flex-col gap-8">
          {stackCategories.map((category) => (
            <div key={category.label}>
              <p className="mb-3 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <StackBadge key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
          Envie de travailler ensemble ?
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="group flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Mes projets
            <FaArrowRight
              size={12}
              className="-rotate-45 transition duration-300 group-hover:rotate-0"
            />
          </Link>
          <Link
            href="mailto:fred.florkowski@outlook.fr"
            className="flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-white transition hover:bg-rose-600"
          >
            Me contacter
          </Link>
        </div>
      </div>

    </main>
  );
}
