import ScrollToTopButton from "../components/ScrollToTopButton";
import "../styles/Resume.css";
import "../index.css";

function ResumeItem({
  role,
  org,
  date,
  bullets,
}: {
  role: string;
  org: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="resume-row">
      <div>
        <div className="item-title">
          {role} — {org}
        </div>
        <ul className="bullet-list">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="date-text">{date}</div>
    </div>
  );
}

export default function Resume() {
  return (
    // Outer page background/padding (use whichever class you prefer)
    <div className="page">
      <div className="container">
        {/* Shadow card wrapper */}
        <div className="card cardPad">
          <div className="resume-page">
            {/* NAME */}
            <h1 className="resume-name">Vishal Jeyam</h1>

            {/* CONTACT ROW */}
            <div className="resume-contact-row">
              Fayetteville, AR 72704
              <span className="divider">|</span>
              <a href="mailto:jeyamvishal5@gmail.com">jeyamvishal5@gmail.com</a>
              <span className="divider">|</span>
              <a href="https://www.linkedin.com/in/vjeyam" target="_blank" rel="noreferrer">
                linkedin.com/in/vjeyam
              </a>
              <span className="divider">|</span>
              <a href="https://github.com/vjeyam" target="_blank" rel="noreferrer">
                github.com/vjeyam
              </a>
              <span className="divider">|</span>
              <a href="https://vjeyam.github.io" target="_blank" rel="noreferrer">
                vjeyam.github.io
              </a>
            </div>

            {/* Education */}
            <section className="resume-section">
              <h2 className="section-title">Education</h2>
              <div className="section-divider" />

              {/* Masters */}
              <div className="resume-row">
                <div>
                  <div className="item-title">Master of Science in Computer Science</div>
                  <div className="item-sub">University of Arkansas — Fayetteville, AR</div>
                  <div className="item-sub">GPA: 3.50</div>
                </div>
                <div className="date-text">Expected May 2027</div>
              </div>

              {/* Bachelors */}
              <div className="resume-row">
                <div>
                  <div className="item-title">Bachelor of Science in Computer Science</div>
                  <div className="item-sub">University of Arkansas — Fayetteville, AR</div>
                  <div className="item-sub">GPA: 3.30</div>
                </div>
                <div className="date-text">May 2025</div>
              </div>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <h2 className="section-title">Skills</h2>
              <div className="section-divider" />

              <p className="skills-line">
                <strong>Programming Languages:</strong> Python, SQL, C++, JavaScript, HTML/CSS
              </p>
              <p className="skills-line">
                <strong>Frameworks & Libraries:</strong> PyTorch, Scikit-learn, React
              </p>
              <p className="skills-line">
                <strong>Data & Tools:</strong> Kafka, Elasticsearch, Spark, Git/GitHub, Tableau, Pandas, NumPy
              </p>
              <p className="skills-line">
                <strong>Cloud & DevOps:</strong> Docker, Kubernetes, Azure
              </p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="section-title">Experience</h2>
              <div className="section-divider" />

              <ResumeItem
                role="Teaching Assistant"
                org="University of Arkansas"
                date="Jan 2023 - Present"
                bullets={[
                  "Guided 20+ Programming Foundations I students through weekly labs and office hours",
                  "Offered tailored assistance on programming assignments, lab exercises, and exam preparation",
                  "Introduced debugging workflows (gdb, IDE tools) to teach systematic problem-solving",
                  "Evaluating students' performance on assignments, maintaining high academic standards and proficiency",
                ]}
              />

              <ResumeItem
                role="Undergraduate Research Assistant"
                org="Smart Agricultural & Food Engineering Lab"
                date="May 2025 - Aug 2025"
                bullets={[
                  "Analyzed LiDAR and time-series video data to build dynamic facility maps",
                  "Applied AI-based analysis focusing on data quality and reproducibility",
                  "Operated autonomous robots to capture sanitation-focused datasets",
                  "Evaluated algorithm reliability, robustness, and scalability",
                ]}
              />

              <ResumeItem
                role="Undergraduate Research Assistant"
                org="Quantum AI Lab"
                date="Jan 2025 - May 2025"
                bullets={[
                  "Processed and optimized agricultural imaging datasets, and trained deep learning models in PyTorch to detect insect physiological features",
                  "Refined algorithms and applied evaluation metrics to compare accuracy and reduce misclassifications across models",
                  "Experimented with state-of-the-art architectures from research papers and GitHub implementations to determine best-performing approaches",
                  "Documented experimental results and presented findings to faculty mentors",
                ]}
              />

              <ResumeItem
                role="Undergraduate Research Intern"
                org="Washington State University"
                date="Jun 2024 - Aug 2024"
                bullets={[
                  "Processed multispectral and RGB imaging datasets using SQL and Python to extract features for crop health analysis",
                  "Built and fine-tuned a YOLOv8 model in PyTorch to detect and segment wheat fields at 80% accuracy while reducing false positives",
                  "Computed vegetation indices (SCI, GNDI) to quantify long-term crop health monitoring",
                  "Documented experimental findings and presented results to research mentors to guide future study directions",
                ]}
              />

              <ResumeItem
                role="Software Engineer Intern"
                org="Arkansas Blue Cross and Blue Shield"
                date="May 2023 - Aug 2023"
                bullets={[
                  "Developed ETL pipelines integrating Kafka with Elasticsearch to enable real-time data ingestion and indexing",
                  "Containerized workflows using Docker and deployed via Kubernetes",
                  "Optimized ingestion performance and monitoring for production systems",
                  "Built Python automation tools for data ingestion and indexing",
                ]}
              />
            </section>

            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}
