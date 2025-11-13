export default function Skills() {
  const categories = {
    "Programming Languages": ["Python", "Java", "C++", "SQL", "JavaScript", "HTML/CSS"],
    "Frameworks & Libraries": ["PyTorch", "TensorFlow", "Scikit-learn", "React"],
    "Data & Tools": ["Kafka", "Elasticsearch", "Spark", "Git/GitHub", "Tableau", "Pandas", "NumPy"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "Azure"]
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Technical Skills</h2>

      <div className="space-y-8">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-medium mb-3 text-accent">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <div
                  key={s}
                  className="border border-neutral-800 px-4 py-2 rounded-lg text-neutral-300 text-sm bg-neutral-900"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
