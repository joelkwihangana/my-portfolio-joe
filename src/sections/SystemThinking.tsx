import Container from "../components/ui/Container";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";

const principles = [
  {
    title: "Build API-first, UI second",
    body: "I start with a clear API contract, data model, and error handling so the frontend stays simple and predictable.",
  },
  {
    title: "Own production, not just code",
    body: "If I ship it, I deploy it and support it. I care about releases, rollback, logs, and keeping the service available.",
  },
  {
    title: "Prefer boring, reliable infrastructure",
    body: "I choose the simplest setup that meets the needs, then document it like a runbook so it can be operated by others.",
  },
  {
    title: "Debug with evidence",
    body: "When something breaks, I reproduce, isolate, and verify using logs and system signals instead of guessing.",
  },
];

export default function SystemThinking() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How I think about systems
          </h2>
          <p className="mt-3 text-slate-600">
            I focus on building backend services and deployments that are
            maintainable, observable, and safe to operate.
          </p>
        </div>

        <div
          className={`mt-10 grid gap-6 md:grid-cols-2 stagger ${inView ? "in" : ""}`}
        >
          {principles.map((p, i) => (
            <div
              key={p.title}
              style={{ transitionDelay: `${staggerDelayMs(i, 90)}ms` }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
