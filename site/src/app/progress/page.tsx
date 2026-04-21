import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Progress · Attribution Validity",
};

type Status = "done" | "in-progress" | "planned" | "blocked";

interface Milestone {
  id: string;
  week: string;
  title: string;
  status: Status;
  notes: string;
}

const experiments: Milestone[] = [
  {
    id: "te1-mnist",
    week: "Week 1",
    title: "TE I — autoencoder sweep on MNIST",
    status: "planned",
    notes:
      "Tiny MLP autoencoder, single digit, iteration sweep {0, 10, 100, 1k, 10k, 100k}. Plot cosine + MSE attribution vs. iterations.",
  },
  {
    id: "te1-audio",
    week: "Week 2",
    title: "TE I — audio variant",
    status: "planned",
    notes:
      "1D-conv autoencoder on a 5-second clip. Same sweep. Compare curve shape vs. image case. First Bob check-in.",
  },
  {
    id: "te2-toy",
    week: "Week 3",
    title: "TE II — toy regressor distance probe",
    status: "planned",
    notes:
      "1D Gaussian-process regression. Annular-band training-data ablation. Plot Δf̂(x′) vs. distance d.",
  },
  {
    id: "te2-clap",
    week: "Week 4",
    title: "TE II — CLAP distance probe",
    status: "planned",
    notes:
      "laion/larger_clap_music + 1–10k music candidate pool. Re-rank after removing far candidates. Check top-k stability.",
  },
  {
    id: "te2-sanity",
    week: "Alongside wk 3–4",
    title: "Sanity — replicate Bob's Paganini example",
    status: "planned",
    notes:
      "Feed a violin clip into CLAP with the caption permutations from slide 43. Confirm we reproduce Bob's scores.",
  },
];

const chapters: Milestone[] = [
  {
    id: "ch-intro",
    week: "Ch. 1",
    title: "Introduction",
    status: "planned",
    notes:
      "Rewrite against new thesis question. Target 6–8 pages. Due after Week 2 figures exist.",
  },
  {
    id: "ch-bg",
    week: "Ch. 2",
    title: "Background — CLIP, CLAP, cosine attribution",
    status: "planned",
    notes:
      "Re-read + synthesise Radford 2021, Wu 2023, Kuhn & Aykut 2025. Lay out the pipeline formally.",
  },
  {
    id: "ch-problem",
    week: "Ch. 3",
    title: "Problem — validity critique",
    status: "planned",
    notes:
      "Formalise the four thought experiments from the presentation into propositions with notation.",
  },
  {
    id: "ch-te1",
    week: "Ch. 4",
    title: "TE I results",
    status: "planned",
    notes:
      "Toy autoencoder sweep. Main figure: attribution-vs-iterations curve.",
  },
  {
    id: "ch-te2",
    week: "Ch. 5",
    title: "TE II results",
    status: "planned",
    notes:
      "Toy regressor + CLAP distance probe. Main figure: influence-vs-distance.",
  },
  {
    id: "ch-discussion",
    week: "Ch. 6",
    title: "Discussion",
    status: "planned",
    notes:
      "What TE I + TE II mean for the Sureel patent claim. Limitations. Link to TE III / TE IV as future work.",
  },
  {
    id: "ch-conclusion",
    week: "Ch. 7",
    title: "Conclusions & future work",
    status: "planned",
    notes:
      "Short chapter. Bridge to TE III / TE IV, symbolic (CLaMP 2), and audio-LLM (Qwen / Music Flamingo) extensions.",
  },
];

export default function ProgressPage() {
  return (
    <PageLayout maxWidth="max-w-5xl">
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Log &middot; Live Status
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What&rsquo;s{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            done
          </span>{" "}
          and what&rsquo;s next.
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          Tracked by experiment, not by chapter (chapters follow once the
          experiments produce figures). Nothing is marked done until it has
          a plot Bob could look at.
        </p>
      </header>

      {/* Scope-reset banner */}
      <div className="mb-12">
        <Card variant="emphasis" size="md">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-mono px-3 py-1.5 inline-block text-white self-start"
              style={{ background: "var(--kth-navy)" }}
            >
              Scope reset &middot; 2026-04-21
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
              Thesis topic pivoted from instrument recognition (MusicNN vs.
              Scattering Transform) to a validity audit of AI-music
              attribution. New scope and plan driven by Sturm&rsquo;s
              AIMS 2026 talk and curated reading list.
            </p>
          </div>
        </Card>
      </div>

      <Section number="5.1" title="Experiments">
        <MilestoneList items={experiments} />
      </Section>

      <Section
        number="5.2"
        title="Thesis chapters"
        intro="Planned structure. Drafting starts after experiments produce figures."
      >
        <MilestoneList items={chapters} />
      </Section>

      <Section number="5.3" title="Status key">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-300 dark:bg-stone-700">
          {[
            { s: "done" as Status, label: "Done", desc: "Figure exists and Bob-viewable." },
            { s: "in-progress" as Status, label: "In progress", desc: "Code running, not yet a plot." },
            { s: "planned" as Status, label: "Planned", desc: "Scheduled, not started." },
            { s: "blocked" as Status, label: "Blocked", desc: "Needs Bob input or external access." },
          ].map((k) => (
            <div key={k.s} className="bg-white dark:bg-[#1a1918] p-4">
              <div className="flex items-center gap-2 mb-2">
                <StatusDot status={k.s} />
                <span className="text-xs font-mono tracking-[0.15em] uppercase text-stone-700 dark:text-stone-200">
                  {k.label}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400">{k.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}

function MilestoneList({ items }: { items: Milestone[] }) {
  return (
    <div className="grid gap-px bg-stone-300 dark:bg-stone-700">
      {items.map((m) => (
        <div
          key={m.id}
          className="bg-white dark:bg-[#1a1918] p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start"
        >
          <div className="md:col-span-2 flex items-center gap-3">
            <StatusDot status={m.status} />
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400">
              {m.week}
            </span>
          </div>
          <div className="md:col-span-5">
            <h4
              className="text-base text-stone-900 dark:text-stone-100"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {m.title}
            </h4>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {m.notes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusDot({ status }: { status: Status }) {
  const map: Record<Status, { color: string; label: string }> = {
    done:         { color: "var(--success)", label: "Done" },
    "in-progress":{ color: "var(--warning)", label: "In progress" },
    planned:      { color: "var(--planned)", label: "Planned" },
    blocked:      { color: "var(--danger)",  label: "Blocked" },
  };
  const s = map[status];
  return (
    <span
      aria-label={s.label}
      title={s.label}
      className="inline-block w-2.5 h-2.5 shrink-0"
      style={{ background: s.color, borderRadius: "9999px" }}
    />
  );
}
