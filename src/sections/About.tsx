import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";

const highlights = [
  {
    title: "Backend-first builder",
    body: "I design APIs and data flows first, then build interfaces on top of stable backend contracts.",
  },
  {
    title: "Owns deployments",
    body: "I deploy and maintain real systems on Linux VPS (Hostinger), including production updates and troubleshooting.",
  },
  {
    title: "Support background = strong debugging",
    body: "L2 support taught me to isolate issues fast, verify with evidence, and communicate clearly under pressure.",
  },
  {
    title: "Security-aware mindset",
    body: "I care about least privilege, safe releases, and practical security habits from real endpoint and cloud security work.",
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 sm:py-20 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              About
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              I’m Joel Kwihangana, a Technical Support Engineer (L2)
              transitioning into a backend-focused Fullstack DevOps role. I
              build and operate fullstack systems where backend services,
              deployments, and reliability are treated as first-class features.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              I currently work on real client projects, including backend
              development and VPS deployments. I have shipped Node.js + MySQL
              systems and I’m building FastAPI services, deploying and
              maintaining them on Linux infrastructure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>FastAPI</Badge>
              <Badge>Node.js</Badge>
              <Badge>MySQL</Badge>
              <Badge>Linux</Badge>
              <Badge>Nginx</Badge>
              <Badge>Docker</Badge>
              <Badge>CI/CD</Badge>
            </div>
          </div>

          <div className={`lg:col-span-7 stagger ${inView ? "in" : ""}`}>
            <div className="grid gap-6 md:grid-cols-2">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  style={{ transitionDelay: `${staggerDelayMs(i, 90)}ms` }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{ transitionDelay: `${staggerDelayMs(4, 90)}ms` }}
              className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-sm font-semibold text-slate-900">
                What I’m focusing on now
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Building and operating backend-driven systems end-to-end, from
                API design and data modeling to deployment, production
                troubleshooting, and continuous improvement of infrastructure
                workflows.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
