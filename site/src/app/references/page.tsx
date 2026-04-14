interface Reference {
  key: string;
  authors: string;
  title: string;
  venue: string;
  year: number;
  relevance: string;
}

const references: Reference[] = [
  {
    key: "anden2014",
    authors: "Andén, J. & Mallat, S.",
    title: "Deep Scattering Spectrum",
    venue: "IEEE Transactions on Signal Processing, 62(16)",
    year: 2014,
    relevance: "Core method — Scattering Transform for audio features",
  },
  {
    key: "pons2019",
    authors: "Pons, J. & Serra, X.",
    title:
      "musicnn: Pre-trained convolutional neural networks for music audio tagging",
    venue: "Late-breaking Demo, ISMIR",
    year: 2019,
    relevance: "Core method — MusicNN learned features (MSD/MTT)",
  },
  {
    key: "essid2005",
    authors: "Essid, S.",
    title:
      "Classification automatique des signaux audio-fréquences: reconnaissance des instruments de musique",
    venue: "PhD Thesis, Université Pierre et Marie Curie",
    year: 2005,
    relevance: "Primary dataset (ESSID) used for evaluation",
  },
  {
    key: "mallat2012",
    authors: "Mallat, S.",
    title: "Group Invariant Scattering",
    venue: "Communications on Pure and Applied Mathematics, 65(10)",
    year: 2012,
    relevance: "Theoretical foundation of the Scattering Transform",
  },
  {
    key: "choi2017",
    authors: "Choi, K. et al.",
    title: "Transfer learning for music classification and regression tasks",
    venue: "arXiv:1703.09179",
    year: 2017,
    relevance: "Transfer learning approach for audio — related work",
  },
  {
    key: "humphrey2012",
    authors: "Humphrey, E. J. & Bello, J. P.",
    title:
      "Rethinking automatic chord recognition with convolutional neural networks",
    venue: "ICMLA, IEEE",
    year: 2012,
    relevance: "CNN application in music information retrieval",
  },
];

export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-2 text-2xl font-bold">Key References</h1>
      <p className="mb-8 text-sm text-muted">
        Core papers and resources for this thesis. Full bibliography is in the
        compiled PDF.
      </p>

      <div className="space-y-4">
        {references.map((ref) => (
          <div
            key={ref.key}
            className="rounded-lg border border-card-border bg-card p-4"
          >
            <p className="font-semibold">{ref.title}</p>
            <p className="mt-1 text-sm text-muted">
              {ref.authors} ({ref.year})
            </p>
            <p className="text-sm text-muted">{ref.venue}</p>
            <p className="mt-2 text-xs font-mono text-accent">
              {ref.relevance}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
