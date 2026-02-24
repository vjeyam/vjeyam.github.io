import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsSection.css";

import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const TAGS = [
  "All",
  "Tabular",
  "NLP",
  "CV",
  "Deep Learning",
  "ETL",
  "Classification",
  "Regression",
  "Imbalanced Data",
  // "Research",
  // "Analytics",
  // "APIs",
  // "Visualization",
  // "Model Comparison",
];

const SOURCES: Array<"all" | Project["source"]> = ["all", "github", "kaggle"];

export default function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");
  const [source, setSource] = useState<(typeof SOURCES)[number]>("all");

  const featured = useMemo(() => projects.filter((p) => p.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects
      .filter((p) => (source === "all" ? true : p.source === source))
      .filter((p) => (tag === "All" ? true : p.tags.includes(tag)))
      .filter((p) => {
        if (!q) return true;
        const haystack =
          `${p.title} ${p.desc} ${p.tech.join(" ")} ${p.tags.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      });
  }, [query, tag, source]);

  return (
    <section className="projects-main">
      {/* Featured */}
      <h2 className="projects-heading">Featured Projects</h2>
      <div className="projects-grid">
        {featured.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* All */}
      <div className="projects-all">
        <h2 className="projects-heading">All Projects</h2>

        <div className="projects-toolbar">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (e.g., XGBoost, NLP, dashboard)…"
            className="projects-search"
          />

          <div className="projects-pills">
            {SOURCES.map((s) => (
              <button
                key={s}
                onClick={() => setSource(s)}
                className={`projects-pill ${source === s ? "active" : ""}`}
              >
                {s === "all" ? "All Sources" : s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-pills projects-tags">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`projects-pill ${tag === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="projects-empty">No projects match your filters.</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}