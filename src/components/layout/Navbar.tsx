export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="font-semibold">Joel</span>
        <nav className="flex gap-4 text-sm text-slate-600">
          <a href="#work" className="hover:text-slate-900">
            Work
          </a>
          <a href="#skills" className="hover:text-slate-900">
            Skills
          </a>
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
