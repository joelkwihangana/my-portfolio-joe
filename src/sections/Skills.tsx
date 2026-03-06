import Container from "../components/ui/Container";
import { skillsGrid } from "../content/skills";
import type { SkillCategory } from "../content/skills";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
} as Variants;

function StatusIndicator({ status }: { status: string }) {
  if (status === "Mastered") {
    return <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />;
  }
  if (status === "Working Knowledge") {
    return <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />;
  }
  return <span className="w-2 h-2 rounded-full border-2 border-slate-300 dark:border-slate-600 shrink-0" />;
}

function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
    >
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        {category.name}
      </h3>
      
      <ul className="space-y-4">
        {category.items.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between group">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {skill.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.status}
              </span>
              <StatusIndicator status={skill.status} />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Tech Stack & Proficiency
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Tools mapping the full lifecycle of software—from local orchestration and automated testing to high-availability database administration and TLS offloading.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 hidden sm:flex">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Mastered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Working Knowledge
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border-2 border-slate-300 dark:border-slate-600" /> Learning
            </div>
          </div>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsGrid.map((category) => (
            <SkillGroup key={category.name} category={category} />
          ))}
        </motion.div>
        
        {/* Mobile legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 sm:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Mastered
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" /> Working
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border-2 border-slate-300 dark:border-slate-600" /> Learning
          </div>
        </div>
      </Container>
    </section>
  );
}
