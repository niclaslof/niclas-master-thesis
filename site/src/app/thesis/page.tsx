export default function ThesisPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 text-2xl font-bold">Thesis Document</h1>
      <p className="mb-6 text-sm text-muted">
        Latest compiled version. Updated automatically on each push via GitHub
        Actions.
      </p>

      <div className="overflow-hidden rounded-lg border border-card-border bg-card">
        <div className="flex items-center justify-between border-b border-card-border px-4 py-2">
          <span className="text-sm text-muted">thesis.pdf</span>
          <a
            href="/thesis.pdf"
            download
            className="rounded bg-accent px-3 py-1 text-xs font-medium text-background hover:bg-accent-dim"
          >
            Download PDF
          </a>
        </div>
        <iframe
          src="/thesis.pdf"
          className="h-[80vh] w-full"
          title="Thesis PDF Viewer"
        />
      </div>
    </div>
  );
}
