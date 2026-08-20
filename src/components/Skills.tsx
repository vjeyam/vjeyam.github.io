import "../styles/Skills.css";

export default function Skills() {
  const categories: Record<string, string[]> = {
    "Programming Languages": [
      "Python",
      "SQL",
      "C++",
      "Bash",
      "JavaScript/TypeScript",
      "HTML/CSS",
    ],

    "ML & AI": [
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "Ollama",
      "Deep Learning",
      "Machine Learning",
      "LLMs",
    ],

    "Computer Vision": [
      "OpenCV",
      "Ultralytics/YOLO",
      "Torchvision",
      "Object Detection",
      "Image Segmentation",
    ],

    "Data & Databases": [
      "Pandas",
      "NumPy",
      "Kafka",
      "Elasticsearch",
      "PostgreSQL",
      "MySQL",
      "Supabase",
    ],

    "Cloud & Tools": [
      "Docker",
      "Azure",
      "Git/GitHub",
      "Jupyter",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
  };

  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-groups">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="skills-group">
            <h3 className="skills-category">{category}</h3>

            <div className="skills-chips">
              {items.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}