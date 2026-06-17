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

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">
          2. What Bob is actually working on now
        </h2>
        <div className="rounded-lg border border-card-border bg-card p-5 text-sm leading-relaxed text-muted">
          <p className="mb-3">
            Bob&apos;s AIMS 2026 presentation is about{" "}
            <strong className="text-foreground">
              output-based attribution for AI-generated music
            </strong>{" "}
            — given a track produced by a model like Suno or Udio, can you
            point at which training examples (which artists, which
            recordings) were &ldquo;responsible&rdquo;? This is the natural
            next question after his 2025 TISMIR paper on AI-music{" "}
            <em>detection</em> (Cros Vila, Sturm et al.,{" "}
            <a
              className="text-accent hover:underline"
              href="https://transactions.ismir.net/articles/10.5334/tismir.254"
            >
              The AI Music Arms Race
            </a>
            ).
          </p>
          <p className="mb-3">
            The artifact at the centre of his talk is the{" "}
            <strong className="text-foreground">Sureel patent</strong>:{" "}
            <a
              className="text-accent hover:underline"
              href="https://patents.google.com/patent/US12314308B2/en"
            >
              Kuhn &amp; Aykut, US 12,314,308 B2 (2025) — Output-based
              attribution for content generation by an AI
            </a>
            . The patent claims a system that does exactly this attribution
            using contrastive embeddings.
          </p>
          <p>
            His arc is consistent: the{" "}
            <a
              className="text-accent hover:underline"
              href="https://ieeexplore.ieee.org/document/6847693/"
            >
              2014 &ldquo;horse&rdquo; critique
            </a>{" "}
            → the{" "}
            <a
              className="text-accent hover:underline"
              href="https://archives.ismir.net/ismir2023/paper/000004.pdf"
            >
              2023 validity framework (Sturm &amp; Flexer)
            </a>{" "}
            → 2025 detection (Arms Race) → 2026 attribution. Each step asks
            the same kind of question — &ldquo;does this system actually
            measure what it claims to measure?&rdquo; — about a different
            object.
          </p>
        </div>
      </section>
    </div>
  );
}
