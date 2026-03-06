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
                <BentoCard key={p.slug} featured={true} className="group">
                  <div className="flex flex-col xl:flex-row h-full">
                    
                    {/* Left/Top Area: Image & Core Info */}
                    <div className="flex flex-col xl:w-1/2 xl:border-r border-slate-200 dark:border-slate-800 xl:pr-8">
                      {/* Image */}
                      <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-video mb-8">
                        <img
                          src={p.image.src}
                          alt={p.image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4">
                          <StatusBadge status={p.status} />
                        </div>
                      </div>

                      {/* Prose Header */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                          {p.role}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                          {p.subtitle}
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                          <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2">
                            The "Why"
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                            {p.theWhy}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right/Bottom Area: Technical Specs */}
                    <div className="flex flex-col xl:w-1/2 mt-8 xl:mt-0 xl:pl-8 justify-between">
                      <div className="space-y-6 flex-1">
                        
                        {/* Terminal Embed */}
                        {p.infrastructureSpecs && (
                          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] shadow-sm">
                            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900">
                              <div className="flex gap-1.5 mr-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                              </div>
                              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                                <Terminal className="w-3.5 h-3.5" />
                                <span>system_internals.yml</span>
                              </div>
                            </div>
                            <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed">
                              <ul className="space-y-4">
                                {p.infrastructureSpecs.map((spec) => (
                                  <li key={spec.label}>
                                    <span className="text-blue-400 font-semibold">{spec.label}:</span>{" "}
                                    <span className="text-slate-400">{spec.value}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Operational Hardening */}
                        {p.operationalHardening && (
                          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <div className="flex items-center gap-2 mb-3">
                              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Operational Hardening</h4>
                            </div>
                            <ul className="space-y-2">
                              {p.operationalHardening.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
                                  <span className="text-emerald-500 mt-1 pb-1 font-bold text-[10px] leading-none">■</span>
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 w-full shrink-0">
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
