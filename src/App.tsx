import "./styles/App.css";

import StudioScene from "./components/studio/StudioScene";

function App() {
  return (
    <main className="site" id="top">
      <div className="studio-scroll">
        <StudioScene />

        <div className="studio-content">
          {/* ====================================
              GLOBAL NAV
          ==================================== */}

          <nav className="nav">
            <a
              className="brand"
              href="#top"
              aria-label="Home"
            >
              VJ
            </a>

            <div className="nav-links">
              <a href="#top">
                Home
              </a>

              <a href="#skills">
                Skills
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>
            </div>
          </nav>

          {/* ====================================
              01 — HERO
          ==================================== */}

          <section className="hero studio-section">
            <div className="hero-copy">
              <p className="eyebrow">
                AI / ML · SOFTWARE ENGINEERING
              </p>

              <h1>
                VISHAL
                <br />

                <span>
                  JEYAM
                </span>
              </h1>

              <p className="hero-description">
                Second-year M.S. Computer Science student
                <br />
                at the University of Arkansas.
              </p>
            </div>

            <div className="hero-side-copy">
              <span>
                01
              </span>

              <p>
                MACHINE LEARNING
                <br />
                CREATIVE TECHNOLOGY
                <br />
                SOFTWARE ENGINEERING
              </p>
            </div>

            <div
              className="scroll-indicator"
              aria-hidden="true"
            >
              <div className="scroll-line">
                <span />
              </div>

              <p>
                ENTER THE STUDIO
              </p>
            </div>
          </section>

          {/* ====================================
              02 — SKILLS
          ==================================== */}

          <section
            className="skills-section studio-section"
            id="skills"
          >
            <div className="skills-heading">
              <p className="section-number">
                02 / TECHNICAL TOOLKIT
              </p>

              <h2>
                BUILT
                <br />

                <span>
                  FOR THE SET.
                </span>
              </h2>

              <p className="skills-intro">
                The tools I use to build,
                train, ship, and iterate.
              </p>
            </div>

            <div className="skills-panel">
              <div className="skill-group">
                <span className="skill-index">
                  01
                </span>

                <div>
                  <h3>
                    MACHINE LEARNING
                  </h3>

                  <p>
                    PyTorch
                    <br />
                    Scikit-learn
                    <br />
                    Hugging Face
                    <br />
                    Ollama
                    <br />
                    Deep Learning
                    <br />
                    LLMs
                  </p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-index">
                  02
                </span>

                <div>
                  <h3>
                    COMPUTER VISION
                  </h3>

                  <p>
                    OpenCV
                    <br />
                    Ultralytics / YOLO
                    <br />
                    Torchvision
                    <br />
                    Object Detection
                    <br />
                    Image Segmentation
                    <br />
                    Multimodal Data
                  </p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-index">
                  03
                </span>

                <div>
                  <h3>
                    ENGINEERING & DATA
                  </h3>

                  <p>
                    Python · TypeScript
                    <br />
                    Docker · Git / GitHub
                    <br />
                    Kafka · Elasticsearch
                    <br />
                    PostgreSQL · MySQL
                    <br />
                    Pandas · NumPy
                    <br />
                    Azure · Supabase
                  </p>
                </div>
              </div>
            </div>

            <div className="skills-caption">
              <span>
                WORKSTATION 02
              </span>

              <span>
                TECHNICAL DEPARTMENT
              </span>
            </div>
          </section>

          {/* ====================================
              03 — EXPERIENCE
          ==================================== */}

          <section
            className="resume-room-section studio-section"
            id="experience"
            aria-label="Work Experience"
          />

          {/* ====================================
              04 — PROJECTS
          ==================================== */}

          <section
            className="resume-room-section studio-section"
            id="projects"
            aria-label="Projects"
          />

          {/* ====================================
              05 — CONTACT / SCREENING ROOM
          ==================================== */}

          <section
            className="contact-room-section studio-section"
            id="contact"
            aria-label="Contact"
          />
        </div>
      </div>
    </main>
  );
}

export default App;