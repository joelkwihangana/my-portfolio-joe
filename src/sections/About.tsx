import Container from "../components/ui/Container";
import { useInView } from "../utils/useInView";
import awesomejoe from "/src/assets/images/awesome-joe.png";
import { Terminal, Database, GitBranch, Shield } from "lucide-react";
import { Tooltip } from "../components/ui/Tooltip";

const imsCapabilities = [
  {
    icon: Database,
    label: "Database Administration",
    detail: (
      <>
        Administering relational and{" "}
        <Tooltip text="Vector Database: stores AI-generated embeddings, enabling semantic search beyond keyword matching">
          vector databases
        </Tooltip>{" "}
        (pgvector/Milvus) for AI-ready applications.
      </>
    ),
  },
  {
    icon: GitBranch,
    label: "Data Pipelines & Uptime",
    detail: "Designing event-driven data pipelines and ensuring 99.9% system uptime across production services.",
  },
  {
    icon: Shield,
    label: "Infrastructure as Code",
    detail: (
      <>
        <Tooltip text="IaC: Infrastructure as Code — servers and networks defined in version-controlled files, eliminating manual config errors">
          Infrastructure as Code
        </Tooltip>{" "}
        (Terraform/Ansible) to eliminate manual configuration errors and enforce reproducible environments.
      </>
    ),
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 sm:py-20 reveal border-t border-slate-100 dark:border-slate-800/50 ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative mx-auto w-56 sm:w-64">
              <div className="absolute -inset-3 bg-slate-100 dark:bg-slate-800/50 rounded-2xl -z-10 rotate-2 transition-transform hover:rotate-4 duration-500" />

              <img
                src={awesomejoe}
                alt="Joel Kwihangana"
                className="aspect-square rounded-xl object-cover shadow-xl ring-1 ring-slate-900/5"
              />

              {/* Status indicator */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-900 rounded-lg p-2.5 shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">System Healthy</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-6 border border-slate-200 dark:border-slate-800">
              <Terminal className="w-3 h-3" />
              <span>Context</span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl mb-6">
              Operating at every layer
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                At TeKnowledge, I serve as a Technical Support Engineer at L2, supporting
                Carbon Black EDR, Cloud, App Control, and CASB for enterprise clients
                across EMEA. Diagnosing live production security incidents, writing post-mortems,
                and owning root-cause analysis are core to the role.
              </p>

              <p>
                Through Codacre, my software agency in Kigali, I architect and deploy
                full-stack systems for clients in Rwanda and worldwide—spanning database
                administration, API design, infrastructure configuration, and CI/CD pipelines.
                VavaSpa, EarthLink Group, EarthLink Study, and Headfam Africa are all
                in active production under this umbrella.
              </p>

              <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 my-6">
                <p className="font-mono text-xs text-slate-400 dark:text-slate-500 italic">
                  "Engineers who operate production systems under pressure develop a
                  debugging instinct that pure builders rarely have. That instinct
                  shows up every time I design something new."
                </p>
              </div>

              {/* IMS Focus Block */}
              <div className="mt-6 space-y-3">
                {imsCapabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 px-4 py-3"
                  >
                    <cap.icon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-0.5">
                        {cap.label}
                      </div>
                      <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {cap.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
