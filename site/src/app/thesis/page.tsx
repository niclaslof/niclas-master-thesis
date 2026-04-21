import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Thesis PDF · Attribution Validity",
};

export default function ThesisPage() {
  return (
    <PageLayout maxWidth="max-w-6xl">
      <header className="mb-10 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Manuscript &middot; Compiled PDF
        </div>
        <h1
          className="text-3xl md:text-5xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          The thesis, as it{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            stands
          </span>
          .
        </h1>
        <div
          className="mt-6 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-sm md:text-base text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          Latest compiled LaTeX. The current PDF still reflects the
          pre-pivot scope; a rewrite is in progress once TE I / TE II
          produce figures.
        </p>
      </header>

      <div className="relative bg-white dark:bg-[#1a1918] border border-stone-200 dark:border-stone-800">
        <span
          aria-hidden="true"
          className="absolute w-3 h-3 border-stone-900 dark:border-stone-100 top-0 left-0 border-l-2 border-t-2"
        />
        <span
          aria-hidden="true"
          className="absolute w-3 h-3 border-stone-900 dark:border-stone-100 top-0 right-0 border-r-2 border-t-2"
        />
        <span
          aria-hidden="true"
          className="absolute w-3 h-3 border-stone-900 dark:border-stone-100 bottom-0 left-0 border-l-2 border-b-2"
        />
        <span
          aria-hidden="true"
          className="absolute w-3 h-3 border-stone-900 dark:border-stone-100 bottom-0 right-0 border-r-2 border-b-2"
        />

        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 px-5 py-3">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400">
            thesis.pdf &middot; latest build
          </span>
          <a
            href="/thesis.pdf"
            download
            className="text-[10px] tracking-[0.15em] uppercase font-medium text-white px-3 py-1.5 transition-colors hover:opacity-90"
            style={{ background: "var(--kth-navy)" }}
          >
            Download &darr;
          </a>
        </div>
        <iframe
          src="/thesis.pdf"
          className="h-[80vh] w-full"
          title="Thesis PDF Viewer"
        />
      </div>
    </PageLayout>
  );
}
