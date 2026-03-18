import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import { engineeringLabs } from "../content/engineeringLabs";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";
import { FlaskConical, ArrowRight } from "lucide-react";

export default function EngineeringLabs() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="labs"
      className={`py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 relative border-t border-slate-200 dark:border-slate-800/50 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 mb-6">
              <FlaskConical className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Proof of Work</span>
            </div>
            
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Engineering Labs
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Controlled environments for building with specific tools, testing architectural patterns, and verifying assumptions before applying them in production.
            </p>
          </div>
        </div>

        <div className={`mt-8 grid gap-6 lg:grid-cols-3 stagger ${inView ? "in" : ""}`}>
          {engineeringLabs.map((lab, i) => (
            <div
              key={lab.id}
              style={{ transitionDelay: `${staggerDelayMs(i, 110)}ms` }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="line-clamp-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {lab.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                    lab.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400' :
                    lab.status === 'In Progress' ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400' :
                    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {lab.status}
                  </span>
                </div>
                
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {lab.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {lab.tags.map((tag) => (
                    <Badge key={tag} className="text-[10px] px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {lab.link && (
                 <a
                 href={lab.link}
                 target="_blank"
                 rel="noreferrer"
                 className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
               >
                 View Implementation <ArrowRight className="w-4 h-4" />
               </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
