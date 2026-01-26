export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
        © {new Date().getFullYear()} Joel Kwihangana. Built with React +
        Tailwind.
      </div>
    </footer>
  );
}
