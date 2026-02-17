import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const TAGS = [
  "All",
  "Tabular",
  "NLP",
  "CV",
  "Deep Learning",
  "ETL",
  "Dashboard",
  "Classification",
  "Regression",
  "Imbalanced Data",
];

const SOURCES: Array<"all" | Project["source"]> = ["all", "github", "kaggle", "demo"];

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
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <p className="text-neutral-400 mb-10">
        A mix of end-to-end data products, machine learning models, and Kaggle notebooks.
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects (e.g., XGBoost, NLP, dashboard)…"
          className="w-full md:w-1/2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-accent"
        />

        <div className="flex gap-2 flex-wrap">
          {SOURCES.map((s) => (
            <button
              key={s}
              onClick={() => setSource(s)}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                source === s
                  ? "border-accent text-accent"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
              }`}
            >
              {s === "all" ? "All Sources" : s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`text-xs px-3 py-1 rounded-full border transition ${
              tag === t
                ? "border-accent text-accent"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-400">No projects match your filters.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      )}
    </section>
  );
}
