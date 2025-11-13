import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b border-neutral-900 bg-black">
      <Link to="/" className="font-semibold text-lg">Vishal Jeyam</Link>

      <div className="flex gap-6 text-sm">
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
