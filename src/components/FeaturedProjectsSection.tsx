import { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function FeaturedProjectsSection() {
  const featured = useMemo(() => projects.filter((p) => p.featured), []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
