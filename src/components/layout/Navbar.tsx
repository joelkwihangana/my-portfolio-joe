import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white"
            aria-hidden="true"
          >
            JK
          </span>
          <span className="font-semibold tracking-tight text-slate-900">
            Joel Kwihangana
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="hover:text-slate-900"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/Joel-Kwihangana-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">Resume</Button>
          </a>

          <a href="#contact">
            <Button variant="secondary">Book a chat</Button>
          </a>

          <a
            href="https://github.com/joelkwihangana"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost">GitHub</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 grid gap-2">
                <a
                  href="/Joel-Kwihangana-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full" variant="secondary">
                    Resume
                  </Button>
                </a>

                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button className="w-full" variant="secondary">
                    Book a chat
                  </Button>
                </a>

                <a
                  href="https://github.com/joelkwihangana"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full" variant="ghost">
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
