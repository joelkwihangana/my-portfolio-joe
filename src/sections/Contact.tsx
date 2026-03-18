import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { useInView } from "../utils/useInView";

const PHONE_E164 = "+250780515771";
const WHATSAPP_LINK = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(
  "Hi Joel, I saw your portfolio and would like to connect.",
)}`;

const EMAIL = "joelkwijoe@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Opportunity / Collaboration",
)}&body=${encodeURIComponent("Hi Joel,\n\nI saw your portfolio and would like to connect.\n\n")}`;

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-16 sm:py-20 reveal border-t border-slate-100 dark:border-slate-800/50 ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 dark:border-white/5 dark:bg-slate-900/40">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Let's build and operate real systems
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                For engineering roles and direct collaboration, reach me below.
                For project and freelance work, engage through Codacre.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={EMAIL_LINK}>
                  <Button className="rounded-full h-11 px-8">Email me</Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button variant="secondary" className="rounded-full h-11 px-8 border border-slate-200 dark:border-slate-800">WhatsApp</Button>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/50">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  For project work
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-xl">
                  Codacre is my software agency in Kigali. We design, build, and deliver
                  websites, systems, and automation for businesses in Rwanda and worldwide.
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <a
                    href="https://codacre.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                  >
                    codacre.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-8 dark:border-slate-800 dark:bg-slate-950/40">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Quick links
                </h4>

                <div className="flex flex-col gap-4">
                  {[
                    { label: "Download resume", href: "/Joel-Kwihangana-Resume.pdf" },
                    { label: "GitHub Profile", href: "https://github.com/joelkwihangana" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/joelkwihangana/" },
                    { label: "Codacre (Agency)", href: "https://codacre.com" }
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-between group"
                    >
                      {link.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
