import "../styles/Resume.css";
import "../index.css";

type Project = {
  label: string;
  bullets: string[];
};

/*
  Skills that should be highlighted when mentioned
  inside experience/project descriptions.
*/
const highlightedSkills = [
  "Python",
  "SQL",
  "C++",
  "JavaScript",
  "HTML/CSS",
  "PyTorch",
  "Scikit-learn",
  "React",
  "Kafka",
  "Elasticsearch",
  "Spark",
  "Git/GitHub",
  "Tableau",
  "Pandas",
  "NumPy",
  "Docker",
  "Kubernetes",
  "Azure",
];

/*
  Escapes special regex characters.

  Needed for skills such as:
  C++
  Git/GitHub
  HTML/CSS
*/
function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/*
  Build the skill regex once instead of rebuilding it
  every time a bullet gets rendered.
*/
const skillPattern = [...highlightedSkills]
  .sort((a, b) => b.length - a.length)
  .map(escapeRegex)
  .join("|");

/*
  Splits text around metrics and skills.

  Metrics highlighted:
  20+
  7,000+
  98.1%
  92.6%
  2nd of 7
  50/50
  mAP@50

  Skills highlighted:
  Python
  Kafka
  Elasticsearch
  etc.

  Model names such as YOLOv8, YOLOv11, and A200
  are left alone.
*/
const splitRegex = new RegExp(
  `(\\~?\\d+(?:\\.\\d+)?%|\\d[\\d,]*\\+|\\d+(?:st|nd|rd|th)(?: of \\d+)?|mAP@50|50\\/50|${skillPattern})`,
  "gi"
);

const metricRegex =
  /^(\~?\d+(?:\.\d+)?%|\d[\d,]*\+|\d+(?:st|nd|rd|th)(?: of \d+)?|mAP@50|50\/50)$/i;

const skillRegex = new RegExp(`^(${skillPattern})$`, "i");

/*
  Highlights metrics and technical skills inside resume bullets.
*/
function highlightResumeText(text: string) {
  return text.split(splitRegex).map((part, i) => {
    if (metricRegex.test(part)) {
      return (
        <span key={i} className="resume-metric">
          {part}
        </span>
      );
    }

    if (skillRegex.test(part)) {
      return (
        <span key={i} className="resume-skill-highlight">
          {part}
        </span>
      );
    }

    return part;
  });
}

