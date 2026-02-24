import "../styles/Skills.css";

export default function Skills() {
  const categories: Record<string, string[]> = {
    "Programming Languages": ["Python", "SQL", "C++", "JavaScript", "HTML/CSS"],
    "Frameworks & Libraries": ["PyTorch", "Scikit-learn", "React"],
    "Data & Tools": ["Kafka", "Elasticsearch", "Spark", "Git/GitHub", "Tableau", "Pandas", "NumPy"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "Azure"],
  };

  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-groups">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="skills-group">
            <h3 className="skills-category">{category}</h3>

            <div className="skills-chips">
              {items.map((s) => (
                <div key={s} className="skill-chip">
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
