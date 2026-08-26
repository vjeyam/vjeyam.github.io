import { Html } from "@react-three/drei";

import "../../styles/ContactStage.css";

const CONTACT = {
  github: "https://github.com/vjeyam",

  linkedin: "https://www.linkedin.com/in/vjeyam/",

  email: "jeyamvishal5@gmail.com",

  location: "Fayetteville, AR, 72704",
};

function EndCredits() {
  return (
    <Html
      transform
      center
      position={[13.63, 2.62, 20.15]}
      rotation={[0, -Math.PI / 2, 0]}
      distanceFactor={4.1}
      scale={0.5}
      style={{
        pointerEvents: "auto",
      }}
    >
      <div className="contact-credits">
        <div className="contact-credits__header">
          <p className="contact-credits__eyebrow">
            END CREDITS
          </p>

          <h2>
            THAT&apos;S
            <br />
            A WRAP.
          </h2>

          <p className="contact-credits__subhead">
            Thanks for visiting the set.
          </p>
        </div>

        <div className="contact-credits__divider" />

        <div className="contact-credits__identity">
          <span>VISHAL JEYAM</span>

          <small>
            AI / ML · COMPUTER VISION · SOFTWARE ENGINEERING
          </small>
        </div>

        <div className="contact-credits__grid">
          <div>
            <span className="contact-credits__label">
              GITHUB
            </span>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/vjeyam
            </a>
          </div>

          <div>
            <span className="contact-credits__label">
              LINKEDIN
            </span>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/vjeyam/
            </a>
          </div>

          <div>
            <span className="contact-credits__label">
              EMAIL
            </span>

            <a href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>

          <div>
            <span className="contact-credits__label">
              BASED IN
            </span>

            <span>
              {CONTACT.location}
            </span>
          </div>
        </div>

        <div className="contact-credits__footer">
          <span>
            DESIGNED + DEVELOPED BY VISHAL JEYAM
          </span>

          <span>
            REACT · THREE.JS · R3F
          </span>
        </div>
      </div>
    </Html>
  );
}

