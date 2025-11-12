import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto space-y-6 text-neutral-300"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-accent mb-3">
          Hey, I’m Vishal 👋
        </h1>
        <p className="text-lg text-neutral-400">
          I’m an aspiring <span className="text-accent">AI/ML Engineer</span> passionate about
          research and real-world applications of deep learning, data analysis,
          and natural language processing.
        </p>
      </div>

      <div className="space-y-4 leading-relaxed">
        <p>
          My background includes research experience working with machine learning models,
          data pipelines, and AI experimentation. I enjoy bridging the gap between
          research and production—turning complex algorithms into practical tools.
        </p>

        <p>
          I’ve worked on LLM fine-tuning, NLP pipelines, and real-time inference systems.
          When I’m not building models, I love exploring AI ethics, reading papers, and
          experimenting with new architectures.
        </p>
      </div>

      <div className="pt-4 flex gap-4 justify-center">
        <a
          href="/resume"
          className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
        >
          View Resume
        </a>
        <a
          href="/projects"
          className="px-4 py-2 bg-accent text-black rounded-lg hover:opacity-90 transition"
        >
          See Projects
        </a>
      </div>
    </motion.section>
  )
}