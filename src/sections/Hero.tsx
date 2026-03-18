import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Github } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
} as Variants;

export default function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main copy: Left 60% */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Available for projects
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-semibold text-slate-900 tracking-tight dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              I build production systems and lead the team that delivers them.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg tracking-tight leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
              Technical Support Engineer at TeKnowledge, supporting Carbon Black EDR for enterprise clients. 
              CEO of Codacre, building software solutions in Rwanda and worldwide.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work">
                <Button className="font-semibold h-11 px-8 rounded-full">See my work</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" className="font-semibold h-11 px-8 rounded-full border border-slate-200 dark:border-slate-800">
                  Get in touch
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right side: 40% - Tech Stack / Status */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/40 relative">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">v1.2.0</div>
              </div>

              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                Active Infrastructure
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Data", value: "PostgreSQL, pgvector, Redis" },
                  { label: "Runtime", value: "FastAPI, Node.js" },
                  { label: "Ops", value: "Terraform, Docker, Nginx" },
                  { label: "Security", value: "Carbon Black, EDR" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</span>
                    <span className="text-xs font-mono text-slate-900 dark:text-slate-200">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-2">
                 <a
                  href="https://github.com/joelkwihangana"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
