import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import "../styles/AllProjectsSection.css";

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
];

const SOURCES: Array<"all" | Project["source"]> = ["all", "github", "kaggle"];

export default function AllProjectsSection() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");
  const [source, setSource] = useState<(typeof SOURCES)[number]>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects
      .filter((p) => (source === "all" ? true : p.source === source))
      .filter((p) => (tag === "All" ? true : p.tags.includes(tag)))
      .filter((p) => {
        if (!q) return true;
        const haystack = `${p.title} ${p.desc} ${p.tech.join(" ")} ${p.tags.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      });
  }, [query, tag, source]);

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        A mix of end-to-end data products, machine learning models, and Kaggle notebooks.
      </p>

      <div className="projects-toolbar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects (e.g., XGBoost, NLP, Regression)…"
          className="projects-search"
        />

        <div className="projects-source-buttons">
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

      <div className="projects-tags">
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
    </section>
  );
}
