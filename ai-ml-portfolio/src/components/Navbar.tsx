import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { cn } from "../utils/cn.ts" // optional utility for class merging

export default function Navbar() {
  const links = [
    { label: "About Me", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-accent font-semibold text-lg tracking-tight">
          Vishal Jeyam
        </Link>

        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "hover:text-accent transition",
                  isActive ? "text-accent" : "text-neutral-300"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
