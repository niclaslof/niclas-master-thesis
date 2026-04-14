# Niclas Master's Thesis

**Comparative Analysis of Learned and Designed Features: A Deep Dive into MusicNN and Scattering Transform for Music Instrument Recognition**

KTH Royal Institute of Technology — School of Electrical Engineering and Computer Science

## Structure

```
thesis/          LaTeX source files
site/            Next.js research portal (deployed to Vercel)
.github/         GitHub Actions (auto-compile LaTeX on push)
```

## Workflow

1. Edit `.tex` files in `thesis/`
2. Push to `main`
3. GitHub Actions compiles LaTeX and updates `site/public/thesis.pdf`
4. Vercel auto-deploys the updated site

## Local Development

```bash
cd site
npm install
npm run dev
```

## Author

Niclas Löfvenmark — Supervisor: Bob Sturm — Examiner: André Holzapfel
