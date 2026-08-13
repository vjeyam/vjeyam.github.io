import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import "../styles/FloatingIcons.css";

export default function FloatingIcons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-icons">
      {/* Scroll to Top */}
      {showScrollTop && (
        <>
          <button
            className="floating-icon scroll-top-icon"
            onClick={scrollToTop}
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={22} strokeWidth={1.75} />
          </button>

          <div className="floating-divider" />
        </>
      )}

      {/* Download Resume */}
      <a
        href="/pdfs/Resume.pdf"
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