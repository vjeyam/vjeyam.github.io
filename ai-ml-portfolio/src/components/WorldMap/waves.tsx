import { motion, MotionValue } from "framer-motion"

export default function Waves({ bgX, bgY }: { bgX: MotionValue<number>, bgY: MotionValue<number> }) {
  return (
    <motion.svg
      style={{ x: bgX, y: bgY }}
      viewBox="-600 -400 1200 850"
      className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#639ef1ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <motion.path
        d="M -600 -160 Q -300 -200, 0 -140 T 600 -120"
        stroke="url(#wave-gradient)"
        strokeWidth={2.0}
        fill="none"
        opacity={0.45}
        style={{ filter: "drop-shadow(0 0 12px rgba(139,92,246,0.4))" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M -600 230 Q -300 180, 0 240 T 600 220"
        stroke="url(#wave-gradient)"
        strokeWidth={2.0}
        fill="none"
        opacity={0.45}
        style={{ filter: "drop-shadow(0 0 10px rgba(99,102,241,0.3))" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </motion.svg>
  )
}