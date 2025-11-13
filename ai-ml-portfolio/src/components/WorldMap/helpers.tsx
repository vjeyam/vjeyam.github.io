import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Station } from "./stations"

// Utility: motion settings for all cards
export const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
} as const

// Render Station Card (expects stations with a link target)
export function StationCard({ s }: { s: Station }) {
  return (
    <motion.div
      className="absolute z-40"
      style={{
        left: `calc(50% + ${s.x}px - 110px)`,
        top: `calc(50% + ${s.y}px - 50px)`,
      }}
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={cardAnimation.transition}
    >
      <Link to={s.to ?? "#"} className="group block hover:scale-[1.03] transition-transform">
        <div className="card w-[220px] h-[100px] p-3 border border-neutral-800 bg-neutral-950 hover:shadow-glow">
          <div className={`text-sm font-semibold ${s.accent ?? ""}`}>{s.title}</div>
          <div className="text-xs text-neutral-400 mt-1">{s.desc}</div>
          <div className="mt-2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition">
            Open →
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Render Floating Card (download or onClick)
export function FloatingCard({ s }: { s: Station }) {
  const CardInner = (
    <div className="card w-[220px] h-[100px] p-3 border border-neutral-800 bg-neutral-950 hover:shadow-glow">
      <div className={`text-sm font-semibold ${s.accent ?? ""}`}>{s.title}</div>
      <div className="text-xs text-neutral-400 mt-1">{s.desc}</div>
      <div className="mt-2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition">
        {s.download ? "Download ↓" : "Click →"}
      </div>
    </div>
  )

  return (
    <motion.div
      className="absolute z-40"
      style={{
        left: `calc(50% + ${s.x}px - 110px)`,
        top: `calc(50% + ${s.y}px - 50px)`,
      }}
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={cardAnimation.transition}
    >
      {s.download ? (
        <a href="/Resume.pdf" download className="group block hover:scale-[1.03] transition-transform">
          {CardInner}
        </a>
      ) : (
        <button onClick={s.onClick} className="group block hover:scale-[1.03] transition-transform">
          {CardInner}
        </button>
      )}
    </motion.div>
  )
}
