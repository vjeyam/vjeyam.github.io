export type Station = {
  id: string
  title: string
  to?: string
  x: number
  y: number
  accent?: string
  desc?: string
  onClick?: () => void
  download?: boolean
}

export const STATIONS: Station[] = [
  { id: "projects", title: "Projects", to: "/projects", x: -300, y: -80, accent: "text-pink-400", desc: "AI & ML Experiments" },
  { id: "contact", title: "Contact", to: "/contact", x: 300, y: -80, accent: "text-blue-400", desc: "Get in touch" },
  { id: "resume", title: "Resume", to: "/resume", x: 0, y: 200, accent: "text-cyan-400", desc: "Skills & Experience" },
]

export const FLOATING: Station[] = [
  { id: "download-resume", title: "Download Resume", x: -240, y: -280, accent: "text-purple-400", desc: "Get my latest Resume", download: true },
  { id: "email-me", title: "Email Me", x: 240, y: -280, accent: "text-emerald-400", desc: "Let's connect", onClick: () => (window.location.href = "mailto:jeyamvishal5@gmail.com") },
]
