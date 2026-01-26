import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import ProofStrip from "../sections/ProofStrip";
import CaseStudies from "../sections/CaseStudies";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import SystemThinking from "../sections/SystemThinking";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <ProofStrip />
        <SystemThinking />
        <CaseStudies />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
