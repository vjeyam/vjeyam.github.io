type ProjectLink = {
  label: string;
  href: string;
};

interface Props {
  title: string;
  desc: string;
  tech: string[];
  links: ProjectLink[];
  result?: string;
  image?: string;
}

export default function ProjectCard({ title, desc, tech, links, result, image }: Props) {
  return (
    <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900 hover:border-accent transition">
      {image && <img src={image} className="rounded-lg mb-4" alt={`${title} preview`} />}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold">{title}</h3>

        {result && (
          <span className="text-xs px-2 py-1 rounded-md border border-neutral-700 text-neutral-300 whitespace-nowrap">
            {result}
          </span>
        )}
      </div>

      <p className="text-neutral-400 mt-2">{desc}</p>

      <p className="text-xs text-neutral-500 mt-3">{tech.join(" · ")}</p>

      <div className="mt-4 flex gap-4 flex-wrap">
        {links.map((l) => (
          <a
            key={`${title}-${l.label}`}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm inline-block"
          >
            {l.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
