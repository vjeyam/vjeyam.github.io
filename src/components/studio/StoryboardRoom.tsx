import { Html } from "@react-three/drei";

import "../../styles/StoryboardRoom.css";

/* ========================================
   CONTENT
======================================== */

const workExperience = [
  {
    number: "01",

    organization:
      "University of Arkansas",

    role:
      "Graduate Research · SAFE Lab",

    date:
      "2025 — Present",

    description:
      "Graduate research across computer science, machine learning, computer vision, and smart agriculture.",
  },

  {
    number: "02",

    organization:
      "Washington State University",

    role:
      "Research Experience",

    date:
      "Summer 2024",

    description:
      "Developed computer-vision workflows using multispectral imagery for agricultural phenotyping and yield analysis.",
  },

  {
    number: "03",

    organization:
      "Arkansas Blue Cross & Blue Shield",

    role:
      "Software Engineering Intern",

    date:
      "Summer 2023",

    description:
      "Worked on software and data-integration systems using Python and production engineering tools.",
  },
];

const projects = [
  {
    number: "01",

    title:
      "Wheat Yield Prediction",

    stack:
      "Computer Vision · PyTorch · UAV Imagery",

    description:
      "Machine-learning and computer-vision pipeline for analyzing agricultural imagery and predicting crop performance.",
  },

  {
    number: "02",

    title:
      "Accident Severity Prediction",

    stack:
      "XGBoost · Scikit-learn · Pandas",

    description:
      "Multi-class machine-learning system for predicting U.S. traffic accident severity from large-scale structured data.",
  },

  {
    number: "03",

    title:
      "Sports Market Efficiency",

    stack:
      "Python · ETL · SQLite · Streamlit",

    description:
      "Data pipeline and analytics platform for studying sportsbook prices, calibration, and market behavior.",
  },
];

/* ========================================
   STORYBOARD CARD
======================================== */

type StoryboardCardProps = {
  number: string;

  title: string;

  subtitle: string;

  description: string;
};

