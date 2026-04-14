import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-mono text-accent">
          KTH &middot; Master&apos;s Thesis &middot; 2026
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Comparative Analysis of Learned and Designed Features
        </h1>
        <p className="mt-3 text-lg text-muted">
          A Deep Dive into MusicNN and Scattering Transform for Music
          Instrument Recognition
        </p>
      </div>

      {/* Author info */}
      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        <InfoCard label="Author" value="Niclas Löfvenmark" sub="Engineering Physics" />
        <InfoCard label="Supervisor" value="Bob Sturm" sub="KTH EECS" />
        <InfoCard label="Examiner" value="André Holzapfel" sub="KTH EECS" />
      </div>

      {/* Abstract */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Abstract</h2>
        <div className="rounded-lg border border-card-border bg-card p-6 text-sm leading-relaxed text-muted">
          <p className="mb-3">
            This thesis compares two paradigms of feature extraction for music
            instrument recognition: the <strong className="text-foreground">Scattering Transform</strong> (designed
            features) and <strong className="text-foreground">MusicNN</strong> penultimate layer activations
            (learned features, MSD and MTT variants).
          </p>
          <p className="mb-3">
            Using the ESSID dataset (2,755 samples, 7 instruments) and a custom
            YouTube dataset (70 tracks), classifiers such as KNN and SVM were
            employed to evaluate feature efficacy.
          </p>
          <p>
            Results show that <strong className="text-foreground">combining designed and learned features
            improves recognition accuracy</strong>, suggesting they capture complementary
            musical information.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Quick Links</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <QuickLink
            href="/thesis"
            title="Read Thesis"
            description="View the latest compiled PDF"
          />
          <QuickLink
            href="/progress"
            title="Chapter Progress"
            description="Track completion status"
          />
          <QuickLink
            href="/references"
            title="References"
            description="Key papers and resources"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-lg border border-card-border bg-card p-4">
      <p className="text-xs font-mono text-accent">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
      <p className="text-sm text-muted">{sub}</p>
    </div>
  );
}

function QuickLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-card-border bg-card p-4 transition-colors hover:border-accent"
    >
      <p className="font-semibold group-hover:text-accent">{title}</p>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </Link>
  );
}