function ResumeItem({
  role,
  org,
  date,
  bullets,
  projects,
}: {
  role: string;
  org: string;
  date: string;
  bullets?: string[];
  projects?: Project[];
}) {
  return (
    <div className="resume-row">
      <div className="resume-content">
        <div className="item-title">
          {role} | {org}
        </div>

        {bullets && (
          <ul className="bullet-list">
            {bullets.map((bullet, i) => (
              <li key={i}>{highlightResumeText(bullet)}</li>
            ))}
          </ul>
        )}

        {projects &&
          projects.map((project, i) => (
            <div key={i} className="sub-project">
              <div className="sub-project-title">{project.label}</div>

              <ul className="bullet-list sub-bullet-list">
                {project.bullets.map((bullet, j) => (
                  <li key={j}>{highlightResumeText(bullet)}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <div className="date-text">{date}</div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="page">
      <div className="container">
        <div className="card cardPad">
          <div className="resume-page">
            {/* NAME */}
            <h1 className="resume-name">Vishal Jeyam</h1>

            {/* CONTACT ROW */}
            <div className="resume-contact-row">
              Fayetteville, AR 72704

              <span className="divider">|</span>

              <a href="mailto:jeyamvishal5@gmail.com">
                jeyamvishal5@gmail.com
              </a>

              <span className="divider">|</span>

              <a
                href="https://www.linkedin.com/in/vjeyam"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn: vjeyam
              </a>

              <span className="divider">|</span>

              <a
                href="https://github.com/vjeyam"
                target="_blank"
                rel="noreferrer"
              >
                Github: vjeyam
              </a>

              <span className="divider">|</span>

              <a
                href="https://vishaljeyam.com/"
                target="_blank"
                rel="noreferrer"
              >
                vishaljeyam.com
              </a>

              <div className="resume-actions">
                <a
                  href="/pdfs/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-action-button resume-view-button"
                >
                  View Resume PDF
                </a>

                <a
                  href="/pdfs/resume.pdf"
                  download="Vishal_Jeyam_Resume.pdf"
                  className="resume-action-button resume-download-button"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* EDUCATION */}
            <section className="resume-section">
              <h2 className="section-title">Education</h2>
              <div className="section-divider" />

              {/* Masters */}
              <div className="resume-row">
                <div className="resume-content">
                  <div className="item-title">
                    Master of Science in Computer Science | University of
                    Arkansas
                  </div>

                  <div className="item-sub">
                    University of Arkansas — Fayetteville, AR
                  </div>

                  <div className="item-sub">GPA: 3.5</div>

                  <div className="item-sub">
                    <strong>Thesis:</strong> Improving a stock movement
                    prediction model by incorporating news or sentiment data
                    alongside traditional market data
                  </div>
                </div>

                <div className="date-text">Expected December 2027</div>
              </div>

              {/* Bachelors */}
              <div className="resume-row">
                <div className="resume-content">
                  <div className="item-title">
                    Bachelor of Science in Computer Science | University of
                    Arkansas
                  </div>

                  <div className="item-sub">
                    University of Arkansas — Fayetteville, AR
                  </div>

                  <div className="item-sub">GPA: 3.2</div>
                </div>

                <div className="date-text">May 2025</div>
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="resume-section">
              <h2 className="section-title">Work Experience</h2>
              <div className="section-divider" />

              {/* UARK TA */}
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

              {/* SAFE Lab Research Assistant */}
              <ResumeItem
                role="Undergraduate Research Assistant"
                org="Smart Agricultural & Food Engineering Lab"
                date="May 2025 - Present"
                projects={[
                  {
                    label: "Autonomous Sanitation Monitoring (Poultry Facility)",
                    bullets: [
                      "Operated a Clearpath A200 Husky autonomous mobile robot, integrating ROS-based workflows for sensor fusion, mapping, and navigation as part of an AI-powered environmental monitoring and sanitation system",
                      "Collected and curated large-scale multimodal datasets (~90 recorded runs, shortest yielding 7,000+ frames) spanning LiDAR, vision, odometry, and position data across a live poultry facility",
                      "Developing a camera-to-base calibration pipeline to enable precise robotic arm placement for automated floor sanitation checks",
                    ],
                  },
                  {
                    label:
                      "Autonomous Navigation & Plant Identification Competition",
                    bullets: [
                      "Built and trained a YOLOv11 segmentation model to classify yellow vs. green plants in real time, achieving 98.1% precision and 92.6% mAP@50 on validation, with 98.2% accuracy on unseen test data",
                      "Model output directly powered the robot's navigation decisions, helping the team place 2nd of 7 teams in both navigation and identification categories",
                    ],
                  },
                ]}
              />

              {/* WSU Research Intern */}
              <ResumeItem
                role="Undergraduate Research Intern"
                org="Washington State University"
                date="Jun 2024 - Aug 2024"
                bullets={[
                  "Built a real-time crop health and yield prediction pipeline for a WSU wheat breeding program (REEU), using a provided dataset of 7,000+ paired NIR and RGB multispectral images",
                  "Fine-tuned a YOLOv8 model to detect and segment wheat field plots, achieving 82% detection accuracy and 84% segmentation accuracy, to isolate crop regions for downstream analysis",
                  "Computed vegetation indices (Soil Crop Index, Green Normalized Difference Vegetation Index) within segmented plots to predict wheat health and yield, reducing the cost and manual labor of traditional breeding-program assessment",
                ]}
              />

              {/* ABCBS Software Engineer Intern */}
              <ResumeItem
                role="Software Engineer Intern"
                org="Arkansas Blue Cross and Blue Shield"
                date="Jun 2023 - Aug 2023"
                bullets={[
                  "Built a Kafka consumer client in Python to receive real-time data from an existing producer pipeline, validating end-to-end delivery by confirming a test dataset of team member names published by the producer was correctly received by the consumer",
                  "Developed a proof-of-concept Elasticsearch ingestion script to repeatedly pull data from one or more PostgreSQL databases and consolidate it into a single unified database, enabling cross-team access to previously siloed data",
                  "Contributed to the Integration Hub team's pipeline lifecycle, spanning stream ingestion with Kafka to search indexing with Elasticsearch, across distributed systems",
                ]}
              />
            </section>

            {/* PROJECTS */}
            <section className="resume-section">
              <h2 className="section-title">Projects</h2>
              <div className="section-divider" />

              <div className="resume-row">
                <div className="resume-content">
                  <div className="item-title">Sports Odds Pipeline</div>

                  <ul className="bullet-list">
                    <li>
                      {highlightResumeText(
                        "Built a modular ETL pipeline in Python to ingest real-time sports betting odds from major U.S. markets via the Odds API and game results from the ESPN API, storing structured data in a SQLite database"
                      )}
                    </li>

                    <li>
                      {highlightResumeText(
                        "Engineered sports market efficiency analytics including close line value, calibration modeling, and best-market frequency tracking, finding pregame odds correctly predicted game outcomes 70% of the time versus a 50/50 baseline"
                      )}
                    </li>

                    <li>
                      {highlightResumeText(
                        "Developed an interactive Streamlit dashboard with strategy simulation metrics (ROI, drawdown, profit factor) and one-click ETL refresh, supporting both end-user analytics and admin-level pipeline monitoring"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="date-text">February 2026</div>
              </div>
            </section>

            {/* SKILLS */}
            <section className="resume-section">
              <h2 className="section-title">Skills</h2>
              <div className="section-divider" />

              <p className="skills-line">
                <strong>Programming Languages:</strong> Python, SQL, C++,
                JavaScript, HTML/CSS
              </p>

              <p className="skills-line">
                <strong>Frameworks & Libraries:</strong> PyTorch, Scikit-learn,
                React
              </p>

              <p className="skills-line">
                <strong>Data & Tools:</strong> Kafka, Elasticsearch, Spark,
                Git/GitHub, Tableau, Pandas, NumPy
              </p>

              <p className="skills-line">
                <strong>Cloud & DevOps:</strong> Docker, Kubernetes, Azure
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}