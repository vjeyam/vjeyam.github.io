import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { STATIONS, FLOATING } from "./stations"
import { StationCard, FloatingCard } from "./helpers.tsx"
import Waves from "./waves"
import SocialLinks from "./SocialLinks"

export default function WorldMap() {
  const constraintsRef = useRef<HTMLDivElement | null>(null)
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const bgX = useTransform(dragX, (v) => v * 0.2)
  const bgY = useTransform(dragY, (v) => v * 0.2)
  const [_, setHint] = useState(true)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
      <div ref={constraintsRef} className="relative h-[680px] -mb-20">
        {/* Background Grid */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-[-20%] opacity-50 pointer-events-none z-0"
        >
          <div className="w-full h-full bg-[radial-gradient(40vw_40vw_at_70%_-10%,rgba(96,165,250,.10),transparent_60%),radial-gradient(35vw_35vw_at_0%_100%,rgba(147,51,234,.08),transparent_60%),repeating-linear-gradient(90deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_80px),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_80px)]" />
        </motion.div>

        {/* Waves */}
        <Waves bgX={bgX} bgY={bgY} />

        {/* Center Hub */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="card w-[220px] h-[120px] flex items-center justify-center text-center">
            <div>
              <div className="text-sm text-neutral-400">Welcome to</div>
              <div className="text-xl font-bold">
                <span className="text-accent">Vishal's</span> AI Lab
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                Explore my world of AI & ML
              </div>
            </div>
          </div>
        </div>

        {/* Stations + Floating */}
        {STATIONS.map((s) => <StationCard key={s.id} s={s} />)}
        {FLOATING.map((s) => <FloatingCard key={s.id} s={s} />)}

        {/* Drag Layer */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          onDragStart={() => {
            setHint(false)
            setIsDragging(true)
          }}
          onDragEnd={() => setIsDragging(false)}
          style={{
            x: dragX,
            y: dragY,
            pointerEvents: isDragging ? "auto" : "none",
          }}
          className="absolute inset-0 z-50"
        />
      </div>

      {/* Persistent Links */}
      <SocialLinks />
    </div>
  )
}