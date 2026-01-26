import Container from "../components/ui/Container";

const items = [
  { k: "3+ years", v: "Enterprise support & systems" },
  { k: "Automation", v: "Python • Bash • workflows" },
  { k: "Deployments", v: "Docker • CI/CD • cloud" },
  { k: "Security", v: "Endpoint & cloud security ops" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.k} className="rounded-2xl bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.k}</p>
              <p className="mt-1 text-sm text-slate-600">{item.v}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
