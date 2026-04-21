import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Plan · Attribution Validity",
};

export default function PlanPage() {
  return (
    <PageLayout maxWidth="max-w-5xl">
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Chapter Two &middot; The Plan
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What we&rsquo;re{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            building
          </span>
          , step by step.
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          Four-week kick-off for TE I and TE II. Concrete models,
          concrete data, concrete deliverables. No speculation about
          later phases until the first curves exist.
        </p>
      </header>

      {/* Scope assertion */}
      <Section number="2.1" title="Scope, as scoped by Bob">
        <Card variant="navy" size="lg">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3 opacity-70">
                Weeks 1&ndash;2
              </div>
              <div
                className="text-2xl mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                TE I
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Is graded attribution real, or secretly 0% / 100%?
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3 opacity-70">
                Weeks 3&ndash;4
              </div>
              <div
                className="text-2xl mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                TE II
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Does embedding distance actually track influence?
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3 opacity-70">
                Later
              </div>
              <div
                className="text-2xl mb-2 opacity-70"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                TE III &amp; TE IV
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                Gated on TE I / II results. Only planned after meeting with Bob.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* TE I detail */}
      <Section
        number="2.2"
        title="TE I &mdash; Is attribution gradeable?"
        intro={
          <>
            Bob literally drew <em>f<sub>0</sub>(x)</em> and{" "}
            <em>f<sub>M</sub>(x)</em> autoencoders on slide 45. We take
            that literally. Toy setup, tiny model, single input, trained
            from scratch.
          </>
        }
      >
        <Card size="lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4
                className="text-lg text-stone-900 dark:text-stone-100 mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Setup
              </h4>
              <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
                <Bullet>
                  <strong>Model:</strong> 2&ndash;4-layer MLP autoencoder in
                  PyTorch. ~50 lines of code.
                </Bullet>
                <Bullet>
                  <strong>Input:</strong> a single MNIST digit (fastest
                  prototype); then a 5-second audio clip with a
                  1D-conv autoencoder.
                </Bullet>
                <Bullet>
                  <strong>Sweep:</strong> train for iterations
                  M &isin; {"{"}0, 10, 100, 1k, 10k, 100k{"}"}.
                  Save a checkpoint at each.
                </Bullet>
                <Bullet>
                  <strong>Attribution score:</strong> cosine similarity in
                  latent space AND reconstruction MSE, compared side by side.
                </Bullet>
              </ul>
            </div>
            <div>
              <h4
                className="text-lg text-stone-900 dark:text-stone-100 mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Deliverable
              </h4>
              <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
                <Bullet>
                  A plot: <em>attribution score vs. training iterations</em>.
                </Bullet>
                <Bullet>
                  <strong>If the curve is sigmoidal:</strong> Sureel&rsquo;s
                  gradeability assumption survives in the toy.
                </Bullet>
                <Bullet>
                  <strong>If the curve is step-like:</strong> attribution is
                  effectively binary in this regime. Strong evidence against
                  the patent&rsquo;s &ldquo;40% / 30% / 20% / 10%&rdquo;
                  claim.
                </Bullet>
                <Bullet>
                  Show Bob at week 2 meeting.
                </Bullet>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-3">
              Why a toy autoencoder, not CLAP?
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-200 leading-relaxed">
              TE I <em>requires</em> controlling training from initialisation
              to overfitting. You cannot do that with a frozen foundation
              model. Bob drew an autoencoder; we build an autoencoder.
            </p>
          </div>
        </Card>
      </Section>

      {/* TE II detail */}
      <Section
        number="2.3"
        title="TE II &mdash; Does distance equal influence?"
        intro={
          <>
            Bob&rsquo;s slide 46 shows a regressor <em>f&#770;(x)</em> fit
            to scattered training points, asking: how does{" "}
            <em>f&#770;(x&prime;)</em> depend on data near vs. far from{" "}
            <em>x&prime;</em>? Two-phase experiment: toy first, real CLAP
            second.
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-px bg-stone-300 dark:bg-stone-700">
          <div className="bg-white dark:bg-[#1a1918] p-6 md:p-8">
            <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-3">
              Phase A &middot; Toy
            </div>
            <h4
              className="text-lg text-stone-900 dark:text-stone-100 mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              1D kernel regression
            </h4>
            <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
              <Bullet>
                Generate 20 synthetic training points along a simple 1D function.
              </Bullet>
              <Bullet>
                Fit a Gaussian-process or kernel regressor.
              </Bullet>
              <Bullet>
                Fix a query <em>x&prime;</em>. Remove training points in
                annular bands at distance{" "}
                <em>d &isin; [0, d<sub>max</sub>]</em>.
              </Bullet>
              <Bullet>
                Measure how much <em>f&#770;(x&prime;)</em> changes. Plot
                influence vs. distance.
              </Bullet>
              <Bullet>
                Does influence decay smoothly with distance (Sureel&rsquo;s
                premise), or does distant structure still shape the output?
              </Bullet>
            </ul>
          </div>
          <div className="bg-white dark:bg-[#1a1918] p-6 md:p-8">
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3"
              style={{ color: "var(--kth-navy)" }}
            >
              Phase B &middot; Real
            </div>
            <h4
              className="text-lg text-stone-900 dark:text-stone-100 mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CLAP on music
            </h4>
            <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
              <Bullet>
                Use <strong>laion/larger_clap_music</strong> &mdash; the
                same class of model the Sureel patent names.
              </Bullet>
              <Bullet>
                Build a small candidate pool (1&ndash;10k tracks, e.g.
                Free Music Archive subset).
              </Bullet>
              <Bullet>
                Generate an AI output (Suno/Udio clip). Query the pool.
                Record the ranked attribution list.
              </Bullet>
              <Bullet>
                Remove &ldquo;far&rdquo; candidates (cosine distance above
                the 90th percentile); re-query. Do the top rankings change?
              </Bullet>
              <Bullet>
                If yes: distance does not isolate influence, even in the
                model Sureel actually uses.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section number="2.4" title="Four-week timeline">
        <div className="grid gap-px bg-stone-300 dark:bg-stone-700">
          {WEEKS.map((w) => (
            <div
              key={w.week}
              className="bg-white dark:bg-[#1a1918] p-6 md:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
            >
              <div className="md:col-span-2">
                <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-1">
                  Week
                </div>
                <div
                  className="text-3xl md:text-4xl text-stone-900 dark:text-stone-100 leading-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {w.week}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-2">
                  Focus
                </div>
                <div
                  className="text-base text-stone-900 dark:text-stone-100 mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {w.focus}
                </div>
              </div>
              <div className="md:col-span-6">
                <div
                  className="text-[10px] tracking-[0.2em] uppercase font-mono mb-2"
                  style={{ color: "var(--kth-navy)" }}
                >
                  Deliverable
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {w.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech stack */}
      <Section
        number="2.5"
        title="Stack"
        intro="Everything runs on a laptop. No GPU cluster required for TE I/II."
      >
        <div className="grid md:grid-cols-3 gap-px bg-stone-300 dark:bg-stone-700">
          <TechCard
            label="Language"
            value="Python 3.11"
            sub="Jupyter for prototyping, .py for experiments"
          />
          <TechCard
            label="Models"
            value="PyTorch 2.x"
            sub="Toy autoencoders + frozen CLAP from Hugging Face"
          />
          <TechCard
            label="Embedder"
            value="laion/larger_clap_music"
            sub="Open weights, Apache 2.0, same family as Sureel's"
          />
          <TechCard
            label="Regressor"
            value="scikit-learn GP"
            sub="For TE II phase A"
          />
          <TechCard
            label="Index"
            value="FAISS CPU"
            sub="For TE II phase B retrieval"
          />
          <TechCard
            label="Plots"
            value="matplotlib"
            sub="Consistent style for thesis + this site"
          />
        </div>
      </Section>

      {/* What we will NOT do */}
      <Section
        number="2.6"
        title="What this plan deliberately does NOT include"
        intro="Scope discipline. We don't commit to anything past TE II until we have curves to show Bob."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="subtle">
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3"
              style={{ color: "var(--kth-navy)" }}
            >
              Not in the first 4 weeks
            </div>
            <ul className="space-y-2 text-sm text-stone-700 dark:text-stone-300">
              <Bullet>Training our own CLAP-style contrastive model.</Bullet>
              <Bullet>
                Using Qwen2-Audio or Music Flamingo &mdash; they&rsquo;re
                background reading, not TE I/II tools.
              </Bullet>
              <Bullet>
                Building a symbolic (CLaMP 2 / ABC-notation) pipeline.
              </Bullet>
              <Bullet>
                Running on the full Suno/Udio corpus from Bob&rsquo;s Arms
                Race paper.
              </Bullet>
            </ul>
          </Card>
          <Card variant="subtle">
            <div
              className="text-[10px] tracking-[0.2em] uppercase font-mono mb-3"
              style={{ color: "var(--kth-navy)" }}
            >
              Reasoning
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              All of the above are real thesis-scope options, but they
              come <em>after</em> TE I and TE II produce results. Bob
              scoped the first two; everything else is speculation until
              we sit down with him again. This is the difference between
              a decisive start and premature scope-creep.
            </p>
          </Card>
        </div>
      </Section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          href="/thought-experiments"
          className="bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
        >
          See all four thought experiments &rarr;
        </Link>
        <Link
          href="/questions"
          className="border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
        >
          Questions for Bob
        </Link>
      </div>
    </PageLayout>
  );
}

const WEEKS = [
  {
    week: "01",
    focus: "TE I prototype (image)",
    deliverable:
      "Tiny autoencoder on one MNIST digit. Attribution-vs-iterations curve plotted. First candidate figure for the thesis.",
  },
  {
    week: "02",
    focus: "TE I audio variant",
    deliverable:
      "Same sweep on a 5-second audio clip with a 1D-conv autoencoder. Compare shape of curve vs. image. Show Bob at end-of-week meeting.",
  },
  {
    week: "03",
    focus: "TE II phase A",
    deliverable:
      "1D kernel-regression distance-vs-influence probe. Plot influence as a function of distance. Clean toy result.",
  },
  {
    week: "04",
    focus: "TE II phase B",
    deliverable:
      "Frozen CLAP (laion/larger_clap_music) on 1\u201310k music tracks. Demonstrate (or not) that the toy failure transfers to the real embedder Sureel names.",
  },
];

function TechCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white dark:bg-[#1a1918] p-6">
      <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-2">
        {label}
      </div>
      <div
        className="text-lg text-stone-900 dark:text-stone-100 mb-1"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {value}
      </div>
      <div className="text-xs text-stone-500 dark:text-stone-400">{sub}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className="shrink-0 mt-2 w-1 h-1"
        style={{ background: "var(--kth-navy)" }}
      />
      <span>{children}</span>
    </li>
  );
}
