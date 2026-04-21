import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

export const metadata = {
  title: "References · Attribution Validity",
};

interface Reference {
  key: string;
  authors: string;
  title: string;
  venue: string;
  year: number;
  url?: string;
  relevance: string;
  tag: Tag;
}

type Tag =
  | "primary"
  | "embedder"
  | "industry"
  | "policy"
  | "supervisor"
  | "adjacent";

const references: Reference[] = [
  // Primary target
  {
    key: "kuhn2025",
    authors: "C. B. Kuhn & T. Aykut",
    title: "Output-based attribution for content generation by an AI",
    venue: "US Patent 12,314,308 B2 · Sureel Inc.",
    year: 2025,
    url: "https://patents.google.com/patent/US12314308B2/en",
    relevance:
      "The central artefact this thesis audits. Names CLIP and CLAP as embedders and cosine similarity as the metric. Provides the exact pipeline (steps 1–5) we replicate and critique.",
    tag: "primary",
  },
  // Embedders named by the patent
  {
    key: "radford2021",
    authors: "A. Radford et al.",
    title: "Learning transferable visual models from natural language supervision",
    venue: "arXiv:2103.00020",
    year: 2021,
    url: "https://arxiv.org/abs/2103.00020",
    relevance:
      "CLIP — contrastive text+image pretraining. Named explicitly in the Sureel patent and the direct ancestor of CLAP. Canonical reference for embedding-space attribution.",
    tag: "embedder",
  },
  {
    key: "wu2023",
    authors: "Y. Wu et al.",
    title:
      "Large-scale contrastive language-audio pretraining with feature fusion and keyword-to-caption augmentation",
    venue: "ICASSP 2023",
    year: 2023,
    url: "https://arxiv.org/abs/2211.06687",
    relevance:
      "CLAP — audio analogue of CLIP. Named explicitly in the Sureel patent. Training data dominated by non-music sounds (ambulance, dental surgery) — itself a validity issue for music attribution.",
    tag: "embedder",
  },
  // Alternative embedders Bob pointed at
  {
    key: "li2024mert",
    authors: "Y. Li et al.",
    title: "MERT: Acoustic music understanding model with large-scale self-supervised training",
    venue: "ICLR 2024",
    year: 2024,
    url: "https://arxiv.org/abs/2306.00107",
    relevance:
      "HuBERT-style self-supervised music transformer (95M / 330M params). Plausible modern replacement for CLAP in an attribution pipeline.",
    tag: "embedder",
  },
  {
    key: "muqmulan2025",
    authors: "Tencent AI Lab",
    title: "MuQ-MuLan: Music-specialised CLAP",
    venue: "IEEE/ACM TASLP 2025",
    year: 2025,
    relevance:
      "Music-focused CLAP variant that Bob explicitly sent as a reference. Beats LAION-CLAP on zero-shot music tagging (MagnaTagATune ROC-AUC 79.3 vs 73.9).",
    tag: "embedder",
  },
  {
    key: "qwen2audio",
    authors: "Alibaba / Qwen team",
    title: "Qwen2-Audio",
    venue: "Technical report 2024",
    year: 2024,
    relevance:
      "Prompted audio-LLM alternative to embedder-style attribution. Apache-like (Tongyi) license. Relevant for a future TE III/IV chapter, not TE I/II.",
    tag: "embedder",
  },
  {
    key: "musicflamingo",
    authors: "NVIDIA ADLR",
    title: "Music Flamingo",
    venue: "arXiv:2511.10289, NVIDIA project page",
    year: 2025,
    url: "https://research.nvidia.com/labs/adlr/MF/",
    relevance:
      "Music-focused audio-LLM (8B params). Bob sent the URL directly. NSynth 80.76 %, Medley-Solos-DB 90.86 %. Non-commercial research license. Future-scope.",
    tag: "embedder",
  },
  // Industry / product players
  {
    key: "sureel-site",
    authors: "Sureel Inc.",
    title: "Attribution Share is the New Market Share (blog)",
    venue: "sureel.ai",
    year: 2025,
    url: "https://www.sureel.ai/blog/attribution-share-is-the-new-market-share",
    relevance:
      "The product-facing pitch corresponding to the patent. Describes four offerings: Attribution Likelihood, Output Attribution, Attribution Share, Realtime Attribution Reporting.",
    tag: "industry",
  },
  {
    key: "prorata-umg",
    authors: "Universal Music Group / ProRata",
    title: "ProRata invents generative-AI attribution technology…",
    venue: "UMG press release",
    year: 2024,
    url: "https://www.universalmusic.com/prorata-invents-generative-ai-attribution-technology-to-compensate-and-credit-content-owners-while-facilitating-fairness-and-fact/",
    relevance:
      "Industry definition of attribution as \u201cinfluence, not detection.\u201d Key quoted framing in Bob's AIMS 2026 slides 15–16.",
    tag: "industry",
  },
  // Policy
  {
    key: "stim2025",
    authors: "STIM",
    title: "STIM launches the world's first AI license for music",
    venue: "stim.se",
    year: 2025,
    url: "https://www.stim.se/en/news/stim-launches-the-worlds-first-ai-license-for-music",
    relevance:
      "The policy trigger. If STIM routes Swedish royalties through a Sureel-style pipeline, Swedish composers' incomes depend on whether the pipeline actually works.",
    tag: "policy",
  },
  {
    key: "hu2025",
    authors: "C. Hu",
    title: "[Attribution] linking AI outputs to training inputs",
    venue: "Water & Music",
    year: 2025,
    relevance:
      "Source of the \u201cattribution = linking of AI outputs back to the specific training inputs that influenced them\u201d definition cited in slides 12 and 26.",
    tag: "policy",
  },
  // Supervisor's own work
  {
    key: "sturm2025-arms",
    authors: "L. Cros Vila, L. Casini, B. L. T. Sturm et al.",
    title: "AI Music Arms Race",
    venue: "TISMIR 2025",
    year: 2025,
    relevance:
      "Sturm's own recent work building a 30k Suno/Udio+MSD corpus. Likely candidate pool for any later real-corpus TE work.",
    tag: "supervisor",
  },
  {
    key: "sturm2014-horse",
    authors: "B. L. T. Sturm",
    title:
      "A simple method to determine if a music information retrieval system is a \u2018horse\u2019",
    venue: "IEEE Transactions on Multimedia",
    year: 2014,
    relevance:
      "The original \u201chorse\u201d paper. Methodology template for the TE I–II validity tests.",
    tag: "supervisor",
  },
  // Adjacent / future
  {
    key: "wu2023clamp",
    authors: "S. Wu et al.",
    title: "CLaMP: Contrastive language-music pre-training",
    venue: "ISMIR 2023",
    year: 2023,
    url: "https://github.com/sander-wood/clamp",
    relevance:
      "Symbolic (ABC notation) analogue of CLAP. Central to a possible symbolic parity chapter after TE I/II.",
    tag: "adjacent",
  },
  {
    key: "koh2017",
    authors: "P. W. Koh & P. Liang",
    title: "Understanding black-box predictions via influence functions",
    venue: "ICML 2017",
    year: 2017,
    url: "https://arxiv.org/abs/1703.04730",
    relevance:
      "Principled baseline for \u201cwhat does attribution mean?\u201d if cosine is rejected. Candidate comparison metric for TE I / TE II.",
    tag: "adjacent",
  },
  {
    key: "park2023trak",
    authors: "S. Park et al.",
    title: "TRAK: Attributing model behavior at scale",
    venue: "ICML 2023",
    year: 2023,
    url: "https://arxiv.org/abs/2303.14186",
    relevance:
      "Training-data-attribution method that produces per-sample influence scores. Relevant alternative to cosine for the TE I/II framing.",
    tag: "adjacent",
  },
];

