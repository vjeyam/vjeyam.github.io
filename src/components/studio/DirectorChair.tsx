import {
  Html,
  RoundedBox,
} from "@react-three/drei";

import type { ThreeElements } from "@react-three/fiber";

import {
  useEffect,
  useMemo,
} from "react";

import * as THREE from "three";

import "../../styles/DirectorChair.css";

type DirectorChairProps = ThreeElements["group"];

/* Creates a tiny procedural woven texture */
function useFabricTexture() {
  const texture = useMemo(() => {
    const size = 256;

    const canvas = document.createElement("canvas");

    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");

    if (!context) {
      return new THREE.Texture();
    }

    context.fillStyle = "#777777";
    context.fillRect(0, 0, size, size);

    /* Vertical threads */
    for (let x = 0; x < size; x += 4) {
      context.fillStyle =
        x % 8 === 0
          ? "#989898"
          : "#666666";

      context.fillRect(x, 0, 1, size);
    }

    /* Horizontal threads */
    for (let y = 0; y < size; y += 4) {
      context.fillStyle =
        y % 8 === 0
          ? "#8c8c8c"
          : "#606060";

      context.fillRect(0, y, size, 1);
    }

    const image = context.getImageData(
      0,
      0,
      size,
      size,
    );

    for (
      let i = 0;
      i < image.data.length;
      i += 4
    ) {
      const noise =
        Math.floor(Math.random() * 14) - 7;

      image.data[i] += noise;
      image.data[i + 1] += noise;
      image.data[i + 2] += noise;
    }

    context.putImageData(image, 0, 0);

    const fabricTexture =
      new THREE.CanvasTexture(canvas);

    fabricTexture.wrapS =
      THREE.RepeatWrapping;

    fabricTexture.wrapT =
      THREE.RepeatWrapping;

    fabricTexture.repeat.set(7, 5);

    fabricTexture.anisotropy = 8;

    return fabricTexture;
  }, []);

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  return texture;
}

type CushionProps = {
  fabricTexture: THREE.Texture;
};

function ChairCushion({
  fabricTexture,
}: CushionProps) {

  return (
    <group
      position={[0, 1.11, 0.22]}
      rotation={[-0.02, 0, 0]}
    >
      {/* =========================
          MAIN CUSHION BODY
      ========================== */}

      <RoundedBox
        args={[1.42, 0.18, 0.96]}
        radius={0.1}
        smoothness={8}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#050505"
          roughness={0.96}
          metalness={0}
          bumpMap={fabricTexture}
          bumpScale={0.006}
          sheen={0.18}
          sheenColor="#1a1a1a"
          sheenRoughness={0.95}
        />
      </RoundedBox>
    </group>
  );
}

