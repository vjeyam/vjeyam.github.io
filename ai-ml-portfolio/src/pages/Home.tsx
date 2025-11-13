import { motion } from "framer-motion"
import WorldMap from "../components/WorldMap"

export default function Home() {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto space-y-3"
      >
        <h1 className="text-4xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-accent">Vishal</span> — I build intelligent systems.
        </h1>
        <p className="text-neutral-300">
          Research-driven ML + practical, real-world apps.  
          Explore my <span className="text-neutral-200 font-semibold">AI Lab Map</span> below.
        </p>
      </motion.div>

      <WorldMap />
    </section>
  )
}
