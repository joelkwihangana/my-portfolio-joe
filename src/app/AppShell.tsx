import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import ProofStrip from "../sections/ProofStrip";
import CaseStudies from "../sections/CaseStudies";
import EngineeringLabs from "../sections/EngineeringLabs";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import SystemThinking from "../sections/SystemThinking";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";

export default function AppShell() {
  return (
    <div
      className="
    min-h-screen text-slate-900 dark:text-slate-100
    bg-white dark:bg-slate-950
    [background-image:radial-gradient(#e5e7eb_0.8px,transparent_0.8px)]
    dark:[background-image:radial-gradient(#1f2937_0.8px,transparent_0.8px)]
    [background-size:24px_24px]
  "
    >
      <Navbar />

      <main id="content" className="relative">
        <Hero />
        <ProofStrip />
        <SystemThinking />
        <CaseStudies />
        <EngineeringLabs />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
