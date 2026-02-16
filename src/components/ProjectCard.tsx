interface Props {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  presentation?: string;
  kaggle?: string;
  demo?: string;
  result?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  desc,
  tech,
  link,
  presentation,
  kaggle,
  demo,
  result,
  image,
}: Props) {
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

      <div className="mt-4 flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm inline-block"
        >
          GitHub →
        </a>

        {presentation && (
          <a
            href={presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm inline-block"
          >
            Presentation →
          </a>
        )}

        {kaggle && (
          <a
            href={kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm inline-block"
          >
            Kaggle →
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm inline-block"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
