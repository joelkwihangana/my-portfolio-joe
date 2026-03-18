import Container from "../components/ui/Container";
import { useInView } from "../utils/useInView";
import awesomejoe from "/src/assets/images/awesome-joe.png";
import { Terminal } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 sm:py-24 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative mx-auto w-56 sm:w-72">
              {/* Decorative background element behind image */}
              <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-800/50 rounded-3xl -z-10 rotate-3 transition-transform hover:rotate-6 duration-500" />

              <img
                src={awesomejoe}
                alt="Joel Kwihangana"
                className="aspect-square rounded-2xl object-cover shadow-xl ring-1 ring-slate-900/5"
              />

              {/* Status indicator */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 rounded-xl p-3 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">System Healthy</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
              <Terminal className="w-4 h-4" />
              <span>Context</span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
              Operating at every layer
            </h2>

            <div className="space-y-5 text-lg text-slate-600 dark:text-slate-300">
              <p>
                At TeKnowledge, I work as a Technical Support Engineer at L2, supporting
                Carbon Black EDR, Cloud, App Control, and CASB for enterprise clients
                across EMEA. That means diagnosing production security incidents with real
                users affected, writing post-mortems, and staying technically accountable
                at every step.
              </p>

              <p>
                At the same time, I run Codacre, a software agency in Kigali that has
                shipped VavaSpa, EarthLink Group, EarthLink Study, and HeadFarmAfrica for
                clients in Rwanda and worldwide. Architecture decisions, backend
                development, infrastructure configuration, deployment pipelines, and
                post-launch support are all part of the same engagement.
              </p>

              <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 my-6">
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
                  "Engineers who have operated production systems under pressure develop a
                  debugging instinct that pure builders rarely have. That instinct shows
                  up every time I design something new."
                </p>
              </div>

              <p>
                The production support background is not something I'm leaving behind. It
                is the foundation that makes everything else more precise. When I build
                infrastructure now, I already know what the failure modes look like
                from the inside.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
