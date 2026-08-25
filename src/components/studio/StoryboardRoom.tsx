import { Html } from "@react-three/drei";

import "../../styles/StoryboardRoom.css";

/* ========================================
   CONTENT
======================================== */

const workExperience = [
  {
    number: "01",
    organization: "University of Arkansas",
    role: "AI Graduate Research | SAFE Lab",
    date: "May 2025 — Present",
    description:
      "Leading AI and computer vision research across autonomous robotics and smart agriculture, building YOLO-based perception pipelines, multimodal datasets, and ROS-integrated systems.",
  },

  {
    number: "02",
    organization: "Washington State University",
    role: "Research Intern",
    date: "Jun 2024 — Aug 2024",
    description:
      "Developed computer vision pipelines for wheat health and yield prediction using 7,000+ NIR/RGB images, YOLO segmentation, vegetation indices, and automated radiometric calibration.",
  },

  {
    number: "03",
    organization: "Arkansas Blue Cross and Blue Shield",
    role: "Software Engineer Intern",
    date: "Jun 2023 — Aug 2023",
    description:
      "Built distributed data pipelines with Python, Kafka, PostgreSQL, and Elasticsearch to automate real-time ingestion, aggregation, and cross-team data access.",
  },
];

const projects = [
  {
    number: "01",
    title: "LLM Model Optimization",
    stack: "Python · Ollama · Qwen2.5 · Hugging Face",
    description:
      "Benchmarked Qwen2.5-7B across multiple quantization levels to measure accuracy, latency, throughput, and model size, identifying Q4_K_M as the best performance-efficiency tradeoff.",
    github:
      "https://github.com/vjeyam/llm-quant-tradeoffs",
  },

  {
    number: "02",
    title: "Plant CV",
    stack: "Python · YOLOv11 · Ultralytics · Computer Vision",
    description:
      "Built a real-time segmentation pipeline to distinguish yellow and green plants for an autonomous robotics competition, achieving 92.6% mask mAP@50 and helping the team place 2nd of 7.",
    github:
      "https://github.com/vjeyam/plant-cv",
  },

  {
    number: "03",
    title: "WSU Wheat Predictions",
    stack: "Python · YOLOv8 · OpenCV · NIR/RGB Imagery",
    description:
      "Developed a computer vision pipeline that extracts vegetation indices from multispectral crop imagery to assess wheat health and support higher-yield breeding decisions.",
    github:
      "https://github.com/vjeyam/WSU-Wheat-Predictions",
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
  const slats = Array.from(
    {
      length: 6,
    },
    (_, index) => index,
  );

  return (
    <group>
      <mesh
        position={[5.4, 2.5, 15.55]}
        receiveShadow
      >
        <boxGeometry args={[0.22, 5.8, 5.15]} />

        <meshStandardMaterial
          color="#0d0b0a"
          roughness={0.96}
        />
      </mesh>

      {slats.map((index) => {
        const z =
          13.45 +
          index * 0.78;

        return (
          <mesh
            key={index}
            position={[5.27, 2.5, z]}
          >
            <boxGeometry args={[0.045, 5.5, 0.08]} />

            <meshStandardMaterial
              color="#1a1411"
              roughness={0.9}
            />
          </mesh>
        );
      })}

      {/* subtle light leading toward exit */}
      <pointLight
        position={[4.45, 3.2, 16.4]}
        intensity={4}
        color="#ff6c4e"
        distance={7}
      />

      {/* doorway / exit edge light */}
      <pointLight
        position={[5.65, 2.8, 19]}
        intensity={3.2}
        color="#b94c3a"
        distance={5}
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