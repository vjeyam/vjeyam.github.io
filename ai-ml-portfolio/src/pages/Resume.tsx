import ScrollToTopButton from "../components/ScrollToTopButton";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">

      {/* NAME */}
      <h1 className="resume-name">Vishal Jeyam</h1>

      {/* CONTACT ROW */}
      <div className="resume-contact-row">
        Fayetteville, AR 72704
        <span className="divider">|</span>
        <a href="mailto:jeyamvishal5@gmail.com">jeyamvishal5@gmail.com</a>
        <span className="divider">|</span>
        <a href="tel:4792834690">(479) 283-4690</a>
        <span className="divider">|</span>
        <a href="https://www.linkedin.com/in/vjeyam" target="_blank">linkedin.com/in/vjeyam</a>
        <span className="divider">|</span>
        <a href="https://github.com/vjeyam" target="_blank">github.com/vjeyam</a>
      </div>

      {/* -------- EDUCATION -------- */}
      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />

        {/* Masters */}
        <div className="resume-row">
          <div>
            <div className="item-title">Master of Science in Computer Science</div>
            <div className="item-sub">University of Arkansas — Fayetteville, AR</div>
          </div>
          <div className="date-text">Expected May 2027</div>
        </div>

        {/* Bachelors */}
        <div className="resume-row">
          <div>
            <div className="item-title">Bachelor of Science in Computer Science</div>
            <div className="item-sub">University of Arkansas — Fayetteville, AR</div>
          </div>
          <div className="date-text">May 2025</div>
        </div>
      </section>

      {/* -------- SKILLS -------- */}
      <section className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />

        <p className="skills-line">
          <strong>Programming Languages:</strong> Python, Java, C++, SQL, JavaScript, HTML/CSS
        </p>
        <p className="skills-line">
          <strong>Frameworks & Libraries:</strong> PyTorch, TensorFlow, Scikit-learn, React
        </p>
        <p className="skills-line">
          <strong>Data & Tools:</strong> Kafka, Elasticsearch, Spark, Git/GitHub, Tableau, Pandas, NumPy
        </p>
        <p className="skills-line">
          <strong>Cloud & DevOps:</strong> Docker, Kubernetes, Azure
        </p>
      </section>

      {/* -------- EXPERIENCE -------- */}
      <section className="resume-section">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        {/* TA */}
        <ResumeItem
          role="Teaching Assistant"
          org="University of Arkansas"
          date="Jan 2023 – Present"
          bullets={[
            "Guided 20+ Programming Foundations I students through weekly labs and office hours.",
            "Provided tailored assistance on programming assignments, lab exercises, and exam preparation.",
            "Introduced debugging workflows (gdb, IDE tools) to teach systematic problem-solving.",
            "Provided detailed feedback to strengthen coding practices and problem-solving skills.",
          ]}
        />

        {/* Research – SAFER Lab */}
        <ResumeItem
          role="Undergraduate Research Assistant"
          org="Smart Agricultural & Food Engineering Lab"
          date="May 2025 – Aug 2025"
          bullets={[
            "Analyzed LiDAR and time-series video data to build dynamic facility maps.",
            "Applied AI-based analysis focusing on data quality and reproducibility.",
            "Operated autonomous robots to capture sanitation-focused datasets.",
            "Evaluated algorithm reliability, robustness, and scalability.",
          ]}
        />

        {/* Research – Quantum AI Lab */}
        <ResumeItem
          role="Undergraduate Research Assistant"
          org="Quantum AI Lab"
          date="Jan 2025 – May 2025"
          bullets={[
            "Preprocessed agricultural imaging datasets and trained deep learning models in PyTorch.",
            "Improved model reliability through metric-based refinement and error analysis.",
            "Experimented with architectures from research papers and GitHub frameworks.",
            "Presented experiment outcomes to faculty advisors.",
          ]}
        />

        {/* WSU Internship */}
        <ResumeItem
          role="Undergraduate Research Intern"
          org="Washington State University"
          date="Jun 2024 – Aug 2024"
          bullets={[
            "Processed multispectral and RGB imaging datasets using SQL and Python.",
            "Built and fine-tuned a YOLOv8 segmentation model boosting accuracy from ~40% to over 80%.",
            "Computed vegetation indices (SCI, GNDI) to quantify crop health.",
            "Delivered findings to research mentors to support future studies.",
          ]}
        />

        {/* Industry Internship */}
        <ResumeItem
          role="Software Engineer Intern"
          org="Arkansas Blue Cross and Blue Shield"
          date="Jun 2023 – Aug 2023"
          bullets={[
            "Developed ETL pipelines integrating Kafka with Elasticsearch.",
            "Containerized workflows using Docker and deployed via Kubernetes.",
            "Optimized ingestion performance and monitoring for production systems.",
            "Built Python automation tools for data ingestion and indexing.",
          ]}
        />
      </section>
    
      <ScrollToTopButton />
    </div>
  );
}

/* ---------- Reusable Resume Item Component ---------- */
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