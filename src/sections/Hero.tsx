import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-2">
            <Badge>Backend + DevOps</Badge>
            <Badge>FastAPI • Node.js</Badge>
            <Badge>Linux • Nginx • VPS</Badge>
            <Badge>Docker • CI/CD</Badge>
            <Badge>React + TypeScript</Badge>
          </div>

          <div className="lg:max-w-full sm:max-w-2xl md:max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              I build and deploy reliable web systems, not just websites.
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Technical Support Engineer (L2) transitioning into a
              backend-focused Fullstack DevOps role. I build APIs with FastAPI
              and Node.js, deploy and maintain production systems on Linux VPS
              (Hostinger), and build React frontends when the product needs it.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#work">
                <Button>View case studies</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary">Contact</Button>
              </a>
              <a
                href="https://www.linkedin.com/in/joelkwihangana/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <p className="text-sm font-medium text-slate-900">Ops mindset</p>
              <p className="mt-1 text-sm text-slate-600">
                Automation, debugging, incident thinking.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <p className="text-sm font-medium text-slate-900">
                Production delivery
              </p>
              <p className="mt-1 text-sm text-slate-600">
                APIs, databases, deployments, and rollback-ready releases.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <p className="text-sm font-medium text-slate-900">
                Security-aware
              </p>
              <p className="mt-1 text-sm text-slate-600 ">
                Real experience in endpoint and cloud security.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
