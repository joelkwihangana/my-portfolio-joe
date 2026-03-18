import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import { caseStudies } from "../content/caseStudies";
import type { CaseStudy } from "../content/caseStudies";
import { StatusBadge } from "../components/ui/StatusBadge";
import { ArrowRight, Terminal, Cpu, ShieldCheck, Database, Server, Globe, Activity, Zap, type LucideIcon } from "lucide-react";

function CodeHighlight({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className="font-mono text-[11px] leading-relaxed">
      {lines.map((line, i) => {
        const isComment = line.trim().startsWith('#');
        if (isComment) return <div key={i} className="text-slate-500">{line}</div>;
        
        const [key, ...rest] = line.split(':');
        const value = rest.join(':');
        
        return (
          <div key={i} className="flex">
            <span className="text-blue-400">{key}</span>
            {value && <span className="text-slate-600">:</span>}
            <span className="text-slate-400">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

function SchematicComponent({ label, icon: Icon }: { label: string, icon: LucideIcon }) {
  return (
    <div className="group relative flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white/50 dark:border-white/5 dark:bg-slate-900/40 hover:border-emerald-500/50 transition-colors">
      <div className="flex-shrink-0 w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
  );
}

function ClientImpactBlock({ impacts }: { impacts: { technical: string; result: string }[] }) {
  return (
    <div className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-900/10 p-4 space-y-3">
      <div className="flex items-center gap-2">
        <Zap className="w-3 h-3 text-emerald-500" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Client Impact
        </span>
      </div>
      {impacts.map((item, i) => (
        <div key={i} className="text-xs leading-relaxed">
          <span className="font-medium text-slate-500 dark:text-slate-400 font-mono">{item.technical}</span>
          <span className="mx-2 text-emerald-500">→</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium">{item.result}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, isLast }: { project: CaseStudy, isLast: boolean }) {
  const isProduction = project.status === 'Production';

  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('process') || l.includes('runtime') || l.includes('donation')) return Cpu;
    if (l.includes('proxy') || l.includes('security') || l.includes('hardening')) return ShieldCheck;
    if (l.includes('database') || l.includes('data')) return Database;
    if (l.includes('environment') || l.includes('cloud') || l.includes('vpc') || l.includes('showcase')) return Globe;
    if (l.includes('observability') || l.includes('monitoring')) return Activity;
    return Server;
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch">
        {/* Left: 70% - System Internal Viewport */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 bg-[#0d1117] shadow-sm flex flex-col h-full">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <Terminal className="w-3 h-3" />
                  <span>system_internals.yml</span>
                </div>
              </div>
              <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Read Only</div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 overflow-x-auto scrollbar-hide">
              <CodeHighlight text={
                project.infrastructureSpecs 
                  ? project.infrastructureSpecs.map(s => `${s.label}: ${s.value}`).join('\n')
                  : `architecture: ${project.architecture}\nthe_why: ${project.theWhy}`
              } />
            </div>

            {/* Visual Schematic Area */}
            <div className="mt-auto p-6 border-t border-slate-800/50 bg-slate-950/50">
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                  {project.infrastructureSpecs?.slice(0, 3).map((spec, idx) => (
                    <div key={spec.label} className="relative">
                      <SchematicComponent label={spec.label} icon={getIcon(spec.label)} />
                      {idx < 2 && (
                        <div className="hidden sm:block absolute top-1/2 -right-2 w-4 border-t border-emerald-500/20 -translate-y-1/2" />
                      )}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Client Impact - below terminal on left side */}
          {project.clientImpact && project.clientImpact.length > 0 && (
            <ClientImpactBlock impacts={project.clientImpact} />
          )}
        </div>

        {/* Right: 30% - Project Metadata */}
        <div className="lg:col-span-3 flex flex-col justify-between py-2">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              {project.sector && (
                <span className="text-[10px] px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  {project.sector}
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
              {project.role}
            </p>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {project.subtitle}
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-lg p-4 border border-slate-100 dark:border-white/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map(s => (
                    <Badge key={s} className="text-[10px] px-2 py-0.5">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50">
            <div className="flex flex-col gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isProduction ? 'bg-emerald-400' : 'bg-blue-400'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isProduction ? 'bg-emerald-500' : 'bg-blue-500'}`}></span>
                  </span>
                  Production Deployment
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <Terminal className="w-3 h-3" />
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Connector */}
      {!isLast && (
        <div className="my-16 flex justify-center">
          <div className="h-16 w-px border-l border-dashed border-slate-200 dark:border-white/10" />
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 sm:py-24 relative border-t border-slate-100 dark:border-slate-800/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Systems Architecture
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              Production systems spanning relational database administration, event-driven API design, and declarative infrastructure—each with measurable client outcomes.
            </p>
          </div>

          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white sm:inline-flex items-center gap-2 transition-colors"
          >
            View all repositories <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex flex-col">
          {caseStudies.map((project, i) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              isLast={i === caseStudies.length - 1} 
            />
          ))}
        </div>

        <div className="mt-16 sm:hidden flex justify-center">
          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            View all repositories <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
