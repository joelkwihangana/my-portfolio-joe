import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import { caseStudies } from "../content/caseStudies";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {children} →
    </a>
  );
}

export default function CaseStudies() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      id="work"
      className={`py-16 sm:py-20 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Featured work
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              Case studies that show how I think, build, deploy, and maintain
              production systems.
            </p>
          </div>

          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white sm:block"
          >
            View all on GitHub →
          </a>
        </div>

        <div
          className={`mt-8 grid gap-6 lg:grid-cols-3 stagger ${inView ? "in" : ""}`}
        >
          {caseStudies.map((p, i) => (
            <article
              key={p.slug}
              style={{ transitionDelay: `${staggerDelayMs(i, 110)}ms` }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  className="h-44 w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <header>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                    <span className="font-medium text-slate-900 dark:text-white">
                      Role:
                    </span>{" "}
                    {p.role}
                  </p>
                </header>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Problem
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                      {p.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Solution
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                      {p.solution}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Architecture
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                      {p.architecture}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Key decisions
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                      {p.keyDecisions.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Impact
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                      {p.impact.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  {p.ops && p.ops.length > 0 && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Ops notes
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                        {p.ops.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <footer className="mt-6 flex items-center gap-4">
                  {p.links.live && (
                    <ExternalLink href={p.links.live}>Live</ExternalLink>
                  )}
                  {p.links.github && (
                    <ExternalLink href={p.links.github}>Code</ExternalLink>
                  )}
                </footer>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            View all on GitHub →
          </a>
        </div>
      </Container>
    </section>
  );
}
