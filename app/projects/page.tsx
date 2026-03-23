import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 pt-32 pb-20 lg:px-32">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 font-profont text-sm uppercase tracking-widest text-rose-500">
          Projects
        </p>
        <h1 className="font-profont text-5xl uppercase leading-tight md:text-7xl lg:text-8xl">
          Mes réalisations
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            tags={project.tags}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </main>
  );
}
