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

function CameraRig() {
  const { camera, pointer } = useThree();

  const progress = useRef(0);

  const cameraCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.05, 6.3),

        // approach chair
        new THREE.Vector3(0.3, 2.05, 4.8),

        // move past right side of chair
        new THREE.Vector3(2.2, 2.15, 2.9),

        // travel across soundstage
        new THREE.Vector3(4.8, 2.3, 3.2),

        // settle at skills workstation
        new THREE.Vector3(7, 2.3, 4.7),
      ]),
    [],
  );

  const targetCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.25, 0),
        new THREE.Vector3(0.4, 1.3, 0),
        new THREE.Vector3(2.4, 1.25, -0.5),
        new THREE.Vector3(5, 1.35, -0.9),
        new THREE.Vector3(7, 1.35, -1),
      ]),
    [],
  );

  const lookAt = useRef(new THREE.Vector3());

  useFrame(() => {
    const viewportHeight = window.innerHeight;

    const scroll = window.scrollY / viewportHeight;

    const rawProgress = THREE.MathUtils.clamp(
      (scroll - 0.08) / 0.84,
      0,
      1,
    );

    // Smoothly chase the actual scroll position
    progress.current = THREE.MathUtils.lerp(
      progress.current,
      rawProgress,
      0.045,
    );

    /*
      smoothstep makes the beginning/end of
      the camera movement feel less robotic
    */
    const p =
      progress.current *
      progress.current *
      (3 - 2 * progress.current);

    const position = cameraCurve.getPointAt(p);
    const target = targetCurve.getPointAt(p);

    /*
      Very subtle mouse movement.

      Notice this is added AFTER scroll positioning,
      so the pointer never controls the actual tour.
    */
    position.x += pointer.x * 0.12;
    position.y += pointer.y * 0.06;

    camera.position.lerp(position, 0.12);

    lookAt.current.lerp(target, 0.1);

    camera.lookAt(lookAt.current);
  });

  return null;
}

function BackdropWall() {
  const slats = Array.from({ length: 16 }, (_, i) => i);

  return (
    <group position={[0.6, 2.4, -4.4]}>
      {/* main dark wood wall */}
      <mesh receiveShadow>
        <boxGeometry args={[11.5, 5.8, 0.18]} />
        <meshStandardMaterial
          color="#0d0908"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* subtle vertical slats */}
      {slats.map((i) => {
        const x = -5.1 + i * 0.68;

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

function Lighting() {
  const keyLight = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (!keyLight.current) return;

    keyLight.current.intensity =
      56 + Math.sin(clock.elapsedTime * 0.45) * 1.2;
  });

  return (
    <>
      {/* very low ambient so nothing is pitch dead */}
      <ambientLight intensity={0.12} />

      {/* MAIN HERO LIGHT
          above the camera / slightly in front of chair */}
      <spotLight
        ref={keyLight}
        position={[0.45, 5.2, 3.1]}
        angle={0.42}
        penumbra={0.95}
        intensity={56}
        color="#ffd7b8"
        castShadow
      />

      {/* very soft cool fill from left side */}
      <spotLight
        position={[-2.8, 3.6, 1.8]}
        angle={0.55}
        penumbra={1}
        intensity={8}
        color="#7f93b8"
      />

      {/* subtle warm bounce near the floor/front */}
      <pointLight
        position={[0.2, 1.3, 2.1]}
        intensity={3.2}
        color="#ff875f"
      />

      {/* gentle background separation / wall graze */}
      <spotLight
        position={[0.6, 4.2, -1.6]}
        angle={0.85}
        penumbra={1}
        intensity={7}
        color="#5b473a"
      />

      {/* skills area lights — keep these for later section */}
      <spotLight
        position={[7, 6.5, 3]}
        angle={0.55}
        penumbra={0.9}
        intensity={38}
        color="#dce8ff"
        castShadow
      />

      <pointLight
        position={[6, 2.4, 1]}
        intensity={8}
        color="#526dff"
      />

      <pointLight
        position={[8.5, 1.7, 0]}
        intensity={7}
        color="#ff563d"
      />
    </>
  );
}

function SoundStage() {
  return (
    <>
      <color attach="background" args={["#040404"]} />
      <fog attach="fog" args={["#040404", 8, 22]} />

      <ambientLight intensity={0.2} />

      <Lighting />

      {/* giant studio floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[3.5, -0.58, -1]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />

        <meshStandardMaterial
          color="#070707"
          roughness={0.96}
          metalness={0.03}
        />
      </mesh>

      {/* back soundstage wall */}
      <mesh position={[4, 3, -6]}>
        <planeGeometry args={[30, 10]} />

        <meshStandardMaterial
          color="#070707"
          roughness={1}
        />
      </mesh>

      <BackdropWall />

      {/* HERO PLATFORM */}
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

      {/* SECOND SET */}
      <SkillsSet />

      <ContactShadows
        position={[7, -0.4, -1]}
        opacity={0.65}
        scale={8}
        blur={2.5}
        far={5}
      />

      <Environment preset="warehouse" />

      <CameraRig />
    </>
  );
}

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