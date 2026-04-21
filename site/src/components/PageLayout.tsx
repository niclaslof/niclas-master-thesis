import { ReactNode } from "react";
import { Nav } from "./nav";

type PageLayoutProps = {
  children: ReactNode;
  maxWidth?: "max-w-3xl" | "max-w-4xl" | "max-w-5xl" | "max-w-6xl";
};

export default function PageLayout({
  children,
  maxWidth = "max-w-5xl",
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f4f1ec] dark:bg-[#0f0f0e]">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Nav />

      {/* Blueprint grid backgrounds — light + dark */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-0 dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <main
        id="main-content"
        className={`${maxWidth} mx-auto px-4 md:px-6 py-10 md:py-16 relative`}
      >
        {children}
        <DefaultFooter />
      </main>
    </div>
  );
}

function DefaultFooter() {
  return (
    <footer className="mt-20 pt-12 border-t border-stone-300 dark:border-stone-800 text-xs tracking-[0.18em] text-stone-600 dark:text-stone-300 uppercase">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-serif normal-case tracking-normal text-sm text-stone-900 dark:text-stone-100">
            KTH Royal Institute of Technology
          </span>
          <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400">
            School of EECS &middot; Master&apos;s Thesis &middot; 2026
          </span>
        </div>
        <div className="flex flex-col gap-1 items-start md:items-end text-[10px] tracking-[0.14em]">
          <span className="text-stone-500 dark:text-stone-400">
            Niclas Löfvenmark &middot; Supervisor: Bob L. T. Sturm
          </span>
          <a
            href="mailto:niclaslofvenmark@gmail.com"
            className="font-mono normal-case tracking-normal text-stone-700 dark:text-stone-200 hover:text-[color:var(--kth-navy)] transition-colors"
          >
            niclaslofvenmark@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
