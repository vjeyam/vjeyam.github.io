interface Props {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  image?: string;
}

export default function ProjectCard({ title, desc, tech, link, image }: Props) {
  return (
    <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900 hover:border-accent transition">
      
      {image && <img src={image} className="rounded-lg mb-4" />}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-neutral-400 mt-2">{desc}</p>

      <p className="text-xs text-neutral-500 mt-3">{tech.join(" · ")}</p>

      <a href={link} className="text-accent text-sm mt-4 inline-block">
        View Project →
      </a>
    </div>
  )
}