function ExitSign() {
  const returnToEntrance = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <group position={[13.55, 4.65, 23.05]}>
      {/* physical sign */}
      <mesh
        rotation={[0, -Math.PI / 2, 0]}
      >
        <boxGeometry args={[1.05, 0.42, 0.08]} />

        <meshStandardMaterial
          color="#180906"
          emissive="#b83929"
          emissiveIntensity={0.55}
          toneMapped={false}
        />
      </mesh>

      <Html
        transform
        center
        position={[-0.05, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        distanceFactor={3.5}
        scale={0.5}
        style={{
          pointerEvents: "auto",
        }}
      >
        <button
          className="contact-exit"
          onClick={returnToEntrance}
          aria-label="Return to studio entrance"
        >
          EXIT
        </button>
      </Html>
    </group>
  );
}

function Projector() {
  return (
    <group position={[8.4, 0.3, 20.15]}>
      {/* pedestal */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.12, 0.7, 0.12]} />

        <meshStandardMaterial
          color="#111111"
          roughness={0.6}
        />
      </mesh>

      {/* projector body */}
      <mesh position={[0, 0.82, 0]}>
        <boxGeometry args={[0.7, 0.28, 0.5]} />

        <meshStandardMaterial
          color="#0b0b0b"
          roughness={0.38}
          metalness={0.32}
        />
      </mesh>

      {/* lens */}
      <mesh
        position={[0.39, 0.82, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry
          args={[0.11, 0.13, 0.18, 24]}
        />

        <meshStandardMaterial
          color="#050505"
          emissive="#d9c5a5"
          emissiveIntensity={0.55}
          metalness={0.35}
          roughness={0.22}
        />
      </mesh>

      <pointLight
        position={[0.45, 0.82, 0]}
        intensity={2.2}
        color="#e5d8bf"
        distance={6}
      />
    </group>
  );
}

export default function ContactStage() {
  return (
    <group>
      {/* =====================================
          ROOM FLOOR
      ====================================== */}

      <mesh
        position={[10.15, -0.5, 20.15]}
        receiveShadow
      >
        <boxGeometry args={[7.7, 0.12, 8]} />

        <meshStandardMaterial
          color="#080808"
          roughness={0.94}
          metalness={0.03}
        />
      </mesh>

      {/* =====================================
          PROJECTION WALL
      ====================================== */}

      <mesh
        position={[13.85, 2.45, 20.15]}
        receiveShadow
      >
        <boxGeometry args={[0.22, 5.9, 8]} />

        <meshStandardMaterial
          color="#080706"
          roughness={0.97}
        />
      </mesh>

      {/* =====================================
          PROJECTION SCREEN
      ====================================== */}

      <mesh
        position={[13.7, 2.62, 20.15]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry args={[5.8, 3.65]} />

        <meshStandardMaterial
          color="#e5e0d5"
          emissive="#c8c1b4"
          emissiveIntensity={0.075}
          roughness={0.92}
        />
      </mesh>

      {/* black screen border */}
      <mesh
        position={[13.72, 2.62, 20.15]}
      >
        <boxGeometry args={[0.06, 3.9, 6.05]} />

        <meshStandardMaterial
          color="#070707"
          roughness={0.85}
        />
      </mesh>

      {/* put screen slightly in front of border */}
      <mesh
        position={[13.675, 2.62, 20.15]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry args={[5.7, 3.55]} />

        <meshStandardMaterial
          color="#ddd8cd"
          emissive="#cec5b7"
          emissiveIntensity={0.09}
          roughness={0.95}
        />
      </mesh>

      <EndCredits />

      {/* =====================================
          SIDE WALLS
      ====================================== */}

      <mesh
        position={[10.3, 2.4, 24]}
        receiveShadow
      >
        <boxGeometry args={[7.2, 5.8, 0.18]} />

        <meshStandardMaterial
          color="#090807"
          roughness={0.97}
        />
      </mesh>

      <mesh
        position={[10.3, 2.4, 16.3]}
        receiveShadow
      >
        <boxGeometry args={[7.2, 5.8, 0.18]} />

        <meshStandardMaterial
          color="#090807"
          roughness={0.97}
        />
      </mesh>

      {/* =====================================
          SCREENING ROOM PROPS
      ====================================== */}

      <Projector />

      {/* two understated empty chairs */}
      {[-0.75, 0.75].map((z) => (
        <group
          key={z}
          position={[9.6, -0.18, 20.15 + z]}
        >
          <mesh position={[0, 0.62, 0]}>
            <boxGeometry args={[0.55, 0.08, 0.55]} />

            <meshStandardMaterial
              color="#101010"
              roughness={0.9}
            />
          </mesh>

          <mesh position={[-0.2, 0.22, 0]}>
            <boxGeometry args={[0.06, 0.82, 0.06]} />

            <meshStandardMaterial
              color="#161616"
            />
          </mesh>

          <mesh position={[0.2, 0.22, 0]}>
            <boxGeometry args={[0.06, 0.82, 0.06]} />

            <meshStandardMaterial
              color="#161616"
            />
          </mesh>

          <mesh position={[-0.2, 0.98, -0.23]}>
            <boxGeometry args={[0.06, 0.82, 0.06]} />

            <meshStandardMaterial
              color="#161616"
            />
          </mesh>

          <mesh position={[0.2, 0.98, -0.23]}>
            <boxGeometry args={[0.06, 0.82, 0.06]} />

            <meshStandardMaterial
              color="#161616"
            />
          </mesh>

          <mesh position={[0, 1.08, -0.23]}>
            <boxGeometry args={[0.48, 0.5, 0.05]} />

            <meshStandardMaterial
              color="#0c0c0c"
              roughness={0.95}
            />
          </mesh>
        </group>
      ))}

      <ExitSign />

      {/* =====================================
          LIGHTING
      ====================================== */}

      {/* projection screen glow */}
      <pointLight
        position={[12.7, 2.7, 20.15]}
        intensity={7}
        color="#d7d0c4"
        distance={8}
      />

      {/* faint room fill */}
      <pointLight
        position={[9.2, 3.8, 20.15]}
        intensity={2.4}
        color="#64718c"
        distance={8}
      />

      {/* faint warm exit-side light */}
      <pointLight
        position={[12.2, 4.2, 23]}
        intensity={2.5}
        color="#bf4b37"
        distance={5}
      />
    </group>
  );
}