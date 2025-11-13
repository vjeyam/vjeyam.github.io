import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";
import FloatingIcons from "./components/FloatingIcons";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <FloatingIcons /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
