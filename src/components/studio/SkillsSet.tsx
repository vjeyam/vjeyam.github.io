import TravelMonitor from "./TravelMonitor";

export default function SkillsSet() {
  const darkMetal = "#161616";
  const black = "#090909";
  const screen = "#111318";

  return (
    <group position={[7, -0.42, -1]}>
      {/* floor platform */}
      <mesh position={[0, -0.48, 0]}>
        <cylinderGeometry args={[3.2, 3.45, 0.14, 64]} />
        <meshStandardMaterial
          color="#0d0d0d"
          roughness={0.7}
          metalness={0.18}
        />
      </mesh>

      {/* DESK */}
      <mesh position={[0, 0.78, 0]}>
        <boxGeometry args={[3.6, 0.14, 1.55]} />
        <meshStandardMaterial
          color="#181818"
          roughness={0.58}
          metalness={0.18}
        />
      </mesh>

      {/* desk legs */}
      <mesh position={[-1.45, 0.1, 0]}>
        <boxGeometry args={[0.12, 1.4, 1.1]} />
        <meshStandardMaterial color={darkMetal} roughness={0.5} />
      </mesh>

      <mesh position={[1.45, 0.1, 0]}>
        <boxGeometry args={[0.12, 1.4, 1.1]} />
        <meshStandardMaterial color={darkMetal} roughness={0.5} />
      </mesh>

      {/* CENTER MONITOR */}
      <mesh position={[0, 1.75, -0.36]}>
        <boxGeometry args={[1.85, 1.06, 0.1]} />
        <meshStandardMaterial
          color={black}
          roughness={0.3}
          metalness={0.35}
        />
      </mesh>

      <mesh position={[0, 1.75, -0.3]}>
        <planeGeometry args={[1.62, 0.82]} />
        <meshStandardMaterial
          color={screen}
          emissive="#ff563d"
          emissiveIntensity={0.25}
          toneMapped={false}
        />
      </mesh>

      {/* monitor stand */}
      <mesh position={[0, 1.1, -0.35]}>
        <boxGeometry args={[0.08, 0.45, 0.08]} />
        <meshStandardMaterial color={darkMetal} />
      </mesh>

      <mesh position={[0, 0.91, -0.34]}>
        <boxGeometry args={[0.68, 0.05, 0.38]} />
        <meshStandardMaterial color={darkMetal} />
      </mesh>

      {/* LEFT MONITOR */}
      <group rotation={[0, 0.18, 0]}>
        {/* physical monitor body */}
        <mesh position={[-1.36, 1.63, -0.2]}>
          <boxGeometry args={[1.25, 0.82, 0.1]} />
          <meshStandardMaterial color={black} />
        </mesh>

        {/* interactive screen */}
        <TravelMonitor
          position={[-1.36, 1.63, -0.12]}
        />
      </group>

      {/* RIGHT MONITOR */}
      <group rotation={[0, -0.18, 0]}>
        <mesh position={[1.36, 1.63, -0.2]}>
          <boxGeometry args={[1.25, 0.82, 0.1]} />
          <meshStandardMaterial color={black} />
        </mesh>

        <mesh position={[1.36, 1.63, -0.14]}>
          <planeGeometry args={[1.07, 0.64]} />
          <meshStandardMaterial
            color="#11151b"
            emissive="#ff875f"
            emissiveIntensity={0.22}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* keyboard */}
      <mesh
        position={[0, 0.9, 0.38]}
        rotation={[-0.08, 0, 0]}
      >
        <boxGeometry args={[1.25, 0.05, 0.44]} />
        <meshStandardMaterial
          color="#101010"
          roughness={0.45}
          metalness={0.25}
        />
      </mesh>

      {/* mouse */}
      <mesh position={[0.88, 0.91, 0.4]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial
          color="#141414"
          roughness={0.45}
        />
      </mesh>

      {/* little coffee / ramen cup easter egg */}
      <group position={[-1.2, 1.05, 0.38]}>
        <mesh>
          <cylinderGeometry args={[0.17, 0.14, 0.34, 32]} />
          <meshStandardMaterial
            color="#e7e2d9"
            roughness={0.7}
          />
        </mesh>

        <mesh position={[0, 0.18, 0]}>
          <torusGeometry args={[0.11, 0.018, 12, 32]} />
          <meshStandardMaterial color="#ff563d" />
        </mesh>
      </group>

      {/* subtle server tower */}
      <mesh position={[2.15, 0.25, -0.2]}>
        <boxGeometry args={[0.75, 1.65, 1.05]} />
        <meshStandardMaterial
          color="#0d0d0d"
          roughness={0.35}
          metalness={0.42}
        />
      </mesh>

      {/* server lights */}
      {[0.62, 0.42, 0.22, 0.02, -0.18].map((y) => (
        <mesh
          key={y}
          position={[1.79, y, 0.25]}
        >
          <sphereGeometry args={[0.018, 12, 12]} />
          <meshStandardMaterial
            color="#ff563d"
            emissive="#ff563d"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}