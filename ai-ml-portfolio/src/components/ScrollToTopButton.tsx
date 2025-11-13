import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300); // show after 300px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={22} />
    </button>
  );
}
