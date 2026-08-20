import "../styles/Resume.css";
import "../index.css";

type Project = {
  label: string;
  bullets: string[];
};

const highlightedSkills = [
  // Programming
  "Python",
  "SQL",
  "C++",
  "Bash",
  "JavaScript",
  "TypeScript",
  "JavaScript/TypeScript",
  "HTML/CSS",

  // ML & AI
  "PyTorch",
  "Scikit-learn",
  "Hugging Face",
  "Ollama",
  "Deep Learning",
  "Machine Learning",
  "LLMs",

  // Computer Vision
  "OpenCV",
  "Ultralytics",
  "YOLO",
  "Torchvision",
  "Object Detection",
  "Image Segmentation",

  // Data & Databases
  "Pandas",
  "NumPy",
  "Kafka",
  "Elasticsearch",
  "PostgreSQL",
  "MySQL",
  "Supabase",

  // Cloud & Tools
  "Docker",
  "Azure",
  "Git/GitHub",
  "GitHub",
  "Git",
  "Jupyter",
  "Matplotlib",
  "Seaborn",
  "Tableau",
];

/*
  Escapes special regex characters.

  Needed for terms such as:
  C++
  Git/GitHub
  HTML/CSS
*/
function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/*
  Longer terms are sorted first to prevent shorter
  overlapping terms from matching first.
*/
const skillPattern = [...highlightedSkills]
  .sort((a, b) => b.length - a.length)
  .map(escapeRegex)
  .join("|");

/*
  Highlights useful numeric metrics without styling
  numbers embedded in names such as:

  YOLOv8
  YOLOv11
  A200
*/
const splitRegex = new RegExp(
  `(\\~?\\d+(?:\\.\\d+)?%|\\d[\\d,]*\\+|\\d+(?:st|nd|rd|th)(?: of \\d+)?|mAP@50|50\\/50|${skillPattern})`,
  "gi"
);

const metricRegex =
  /^(\~?\d+(?:\.\d+)?%|\d[\d,]*\+|\d+(?:st|nd|rd|th)(?: of \d+)?|mAP@50|50\/50)$/i;

const skillRegex = new RegExp(`^(${skillPattern})$`, "i");

/*
  Metrics -> blue
  Technical skills -> purple
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

              {/* RESUME PDF ACTIONS */}
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
                  href="/pdfs/Resume.pdf"
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
                  <div className="item-title">LLM Model Optimization</div>

                  <ul className="bullet-list">
                    <li>
                      {highlightResumeText(
                        "Benchmarked Qwen2.5-7B-Instruct across 4 quantization levels (F16, Q8_0, Q4_K_M, Q2_K) in Python and Ollama, measuring accuracy, latency, and throughput on MedQA and PubMedQA datasets"
                      )}
                    </li>

                    <li>
                      {highlightResumeText(
                        "Reduced model size 69% (14.19 GB to 4.36 GB) at Q4_K_M while improving MedQA accuracy from 58.8% to 59.1% and PubMedQA accuracy from 74.0% to 75.1%"
                      )}
                    </li>

                    <li>
                      {highlightResumeText(
                        "Increased MedQA inference throughput 87% (82.5 to 154.0 tokens/sec) at Q4_K_M with no accuracy loss, while heavier Q2_K compression dropped MedQA accuracy 9 points"
                      )}
                    </li>
                  </ul>
                </div>

                <div className="date-text">August 2026</div>
              </div>
            </section>

            {/* SKILLS */}
            <section className="resume-section">
              <h2 className="section-title">Skills</h2>
              <div className="section-divider" />

              <p className="skills-line">
                <strong>Programming Languages:</strong>{" "}
                Python, SQL, C++, Bash, JavaScript/TypeScript, HTML/CSS
              </p>

              <p className="skills-line">
                <strong>ML & AI:</strong>{" "}
                PyTorch, Scikit-learn, Hugging Face, Ollama, Deep Learning,
                Machine Learning, LLMs
              </p>

              <p className="skills-line">
                <strong>Computer Vision:</strong>{" "}
                OpenCV, Ultralytics/YOLO, Torchvision, Object Detection,
                Image Segmentation
              </p>

              <p className="skills-line">
                <strong>Data & Databases:</strong>{" "}
                Pandas, NumPy, Kafka, Elasticsearch, PostgreSQL, MySQL, Supabase
              </p>

              <p className="skills-line">
                <strong>Cloud & Tools:</strong>{" "}
                Docker, Azure, Git/GitHub, Jupyter, Matplotlib, Seaborn, Tableau
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}