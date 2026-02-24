import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import "../styles/FloatingIcons.css";

export default function FloatingIcons() {
  return (
    <div className="floating-icons">
      {/* Download Resume */}
      <a
        href="/Resume.pdf"
        download
        className="floating-icon accent-blue"
        title="Download Resume"
      >
        <ArrowDownToLine size={22} strokeWidth={1.75} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/vjeyam"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon"
        title="GitHub"
      >
        <Github size={22} strokeWidth={1.75} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vjeyam/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon accent-blue"
        title="LinkedIn"
      >
        <Linkedin size={22} strokeWidth={1.75} />
      </a>

      {/* Email */}
      <a
        href="mailto:jeyamvishal5@gmail.com"
        className="floating-icon accent-green"
        title="Email Me"
      >
        <Mail size={22} strokeWidth={1.75} />
      </a>
    </div>
  );
}