const tagMeta: Record<
  Tag,
  { label: string; color: string }
> = {
  primary:    { label: "Primary target",    color: "var(--kth-navy)" },
  embedder:   { label: "Embedder",          color: "#6b7280" },
  industry:   { label: "Industry product",  color: "#92400e" },
  policy:     { label: "Policy / framing",  color: "#166534" },
  supervisor: { label: "Supervisor",        color: "var(--kth-navy)" },
  adjacent:   { label: "Adjacent / future", color: "#6b7280" },
};

export default function ReferencesPage() {
  const tags: Tag[] = [
    "primary",
    "embedder",
    "industry",
    "policy",
    "supervisor",
    "adjacent",
  ];
  return (
    <PageLayout maxWidth="max-w-5xl">
      <header className="mb-16 relative">
        <div className="hidden md:block absolute -top-6 -left-6 w-5 h-5 border-l-2 border-t-2 border-stone-900 dark:border-stone-100" />
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase mb-4">
          References &middot; Annotated
        </div>
        <h1
          className="text-4xl md:text-6xl font-light text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Who we&rsquo;re{" "}
          <span className="italic" style={{ color: "var(--kth-navy)" }}>
            reading
          </span>{" "}
          and why.
        </h1>
        <div
          className="mt-6 md:mt-8 w-16 md:w-24 h-px"
          style={{ background: "var(--kth-navy)" }}
        />
        <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-200 max-w-2xl leading-relaxed">
          Reading list sent by Bob, plus the primary target (Sureel patent)
          and the papers we&rsquo;ll compare against. Every entry has a
          one-sentence relevance note.
        </p>
      </header>

      {tags.map((t) => {
        const items = references.filter((r) => r.tag === t);
        if (items.length === 0) return null;
        const meta = tagMeta[t];
        return (
          <Section key={t} number={sectionNumber(t)} title={meta.label}>
            <div className="grid gap-px bg-stone-300 dark:bg-stone-700">
              {items.map((ref) => (
                <div
                  key={ref.key}
                  className="bg-white dark:bg-[#1a1918] p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-mono font-semibold"
                      style={{ color: meta.color }}
                    >
                      {meta.label}
                    </span>
                    <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400">
                      {ref.year}
                    </span>
                  </div>
                  <h3
                    className="text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ textDecorationColor: "var(--kth-navy)" }}
                      >
                        {ref.title}
                      </a>
                    ) : (
                      ref.title
                    )}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 mb-1">
                    {ref.authors}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-3">
                    {ref.venue}
                  </p>
                  <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                    {ref.relevance}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        );
      })}
    </PageLayout>
  );
}

function sectionNumber(t: Tag): string {
  const order: Tag[] = [
    "primary",
    "embedder",
    "industry",
    "policy",
    "supervisor",
    "adjacent",
  ];
  return (order.indexOf(t) + 1).toString().padStart(2, "0");
}
