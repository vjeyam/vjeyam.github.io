import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WSU Wheat Yield Prediction",
    desc: "Deep learning pipeline predicting wheat yield using UAV multispectral imagery, vegetation indices, and geospatial field data.",
    tech: ["PyTorch", "Python", "NumPy", "Pandas", "Geospatial Data"],
    link: "https://github.com/vjeyam/WSU-Wheat-Predictions",
  },
  {
    title: "US Accident Severity Prediction",
    desc: "Machine learning model classifying accident severity using a nationwide dataset with millions of real traffic records.",
    tech: ["Scikit-learn", "XGBoost", "Python", "Pandas", "Jupyter"],
    link: "https://github.com/vjeyam/us-accident-severity-prediction",
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