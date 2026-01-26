import Container from "../ui/Container";

const EMAIL = "joelkwijoe@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Joel Kwihangana
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Backend-focused Fullstack DevOps engineer. I build and operate
              production systems.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Kigali, Rwanda · Open to roles and collaborations
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Links
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                className="font-medium text-slate-700 hover:text-slate-900"
                href="/Joel-Kwihangana-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                className="font-medium text-slate-700 hover:text-slate-900"
                href="https://www.linkedin.com/in/joelkwihangana/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-medium text-slate-700 hover:text-slate-900"
                href="https://github.com/joelkwihangana"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="font-medium text-slate-700 hover:text-slate-900"
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Opportunity / Collaboration")}`}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Joel Kwihangana. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React, TypeScript, Tailwind, and a production mindset.
          </p>
        </div>
      </Container>
    </footer>
  );
}
