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
      className={`py-16 sm:py-20 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Let’s build and operate real systems
              </h2>
              <p className="mt-3 text-slate-600">
                I’m open to backend-focused Fullstack DevOps roles and serious
                collaborations. If you need someone who can ship APIs, deploy to
                Linux VPS, and own production reliability, let’s talk.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={EMAIL_LINK}>
                  <Button>Email me</Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button variant="secondary">WhatsApp</Button>
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

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span>
                  <span className="font-medium text-slate-900">Email:</span>{" "}
                  {EMAIL}
                </span>
                <span>
                  <span className="font-medium text-slate-900">WhatsApp:</span>{" "}
                  {PHONE_E164}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Quick links
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="/Joel-Kwihangana-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    Download resume →
                  </a>
                  <a
                    href="https://github.com/joelkwihangana"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://earthlinkgroup.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    EarthLink Group (Live) →
                  </a>
                  <a
                    href="https://earthlinkstudy.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    EarthLink Study (Live) →
                  </a>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-600">
                  Prefer email for roles and detailed discussions. WhatsApp is
                  best for quick coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
