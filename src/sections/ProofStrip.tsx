import Container from "../components/ui/Container";

const items = [
  { k: "4+ projects", v: "Delivered through Codacre" },
  { k: "100%", v: "On-time delivery" },
  { k: "EMEA coverage", v: "Enterprise security at TeKnowledge" },
  { k: "3+ industries", v: "Beauty, education, agriculture" },
];

export default function ProofStrip() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/50">
      <Container>
        <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {items.map((item, idx) => (
              <div
                key={item.k}
                className={`flex flex-col ${
                  idx !== items.length - 1 ? "md:border-r border-slate-200 dark:border-slate-800" : ""
                } md:px-8 first:pl-0 last:pr-0`}
              >
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {item.k.split(' ')[0]}
                  <span className="text-slate-400 dark:text-slate-600 ml-1">{item.k.split(' ').slice(1).join(' ')}</span>
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
