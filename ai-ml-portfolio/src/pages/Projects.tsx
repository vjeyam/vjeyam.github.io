import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <div>
        <h2 className="text-3xl font-bold text-accent mb-2">Projects</h2>
        <p className="text-neutral-400 text-sm">
          A collection of my AI/ML research and applied work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </motion.section>
  )
}
