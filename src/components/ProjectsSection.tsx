import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WSU Wheat Yield Prediction",
    desc: "Multispectral computer vision pipeline predicting wheat health from UAV imagery using vegetation indices and YOLOv8-based detection.",
    tech: ["PyTorch", "YOLOv8", "Multispectral Imaging", "Feature Engineering"],
    link: "https://github.com/vjeyam/WSU-Wheat-Predictions",
    presentation: "/pdfs/wsu-wheat.pdf",
    result: "80-82% test accuracy",
  },
  {
    title: "US Accident Severity Prediction",
    desc: "Multi-class classification on 1.5M+ US traffic records using feature engineering and XGBoost, addressing heavy class imbalance.",
    tech: ["Scikit-learn", "XGBoost", "Python", "Pandas"],
    link: "https://github.com/vjeyam/us-accident-severity-prediction",
    kaggle: "https://www.kaggle.com/code/vishaljeyam/us-accidents-severity-prediction",
    result: "AUROC 0.91 (macro)"
  },
  {
    title: "Sports Market Efficiency Pipeline",
    desc: "End-to-end ETL + analytics system ingesting live sportsbook odds and game results into SQLite, powering a Streamlit dashboard for close-line, calibration, and strategy simulation.",
    tech: ["Python", "ETL", "SQLite", "APIs", "Streamlit", "Analytics"],
    link: "https://github.com/vjeyam/sports-odds-pipeline",
    demo: "https://sports-market-efficiency.streamlit.app/",
    result: "ETL + live dashboard"
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