function StoryboardCard({
  number,
  title,
  subtitle,
  description,
}: StoryboardCardProps) {
  return (
    <div className="storyboard-card">
      <span className="storyboard-card__number">
        {number}
      </span>

      <div className="storyboard-card__body">
        <h3>
          {title}
        </h3>

        <p className="storyboard-card__subtitle">
          {subtitle}
        </p>

        <p className="storyboard-card__description">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ========================================
   EXPERIENCE WALL
======================================== */

function ExperienceWall() {
  return (
    <group>
      {/* main wall */}
      <mesh
        position={[
          0,
          2.5,
          13.15,
        ]}
        receiveShadow
      >
        <boxGeometry
          args={[
            9.2,
            5.8,
            0.22,
          ]}
        />

        <meshStandardMaterial
          color="#100d0b"
          roughness={0.96}
        />
      </mesh>

      {/* cork / production-board inset */}
      <mesh
        position={[
          0,
          2.5,
          13.025,
        ]}
        rotation={[
          0,
          Math.PI,
          0,
        ]}
      >
        <planeGeometry
          args={[
            8.4,
            4.85,
          ]}
        />

        <meshStandardMaterial
          color="#211914"
          roughness={1}
        />
      </mesh>

      {/* accent rail */}
      <mesh
        position={[
          0,
          5.02,
          12.97,
        ]}
      >
        <boxGeometry
          args={[
            8.2,
            0.045,
            0.035,
          ]}
        />

        <meshStandardMaterial
          color="#ff563d"
          emissive="#ff563d"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* heading */}
      <Html
        transform
        center
        position={[
          0,
          4.55,
          12.95,
        ]}
        rotation={[
          0,
          Math.PI,
          0,
        ]}
        distanceFactor={3}
        style={{
          pointerEvents: "none",
        }}
      >
        <div className="storyboard-room-heading">
          <span>
            03 / PRODUCTION HISTORY
          </span>

          <strong>
            WORK EXPERIENCE
          </strong>
        </div>
      </Html>

      {/* EXPERIENCE CARDS */}

      {workExperience.map(
        (
          experience,
          index,
        ) => {
          /*
           * Compact enough that all three
           * cards fit inside one camera frame.
           */
          const x =
            -2.4 +
            index * 2.4;

          return (
            <Html
              key={
                experience.number
              }
              transform
              center
              position={[
                x,
                2.45,
                12.94,
              ]}
              rotation={[
                0,
                Math.PI,
                0,
              ]}
              distanceFactor={3.5}
              style={{
                pointerEvents:
                  "none",
              }}
            >
              <StoryboardCard
                number={
                  experience.number
                }
                title={
                  experience.organization
                }
                subtitle={`${experience.role} · ${experience.date}`}
                description={
                  experience.description
                }
              />
            </Html>
          );
        },
      )}

      {/* board tray */}
      <mesh
        position={[
          0,
          0.25,
          12.9,
        ]}
      >
        <boxGeometry
          args={[
            7.8,
            0.09,
            0.32,
          ]}
        />

        <meshStandardMaterial
          color="#171311"
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

/* ========================================
   PROJECT WALL
======================================== */

function ProjectWall() {
  return (
    <group>
      <mesh
        position={[
          0,
          2.5,
          20.15,
        ]}
        receiveShadow
      >
        <boxGeometry
          args={[
            9.2,
            5.8,
            0.22,
          ]}
        />

        <meshStandardMaterial
          color="#0f0c0a"
          roughness={0.96}
        />
      </mesh>

      <mesh
        position={[
          0,
          2.5,
          20.025,
        ]}
        rotation={[
          0,
          Math.PI,
          0,
        ]}
      >
        <planeGeometry
          args={[
            8.4,
            4.85,
          ]}
        />

        <meshStandardMaterial
          color="#1d1713"
          roughness={1}
        />
      </mesh>

      {/* accent rail */}
      <mesh
        position={[
          0,
          5.02,
          19.97,
        ]}
      >
        <boxGeometry
          args={[
            8.2,
            0.045,
            0.035,
          ]}
        />

        <meshStandardMaterial
          color="#ff563d"
          emissive="#ff563d"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* heading */}
      <Html
        transform
        center
        position={[
          0,
          4.55,
          19.95,
        ]}
        rotation={[
          0,
          Math.PI,
          0,
        ]}
        distanceFactor={3.5}
        style={{
          pointerEvents: "none",
        }}
      >
        <div className="storyboard-room-heading">
          <span>
            04 / FEATURED WORK
          </span>

          <strong>
            PROJECTS
          </strong>
        </div>
      </Html>

      {/* PROJECT CARDS */}

      {projects.map(
        (
          project,
          index,
        ) => {
          const x =
            -2.4 +
            index * 2.4;

          return (
            <Html
              key={
                project.number
              }
              transform
              center
              position={[
                x,
                2.45,
                19.94,
              ]}
              rotation={[
                0,
                Math.PI,
                0,
              ]}
              distanceFactor={3.5}
              style={{
                pointerEvents:
                  "none",
              }}
            >
              <StoryboardCard
                number={
                  project.number
                }
                title={
                  project.title
                }
                subtitle={
                  project.stack
                }
                description={
                  project.description
                }
              />
            </Html>
          );
        },
      )}

      <mesh
        position={[
          0,
          0.25,
          19.9,
        ]}
      >
        <boxGeometry
          args={[
            7.8,
            0.09,
            0.32,
          ]}
        />

        <meshStandardMaterial
          color="#171311"
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

/* ========================================
   CONNECTING CORRIDOR
======================================== */

function Corridor() {
  const slats =
    Array.from(
      {
        length: 8,
      },
      (_, index) =>
        index,
    );

  return (
    <group>
      <mesh
        position={[
          5.4,
          2.5,
          16.65,
        ]}
        receiveShadow
      >
        <boxGeometry
          args={[
            0.22,
            5.8,
            7.2,
          ]}
        />

        <meshStandardMaterial
          color="#0d0b0a"
          roughness={0.96}
        />
      </mesh>

      {slats.map(
        (index) => {
          const z =
            13.7 +
            index * 0.78;

          return (
            <mesh
              key={index}
              position={[
                5.27,
                2.5,
                z,
              ]}
            >
              <boxGeometry
                args={[
                  0.045,
                  5.5,
                  0.08,
                ]}
              />

              <meshStandardMaterial
                color="#1a1411"
                roughness={0.9}
              />
            </mesh>
          );
        },
      )}

      <pointLight
        position={[
          4.45,
          3.2,
          16.4,
        ]}
        intensity={4}
        color="#ff6c4e"
        distance={7}
      />
    </group>
  );
}

/* ========================================
   FLOOR
======================================== */

function GalleryFloor() {
  return (
    <>
      <mesh
        position={[
          0,
          -0.51,
          15.6,
        ]}
        receiveShadow
      >
        <boxGeometry
          args={[
            11.2,
            0.12,
            14,
          ]}
        />

        <meshStandardMaterial
          color="#090909"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* subtle route marker */}
      <mesh
        position={[
          4.35,
          -0.43,
          15.25,
        ]}
      >
        <boxGeometry
          args={[
            0.035,
            0.012,
            9,
          ]}
        />

        <meshStandardMaterial
          color="#4d342d"
          emissive="#ff563d"
          emissiveIntensity={0.06}
        />
      </mesh>
    </>
  );
}

/* ========================================
   GALLERY LIGHTING
======================================== */

function GalleryLighting() {
  return (
    <>
      {/* Experience */}
      <pointLight
        position={[
          0,
          4.8,
          9.5,
        ]}
        intensity={9}
        color="#ffd5b1"
        distance={11}
      />

      <pointLight
        position={[
          -3.2,
          2.7,
          10.6,
        ]}
        intensity={3}
        color="#ff7658"
        distance={7}
      />

      {/* Projects */}
      <pointLight
        position={[
          0,
          4.8,
          16.5,
        ]}
        intensity={9}
        color="#dce5ff"
        distance={11}
      />

      <pointLight
        position={[
          3.2,
          2.7,
          17.5,
        ]}
        intensity={3}
        color="#ff7658"
        distance={7}
      />
    </>
  );
}

/* ========================================
   STORYBOARD ROOM
======================================== */

export default function StoryboardRoom() {
  return (
    <group>
      <GalleryFloor />

      <ExperienceWall />

      <Corridor />

      <ProjectWall />

      <GalleryLighting />
    </group>
  );
}