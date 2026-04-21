import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Problem · Attribution Validity",
};

export default function ProblemPage() {
  return (
    <PageLayout maxWidth="max-w-5xl">
      {/* Hero */}
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Chapter One &middot; The Problem
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Who wrote this{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            AI
          </span>{" "}
          song?
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          The legal, commercial, and technical stakes of telling which
          training songs are &ldquo;responsible&rdquo; for an AI&rsquo;s output
          &mdash; and the reason this is much harder than the industry admits.
        </p>
      </header>

      {/* The setup */}
      <Section
        number="1.1"
        title="What is attribution in AI music?"
        intro={
          <>
            Generative music systems like Suno and Udio ingest massive
            catalogues of recorded music and produce new tracks on demand.
            The obvious question: when a listener hears a generated track
            that sounds like Taylor Swift, <em>should Taylor Swift be paid</em>?
            If so, how much, and how do you prove it?
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-3">
              The industry&rsquo;s answer
            </div>
            <h3
              className="text-xl text-stone-900 dark:text-stone-100 mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;Output-based attribution&rdquo;
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-200 leading-relaxed">
              A growing cluster of companies (Sureel, ProRata, WeAreMusical,
              Space Heater, Sound Patrol, Redpine) claim they can take any AI
              output and compute a percentage vector back to the training
              artists: <em>&ldquo;40% Taylor Swift, 30% Olivia Rodrigo,
              20% Lana Del Rey, 10% others.&rdquo;</em> STIM (Sweden) launched
              the world&rsquo;s first AI music license in 2025 around exactly
              this mechanism.
            </p>
          </Card>
          <Card variant="subtle">
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-3">
              Bob&rsquo;s reframe
            </div>
            <h3
              className="text-xl text-stone-900 dark:text-stone-100 mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;The best-worst thing you can do.&rdquo;
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Sturm&rsquo;s AIMS 2026 talk argues this whole category of
              product is selling a service whose foundational assumptions
              nobody has validated. It&rsquo;s the{" "}
              <em>most commercially attractive</em> thing in AI music
              right now &mdash; and the most dangerously wrong.
            </p>
          </Card>
        </div>
      </Section>

      {/* How Sureel does it */}
      <Section
        number="1.2"
        title="How Sureel actually computes attribution"
        intro={
          <>
            From US Patent 12,314,308 B2 (Kuhn &amp; Aykut, Sureel Inc.,
            filed 2023-09-06, granted 2025-05-27). The method is public
            &mdash; we read the claims.
          </>
        }
      >
        <Card size="lg">
          <ol className="space-y-6">
            {STEPS.map((s) => (
              <li key={s.step} className="flex gap-4 md:gap-6">
                <div
                  className="shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-mono text-sm font-bold text-white"
                  style={{ background: "var(--kth-navy)" }}
                >
                  {s.step}
                </div>
                <div className="flex-1 pt-1">
                  <h4
                    className="text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 text-[11px] font-mono tracking-[0.1em] text-stone-500 dark:text-stone-400">
            Named in spec: CLIP (Radford et&nbsp;al. 2021), CLAP (Wu et&nbsp;al. 2023).
            Distance: cosine similarity (default) + Orchini, Tucker, Jaccard,
            S&oslash;rensen as alternatives.
          </div>
        </Card>
      </Section>

      {/* Why it's problematic */}
      <Section
        number="1.3"
        title="Why this is a validity problem"
        intro={
          <>
            The pipeline <em>feels right</em> because embeddings and cosine
            similarity are everywhere in modern ML. But it rests on
            assumptions that have never been stress-tested for this use case.
          </>
        }
      >
        <div className="grid gap-px bg-stone-300 dark:bg-stone-700">
          {ASSUMPTIONS.map((a) => (
            <div
              key={a.id}
              className="bg-white dark:bg-[#1a1918] p-6 md:p-8 grid md:grid-cols-12 gap-4 md:gap-6"
            >
              <div className="md:col-span-2">
                <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-1">
                  Assumption
                </div>
                <div
                  className="text-2xl text-stone-900 dark:text-stone-100"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {a.id}
                </div>
              </div>
              <div className="md:col-span-5">
                <h4
                  className="text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {a.claim}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {a.industryView}
                </p>
              </div>
              <div className="md:col-span-5">
                <div
                  className="text-[10px] tracking-[0.2em] uppercase font-mono mb-2"
                  style={{ color: "var(--kth-navy)" }}
                >
                  Why it might fail
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {a.problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bob's killer demo */}
      <Section
        number="1.4"
        title="Bob&rsquo;s demonstration"
        intro="Slide 43 of the AIMS 2026 talk. Bob fed his own violin recording of a Christmas carol into CLAP with various captions. The numbers are real."
      >
        <Card variant="emphasis" size="lg">
          <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-4">
            Input &middot; Bob Sturm playing a Christmas carol on violin
          </div>
          <div className="space-y-2 font-mono text-sm">
            <ScoreRow
              score="0.999"
              label="This is a recording of Paganini"
              emphasis
            />
            <ScoreRow score="0.0004" label="This is a recording of Elvis Costello" />
            <ScoreRow score="0.0001" label="This is a recording of Elvis Presley" />
            <ScoreRow
              score="0.0002"
              label="This is not a recording of Paganini, Elvis Presley, or Elvis Costello"
            />
          </div>
          <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
            <p className="text-sm text-stone-600 dark:text-stone-200 leading-relaxed">
              CLAP is <strong>99.9% confident</strong> that Bob is Paganini.
              Reorder the captions and the score drops to 0.89 &mdash; same
              audio, different numbers. This is the classic{" "}
              <em>&ldquo;horse&rdquo;</em> pattern from Sturm 2014 and 2023:
              a system whose output is driven by something other than the
              thing it claims to be measuring.
            </p>
          </div>
        </Card>
      </Section>

      {/* Stakes */}
      <Section number="1.5" title="What&rsquo;s at stake">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 dark:bg-stone-700">
          <StakeCard
            label="Commercial"
            text="STIM is preparing to route licensing revenue through Sureel-style attribution. If it&rsquo;s unreliable, Swedish composers will be paid (or not paid) based on a broken metric."
          />
          <StakeCard
            label="Legal"
            text="Courts are beginning to weigh these tools as evidence of training-data influence. A system that calls Bob Paganini at 0.999 cannot carry that weight."
          />
          <StakeCard
            label="Scientific"
            text="If cosine-similarity attribution is ill-founded in principle, then the research community needs to say so loudly &mdash; before the industry narrative hardens."
          />
        </div>
      </Section>

      {/* Our plan */}
      <Section number="1.6" title="Our move">
        <Card variant="navy" size="lg">
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="opacity-60 text-sm tracking-[0.2em] uppercase font-sans block mb-4">
              Thesis plan, in one sentence
            </span>
            Turn Bob&rsquo;s four thought experiments into actual code,
            starting with the two he said to prioritise &mdash; and show
            empirically whether graded attribution is real (<strong>TE I</strong>)
            and whether embedding distance tracks influence (<strong>TE II</strong>).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/plan"
              className="bg-white text-stone-900 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-100 transition-colors"
            >
              See the detailed plan &rarr;
            </Link>
            <Link
              href="/thought-experiments"
              className="border border-white text-white px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-stone-900 transition-colors"
            >
              All four experiments
            </Link>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}

const STEPS = [
  {
    step: 1,
    title: "Embed the AI output",
    desc: "Run the generated clip through a pretrained model — CLAP for audio, CLIP for images — producing a single fixed-length vector.",
  },
  {
    step: 2,
    title: "Embed each creator in the training catalogue",
    desc: "Build a parallel embedding for every artist whose work sits in the training set, in the same vector space.",
  },
  {
    step: 3,
    title: "Compute cosine similarity",
    desc: "Measure the angular distance between the output vector and each creator vector. Small angle ⇒ high similarity.",
  },
  {
    step: 4,
    title: "Rank and normalise into percentages",
    desc: "Take the top-k creators (e.g. top 5 or top 10), or all creators above a threshold (e.g. ≥5%), and normalise their similarity scores to percentages summing to 100.",
  },
  {
    step: 5,
    title: "Attribute and pay",
    desc: "Emit a creator-attribution vector — e.g. Creator A: 40%, B: 30%, C: 20%, D: 10% — and distribute licensing revenue proportionally.",
  },
];

const ASSUMPTIONS = [
  {
    id: "A1",
    claim: "Attribution is gradeable",
    industryView:
      "Sureel sells outputs like \u201cCreator A: 40%, B: 30%, C: 20%, D: 10%.\u201d This requires that partial attribution is a meaningful quantity \u2014 that 40% is genuinely different from 50% in a way that reflects actual influence.",
    problem:
      "Bob's intuition (TE\u00a0I): if you train a model from random initialisation to full overfitting, attribution may jump discontinuously from 0% to 100% with no meaningful \u201cmiddle.\u201d If so, every percentage between 0 and 100 is noise dressed up as precision.",
  },
  {
    id: "A2",
    claim: "Embedding distance tracks influence",
    industryView:
      "The pipeline assumes that training items closer to the output (in cosine-similarity space) are more responsible for that output. This is the entire reason rankings convert into credit.",
    problem:
      "TE\u00a0II: regression surfaces are shaped by their whole training set, not just the local points. A distant-looking training item can still shape a model's output at a query point. If that happens even in simple regressors, CLAP's 512-dim ordering is unlikely to do better.",
  },
  {
    id: "A3",
    claim: "Credit flows through causal ancestry",
    industryView:
      "Attribution is sold as \u201cwho influenced this?\u201d \u2014 which, read literally, includes the artists who influenced the artists in the training set.",
    problem:
      "TE\u00a0III: the pipeline can only credit what it was trained on. All causal influence upstream of the training set (folk traditions, teachers, co-writers) is structurally invisible. The output looks complete but silently truncates causation.",
  },
  {
    id: "A4",
    claim: "Only positive training items deserve credit",
    industryView:
      "Attribution services credit artists whose work the model was trained to resemble. No service credits the artists whose work the model was trained to diverge from.",
    problem:
      "TE\u00a0IV: contrastive training (CLIP, CLAP) explicitly uses negative examples to push things apart. Generating \u201ca Picasso-like image\u201d is simultaneously generating \u201ca Rembrandt-unlike image.\u201d Why doesn't Rembrandt deserve credit (or anti-credit)?",
  },
];

function ScoreRow({
  score,
  label,
  emphasis = false,
}: {
  score: string;
  label: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 p-3 border-l-4 ${
        emphasis
          ? "bg-red-50 dark:bg-red-950/30 text-stone-900 dark:text-stone-100"
          : "bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400"
      }`}
      style={{
        borderLeftColor: emphasis
          ? "var(--kth-navy)"
          : "var(--card-border)",
      }}
    >
      <span
        className={`font-mono font-bold text-base md:text-lg w-20 shrink-0 ${
          emphasis ? "text-stone-900 dark:text-stone-100" : ""
        }`}
        style={emphasis ? { color: "var(--kth-navy)" } : undefined}
      >
        {score}
      </span>
      <span className="text-xs md:text-sm font-sans">&ldquo;{label}&rdquo;</span>
    </div>
  );
}

function StakeCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="bg-white dark:bg-[#1a1918] p-6">
      <div
        className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3"
        style={{ color: "var(--kth-navy)" }}
      >
        {label}
      </div>
      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
