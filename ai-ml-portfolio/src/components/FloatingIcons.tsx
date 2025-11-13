import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        flex flex-col gap-4
        bg-neutral-900/70 backdrop-blur-xl
        p-4 rounded-2xl border border-neutral-700
        shadow-xl
      "
    >
      {/* Download Resume */}
      <a
        href="/Resume.pdf"
        download
        className="p-2 rounded-lg hover:bg-neutral-800 transition text-blue-300"
        title="Download Resume"
      >
        <ArrowDownToLine size={22} strokeWidth={1.75} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/vjeyam"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-neutral-800 transition text-gray-300"
        title="GitHub"
      >
        <Github size={22} strokeWidth={1.75} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vjeyam/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-neutral-800 transition text-blue-300"
        title="LinkedIn"
      >
        <Linkedin size={22} strokeWidth={1.75} />
      </a>

      {/* Email */}
      <a
        href="mailto:jeyamvishal5@gmail.com"
        className="p-2 rounded-lg hover:bg-neutral-800 transition text-green-300"
        title="Email Me"
      >
        <Mail size={22} strokeWidth={1.75} />
      </a>
    </div>
  );
}