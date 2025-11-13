import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LLM Chatbot",
    desc: "Fine-tuned a large language model for domain-specific Q&A.",
    tech: ["PyTorch", "Transformers", "Python"],
    link: "https://github.com",
  },
  {
    title: "Image Classifier",
    desc: "Trained a CNN achieving 94% accuracy on custom dataset.",
    tech: ["TensorFlow", "CNN", "Python"],
    link: "https://github.com",
  },
  {
    title: "ML Pipeline",
    desc: "End-to-end ML system with data ingestion → training → API.",
    tech: ["Docker", "FastAPI", "scikit-learn"],
    link: "https://github.com",
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
