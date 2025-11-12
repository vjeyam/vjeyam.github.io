import type { Project } from "../types"
import Badge from "./Badge"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      className="card p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <Badge
          className={
            p.kind === "research"
              ? "text-blue-300 border-blue-400/30"
              : "text-green-300 border-green-400/30"
          }
        >
          {p.kind === "research" ? "Research" : "Applied"}
        </Badge>
      </div>

      <p className="text-sm text-neutral-300">{p.summary}</p>
      <ul className="text-sm list-disc pl-5 space-y-1 text-neutral-300">
        {p.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {p.tech.map((t, i) => (
          <Badge key={i}>{t}</Badge>
        ))}
      </div>

      {p.links && (
        <div className="flex gap-3 pt-1">
          {p.links.map((l, i) => (
            <a
              key={i}
              className="accent inline-flex items-center gap-1 text-sm"
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  )
}
