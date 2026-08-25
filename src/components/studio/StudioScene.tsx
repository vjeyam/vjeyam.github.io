import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  ContactShadows,
  Environment,
  Float,
} from "@react-three/drei";

import {
  Suspense,
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

import DirectorChair from "./DirectorChair";
import SkillsSet from "./SkillsSet";
import StoryboardRoom from "./StoryboardRoom";
import ContactStage from "./ContactStage";

function smoothStep(value: number) {
  return value * value * (3 - 2 * value);
}

/* ========================================
   CAMERA RIG
======================================== */

function CameraRig() {
  const { camera, pointer } = useThree();

  const smoothedScroll = useRef(0);

  const lookAt = useRef(
    new THREE.Vector3(0, 1.25, 0),
  );

  const skillsCameraCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.05, 6.3),

        new THREE.Vector3(0.3, 2.05, 4.8),

        new THREE.Vector3(1.7, 2.12, 2.9),

        new THREE.Vector3(3.85, 2.2, 3.05),

        new THREE.Vector3(5.15, 2.25, 4.65),
      ]),
    [],
  );

  const skillsTargetCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.25, 0),

        new THREE.Vector3(0.35, 1.3, 0),

        new THREE.Vector3(1.9, 1.22, -0.45),

        new THREE.Vector3(4, 1.28, -0.9),

        new THREE.Vector3(5.15, 1.22, -1),
      ]),
    [],
  );

  const experienceCameraCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.15, 2.25, 4.65),

        new THREE.Vector3(5, 2.32, 5.3),

        new THREE.Vector3(4.1, 2.35, 5.8),

        new THREE.Vector3(2.7, 2.34, 6.2),

        new THREE.Vector3(1.3, 2.3, 6.55),

        new THREE.Vector3(0, 2.28, 6.75),
      ]),
    [],
  );

  const experienceTargetCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.15, 1.22, -1),

        new THREE.Vector3(5, 1.4, 2),

        new THREE.Vector3(4, 1.6, 6),

        new THREE.Vector3(2.7, 1.9, 9.5),

        new THREE.Vector3(1.2, 2.25, 12),

        new THREE.Vector3(0, 2.45, 13.15),
      ]),
    [],
  );

  const projectsCameraCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.28, 6.75),

        new THREE.Vector3(1.8, 2.3, 6.75),

        new THREE.Vector3(3.4, 2.3, 7),

        new THREE.Vector3(4.3, 2.31, 7.8),

        new THREE.Vector3(4.55, 2.32, 9.5),

        new THREE.Vector3(4.55, 2.33, 11.5),

        new THREE.Vector3(4.55, 2.33, 13),

        new THREE.Vector3(4.1, 2.31, 13.55),

        new THREE.Vector3(2.8, 2.29, 13.72),

        new THREE.Vector3(1.4, 2.28, 13.75),

        new THREE.Vector3(0, 2.28, 13.75),
      ]),
    [],
  );

  const projectsTargetCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.45, 13.15),

        new THREE.Vector3(1.8, 2.45, 13.15),

        new THREE.Vector3(3.4, 2.45, 13.15),

        new THREE.Vector3(4.5, 2.4, 14),

        new THREE.Vector3(4.6, 2.4, 16),

        new THREE.Vector3(4.6, 2.4, 18),

        new THREE.Vector3(4.2, 2.45, 20.15),

        new THREE.Vector3(3.2, 2.45, 20.15),

        new THREE.Vector3(2, 2.45, 20.15),

        new THREE.Vector3(1, 2.45, 20.15),

        new THREE.Vector3(0, 2.45, 20.15),
      ]),
    [],
  );

  const contactCameraCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        // Project wall framing
        new THREE.Vector3(0, 2.28, 13.75),

        // move toward right side
        new THREE.Vector3(2.1, 2.3, 13.8),

        new THREE.Vector3(3.9, 2.32, 14.4),

        // follow wall toward exit opening
        new THREE.Vector3(4.75, 2.34, 16.2),

        new THREE.Vector3(5.05, 2.34, 18.2),

        // pass through doorway
        new THREE.Vector3(5.8, 2.35, 19.2),

        // enter screening room
        new THREE.Vector3(6.8, 2.36, 20.05),

        new THREE.Vector3(7.7, 2.36, 20.15),

        // final end-credits framing
        new THREE.Vector3(8.35, 2.35, 20.15),
      ]),
    [],
  );

  const contactTargetCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.45, 20.15),

        new THREE.Vector3(2.4, 2.45, 20.15),

        new THREE.Vector3(4.1, 2.4, 20),

        new THREE.Vector3(5.3, 2.4, 19.4),

        new THREE.Vector3(6.3, 2.4, 19.5),

        new THREE.Vector3(8, 2.45, 20.05),

        new THREE.Vector3(10.5, 2.5, 20.15),

        new THREE.Vector3(12.2, 2.55, 20.15),

        new THREE.Vector3(13.7, 2.62, 20.15),
      ]),
    [],
  );

  useFrame(() => {
    const viewportHeight =
      window.innerHeight;

    const scroll =
      window.scrollY /
      viewportHeight;

    smoothedScroll.current =
      THREE.MathUtils.lerp(
        smoothedScroll.current,
        scroll,
        0.045,
      );

    const s =
      smoothedScroll.current;

    let position: THREE.Vector3;
    let target: THREE.Vector3;

    /* HERO → SKILLS */

    if (s <= 1) {
      const raw =
        THREE.MathUtils.clamp(
          (s - 0.08) / 0.84,
          0,
          1,
        );

      const p =
        smoothStep(raw);

      position =
        skillsCameraCurve.getPointAt(p);

      target =
        skillsTargetCurve.getPointAt(p);
    }

    /* SKILLS → EXPERIENCE */

    else if (s <= 2) {
      const raw =
        THREE.MathUtils.clamp(
          (s - 1.04) / 0.92,
          0,
          1,
        );

      const p =
        smoothStep(raw);

      position =
        experienceCameraCurve.getPointAt(p);

      target =
        experienceTargetCurve.getPointAt(p);
    }

    /* EXPERIENCE → PROJECTS */

    else if (s <= 3) {
      const raw =
        THREE.MathUtils.clamp(
          (s - 2.03) / 0.94,
          0,
          1,
        );

      const p =
        smoothStep(raw);

      position =
        projectsCameraCurve.getPointAt(p);

      target =
        projectsTargetCurve.getPointAt(p);
    }

    /* PROJECTS → CONTACT */

    else {
      const raw =
        THREE.MathUtils.clamp(
          (s - 3.03) / 0.94,
          0,
          1,
        );

      const p =
        smoothStep(raw);

      position =
        contactCameraCurve.getPointAt(p);

      target =
        contactTargetCurve.getPointAt(p);
    }

    let pointerStrength = 1;

    if (s >= 1.8) {
      pointerStrength = 0.3;
    }

    if (s >= 3) {
      pointerStrength = 0.12;
    }

    position.x +=
      pointer.x *
      0.1 *
      pointerStrength;

    position.y +=
      pointer.y *
      0.05 *
      pointerStrength;

    camera.position.lerp(
      position,
      0.12,
    );

    lookAt.current.lerp(
      target,
      0.1,
    );

    camera.lookAt(
      lookAt.current,
    );
  });

  return null;
}

