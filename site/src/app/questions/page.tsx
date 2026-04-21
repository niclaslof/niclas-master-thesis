import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Questions for Bob · Attribution Validity",
};

export default function QuestionsPage() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          Open Questions &middot; For Bob
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What we need{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            one
          </span>{" "}
          answer on.
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          Deliberately short list. We don&rsquo;t ask questions we can
          answer ourselves. Professionally scoped by: &ldquo;would the
          answer change the work we do in the next two weeks?&rdquo;
        </p>
      </header>

      {/* The one blocking question */}
      <Section
        number="4.1"
        title="The one blocking question"
        intro="This is the single thing we need answered before TE I starts producing publishable figures."
      >
        <Card variant="navy" size="lg">
          <div className="text-[10px] tracking-[0.2em] uppercase font-mono mb-4 opacity-70">
            For next meeting &middot; ≈ 60 seconds of Bob&rsquo;s time
          </div>
          <p
            className="text-xl md:text-2xl leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            For the toy TE I / TE II setup, which &ldquo;attribution
            score&rdquo; mirrors Sureel most faithfully &mdash; cosine
            distance in the autoencoder&rsquo;s latent space, reconstruction
            MSE, or should we report both and compare?
          </p>
          <div className="text-sm opacity-90 leading-relaxed">
            <strong>Why this is the question:</strong> TE I and TE II both
            require defining what we plot on the y-axis. The patent uses
            cosine similarity, so that&rsquo;s the default. But the toy
            autoencoder has no &ldquo;creator embedding&rdquo; analogue
            &mdash; we have to pick a proxy. Bob almost certainly has a
            strong opinion.
          </div>
        </Card>
      </Section>

      {/* Likely-sufficient-to-decide-on-our-own */}
      <Section
        number="4.2"
        title="Things we will NOT ask"
        intro="Professional filter: these are choices Bob already answered implicitly, or ones where the right call is obvious from the materials."
      >
        <div className="space-y-4">
          {NOT_ASKING.map((q) => (
            <div
              key={q.q}
              className="bg-white dark:bg-[#1a1918] border border-stone-200 dark:border-stone-800 p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span
                    className="inline-block w-6 h-6 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center text-xs font-mono"
                    style={{
                      borderColor: "var(--kth-navy)",
                      color: "var(--kth-navy)",
                    }}
                  >
                    &#10003;
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-stone-500 dark:text-stone-400 mb-1">
                    Question we&rsquo;re not asking
                  </div>
                  <p
                    className="text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {q.q}
                  </p>
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase font-mono mb-1"
                    style={{ color: "var(--kth-navy)" }}
                  >
                    Our answer
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {q.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Things to flag, not ask */}
      <Section
        number="4.3"
        title="Things to flag (not decisions to make)"
        intro="These are good to mention in the meeting as &lsquo;by the way&rsquo; items so Bob isn&rsquo;t surprised later. They don&rsquo;t block work."
      >
        <div className="space-y-4">
          {TO_FLAG.map((f) => (
            <Card key={f.title} variant="subtle" size="sm">
              <div
                className="text-[10px] tracking-[0.2em] uppercase font-mono mb-2"
                style={{ color: "var(--kth-navy)" }}
              >
                For info
              </div>
              <h4
                className="text-base text-stone-900 dark:text-stone-100 mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {f.title}
              </h4>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {f.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* After TE I + TE II */}
      <Section
        number="4.4"
        title="Questions we&rsquo;ll bring once curves exist"
        intro="Held until TE I and TE II have produced real figures."
      >
        <ol className="space-y-4">
          {FUTURE_QUESTIONS.map((q, i) => (
            <li
              key={q}
              className="flex gap-4 p-5 bg-white dark:bg-[#1a1918] border border-stone-200 dark:border-stone-800"
            >
              <span
                className="font-mono text-xs shrink-0 mt-1"
                style={{ color: "var(--kth-navy)" }}
              >
                Q{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                {q}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          href="/plan"
          className="bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
        >
          &larr; Back to plan
        </Link>
        <Link
          href="/progress"
          className="border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
        >
          See progress status &rarr;
        </Link>
      </div>
    </PageLayout>
  );
}

const NOT_ASKING = [
  {
    q: "Should TE I use CLIP or CLAP as the model?",
    a: "No. Bob drew an autoencoder on slide 45 — explicit toy-model signal. CLIP/CLAP aren't trainable from scratch on one example, which is what TE I requires.",
  },
  {
    q: "Do we need to use the actual Sureel product for comparison?",
    a: "No. The patent (US 12,314,308 B2) names CLIP and CLAP as the embedders and cosine similarity as the metric. We replicate the mechanism from primary sources, not the product's API.",
  },
  {
    q: "Should we start with image or audio for TE I?",
    a: "Image first (MNIST, ~50 lines of code). Audio variant immediately after. Faster to a figure; the conceptual point is the same.",
  },
  {
    q: "Which embedder for TE II phase B?",
    a: "laion/larger_clap_music — it's the music-focused CLAP variant the industry uses, Apache-2.0 licensed, directly downloadable from Hugging Face.",
  },
  {
    q: "Should the thesis also cover Music Flamingo / Qwen2-Audio?",
    a: "Not in the first 4 weeks. They're prompted-LLM-style attribution, a different paradigm. Bob handed them over as background reading — we treat them as future-scope only.",
  },
];

const TO_FLAG = [
  {
    title: "We treat the handwritten slides as literal experimental specs",
    text: "When Bob draws f₀(x) and fM(x) we implement autoencoders. When he draws red dots we implement synthetic regression data. If our reading is wrong on any specific slide we want to know now, not in week 4.",
  },
  {
    title: "We're not planning to build a CLaMP-2 symbolic arm yet",
    text: "The symbolic (ABC-notation) parallel is interesting and probably a second thesis chapter. But it's not in the first 4 weeks — this is a conscious scope discipline, not oversight.",
  },
  {
    title: "We will replicate the Bob-as-Paganini experiment as a sanity check",
    text: "Re-running slide 43 with current CLAP weights is trivial and gives us a known anchor. If we can't reproduce Bob's 0.999 Paganini number, something's off with our setup and we'd rather find out early.",
  },
];

const FUTURE_QUESTIONS = [
  "If TE I comes out sigmoidal (against our hypothesis), what's your read — is the toy setup too simple, or does Sureel actually have a point for small models?",
  "If TE II phase B (CLAP) behaves differently from phase A (toy regressor), is the interesting finding the gap, or the CLAP behaviour in isolation?",
  "At what point should we start drafting the thesis chapter structure? After TE I, or after both TE I and TE II?",
  "Is there a TISMIR or ISMIR deadline we should aim at, or is the thesis timeline the only clock?",
  "Do you want us to make contact with Laura Cros Vila / Luca Casini about the Arms Race corpus now, or wait until TE III is actually on the horizon?",
];
