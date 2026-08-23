export default function ProductionStage() {
  return (
    <group position={[0, -0.55, -9]}>
      {/* stage floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[8.4, 0.12, 5.4]} />

        <meshStandardMaterial
          color="#080808"
          roughness={0.84}
          metalness={0.08}
        />
      </mesh>

      {/* virtual production LED wall */}
      <mesh position={[0, 2.7, -2.35]}>
        <boxGeometry args={[7.4, 4.5, 0.2]} />

        <meshStandardMaterial
          color="#080808"
          roughness={0.45}
        />
      </mesh>

      <mesh position={[0, 2.7, -2.23]}>
        <planeGeometry args={[7.05, 4.15]} />

        <meshStandardMaterial
          color="#23100c"
          emissive="#ff6038"
          emissiveIntensity={0.17}
          toneMapped={false}
        />
      </mesh>

      {/* camera rig */}
      <group position={[0.8, 0.5, 0.7]}>
        <mesh position={[0, 0.68, 0]}>
          <boxGeometry args={[0.08, 1.35, 0.08]} />
          <meshStandardMaterial color="#111111" metalness={0.35} />
        </mesh>

        <mesh
          position={[-0.32, 0.25, 0]}
          rotation={[0, 0, -0.38]}
        >
          <boxGeometry args={[0.06, 0.9, 0.06]} />
          <meshStandardMaterial color="#151515" />
        </mesh>

        <mesh
          position={[0.32, 0.25, 0]}
          rotation={[0, 0, 0.38]}
        >
          <boxGeometry args={[0.06, 0.9, 0.06]} />
          <meshStandardMaterial color="#151515" />
        </mesh>

        <mesh position={[0, 1.48, 0]}>
          <boxGeometry args={[0.7, 0.44, 0.52]} />

          <meshStandardMaterial
            color="#070707"
            roughness={0.4}
            metalness={0.4}
          />
        </mesh>

        <mesh
          position={[0, 1.48, -0.39]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.17, 0.21, 0.34, 24]} />

          <meshStandardMaterial
            color="#030303"
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      </group>

      {/* dolly rails */}
      <mesh position={[0, 0.1, 0.65]}>
        <boxGeometry args={[4.5, 0.035, 0.06]} />
        <meshStandardMaterial color="#202020" metalness={0.4} />
      </mesh>

      <mesh position={[0, 0.1, 1.03]}>
        <boxGeometry args={[4.5, 0.035, 0.06]} />
        <meshStandardMaterial color="#202020" metalness={0.4} />
      </mesh>

      {/* subdued practical lighting */}
      <spotLight
        position={[-3, 5, 1]}
        angle={0.4}
        penumbra={1}
        intensity={18}
        color="#ffd1aa"
      />

      <spotLight
        position={[3, 4.5, 0]}
        angle={0.45}
        penumbra={1}
        intensity={15}
        color="#ff7852"
      />
    </group>
  );
}