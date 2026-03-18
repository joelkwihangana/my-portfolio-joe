import Container from "../components/ui/Container";

const items = [
  { k: "4+ projects", v: "Delivered through Codacre" },
  { k: "100%", v: "On-time delivery" },
  { k: "EMEA coverage", v: "Enterprise security at TeKnowledge" },
  { k: "3+ industries", v: "Beauty, education, agriculture" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-slate-950/60">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.k}
              className="rounded-2xl bg-white p-4 dark:bg-slate-900/40"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.k}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
