import Container from "../components/ui/Container";
import { engineeringLabs } from "../content/engineeringLabs";
import { skillsGrid } from "../content/skills";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";
import { FlaskConical, ArrowRight, Star } from "lucide-react";
import { Tooltip } from "../components/ui/Tooltip";

function StatusIndicator({ status }: { status: string }) {
  if (status === "Mastered") {
    return <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />;
  }
  if (status === "Working Knowledge") {
    return <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />;
  }
  return <span className="w-1.5 h-1.5 rounded-full border border-slate-300 dark:border-slate-600 shrink-0" />;
}

export default function EngineeringLabs() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="labs"
      className={`py-16 sm:py-20 bg-white dark:bg-slate-950 relative border-t border-slate-100 dark:border-slate-800/50 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content: Engineering Labs */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-6 border border-slate-200 dark:border-slate-800">
              <FlaskConical className="w-3 h-3 text-purple-500" />
              <span>Proof of Work</span>
            </div>
            
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl mb-4">
              Engineering Labs
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
              Controlled environments for validating database architectures, testing infrastructure patterns, and verifying assumptions before applying them in production systems.
            </p>

            <div className={`grid gap-4 md:grid-cols-2 stagger ${inView ? "in" : ""}`}>
              {engineeringLabs.map((lab, i) => (
                <div
                  key={lab.id}
                  style={{ transitionDelay: `${staggerDelayMs(i, 80)}ms` }}
                  className={`flex flex-col justify-between rounded-xl p-5 border transition-colors ${
                    lab.featured
                      ? "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-900/10 md:col-span-2"
                      : "border-slate-200 bg-white/50 dark:border-white/5 dark:bg-slate-900/40"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        {lab.featured && (
                          <Star className="w-3.5 h-3.5 text-emerald-500 shrink-0 fill-emerald-500" />
                        )}
                        <h3 className={`text-base font-semibold tracking-tight text-slate-900 dark:text-white ${lab.featured ? "text-emerald-800 dark:text-emerald-300" : ""}`}>
                          {lab.title}
                        </h3>
                      </div>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                        lab.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                        lab.status === 'In Progress' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                        'bg-slate-500/10 text-slate-500'
                      }`}>
                        {lab.status}
                      </span>
                    </div>
                    
                    <p className="mb-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {lab.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {lab.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] px-2 py-0.5 rounded border ${
                          lab.featured
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/50"
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {lab.link && (
                    <a
                      href={lab.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      Source <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Tech Stack / Capabilities */}
          <div className="lg:col-span-4 lg:border-l border-slate-100 dark:border-slate-800/50 lg:pl-12">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
              Capabilities
            </h2>
            
            <div className="space-y-8">
              {skillsGrid.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className={`text-[10px] font-bold uppercase tracking-widest ${
                      category.tier === 'primary'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : category.tier === 'foundation'
                        ? 'text-slate-300 dark:text-slate-600'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {category.name}
                    </h4>
                    {category.tier === 'primary' && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider border border-emerald-500/20">
                        Core
                      </span>
                    )}
                  </div>
                  <ul className={`grid gap-y-2 gap-x-4 ${category.tier === 'foundation' ? 'grid-cols-2 lg:grid-cols-2' : 'grid-cols-2 lg:grid-cols-1'}`}>
                    {category.items.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between group">
                        <span className={`text-xs font-medium transition-colors ${
                          category.tier === 'foundation'
                            ? 'text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400'
                            : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}>
                          {skill.tooltip ? (
                            <Tooltip text={skill.tooltip}>
                              {skill.name}
                            </Tooltip>
                          ) : (
                            skill.name
                          )}
                        </span>
                        <StatusIndicator status={skill.status} />
                      </li>
                    ))}
                  </ul>
                  {category.tier === 'foundation' && (
                    <div className="mt-2 pt-2 border-t border-dashed border-slate-100 dark:border-slate-800/50" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/50">
              <div className="flex flex-wrap gap-4 text-[10px] font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Mastered
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Working
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full border border-slate-300 dark:border-slate-600" /> Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
