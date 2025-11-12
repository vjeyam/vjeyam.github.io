import { Link, NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const link = 'px-3 py-1.5 rounded-xl hover:bg-neutral-800 transition'

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-xl">
          {'{username}'} <span className="text-accent">AI/ML</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1 text-sm">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/resume" className={link}>Resume</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a className="p-2 rounded-xl hover:bg-neutral-800" href="https://github.com/{username}" aria-label="GitHub"><Github size={18}/></a>
          <a className="p-2 rounded-xl hover:bg-neutral-800" href="https://www.linkedin.com/in/{username}" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a className="p-2 rounded-xl hover:bg-neutral-800" href="mailto:you@example.com" aria-label="Email"><Mail size={18}/></a>
        </div>
      </div>
    </header>
  )
}
