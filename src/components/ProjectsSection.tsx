import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  desc: string;
  tech: string[];
  links: ProjectLink[];
  result?: string;

  // for filtering
  source: "github" | "kaggle";
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  // Featured 
  {
    title: "WSU Wheat Yield Prediction",
    desc: "Multispectral computer vision pipeline predicting wheat health from UAV imagery using vegetation indices and YOLOv8-based detection.",
    tech: ["PyTorch", "YOLOv8", "Multispectral Imaging", "Feature Engineering"],
    result: "80–82% test accuracy",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/WSU-Wheat-Predictions" },
      { label: "Presentation", href: "/pdfs/wsu-wheat.pdf" },
    ],
    source: "github",
    tags: ["CV", "Deep Learning", "Classification", "Research"],
    featured: true,
  },
  {
    title: "US Accident Severity Prediction",
    desc: "Multi-class classification on 1.5M+ US traffic records using feature engineering and XGBoost, addressing heavy class imbalance.",
    tech: ["Scikit-learn", "XGBoost", "Python", "Pandas"],
    result: "AUROC 0.91 (macro)",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/us-accident-severity-prediction" },
      { label: "Kaggle Dataset", href: "https://www.kaggle.com/datasets/sobhanmoosavi/us-accidents" },
    ],
    source: "github",
    tags: ["Tabular", "Classification", "Imbalanced Data"],
    featured: true,
  },
  {
    title: "Sports Market Efficiency Pipeline",
    desc: "End-to-end ETL + analytics system ingesting live sportsbook odds and game results into SQLite, powering a Streamlit dashboard for close-line, calibration, and strategy simulation.",
    tech: ["Python", "ETL", "SQLite", "APIs", "Streamlit"],
    result: "ETL + live dashboard",
    links: [
      { label: "GitHub", href: "https://github.com/vjeyam/sports-odds-pipeline" },
      { label: "Website", href: "https://sports-market-efficiency.streamlit.app/" },
    ],
    source: "github",
    tags: ["ETL", "Analytics", "APIs"],
    featured: true,
  },

  // Kaggle competition notebooks
  {
    title: "Heart Disease Prediction (Kaggle)",
    desc: "Binary classification model predicting heart disease risk from clinical features using ROC-AUC evaluation.",
    tech: ["Python", "Scikit-learn", "Tabular ML"],
    result: "ROC-AUC 0.951",
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/predicting-heart-disease" },
      { label: "Competition", href: "https://www.kaggle.com/competitions/playground-series-s6e2" },
    ],
    source: "kaggle",
    tags: ["Tabular", "Classification"],
  },
  {
    title: "Disaster Tweet Classification (Kaggle)",
    desc: "NLP classifier identifying real disaster tweets using text preprocessing and F1-optimized evaluation.",
    tech: ["Python", "NLP", "Scikit-learn"],
    result: "F1 0.805",
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/nlp-disaster-tweets" },
      { label: "Competition", href: "https://www.kaggle.com/competitions/nlp-getting-started" },
    ],
    source: "kaggle",
    tags: ["NLP", "Classification"],
  },

  // Kaggle dataset notebook (not a competition)
  {
    title: "Telco Customer Churn (Kaggle)",
    desc: "Churn prediction on telecom customer data with preprocessing, feature engineering, and classification modeling.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    links: [
      { label: "Notebook", href: "https://www.kaggle.com/code/vishaljeyam/telecommunication-churn-preds" },
      { label: "Dataset", href: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn/data" },
    ],
    source: "kaggle",
    tags: ["Tabular", "Classification"],
  },
];

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
        const haystack = `${p.title} ${p.desc} ${p.tech.join(" ")} ${p.tags.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      });
  }, [query, tag, source]);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Featured */}
      <h2 className="text-2xl font-semibold mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* All projects with filters */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">All Projects</h2>

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
      </div>
    </section>
  );
}
