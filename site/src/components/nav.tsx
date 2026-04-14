"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/thesis", label: "Thesis" },
  { href: "/progress", label: "Progress" },
  { href: "/references", label: "References" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-card-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <Link href="/" className="font-mono text-sm font-bold text-accent">
          NL / Thesis
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="https://github.com/niclaslof/niclas-master-thesis"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-sm text-muted hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
