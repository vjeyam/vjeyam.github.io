import "./styles/App.css";

import StudioScene from "./components/studio/StudioScene";

function App() {
  return (
    <main className="site" id="top">
      <div className="studio-scroll">
        <StudioScene />

        <div className="studio-content">
          {/* GLOBAL NAV */}
          <nav className="nav">
            <a className="brand" href="#top" aria-label="Home">
              VJ
            </a>

            <div className="nav-links">
              <a href="#top">Home</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          {/* ======================
              01 — HERO
          ====================== */}
          <section className="hero studio-section">
            <div className="hero-copy">
              <p className="eyebrow">
                AI / ML · SOFTWARE ENGINEERING
              </p>

              <h1>
                VISHAL
                <br />
                <span>JEYAM</span>
              </h1>

              <p className="hero-description">
                Second-year M.S. Computer Science student
                <br />
                at the University of Arkansas.
              </p>
            </div>

            <div className="hero-side-copy">
              <span>01</span>

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

              <p>ENTER THE STUDIO</p>
            </div>
          </section>

          {/* ======================
              02 — SKILLS
          ====================== */}
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
                <span>FOR THE SET.</span>
              </h2>

              <p className="skills-intro">
                The tools I use to build,
                train, ship, and iterate.
              </p>
            </div>

            <div className="skills-panel">
              <div className="skill-group">
                <span className="skill-index">01</span>

                <div>
                  <h3>MACHINE LEARNING</h3>

                  <p>
                    Python
                    <br />
                    PyTorch
                    <br />
                    TensorFlow
                    <br />
                    Scikit-learn
                    <br />
                    Computer Vision
                    <br />
                    LLMs / RAG
                  </p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-index">02</span>

                <div>
                  <h3>ENGINEERING</h3>

                  <p>
                    TypeScript
                    <br />
                    React
                    <br />
                    FastAPI
                    <br />
                    SQL
                    <br />
                    Docker
                    <br />
                    Git
                  </p>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-index">03</span>

                <div>
                  <h3>INFRASTRUCTURE</h3>

                  <p>
                    AWS
                    <br />
                    Linux
                    <br />
                    REST APIs
                    <br />
                    CI / CD
                    <br />
                    Model Deployment
                  </p>
                </div>
              </div>
            </div>

            <div className="skills-caption">
              <span>WORKSTATION 02</span>
              <span>TECHNICAL DEPARTMENT</span>
            </div>
          </section>
        </div>
      </div>

      {/* We'll convert these into 3D sets later */}
      <section
        className="coming-section"
        id="experience"
      >
        <p>03 / EXPERIENCE</p>

        <h2>
          Production history
          <br />
          comes next.
        </h2>
      </section>

      <section
        className="coming-section"
        id="projects"
      >
        <p>04 / PROJECTS</p>

        <h2>
          Each project becomes
          <br />
          its own set.
        </h2>
      </section>

      <section
        className="coming-section"
        id="contact"
      >
        <p>05 / CONTACT</p>

        <h2>That&apos;s a wrap.</h2>
      </section>
    </main>
  );
}

export default App;