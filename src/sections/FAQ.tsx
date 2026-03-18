import { useState } from "react";
import Container from "../components/ui/Container";
import { ChevronDown } from "lucide-react";
import { useInView } from "../utils/useInView";
import { staggerDelayMs } from "../utils/stagger";

const faqs = [
  {
    id: "q1",
    q: "What's your strongest technical skill and where have you applied it in production?",
    a: "Production systems diagnosis. At TeKnowledge, I support Carbon Black EDR, Cloud, App Control, and CASB for enterprise clients across EMEA, which means reading telemetry, isolating failures, and resolving incidents while users are actively affected. Through Codacre, I have also built and operated the infrastructure those client products run on: FastAPI backends on Linux VPS with Nginx, PostgreSQL with connection pooling, Docker containers, and GitHub Actions pipelines.",
  },
  {
    id: "q2",
    q: "Can you handle both infrastructure and frontend development?",
    a: "Yes. Codacre's client work covers both. VavaSpa and EarthLink Study include full React and TypeScript frontends that are live in production. EarthLink Group runs on a FastAPI backend with Nginx reverse proxy and PostgreSQL on a Linux VPS that I deployed and continue to operate. Most engineers live on one side of that line. I work across both because the projects have required it, and because the architecture decisions at each layer affect the other.",
  },
  {
    id: "q3",
    q: "What's your experience with cloud platforms?",
    a: "AWS is my primary cloud environment. I have provisioned EC2 compute, configured S3 storage, set IAM access policies, defined VPC networking, and written Lambda functions for event-driven work. I run containerized services with Docker and have deployed Kubernetes clusters. Most Codacre client infrastructure runs on Linux VPS environments managed with the same infrastructure-as-code discipline.",
  },
  {
    id: "q4",
    q: "Do you work with teams or independently?",
    a: "Both. At Codacre I lead the team that plans, builds, and ships client projects from discovery through launch and post-launch support. At TeKnowledge I operate in a global, cross-functional environment covering EMEA clients, working alongside engineering, account management, and customer success teams. Independent execution and team coordination are both regular parts of the work.",
  },
  {
    id: "q5",
    q: "Are you available for freelance or contract work?",
    a: "Yes, through Codacre. We take on website, system, and software projects for businesses in Rwanda and worldwide. The engagement starts with a discovery conversation to understand the goal, followed by a written proposal with exact scope and pricing. Build work begins once the brief is agreed. Visit codacre.com or email info@codacre.com to start.",
  },
  {
    id: "q6",
    q: "What industries have you worked in?",
    a: "Cybersecurity and enterprise security at TeKnowledge, supporting the full Carbon Black product suite. Through Codacre: beauty and wellness (VavaSpa), education and professional services (EarthLink Group, EarthLink Study), and agriculture in Africa (HeadFarmAfrica). Four sectors, four different product requirements, same engineering standards across all of them.",
  },
  {
    id: "q7",
    q: "How do you approach a system you've never seen before?",
    a: "Start with observable state: logs, metrics, and what the system is actually doing versus what it is supposed to be doing. Read the documentation or talk to the team to understand expected behavior, then isolate where actual diverges from expected. Form a specific hypothesis about the cause, test it narrowly without making multiple changes at once, and verify the fix by confirming the expected behavior returns. I have done this under pressure with real user impact at TeKnowledge. The method does not change with the environment.",
  },
  {
    id: "q8",
    q: "What is Codacre and how does it relate to your engineering work?",
    a: "Codacre is a software agency I founded, based in Kigali, Rwanda, building websites, systems, and automation for businesses in Rwanda and worldwide. We have delivered 4+ projects across 3+ industries with 100% on-time delivery. Services include Web and Software Development, DevOps and Automation, IT Consulting, Digital Marketing, and more. Every project I deliver through Codacre is something I have designed, built, and shipped myself, so the engineering quality and the business accountability sit in the same place.",
  },
  {
    id: "q9",
    q: "You're based in Rwanda. Do you work with international clients?",
    a: "Yes, by design. Codacre explicitly serves clients worldwide, and my engineering work at TeKnowledge covers EMEA clients. The work is remote-first and has always been. Kigali is where Codacre is headquartered. The client base is wherever the projects are.",
  },
  {
    id: "q10",
    q: "What credentials or track record do you have?",
    a: "Best Performing Engineer award, TeKnowledge EMEA, Q4 2024. Delivered automation improvements that reduced manual work by 25% and improved mean time to resolution by 15%. Through Codacre: VavaSpa delivered in 6 weeks with 100% client approval and 3x more enquiries after launch. EarthLink Group and EarthLink Study are both live in production. HeadFarmAfrica shipped on schedule. The track record is in production systems and client outcomes, not certifications.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const answerId = `${faq.id}-answer`;

  return (
    <div
      style={{ transitionDelay: `${staggerDelayMs(index, 60)}ms` }}
      className={`border-l-2 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800 ${
        open
          ? "border-l-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/5"
          : "border-l-transparent hover:bg-slate-50 dark:hover:bg-slate-900/40"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-6 py-6 px-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset rounded-sm"
      >
        <span className="font-medium text-slate-900 dark:text-white text-base leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={answerId}
        role="region"
        className="grid"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 280ms ease",
        }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="questions"
      className={`py-20 sm:py-28 reveal ${inView ? "in" : ""}`}
    >
      <Container>
        <div className="max-w-[720px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Before you reach out
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Answers to what most people want to know.
            </p>
          </div>

          <div
            className={`border-t border-slate-200 dark:border-slate-800 stagger-faq ${
              inView ? "in" : ""
            }`}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
