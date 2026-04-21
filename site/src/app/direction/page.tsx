export default function DirectionPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-2 text-2xl font-bold">Proposed direction</h1>
      <p className="mb-8 text-sm text-muted">
        Where the thesis currently stands, why the MusicNN comparison is
        weaker than it looked in 2024, and a reframing that plugs into Bob&apos;s
        current research.
      </p>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">
          1. What the thesis currently compares
        </h2>
        <div className="rounded-lg border border-card-border bg-card p-5 text-sm leading-relaxed text-muted">
          <p className="mb-3">
            The original plan was a head-to-head comparison of two paradigms
            of audio features for music instrument recognition:{" "}
            <strong className="text-foreground">
              the Scattering Transform
            </strong>{" "}
            (designed, mathematically characterised invariants) vs.{" "}
            <strong className="text-foreground">
              MusicNN penultimate-layer activations
            </strong>{" "}
            (features learned by a CNN trained on the MSD / MTT tagging
            tasks), with KNN and SVM classifiers on the ESSID dataset
            (2,755 samples, 7 instruments) plus a small custom YouTube
            corpus.
          </p>
          <p>
            The framing of the research question is:{" "}
            <em>which feature family is more accurate?</em> That framing is
            the problem — both in terms of the choice of learned model and
            in terms of what the thesis would actually be contributing.
          </p>
        </div>
      </section>
    </div>
  );
}
