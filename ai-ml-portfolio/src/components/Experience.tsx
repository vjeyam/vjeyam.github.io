export default function Experience() {
  const experiences = [
    {
      title: "Teaching Assistant",
      place: "University of Arkansas",
      date: "Jan 2023 – Present",
      points: [
        "Guided 20+ students in Programming Foundations I through labs and office hours.",
        "Offered individualized feedback on assignments and taught systematic debugging in C++/Java.",
        "Helped students develop strong coding and problem-solving skills."
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      place: "Smart Agricultural & Food Engineering Lab, University of Arkansas",
      date: "May 2025 – Aug 2025",
      points: [
        "Analyzed LiDAR and time-series video data to generate dynamic facility maps.",
        "Applied AI-based methods emphasizing data quality and reproducibility for sanitation insights.",
        "Operated and maintained an autonomous mobile robot to collect and evaluate datasets."
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      place: "Quantum AI Lab, University of Arkansas",
      date: "Jan 2025 – May 2025",
      points: [
        "Trained deep learning models in PyTorch for agricultural imaging and insect detection.",
        "Evaluated model accuracy using custom metrics and ablation studies.",
        "Compared architectures from research papers to identify optimal configurations."
      ]
    },
    {
      title: "Undergraduate Research Intern",
      place: "Washington State University",
      date: "Jun 2024 – Aug 2024",
      points: [
        "Processed multispectral and RGB datasets using Python and SQL pipelines.",
        "Fine-tuned a YOLOv8 model in PyTorch, improving detection accuracy from 40% to 80%.",
        "Derived vegetation indices and created predictive models for crop health analysis."
      ]
    },
    {
      title: "Software Engineer Intern",
      place: "Arkansas Blue Cross and Blue Shield",
      date: "Jun 2023 – Aug 2023",
      points: [
        "Developed scalable ETL pipelines with Kafka and Elasticsearch on Docker/Kubernetes.",
        "Automated enterprise data workflows, improving reliability and performance.",
        "Collaborated with cross-functional teams to deploy cloud-based analytics solutions."
      ]
    }
  ]

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="p-5 border border-neutral-800 rounded-xl bg-neutral-900 hover:border-accent transition"
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <span className="text-sm text-neutral-500">{exp.date}</span>
            </div>
            <p className="text-sm text-neutral-400 mt-1">{exp.place}</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-neutral-300 text-sm">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}