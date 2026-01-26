import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <span
            className="h-9 w-9 rounded-xl bg-slate-900"
            aria-hidden="true"
          />
          <span className="font-semibold tracking-tight">Joel Kwihangana</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#work">
            Work
          </a>
          <a className="hover:text-slate-900" href="#skills">
            Skills
          </a>
          <a className="hover:text-slate-900" href="#about">
            About
          </a>
          <a className="hover:text-slate-900" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/Joel-Kwihangana-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block"
          >
            <Button variant="secondary">Resume</Button>
          </a>

          <a href="#contact" className="hidden md:block">
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
      </Container>
    </header>
  );
}
