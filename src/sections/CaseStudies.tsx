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
            return (
              <BentoCard key={p.slug} featured={isFeatured}>
                <div className={`flex flex-col h-full ${isFeatured ? "lg:flex-row" : ""}`}>
                  
                  {/* Card Header Image Area */}
                  <div className={`relative border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 shrink-0 order-1 overflow-hidden ${isFeatured ? "border-b lg:border-b-0 lg:border-l lg:order-2 lg:w-[40%]" : "border-b w-full"}`}>
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isFeatured ? "h-64 sm:h-80 lg:h-full lg:absolute lg:inset-0" : "h-48"}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <StatusBadge status={p.status} />
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className={`p-6 md:p-8 flex flex-col flex-1 order-2 ${isFeatured ? "lg:order-1 lg:w-[60%]" : ""}`}>
                    <header className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                        {p.role}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                        {p.subtitle}
                      </p>
                    </header>

                    {/* Specs Section */}
                    <div className={`flex-1 ${isFeatured && p.infrastructureSpecs ? 'grid grid-cols-1 xl:grid-cols-2 gap-6' : 'space-y-5'}`}>
                      
                      <div className="flex flex-col gap-5 justify-start">
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 aspect-auto">
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
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {p.theWhy}
                          </p>
                        </div>

                        {(!p.infrastructureSpecs) && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Activity className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                                Observability & Ops
                              </h4>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {p.observability}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Code Snippet Internal Specs */}
                      {isFeatured && p.infrastructureSpecs && (
                        <div className="flex flex-col bg-[#0d1117] dark:bg-[#0d1117] rounded-xl p-5 border border-slate-800 font-mono h-full justify-between shadow-inner">
                          <div>
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800/60">
                              <Terminal className="w-4 h-4 text-emerald-400" />
                              <h4 className="text-xs tracking-wider text-slate-300 font-semibold">
                                system_internals.yml
                              </h4>
                            </div>
                            <ul className="space-y-3.5">
                              {p.infrastructureSpecs.map((spec) => (
                                <li key={spec.label} className="text-xs leading-relaxed text-slate-300">
                                  <span className="text-blue-400 font-semibold">{spec.label}:</span> {spec.value}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {p.operationalHardening && (
                            <div className="mt-5 pt-4 border-t border-slate-800/60">
                              <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-4 h-4 text-purple-400" />
                                <h4 className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold mt-0.5">
                                  Operational Hardening
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {p.operationalHardening.map((item, idx) => (
                                  <li key={idx} className="text-[10px] text-slate-400 flex items-start gap-2 leading-relaxed">
                                    <span className="text-slate-600 shrink-0 mt-0.5">{`>`}</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
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
