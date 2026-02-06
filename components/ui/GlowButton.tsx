import Link from "next/link";
import type { ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function GlowButton({ href, children, className }: GlowButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white shadow-glow transition hover:scale-[1.02] ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-novalis-orange via-novalis-yellow to-novalis-orange" />
      </span>
      <span
        aria-hidden
        className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-novalis-orange to-novalis-yellow opacity-40 blur transition duration-300 group-hover:opacity-80"
      />
    </Link>
  );
}
