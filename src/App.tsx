import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";
import FloatingIcons from "./components/FloatingIcons";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />

      <FloatingIcons />
      <Chatbot />

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
