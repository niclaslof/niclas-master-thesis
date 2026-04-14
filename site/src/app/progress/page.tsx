type ChapterStatus = "done" | "partial" | "empty";

interface Chapter {
  number: number;
  title: string;
  status: ChapterStatus;
  notes: string;
}

const chapters: Chapter[] = [
  {
    number: 1,
    title: "Introduction",
    status: "done",
    notes: "Complete. Sets up research question and thesis structure.",
  },
  {
    number: 2,
    title: "Literature Survey",
    status: "empty",
    notes: "Section headings only. Needs full literature review content.",
  },
  {
    number: 3,
    title: "Background and Theory",
    status: "done",
    notes:
      "Covers signal processing (Fourier, Wavelet, Scattering Transform), feature selection, ML methods, dimensionality reduction.",
  },
  {
    number: 4,
    title: "Method",
    status: "partial",
    notes:
      "Data pipeline and datasets described. Training/evaluation methodology and experiments sections need content.",
  },
  {
    number: 5,
    title: "Results and Analysis",
    status: "partial",
    notes:
      "PCA analysis written. Confusion matrix figures need to be regenerated and added. Quantitative analysis incomplete.",
  },
  {
    number: 6,
    title: "Discussion",
    status: "empty",
    notes: "Entirely empty. Needs interpretation of results, limitations, comparison with SOTA.",
  },
  {
    number: 7,
    title: "Conclusions and Future Work",
    status: "empty",
    notes: "Entirely empty. Needs summary, contributions, future directions.",
  },
];

const statusConfig: Record<
  ChapterStatus,
  { label: string; color: string; bg: string }
> = {
  done: { label: "Complete", color: "text-success", bg: "bg-success" },
  partial: {
    label: "In Progress",
    color: "text-warning",
    bg: "bg-warning",
  },
  empty: { label: "Not Started", color: "text-danger", bg: "bg-danger" },
};

export default function ProgressPage() {
  const doneCount = chapters.filter((c) => c.status === "done").length;
  const partialCount = chapters.filter((c) => c.status === "partial").length;
  const totalChapters = chapters.length;
  const progress = Math.round(
    ((doneCount + partialCount * 0.5) / totalChapters) * 100
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-2 text-2xl font-bold">Chapter Progress</h1>
      <p className="mb-8 text-sm text-muted">
        Overview of thesis completion status.
      </p>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-muted">Overall progress</span>
          <span className="font-mono text-accent">{progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-card-border">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex gap-4 text-xs text-muted">
          <span>
            <span className="inline-block h-2 w-2 rounded-full bg-success mr-1" />
            {doneCount} complete
          </span>
          <span>
            <span className="inline-block h-2 w-2 rounded-full bg-warning mr-1" />
            {partialCount} in progress
          </span>
          <span>
            <span className="inline-block h-2 w-2 rounded-full bg-danger mr-1" />
            {totalChapters - doneCount - partialCount} not started
          </span>
        </div>
      </div>

      {/* Chapter list */}
      <div className="space-y-3">
        {chapters.map((chapter) => {
          const cfg = statusConfig[chapter.status];
          return (
            <div
              key={chapter.number}
              className="flex items-start gap-4 rounded-lg border border-card-border bg-card p-4"
            >
              <div
                className={`mt-0.5 h-3 w-3 shrink-0 rounded-full ${cfg.bg}`}
              />
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm text-accent">
                    Ch. {chapter.number}
                  </span>
                  <span className="font-semibold">{chapter.title}</span>
                  <span className={`ml-auto text-xs ${cfg.color}`}>
                    {cfg.label}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{chapter.notes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