export default function DirectorChair(
  props: DirectorChairProps,
) {
  const frame = "#1a1816";
  const fabric = "#080808";
  const hardware = "#3a3530";

  const fabricTexture =
    useFabricTexture();

  return (
    <group {...props}>
      {/* =====================================================
          LEGS
      ====================================================== */}

      <mesh
        position={[-0.58, 0.34, -0.12]}
        rotation={[0.03, 0, -0.16]}
        castShadow
      >
        <boxGeometry
          args={[0.085, 1.72, 0.095]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.55}
        />
      </mesh>

      <mesh
        position={[0.58, 0.34, -0.12]}
        rotation={[0.03, 0, 0.16]}
        castShadow
      >
        <boxGeometry
          args={[0.085, 1.72, 0.095]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.55}
        />
      </mesh>

      <mesh
        position={[-0.58, 0.27, 0.56]}
        rotation={[0.1, 0, 0.14]}
        castShadow
      >
        <boxGeometry
          args={[0.085, 1.55, 0.095]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.55}
        />
      </mesh>

      <mesh
        position={[0.58, 0.27, 0.56]}
        rotation={[0.1, 0, -0.14]}
        castShadow
      >
        <boxGeometry
          args={[0.085, 1.55, 0.095]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.55}
        />
      </mesh>

      {/* =====================================================
          CROSS BRACES
      ====================================================== */}

      <mesh
        position={[0, 0.38, 0.22]}
        rotation={[
          0,
          0,
          Math.PI / 4.3,
        ]}
        castShadow
      >
        <boxGeometry
          args={[0.05, 1.62, 0.05]}
        />

        <meshStandardMaterial
          color={hardware}
          roughness={0.45}
          metalness={0.12}
        />
      </mesh>

      <mesh
        position={[0, 0.38, 0.22]}
        rotation={[
          0,
          0,
          -Math.PI / 4.3,
        ]}
        castShadow
      >
        <boxGeometry
          args={[0.05, 1.62, 0.05]}
        />

        <meshStandardMaterial
          color={hardware}
          roughness={0.45}
          metalness={0.12}
        />
      </mesh>

      {/* =====================================================
          SEAT FRAME
      ====================================================== */}

      <mesh
        position={[0, 1.03, 0.22]}
        rotation={[-0.02, 0, 0]}
        castShadow
      >
        <boxGeometry
          args={[1.48, 0.09, 1.02]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.72}
        />
      </mesh>

      {/* =====================================================
          BLACK TUFTED CUSHION
      ====================================================== */}

      <ChairCushion
        fabricTexture={fabricTexture}
      />

      {/* =====================================================
          BACK POSTS
      ====================================================== */}

      <mesh
        position={[-0.69, 1.49, -0.22]}
        castShadow
      >
        <boxGeometry
          args={[0.09, 0.84, 0.09]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      <mesh
        position={[0.69, 1.49, -0.22]}
        castShadow
      >
        <boxGeometry
          args={[0.09, 0.84, 0.09]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          BACK FABRIC
      ====================================================== */}

      <mesh
        position={[0, 1.7, -0.22]}
        castShadow
      >
        <boxGeometry
          args={[1.35, 0.48, 0.06]}
        />

        <meshPhysicalMaterial
          color={fabric}
          roughness={0.92}
          bumpMap={fabricTexture}
          bumpScale={0.012}
          sheen={0.3}
          sheenColor="#202020"
          sheenRoughness={0.9}
        />
      </mesh>

      <Html
        transform
        position={[
          0,
          1.7,
          -0.185,
        ]}
        distanceFactor={1.5}
        center
        style={{
          pointerEvents: "none",
        }}
      >
        <div className="chair-name">
          <span>VISHAL</span>
          <strong>JEYAM</strong>
        </div>
      </Html>

      {/* =====================================================
          LEFT ARMREST
      ====================================================== */}

      <mesh
        position={[-0.72, 1.51, 0.31]}
        castShadow
      >
        <boxGeometry
          args={[0.14, 0.09, 0.88]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.48}
        />
      </mesh>

      <mesh
        position={[-0.72, 1.29, -0.05]}
        castShadow
      >
        <boxGeometry
          args={[0.07, 0.4, 0.07]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      <mesh
        position={[-0.72, 1.29, 0.67]}
        castShadow
      >
        <boxGeometry
          args={[0.07, 0.4, 0.07]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          RIGHT ARMREST
      ====================================================== */}

      <mesh
        position={[0.72, 1.51, 0.31]}
        castShadow
      >
        <boxGeometry
          args={[0.14, 0.09, 0.88]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.48}
        />
      </mesh>

      <mesh
        position={[0.72, 1.29, -0.05]}
        castShadow
      >
        <boxGeometry
          args={[0.07, 0.4, 0.07]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      <mesh
        position={[0.72, 1.29, 0.67]}
        castShadow
      >
        <boxGeometry
          args={[0.07, 0.4, 0.07]}
        />

        <meshStandardMaterial
          color={frame}
          roughness={0.5}
        />
      </mesh>

      {/* =====================================================
          HINGES
      ====================================================== */}

      <mesh
        position={[-0.72, 1.08, 0.31]}
        castShadow
      >
        <sphereGeometry
          args={[0.055, 16, 16]}
        />

        <meshStandardMaterial
          color={hardware}
          roughness={0.35}
          metalness={0.35}
        />
      </mesh>

      <mesh
        position={[0.72, 1.08, 0.31]}
        castShadow
      >
        <sphereGeometry
          args={[0.055, 16, 16]}
        />

        <meshStandardMaterial
          color={hardware}
          roughness={0.35}
          metalness={0.35}
        />
      </mesh>

      {/* =====================================================
          FOOTREST
      ====================================================== */}

      <mesh
        position={[0, 0.43, 0.74]}
        castShadow
      >
        <boxGeometry
          args={[1.08, 0.055, 0.055]}
        />

        <meshStandardMaterial
          color={hardware}
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>
    </group>
  );
}