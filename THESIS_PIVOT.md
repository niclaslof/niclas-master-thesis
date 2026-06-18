# Thesis pivot — handoff notes

> Internal handoff document. Captures the state of the thesis-direction
> discussion so a new Claude session (with access to Bob's AIMS 2026 PDF)
> can pick up exactly where the previous session stopped.
> **Not part of the published thesis.**

## TL;DR

The original thesis ("Comparative Analysis of Learned and Designed Features:
MusicNN vs. Scattering Transform for Music Instrument Recognition") is being
re-pointed at what supervisor **Bob L. T. Sturm** is currently working on:
**output-based attribution for AI-generated music**. The proposed new spine
is a validity audit of CLIP/CLAP-style attribution pipelines, mirrored
across audio and (optionally) symbolic music, with controlled interventions
that test whether attribution scores actually track responsibility or are
"horses" in Sturm's sense.

## Why the pivot

- **MusicNN (2019) is dated.** Cleanly superseded by modern music
  foundation models (MERT, MAEST, MuQ-MuLan) in every 2024–2026 MIR
  benchmark; nobody in Sturm's current group is publishing on instrument
  recognition.
- **Sturm's ERC MUSAiC grant closed Sept 2025.** He's in a reflective /
  agenda-setting phase. His current methods work is detection,
  attribution, and validity — not benchmark-chasing classification.
- **The MusicNN vs. Scattering accuracy comparison is not where the field
  is asking questions.** The interesting question is no longer "which
  feature is more accurate" — it's "what are these models actually
  measuring, and is that measurement valid?"

## Bob's research trajectory (verified)

| Year | Work | Theme |
|---|---|---|
| 2014 | ["A Simple Method to Determine if an MIR System is a 'Horse'"](https://ieeexplore.ieee.org/document/6847693/) (IEEE TMM) | The original "horse" / Clever Hans critique. |
| 2022 | ["Digging into MusiCNN" 12-part blog series](https://highnoongmt.wordpress.com/2022/12/17/digging-into-musicnn-pt-12/) | Unit/layer-by-layer probing of MusicNN. Literal prior art for this thesis. |
| 2023 | ["A Review of Validity and Its Relationship to MIR"](https://archives.ismir.net/ismir2023/paper/000004.pdf) (Sturm & Flexer, ISMIR) | "Horse" reframed as 4-part validity framework (internal, external, construct, statistical). |
| 2024 | ["A Critical Survey of Research in MGR"](https://pure.mpg.de/pubman/item/item_3621900_1/component/file_3621901/mus-24-gre-01-critical.pdf) (Green, Sturm, Born, Wald-Fuhrmann, ISMIR) | 1,026-paper update to his 2013 GTZAN critique. |
| 2025 | ["The AI Music Arms Race"](https://transactions.ismir.net/articles/10.5334/tismir.254) (Cros Vila, Sturm et al., TISMIR) | AI-music detectors collapse under 22.05 kHz resampling — modern horse demonstration. |
| 2025 | [Casini, Cros Vila et al., Suno/Udio data analysis](https://arxiv.org/abs/2509.11824) (arXiv) | Empirical study of AI-music ecosystem. |
| 2026 | **AIMS 2026 presentation** (Sturm & Kanhov, "Attribution"; 54 pages) | Output-based attribution for AI-generated music. **The trigger for this pivot.** |

His trajectory: **2014 horse → 2023 validity → 2025 detection → 2026 attribution.**
Each step asks the same kind of question ("does this system actually measure
what it claims to measure?") about a different object.

## What Bob handed Niclas as the reading list

These were delivered as references he wants on the desk:

1. **Sureel patent**, BibTeX delivered directly:
   ```bibtex
   @article{Kuhn2025b,
     author  = {C. B. Kuhn and T. Aykut},
     journal = {United States Patent},
     number  = {US 12,314,308 B2},
     title   = {Output-based attribution for content generation by an artificial intelligence (AI)},
     year    = {2025}}
   ```
   Patent URL: <https://patents.google.com/patent/US12314308B2/en>.
   The artifact at the centre of the talk.

2. **MuQ-MuLan** (Tencent AI Lab, TASLP 2025) —
   <https://arxiv.org/abs/2501.01108> — CLAP-style contrastive audio-text model
   built on MuQ; beats LAION-CLAP at zero-shot music tagging (MagnaTagATune
   ROC-AUC 79.3 vs 73.9). The *embedder* side of attribution.

3. **Qwen2-Audio** (Alibaba) — <https://arxiv.org/abs/2407.10759> — large
   audio-language model. Tongyi Qianwen licence. The *LLM-prompted* side.

4. **Music Flamingo** (NVIDIA) — <https://research.nvidia.com/labs/adlr/MF/>;
   <https://arxiv.org/abs/2511.10289>. 8B audio-LLM specialised on music.
   Reported 80.76% on NSynth instrument recognition, 90.86% on
   Medley-Solos-DB (beats Audio Flamingo 3 at 85.80%). Non-commercial
   research licence. The *music-specialised LLM* side.

The set covers three independent attribution mechanisms (embedding-cosine,
LLM-prompted general, LLM-prompted music-specialist) plus the industry patent
as the object of study. This is not coincidence — it is the experimental
matrix Bob is pointing at.

## What Bob's AIMS 2026 talk says (reconstructed from notes + 2 screenshots)

**Source caveat:** This Claude session never read the actual PDF. Summary
below is reconstructed from (a) Niclas's typed notes during/after the talk,
and (b) two screenshots — page 21 (Sureel patent slide) and page 27 (CLIP
diagram, Radford et al. 2021). **Slides 28–54 are unverified.** The next
session (with PDF access) should validate everything here and fill in TE4.

### The central question

*Is "output-based attribution" for AI-generated content valid?* When a
system claims "this AI track is derived from artist X," does the score it
produces actually measure responsibility, or is it spurious correlation
dressed up as causation?

### The pipeline being audited

```
AI-generated output
       │
       ▼
   [embedder]  ──►  vector in shared CLIP/CLAP-style embedding space
       │
       ▼
cosine similarity against an indexed training corpus
       │
       ▼
top-k nearest training items = "attributed sources"
```

The Sureel patent describes exactly this.

### Why CLIP/CLAP matters

- CLIP (Radford et al. 2021): contrastive text+image model, 400M pairs,
  512-dim embedding space. Positive pairs trained to land close (high
  cosine), negative pairs far. Image and text encoded into the same space.
- CLAP: the same idea for audio + text.
- For attribution: embed the AI output, search the training corpus for
  nearest neighbours, call those "responsible."

### Bob's failure examples (from notes)

- "Bob playing violin" recording ends up close to **Paganini** in CLAP
  space → false attribution.
- "Elvis Christmas song" and "Bob playing a Christmas song" share a caption
  ("Christmas song") and collapse together in CLAP space, despite being
  wildly different recordings.

These show CLAP tracks *surface similarity confounded with style/genre/era*,
not causal responsibility.

### The 4 thought experiments

**TE1 — Autoencoder limits.** For `f(x) = noise`, attribution should be 0.
For an overfit `f(x)` that always outputs the same image regardless of `x`,
attribution should be 100%. **What happens in the middle?** Sturm's
observation: it seems all-or-nothing rather than smoothly graded → the
*continuous* attribution score is suspect.

**TE2 — Embedding-space proximity.** Points far from the AI output in
embedding space should have ~0 influence. Empirically (per Sturm),
they don't — distant training points still seem to have measurable
influence. Closeness in embedding space ≠ responsibility.

**TE3 — Transitive influence chains.** Artist A is influenced by B and C;
C is influenced by G and F. Train a generator on only C (G and F absent).
Generate in style A. Query attribution. Does attribution leak back to G
and F (which aren't in the training set but are baked into C's style)?
Where does "credit" actually stop?

**TE4 — UNKNOWN.** Not captured in the available notes. The PDF has 54
pages and we only saw pages 21 and 27. **Next session: read pages ~40–54
of `Aims2026presentation.pdf` and fill in TE4.**

## Proposed thesis

**Working title:** *A Validity Audit of Output-Based Attribution for
AI-Generated Music.*

**Research question:** *Does CLAP-style output-based attribution measure
the responsibility of training data, or does it measure confounded
surface features that fail under controlled perturbation?*

**Two comparison axes:**

| Axis | Options |
|---|---|
| Attribution paradigm | Embedder-cosine (LAION-CLAP, MuQ-MuLan) vs. LLM-prompted (Qwen2-Audio, Music Flamingo) |
| Modality | Audio (CLAP / MuQ-MuLan / Qwen / Music Flamingo) vs. Symbolic (CLaMP 2 on ABC notation, optional) |

**Method:** reproduce the attribution pipeline end-to-end, then apply a
"horse hunt" intervention battery that operationalises Sturm's validity
framework.

### Intervention battery (the experiments)

For each (paradigm, modality) pair, run:

1. **Known-source sanity check.** A track that *is* in the candidate pool
   should come back as rank-1 to itself. (If not, the pipeline is broken.)
2. **Cover / performer confound.** Different recording of the same
   composition. Does attribution point at the composition or the
   performer/production?
3. **Held-out ancestor (TE3 operationalised).** Train a small generator on
   corpus C with G and F removed. Generate. Query attribution against
   C ∪ G ∪ F. Does the score leak to the absent ancestors?
4. **Style-vs-identity confound.** Paganini played electric-guitar-style.
   Does attribution route via instrument timbre, via genre cues, or via
   composition?
5. **Perturbation invariance.** Resample to 22.05 kHz (the Arms-Race
   trick). Does the attribution top-10 survive? If not — horse.
6. **Dimensional collapse check.** PCA the embedding space for the corpus
   + AI outputs. Do AI outputs cluster with *any* training region, or in a
   degenerate pocket?
7. **TE1 operationalised.** Take a controlled generator family (e.g., a
   conditional VAE) where you can tune the "trained-vs-noise" interpolation
   parameter. Plot attribution score against that parameter. Is the curve
   continuous, or does it jump discontinuously?

## Datasets needed

**Audio attribution side:**

- *Candidate / "training" pool*: ideally the 30k Suno/Udio + MSD dataset
  from the [TISMIR 2025 Arms Race paper](https://transactions.ismir.net/articles/10.5334/tismir.254).
  **Ask Laura Cros Vila (defended Dec 2025) or Luca Casini (now RISE)
  for access.**
  Alternative: LAION-Audio-630K + Million Song Dataset subset.
- *AI outputs to attribute*: Suno and Udio generated tracks (Bob's group
  already has these in the Arms Race corpus; otherwise generate fresh).
- *Ground-truth probes*: known covers / different recordings of the same
  composition (a few Christmas standards across artists for the
  Bob-vs-Paganini test).

**Symbolic attribution side (optional, but high-fit with Sturm's folk-rnn world):**

- *Candidate pool*: [The Session](https://thesession.org) — ~40k Irish
  trad ABC tunes, freely scrapable.
- *AI outputs to attribute*: folk-rnn / ABC-MLM outputs from
  [Casini, Jonason, Sturm, EvoMusArt 2024](https://link.springer.com/chapter/10.1007/978-3-031-56992-0_6).

**Industry reference (optional):** anything Sureel publishes as a demo or
API; check <https://sureel.ai/> and the patent text for replicable details.

## Models to use (all Hugging Face)

| Model | HF ID | Role | Licence |
|---|---|---|---|
| LAION-CLAP music | [`laion/larger_clap_music`](https://huggingface.co/laion/larger_clap_music) | Embedder baseline | Apache-2.0 |
| MuQ-MuLan | [`OpenMuQ/MuQ-MuLan-large`](https://huggingface.co/OpenMuQ) | Strong embedder (2025) | CC-BY-NC-4.0 |
| Qwen2-Audio | [`Qwen/Qwen2-Audio-7B-Instruct`](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct) | General audio-LLM | Tongyi Qianwen |
| Music Flamingo | [`nvidia/music-flamingo-hf`](https://huggingface.co/nvidia/music-flamingo-hf) | Music-specialised audio-LLM | NC research |
| CLaMP 2 (symbolic) | [GitHub sanderwood/clamp2](https://github.com/sanderwood/clamp2) | Symbolic music embedder | (check repo) |

Non-commercial licences are fine for a master's thesis (academic research
use); just don't try to commercialise downstream.

## What's been done in this Claude session

1. **Three research deep-dive agents completed:**
   - Bob Sturm's current research (2024–2026 papers, students, themes).
   - Modern learned music representations (MusicNN successors).
   - Designed-features + MIR-critique literature (scattering, validity,
     interpretability, generative-era critique).
   - Their full reports are in this conversation's history. The synthesis
     above distils them.

2. **`/direction` page created on the Vercel site** at
   `site/src/app/direction/page.tsx`. Currently contains:
   - Section 1: "What the thesis currently compares" (honest framing of
     the MusicNN vs. Scattering plan).
   - Section 2: "What Bob is actually working on now" (AIMS 2026,
     attribution, Sureel, the 2014→2026 arc).
   - **Sections 3–7 still to write.** Outline:
     - §3 The attribution pipeline (CLIP/CLAP, cosine similarity, the
       Bob-violin-vs-Paganini failure example).
     - §4 The tools Bob handed us (MuQ-MuLan, Qwen, Music Flamingo,
       Sureel patent).
     - §5 The 4 thought experiments.
     - §6 Proposed thesis: validity audit of attribution.
     - §7 References.
   - Page is **not yet linked** from `nav.tsx` or home `page.tsx`.

3. **`CLAUDE.md` written at repo root** — provides codebase + workflow
   guidance for any future Claude session.

## What's *not* been done

- TE4 has not been reconstructed (PDF not accessible in this sandbox).
- The actual attribution pipeline has not been built or run.
- Bob has not been pitched the new direction.
- The 1-page proposal-to-Bob has not been drafted.
- `/direction` page sections 3–7 not written; not yet linked from nav/home.
- No `next build` smoke test run after recent edits.
- Old thesis chapters (`thesis/chapters/*.tex`) have not been touched.

## Open questions for Bob

These shape every line of pipeline code. Get answers before writing it.

1. **Is the validity-audit-of-attribution framing the right reading**, or
   are you pointing at something narrower or broader?
2. **Audio + symbolic parity (CLAP + CLaMP) — too much scope for an MSc**,
   or is that the point? If just one, which?
3. **Which corpus should be the candidate pool?** The Arms Race
   Suno/Udio + MSD set? Something else?
4. **Does instrument recognition stay as a sub-experiment**, or fully
   retired from the thesis?
5. **Timeline.** When does the defendable result need to be ready?
6. **Co-authors / colleagues to involve.** Laura Cros Vila just defended on
   exactly this; Luca Casini did the Suno/Udio analysis. Should I coordinate
   with them?
7. **Which of the 4 thought experiments** in the AIMS slides do you most
   want operationalised, if I have to pick one?
8. **Treat Sureel as a black box** (use their published outputs as data) or
   **reproduce it from scratch** with open models? The thesis looks very
   different in each case.

## Open questions for the next Claude session

1. **Read `Aims2026presentation.pdf`** (in Niclas's Downloads / repo
   `thesis/` folder on his Windows machine, NOT in this sandbox). Validate
   everything in this document against the actual slides.
2. **Fill in TE4** — slides ~40–54 likely contain the fourth thought
   experiment.
3. **Verify Bob's authorship list on the slides** — was Kanhov co-author?
   (Best guess yes — Sturm + Kanhov.)
4. **Note any further references on the slides** beyond Sureel /
   MuQ-MuLan / Qwen / Music Flamingo. These almost certainly exist.
5. **Continue from `/direction` page Section 3** when ready to resume
   writing the Vercel page.

## Key references (single list, deduplicated)

### Sturm and collaborators (the supervisor lineage)

- Sturm 2014, ["A Simple Method to Determine if a MIR System is a 'Horse'"](https://ieeexplore.ieee.org/document/6847693/), IEEE TMM.
- Sturm & Flexer 2023, ["A Review of Validity and Its Relationship to MIR"](https://archives.ismir.net/ismir2023/paper/000004.pdf), ISMIR.
- Green, Sturm, Born, Wald-Fuhrmann 2024, ["A Critical Survey of Research in MGR"](https://pure.mpg.de/pubman/item/item_3621900_1/component/file_3621901/mus-24-gre-01-critical.pdf), ISMIR.
- Cros Vila, Sturm, Casini, Dalmazzo 2025, ["The AI Music Arms Race"](https://transactions.ismir.net/articles/10.5334/tismir.254), TISMIR.
- Casini, Cros Vila, Dalmazzo, Kaila, Sturm 2025, [Suno/Udio analysis](https://arxiv.org/abs/2509.11824), arXiv.
- Casini, Jonason, Sturm 2024, [ABC-MLM](https://link.springer.com/chapter/10.1007/978-3-031-56992-0_6), EvoMusArt.
- Sturm 2022, [Digging into MusiCNN, pt. 12](https://highnoongmt.wordpress.com/2022/12/17/digging-into-musicnn-pt-12/), blog.

### Attribution / patent / contrastive embeddings

- Kuhn & Aykut 2025, **Sureel patent** US 12,314,308 B2, [Google Patents](https://patents.google.com/patent/US12314308B2/en).
- Radford et al. 2021, [CLIP](https://arxiv.org/abs/2103.00020), arXiv.
- Wu et al. ICASSP 2023, [LAION-CLAP](https://arxiv.org/abs/2211.06687), arXiv · HF [`laion/larger_clap_music`](https://huggingface.co/laion/larger_clap_music).
- Zhu et al. TASLP 2025, [MuQ-MuLan / MuQ](https://arxiv.org/abs/2501.01108), arXiv · HF [OpenMuQ](https://huggingface.co/OpenMuQ).
- Chu et al. 2024, [Qwen2-Audio](https://arxiv.org/abs/2407.10759), arXiv · HF [`Qwen/Qwen2-Audio-7B-Instruct`](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct).
- NVIDIA ADLR 2025, [Music Flamingo](https://research.nvidia.com/labs/adlr/MF/), [arXiv 2511.10289](https://arxiv.org/abs/2511.10289) · HF [`nvidia/music-flamingo-hf`](https://huggingface.co/nvidia/music-flamingo-hf).
- Wu et al. ISMIR 2023, [CLaMP](https://arxiv.org/abs/2304.11029), arXiv.
- Wu et al. 2024, [CLaMP 2](https://arxiv.org/abs/2410.13267), arXiv · [GitHub](https://github.com/sanderwood/clamp2).

### Scattering Transform (designed-feature side, in case it stays)

- Andén & Lostanlen 2019, [Joint Time-Frequency Scattering](https://arxiv.org/abs/1807.08869), IEEE TSP.
- Muradeli, Lostanlen et al. 2022, [Differentiable TFS on GPU](https://arxiv.org/abs/2204.08269), DAFx.
- Han, Lostanlen, Lagrange 2024, [PNP-loss for sound matching](https://arxiv.org/abs/2311.14213), TASLP.
- Mitcheltree et al. 2026, [SCRAPL](https://arxiv.org/abs/2602.11145), ICLR.
- Lostanlen & Han 2026, [Musical Metamerism with TFS](https://arxiv.org/abs/2602.11896), arXiv.
- [Kymatio library](https://github.com/kymatio/kymatio); [ISMIR 2023 tutorial](https://www.kymat.io/ismir23-tutorial/intro.html).

### Modern foundation models considered (for context)

- [MERT (Li et al., ICLR 2024)](https://arxiv.org/abs/2306.00107) · HF [`m-a-p/MERT-v1-95M`](https://huggingface.co/m-a-p/MERT-v1-95M).
- [MAEST (Alonso-Jiménez et al., ISMIR 2023)](https://arxiv.org/abs/2309.16418) · HF [`mtg-upf/discogs-maest-10s-pw-129e`](https://huggingface.co/mtg-upf/discogs-maest-10s-pw-129e).
- [MARBLE benchmark (Yuan et al., NeurIPS 2023)](https://arxiv.org/abs/2306.10548).

### Probing / interpretability (in case the thesis goes that direction)

- Wei et al. ISMIR 2024, [Do Music Generation Models Encode Music Theory?](https://arxiv.org/abs/2410.00872)
- Zhou et al. 2025, [Layer-wise investigation of music SSL](https://arxiv.org/abs/2505.16306).
- Gebhardt et al. ISMIR 2025, [CAVs for music embeddings](https://arxiv.org/abs/2509.24482).
