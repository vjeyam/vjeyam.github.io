export type Project = {
  kind: "research" | "applied"
  title: string
  summary: string
  highlights: string[]
  tech: string[]
  links?: { label: string; href: string }[]
}
