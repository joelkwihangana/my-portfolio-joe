import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import { caseStudies } from "../content/caseStudies";
import { BentoGrid, BentoCard } from "../components/ui/BentoGrid";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Server, Activity, ArrowRight, Terminal, ShieldCheck } from "lucide-react";

function ExternalLink({
  href,
  children,
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors ${className}`}
    >
      {children} <ArrowRight className="w-3.5 h-3.5" />
    </a>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 sm:py-28 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Systems Architecture
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Proof of work spanning API design, relational data modeling, and declarative infrastructure deployments.
            </p>
          </div>

          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white sm:inline-flex items-center gap-2 transition-colors"
          >
            View all repositories <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <BentoGrid>
          {caseStudies.map((p, i) => {
            const isFeatured = i === 0;

            if (isFeatured) {
              return (
                <BentoCard key={p.slug} featured={true} className="!p-0 overflow-hidden group">
                  <div className="flex flex-col lg:grid lg:grid-cols-12 h-full z-0 relative">
                    
                    {/* Image Container */}
                    <div className="lg:col-span-6 relative z-0 h-72 sm:h-96 lg:h-full border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden flex flex-col lg:order-last">
                      <div className="absolute top-4 left-4 z-20">
                        <StatusBadge status={p.status} />
                      </div>
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 absolute inset-0 z-10"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                    </div>

                    {/* Text Container */}
                    <div className="lg:col-span-6 relative z-10 p-6 sm:p-8 lg:p-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex flex-col lg:border-r border-transparent lg:border-slate-200 dark:lg:border-slate-800">
                      
                      {/* Top: Prose */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-5">
                        {p.role}
                      </p>
                      <div className="space-y-4 mb-2">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans sm:text-lg">
                          {p.subtitle}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          <strong className="text-slate-900 dark:text-white font-semibold">The Why: </strong>{p.theWhy}
                        </p>
                      </div>

                      {/* Middle: Code Editor */}
                      {p.infrastructureSpecs && (
                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] shadow-lg mt-6 lg:mt-8 shrink-0">
                          <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900">
                            <div className="flex gap-1.5 mr-4">
                              <div className="w-3 h-3 rounded-full bg-red-500/80" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                              <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                              <Terminal className="w-3.5 h-3.5" />
                              <span>system_internals.yml</span>
                            </div>
                          </div>
                          <div className="p-5 font-mono text-xs text-slate-300">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                              {p.infrastructureSpecs.map((spec) => (
                                <div key={spec.label} className="flex flex-col gap-1.5">
                                  <span className="text-blue-400 font-semibold">{spec.label}:</span>
                                  <span className="leading-relaxed text-slate-400 block">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom: Hardening Box */}
                      {p.operationalHardening && (
                        <div className="mt-6 p-5 rounded-xl border border-purple-500/20 bg-purple-500/5 dark:bg-purple-900/10 shrink-0">
                          <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <h4 className="font-semibold text-sm text-purple-900 dark:text-purple-300">Operational Hardening</h4>
                          </div>
                          <ul className="space-y-2.5">
                            {p.operationalHardening.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-sans">
                                <span className="text-purple-500 mt-0.5 font-bold">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Footer / Links */}
                      <div className="mt-8 lg:mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/60 w-full shrink-0 flex flex-col justify-end h-full">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.stack.slice(0, 5).map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                          {p.stack.length > 5 && (
                            <Badge className="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border-none">
                              +{p.stack.length - 5}
                            </Badge>
                          )}
                        </div>

                        <footer className="flex items-center gap-6">
                          {p.links.live && (
                            <ExternalLink href={p.links.live}>Production Deployment</ExternalLink>
                          )}
                          {p.links.github && (
                            <ExternalLink href={p.links.github}>Infrastructure Source</ExternalLink>
                          )}
                        </footer>
                      </div>

                    </div>
                  </div>
                </BentoCard>
              );
            }

            // Normal cards
            return (
              <BentoCard key={p.slug} featured={false}>
                {/* Card Header Image Area */}
                <div className="relative border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 shrink-0">
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105 h-48"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <StatusBadge status={p.status} />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <header className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                      {p.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {p.subtitle}
                    </p>
                  </header>

                  {/* Specs Section */}
                  <div className="flex-1 space-y-5">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Server className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                          System Architecture
                        </h4>
                      </div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                        {p.architecture}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2">
                        The "Why"
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {p.theWhy}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                          Observability & Ops
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {p.observability}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stack.slice(0, 5).map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                      {p.stack.length > 5 && (
                        <Badge className="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border-none">
                          +{p.stack.length - 5}
                        </Badge>
                      )}
                    </div>

                    <footer className="flex items-center gap-6">
                      {p.links.live && (
                        <ExternalLink href={p.links.live}>Production Deployment</ExternalLink>
                      )}
                      {p.links.github && (
                        <ExternalLink href={p.links.github}>Infrastructure Source</ExternalLink>
                      )}
                    </footer>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>

        <div className="mt-10 sm:hidden flex justify-center">
          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white inline-flex items-center gap-2"
          >
            View all repositories <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
