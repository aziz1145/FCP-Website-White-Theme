import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {" "}
      <AnimatedBackground />
      <div className="relative z-10">
        <ScrollToTop />
        <TopBar />
        <Navbar />

        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
