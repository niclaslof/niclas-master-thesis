"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Overview" },
  { href: "/problem", label: "Problem" },
  { href: "/plan", label: "Plan" },
  { href: "/thought-experiments", label: "Experiments" },
  { href: "/questions", label: "Questions" },
  { href: "/progress", label: "Progress" },
  { href: "/references", label: "References" },
  { href: "/thesis", label: "Thesis PDF" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="bg-[#f4f1ec]/95 dark:bg-[#0f0f0e]/95 border-b border-stone-300 dark:border-stone-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* KTH-styled logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center transition-colors font-mono text-[10px] md:text-xs font-bold tracking-wider text-white"
              style={{ background: "var(--kth-navy)" }}
            >
              KTH
            </div>
            <div
              className="text-stone-900 dark:text-stone-100 tracking-tight text-sm md:text-base leading-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Attribution <span className="italic">Validity</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 text-xs tracking-[0.05em] uppercase font-medium transition-colors relative ${
                    active
                      ? "text-stone-900 dark:text-stone-100"
                      : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                  }`}
                >
                  {l.label}
                  {active && (
                    <div
                      className="absolute bottom-0 left-3 right-3 h-0.5"
                      style={{ background: "var(--kth-navy)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <div className="hidden lg:block text-[10px] tracking-[0.15em] text-stone-500 dark:text-stone-400 uppercase font-mono ml-2">
              2026
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="lg:hidden p-2 -mr-2 text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-[#f4f1ec] dark:bg-[#0f0f0e] border-b border-stone-300 dark:border-stone-800 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
        >
          <div className="max-w-6xl mx-auto px-4 py-2">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block px-3 py-3 text-sm tracking-[0.05em] uppercase font-medium border-b border-stone-200 dark:border-stone-800 last:border-0 transition-colors ${
                    active
                      ? "text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-900"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

function BurgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}