/* ========================================
   DARK WOOD BACKDROP
======================================== */

function BackdropWall() {
  const slats = Array.from(
    { length: 16 },
    (_, i) => i,
  );

  return (
    <group
      position={[0.6, 2.4, -4.4]}
    >
      <mesh receiveShadow>
        <boxGeometry args={[11.5, 5.8, 0.18]} />

        <meshStandardMaterial
          color="#0d0908"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {slats.map((i) => {
        const x =
          -5.1 +
          i * 0.68;

        return (
          <mesh
            key={i}
            position={[x, 0, 0.11]}
            receiveShadow
          >
            <boxGeometry args={[0.08, 5.8, 0.04]} />

            <meshStandardMaterial
              color="#16100d"
              roughness={0.92}
              metalness={0.01}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ========================================
   HERO / SKILLS LIGHTING
======================================== */

function Lighting() {
  const keyLight =
    useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (!keyLight.current) {
      return;
    }

    keyLight.current.intensity =
      56 +
      Math.sin(
        clock.elapsedTime *
          0.45,
      ) *
        1.2;
  });

  return (
    <>
      <ambientLight intensity={0.12} />

      {/* CHAIR */}

      <spotLight
        ref={keyLight}
        position={[0.45, 5.2, 3.1]}
        angle={0.42}
        penumbra={0.95}
        intensity={56}
        color="#ffd7b8"
        castShadow
      />

      <spotLight
        position={[-2.8, 3.6, 1.8]}
        angle={0.55}
        penumbra={1}
        intensity={8}
        color="#7f93b8"
      />

      <pointLight
        position={[0.2, 1.3, 2.1]}
        intensity={3.2}
        color="#ff875f"
      />

      <spotLight
        position={[0.6, 4.2, -1.6]}
        angle={0.85}
        penumbra={1}
        intensity={7}
        color="#5b473a"
      />

      {/* SKILLS */}

      <spotLight
        position={[5.15, 6.4, 3]}
        angle={0.52}
        penumbra={0.92}
        intensity={34}
        color="#dce8ff"
        castShadow
      />

      <pointLight
        position={[4.3, 2.35, 1]}
        intensity={7}
        color="#526dff"
      />

      <pointLight
        position={[6.5, 1.65, 0]}
        intensity={6.5}
        color="#ff563d"
      />
    </>
  );
}

/* ========================================
   SOUNDSTAGE
======================================== */

function SoundStage() {
  return (
    <>
      <color
        attach="background"
        args={["#040404"]}
      />

      <fog
        attach="fog"
        args={["#040404", 9, 42]}
      />

      <Lighting />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[4, -0.58, 8]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />

        <meshStandardMaterial
          color="#070707"
          roughness={0.96}
          metalness={0.03}
        />
      </mesh>

      <BackdropWall />

      {/* HERO */}

      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry
          args={[2.8, 3.05, 0.16, 64]}
        />

        <meshStandardMaterial
          color="#111111"
          roughness={0.68}
          metalness={0.12}
        />
      </mesh>

      <Float
        speed={0.65}
        rotationIntensity={0.03}
        floatIntensity={0.04}
      >
        <DirectorChair
          position={[0.5, -0.42, 0]}
          rotation={[0, -0.18, 0]}
          scale={1.18}
        />
      </Float>

      <ContactShadows
        position={[0, -0.4, 0]}
        opacity={0.7}
        scale={7}
        blur={2.6}
        far={5}
      />

      {/* SKILLS */}

      <SkillsSet />

      <ContactShadows
        position={[5.15, -0.4, -1]}
        opacity={0.62}
        scale={7.4}
        blur={2.4}
        far={5}
      />

      {/* EXPERIENCE + PROJECTS */}

      <StoryboardRoom />

      {/* FINAL SCREENING ROOM */}

      <ContactStage />

      <Environment preset="warehouse" />

      <CameraRig />
    </>
  );
}

/* ========================================
   CANVAS
======================================== */

export default function StudioScene() {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{
          position: [0, 2.05, 6.3],
          fov: 38,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <SoundStage />
        </Suspense>
      </Canvas>
    </div>
  );
}