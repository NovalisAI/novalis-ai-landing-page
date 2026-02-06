import Link from "next/link";

import { GlowButton } from "@/components/ui/GlowButton";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/#team" },
  { label: "Projects", href: "/projects" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            <span className="h-2 w-2 rounded-full bg-novalis-yellow shadow-glow-strong" />
            Novalis AI
          </Link>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-zinc-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="hidden text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white md:inline"
            >
              View Work
            </Link>
            <GlowButton href="/#contact">Get Started</GlowButton>
          </div>
        </div>
      </div>
    </header>
  );
}
