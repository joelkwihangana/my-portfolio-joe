import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Github, ExternalLink } from "lucide-react";

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
    <section id="top" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-32 mt-12 w-64 h-64 bg-slate-200 dark:bg-slate-800 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Container>
        <motion.div
          className="flex flex-col gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            <Badge>IMS Systems Admin</Badge>
            <Badge>FastAPI • Node.js</Badge>
            <Badge>Docker • CI/CD</Badge>
            <Badge>Linux • Nginx</Badge>
            <Badge>React • TypeScript</Badge>
          </motion.div>

          {/* Main copy */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight dark:text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              I build production systems, ship client products, and lead the team that delivers them.
            </h1>

            <p className="mt-6 text-lg tracking-tight leading-relaxed text-slate-600 dark:text-slate-300">
              Technical Support Engineer (L2) at TeKnowledge, supporting Carbon Black EDR, Cloud,
              App Control, and CASB for enterprise clients across EMEA. Full-Stack Developer.
              DevOps Engineer. CEO of Codacre, a software agency in Kigali building for
              businesses in Rwanda and worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work">
                <Button className="font-medium h-10 px-6">See my work</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" className="font-medium h-10 px-6">
                  Get in touch
                </Button>
              </a>
              <a
                href="https://github.com/joelkwihangana"
                target="_blank"
                rel="noreferrer"
                className="text-sm border-b border-transparent hover:border-slate-400 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joelkwihangana/"
                target="_blank"
                rel="noreferrer"
                className="text-sm border-b border-transparent hover:border-slate-400 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                LinkedIn <ExternalLink className="inline-block w-3 h-3 ml-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Value cards */}
          <motion.div variants={itemVariants} className="grid gap-4 mt-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm p-5 dark:border-slate-800/80 dark:bg-slate-900/40">
              <p className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                System Reliability
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Debugging at the network layer, log analysis, and automated incident prevention.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm p-5 dark:border-slate-800/80 dark:bg-slate-900/40">
              <p className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Infrastructure as Code
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Reproducible, declarative deployments using Terraform and Docker. No config drift.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm p-5 dark:border-slate-800/80 dark:bg-slate-900/40">
              <p className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Data Integrity
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Relational schema design, connection pooling, and strict state management.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
