import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import ProofStrip from "../sections/ProofStrip";
import CaseStudies from "../sections/CaseStudies";
import EngineeringLabs from "../sections/EngineeringLabs";
import About from "../sections/About";
import Contact from "../sections/Contact";
import SystemThinking from "../sections/SystemThinking";
import FAQ from "../sections/FAQ";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";

export default function AppShell() {
  return (
    <div
      className="
    min-h-screen text-slate-900 dark:text-slate-100
    bg-white dark:bg-slate-950
    [background-image:radial-gradient(#f1f5f9_0.5px,transparent_0.5px)]
    dark:[background-image:radial-gradient(#1e293b_0.5px,transparent_0.5px)]
    [background-size:20px_20px]
  "
    >
      <Navbar />

      <main id="content" className="relative">
        <Hero />
        <ProofStrip />
        <SystemThinking />
        <CaseStudies />
        <EngineeringLabs />
        <About />
        <Contact />
        <FAQ />
      </main>
...
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
