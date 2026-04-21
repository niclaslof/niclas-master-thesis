import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <PageLayout maxWidth="max-w-6xl">
      {/* Hero */}
      <header className="mb-16 md:mb-24 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4 md:mb-6">
          KTH &middot; Master&apos;s Thesis &middot; № 2026-05
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 dark:text-stone-100 leading-[1.0] tracking-tight break-words"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Can you{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            attribute
          </span>
          <br />a song to an artist?
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 md:mt-8 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          A validity audit of output-based AI-music attribution. We ask
          whether the two foundational assumptions that industry products
          like Sureel rely on &mdash; that attribution is gradeable, and
          that embedding distance tracks causal influence &mdash; actually
          hold in practice.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
          <Link
            href="/problem"
            className="group bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-5 py-3 md:px-6 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors flex items-center gap-3"
          >
            Read the problem
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/plan"
            className="border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 px-5 py-3 md:px-6 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
          >
            See the plan
          </Link>
        </div>
      </header>

      {/* Key facts */}
      <Section number="I" title="Headline facts">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-300 dark:bg-stone-700">
          {[
            {
              label: "Supervisor",
              value: "B. L. T. Sturm",
              sub: "KTH EECS · TMH",
            },
            {
              label: "Examiner",
              value: "A. Holzapfel",
              sub: "KTH EECS",
            },
            {
              label: "Scope first",
              value: "TE I + TE II",
              sub: "Confirmed by Bob",
            },
            {
              label: "Target defender",
              value: "US 12,314,308 B2",
              sub: "Kuhn & Aykut · Sureel",
            },
          ].map((s) => (
            <div key={s.label} className="bg-white dark:bg-[#1a1918] p-6">
              <div className="text-[10px] tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase mb-3">
                {s.label}
              </div>
              <div
                className="text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Thesis question in one sentence */}
      <Section number="II" title="The thesis question">
        <Card variant="navy" size="lg">
          <p
            className="text-lg md:text-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="opacity-60 text-sm tracking-[0.2em] uppercase font-sans block mb-4">
              Research question
            </span>
            Does the kind of AI-music attribution that services like Sureel
            sell &mdash; and that STIM is about to license &mdash;{" "}
            <span className="italic">actually work in principle</span>, or
            do its two foundational assumptions fail under controlled
            scrutiny?
          </p>
        </Card>
      </Section>

      {/* Four thought experiments at a glance */}
      <Section
        number="III"
        title="Four thought experiments"
        intro="From Bob's AIMS 2026 slide 49. Each attacks a different property an attribution system would need to work. Bob scoped the first two as the starting focus."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300 dark:bg-stone-700">
          <TECard
            number="TE I"
            title="Is attribution gradeable?"
            subtitle="Or secretly 0% / 100%?"
            desc="Train an autoencoder for increasing iterations. Measure attribution at each checkpoint. Is the curve smooth or step-like?"
            priority="First priority"
            href="/thought-experiments"
          />
          <TECard
            number="TE II"
            title="Does distance equal influence?"
            subtitle="Does near = responsible?"
            desc="Fit a regressor on synthetic data. Probe how the output at a query point depends on training points at varying distances."
            priority="Second priority"
            href="/thought-experiments"
          />
          <TECard
            number="TE III"
            title="Can attribution be causally complete?"
            subtitle="Or does credit stop at the training boundary?"
            desc="Train on descendant-only corpora. Does attribution leak to ancestors the model never saw?"
            priority="Later"
            href="/thought-experiments"
          />
          <TECard
            number="TE IV"
            title="Do negative examples deserve credit?"
            subtitle='"Picasso-like" also means "Rembrandt-unlike"'
            desc="Contrastive training uses negatives. Shouldn't those training items also be 'attributed' to the output? No service credits them."
            priority="Later"
            href="/thought-experiments"
          />
        </div>
      </Section>

      {/* Quick navigation to detail pages */}
      <Section number="IV" title="Dive in">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-stone-300 dark:bg-stone-700">
          {[
            {
              href: "/problem",
              num: "01",
              title: "The problem",
              desc: "Why attribution matters, what Sureel sells, what's wrong.",
            },
            {
              href: "/plan",
              num: "02",
              title: "The plan",
              desc: "Four-week kickoff: TE I + TE II concrete experiments.",
            },
            {
              href: "/thought-experiments",
              num: "03",
              title: "Experiments",
              desc: "All four thought experiments, fully unpacked.",
            },
            {
              href: "/questions",
              num: "04",
              title: "Questions for Bob",
              desc: "The one question we need answered at the next meeting.",
            },
            {
              href: "/progress",
              num: "05",
              title: "Progress",
              desc: "Status by experiment and chapter.",
            },
            {
              href: "/references",
              num: "06",
              title: "References",
              desc: "The patent, the embedders, the foundational papers.",
            },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white dark:bg-[#1a1918] p-6 group hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-stone-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f1ec] dark:focus-visible:ring-offset-[#0f0f0e]"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                  {l.num}
                </span>
                <h3
                  className="text-lg text-stone-900 dark:text-stone-100"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {l.title}
                </h3>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 ml-7">
                {l.desc}
              </p>
              <div className="mt-4 ml-7 text-[10px] tracking-[0.15em] text-stone-900 dark:text-stone-100 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Open &rarr;
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}

function TECard({
  number,
  title,
  subtitle,
  desc,
  priority,
  href,
}: {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  priority: string;
  href: string;
}) {
  const isPriority = priority !== "Later";
  return (
    <Link
      href={href}
      className="bg-white dark:bg-[#1a1918] p-6 md:p-8 group hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors relative"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-mono text-[11px] tracking-[0.15em] text-stone-500 dark:text-stone-400 uppercase">
          {number}
        </span>
        <span
          className={`font-mono text-[9px] tracking-[0.18em] uppercase ${
            isPriority
              ? "text-white px-2 py-0.5"
              : "text-stone-400 dark:text-stone-500"
          }`}
          style={isPriority ? { background: "var(--kth-navy)" } : undefined}
        >
          {priority}
        </span>
      </div>
      <h3
        className="text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-1 leading-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h3>
      <div className="text-xs italic text-stone-500 dark:text-stone-400 mb-3">
        {subtitle}
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}
