import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Thought Experiments · Attribution Validity",
};

export default function ThoughtExperimentsPage() {
  return (
    <PageLayout maxWidth="max-w-5xl">
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Chapter Three &middot; Experiments
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Four ways to{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            break
          </span>{" "}
          attribution.
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          From Sturm&rsquo;s AIMS 2026 slide 49. Each thought experiment
          attacks a different property an attribution system would need to
          work. Separately they&rsquo;re publishable. Together they form an
          impossibility argument.
        </p>
      </header>

      {/* Unifying argument */}
      <Section number="3.0" title="How they chain together">
        <Card size="lg">
          <p className="text-sm md:text-base text-stone-600 dark:text-stone-200 leading-relaxed mb-6">
            A working &ldquo;output-based attribution&rdquo; system needs{" "}
            <strong>all four</strong> of these properties to hold
            simultaneously: the credit must be gradeable, the distance
            metric must track influence, credit must flow through causal
            ancestry, and negative training signal must be accounted for.
            Each thought experiment argues that one of these properties
            fails &mdash; and any single failure kills the whole pipeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-stone-300 dark:bg-stone-700">
            {TE_OVERVIEW.map((te) => (
              <div
                key={te.id}
                className="bg-white dark:bg-[#1a1918] p-4 md:p-5"
              >
                <div
                  className="text-[10px] tracking-[0.2em] uppercase font-mono mb-2"
                  style={{ color: "var(--kth-navy)" }}
                >
                  {te.id}
                </div>
                <div
                  className="text-sm text-stone-900 dark:text-stone-100 mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {te.property}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {te.short}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* TE I */}
      <TEBlock
        id="te-1"
        number="TE I"
        status="First priority"
        title="Is attribution gradeable?"
        claim="Attribution may be an all-or-nothing property, not a smooth percentage."
        setup={[
          "Start with an autoencoder f\u2080(x) with random (untrained) weights. Feed it input x. Output is noise. Intuitive attribution: 0 %.",
          "Now train f\u2096(x) to convergence on a single input x. The autoencoder memorises x and reproduces it exactly. Intuitive attribution: 100 %.",
          "Sweep training iterations k \u2208 {0, 10, 100, 1\u202fk, 10\u202fk, \u2026, M}. Plot an attribution measure (cosine similarity in latent, reconstruction MSE) at each step."
        ]}
        what="A curve from 0 % to 100 % as a function of training iterations."
        why="Sureel sells percentages. If the curve turns out to be sharply step-like \u2014 long stretches of 0 %, a near-instant jump to 100 %, nothing meaningful in between \u2014 then the percentages Sureel assigns are a numerical fiction."
        bob="Slide 45: Bob draws a sigmoid with a question mark in the middle, labelled \u201c(all or nothing).\u201d That is literally the hypothesis we are testing."
      />

      {/* TE II */}
      <TEBlock
        id="te-2"
        number="TE II"
        status="Second priority"
        title="Does distance equal influence?"
        claim="Training data far from a query point may still influence the model's output at that point. Nearest-neighbour in embedding space is not the same as &ldquo;most responsible.&rdquo;"
        setup={[
          "Generate synthetic training data with known structure along a 1D or 2D manifold.",
          "Fit a regressor \u0302f (Gaussian process or small MLP).",
          "Fix a query point x\u2032. Perturb training points at varying distances d from x\u2032. Measure how \u0302f(x\u2032) changes as a function of d.",
          "Repeat with the CLAP embedder + a real music candidate pool: remove the top 10 % most-distant candidates from the index and check whether the top-k attribution rankings stay stable."
        ]}
        what="A plot of influence on output vs. distance from query. If the function is anything other than a smooth decay, distance rankings cannot stand in for responsibility."
        why="Sureel's ranking step (sort training creators by cosine distance, pay out proportionally) only works if near \u21d2 responsible and far \u21d2 not. TE II tests that exact assumption \u2014 both in a toy regressor and in the real embedder."
        bob="Slide 46: regressor curve with scattered training points, annotated \u201cHow does \u0302f(x) depend on data near vs. far?\u201d"
      />

      {/* TE III */}
      <TEBlock
        id="te-3"
        number="TE III"
        status="Later"
        title="Can attribution capture causal ancestry?"
        claim="Any training-data attribution system can only credit what's in its training set. Everything upstream of the training set \u2014 teachers, genres, co-writers, folk traditions \u2014 is invisible, even when it shaped the output causally."
        setup={[
          "Build a known influence graph: artist A is influenced by B, C; C is influenced by F, G.",
          "Train a generator only on A.",
          "Generate output. Query attribution against a catalogue containing A, B, C, F, G.",
          "Measure: does attribution correctly stop at A? Does credit leak to ancestors despite them being unseen? What about siblings of A that happen to share features?"
        ]}
        what="A clear answer to whether attribution, as currently defined, is causally truncated."
        why="The industry phrase \u201cidentifying what influenced this output\u201d sounds like causal provenance. In practice the pipeline can only ever see the direct training set. If credit incorrectly flows (or fails to flow) to ancestors, the legal/commercial framing of attribution falls apart."
        bob="Slide 47: influence DAG with A at the top, and the question \u201cWill an attribution to A also attribute D, E, F? What about B's, G?\u201d"
      />

      {/* TE IV */}
      <TEBlock
        id="te-4"
        number="TE IV"
        status="Later"
        title="Do negative examples also deserve attribution?"
        claim="Contrastive training (CLIP, CLAP) explicitly uses negative examples to push dissimilar things apart in embedding space. Generating something &lsquo;Picasso-like&rsquo; is simultaneously generating something &lsquo;Rembrandt-unlike&rsquo;. Why doesn't Rembrandt deserve credit?"
        setup={[
          "Train a small contrastive model on a known split: class A positives, class B negatives.",
          "Generate an output optimised to be \u201cA-like\u201d.",
          "Run the attribution pipeline. Does it notice class B at all?",
          "Optionally inject class B samples at varying strengths. Track how much the output shifts."
        ]}
        what="A demonstration of whether (and how much) negative training examples shape outputs \u2014 and whether any attribution pipeline accounts for them."
        why="Every Sureel-style product credits only positive training examples. But contrastive pretraining, by construction, makes the output just as dependent on what it's pushed away from as what it's pulled toward. If negatives shape outputs and no service credits them, the social contract around AI music licensing is missing a third of the picture."
        bob="Slide 48: contrastive diagram with a Picasso positive and Rembrandt negatives, annotated \u201cGenerating a Picasso-like image is also generating a Rembrandt-unlike image.\u201d"
      />

      {/* Summary quote */}
      <Section number="3.5" title="Sturm&rsquo;s own summary">
        <Card variant="emphasis" size="lg">
          <div
            className="text-[10px] tracking-[0.2em] uppercase font-mono mb-4"
            style={{ color: "var(--kth-navy)" }}
          >
            AIMS 2026 &middot; Slide 49 &middot; handwritten
          </div>
          <ol
            className="space-y-3 text-base md:text-lg text-stone-900 dark:text-stone-100 leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <li>
              1. Attribution seems like an &ldquo;all or none&rdquo;
              characteristic.
            </li>
            <li>
              2. Inference may be influenced by far-away data.
            </li>
            <li>
              3. Similarities of embeddings cannot capture the causal
              nature of influence.
            </li>
            <li>
              4. &ldquo;Negative examples&rdquo; in training also influence
              inference, and so seem to deserve &ldquo;attribution.&rdquo;
            </li>
          </ol>
        </Card>
      </Section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          href="/plan"
          className="bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
        >
          &larr; Detailed plan for TE I &amp; II
        </Link>
        <Link
          href="/questions"
          className="border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
        >
          Questions for Bob &rarr;
        </Link>
      </div>
    </PageLayout>
  );
}

const TE_OVERVIEW = [
  { id: "TE I",   property: "Gradeability",    short: "Percentages are meaningful" },
  { id: "TE II",  property: "Locality",        short: "Near ≈ responsible" },
  { id: "TE III", property: "Causal coverage", short: "Credit flows to ancestors" },
  { id: "TE IV",  property: "Completeness",    short: "Negative examples count" },
];

function TEBlock({
  id,
  number,
  status,
  title,
  claim,
  setup,
  what,
  why,
  bob,
}: {
  id: string;
  number: string;
  status: string;
  title: string;
  claim: string;
  setup: string[];
  what: string;
  why: string;
  bob: string;
}) {
  const isPriority = status !== "Later";
  return (
    <section id={id} className="mb-20 md:mb-24 scroll-mt-24">
      <div className="flex items-baseline gap-4 mb-6 flex-wrap">
        <span
          className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] px-2 py-0.5 text-white"
          style={{
            background: isPriority ? "var(--kth-navy)" : "var(--muted)",
          }}
        >
          {number}
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400">
          {status}
        </span>
      </div>
      <h2
        className="text-2xl md:text-4xl text-stone-900 dark:text-stone-100 leading-tight mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      <p className="text-base md:text-lg text-stone-700 dark:text-stone-200 leading-relaxed max-w-3xl mb-8">
        <strong
          className="block text-[10px] tracking-[0.2em] uppercase font-sans text-stone-500 dark:text-stone-400 mb-2"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Claim
        </strong>
        <span style={{ fontFamily: "var(--font-serif)" }}>{claim}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-px bg-stone-300 dark:bg-stone-700">
        <div className="bg-white dark:bg-[#1a1918] p-6 md:p-8">
          <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-4">
            Setup
          </div>
          <ol className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
            {setup.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="font-mono text-xs shrink-0 mt-0.5"
                  style={{ color: "var(--kth-navy)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white dark:bg-[#1a1918] p-6 md:p-8 flex flex-col gap-6">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-2">
              What we measure
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-200 leading-relaxed">
              {what}
            </p>
          </div>
          <div>
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-mono mb-2"
              style={{ color: "var(--kth-navy)" }}
            >
              Why it breaks Sureel
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-200 leading-relaxed">
              {why}
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-1">
              Source in Bob&rsquo;s talk
            </div>
            <p className="text-xs italic text-stone-500 dark:text-stone-400 leading-relaxed">
              {bob}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
