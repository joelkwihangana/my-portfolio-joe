import Container from "../components/ui/Container";
import { useInView } from "../utils/useInView";
import awesomejoe from "/src/assets/images/awesome-joe.png";

export default function About() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 sm:py-20 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-5 md:items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative mx-auto w-56 sm:w-64">
              <img
                src={awesomejoe}
                alt="Joel Kwihangana working on backend systems"
                className="aspect-square rounded-2xl object-cover shadow-lg"
              />

              {/* subtle frame */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800" />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              About me
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I’m a backend-focused Fullstack DevOps engineer with a strong
              foundation in production systems, Linux environments, and real
              operational responsibility.
            </p>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              My work centers on building and operating backend services using
              FastAPI and Node.js, deploying them to VPS environments, and
              maintaining reliability through clean automation, debugging, and
              infrastructure awareness.
            </p>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              I care less about flashy demos and more about systems that run,
              scale reasonably, and can be debugged at 2 a.m. when something
              breaks.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
