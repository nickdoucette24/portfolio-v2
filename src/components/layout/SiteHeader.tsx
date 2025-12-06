import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-sm font-semibold text-slate-50">
          ND<span className="text-emerald-400">.</span>
        </Link>
        <nav className="flex gap-4 text-xs text-slate-300">
          <Link href="#projects" className="hover:text-emerald-300">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-emerald-300">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-emerald-300">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-emerald-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
