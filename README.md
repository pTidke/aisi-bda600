<div align="center">

# 🌐 Who's Got AI?
### AI Supremacy Index — BDA Capstone Project 2026

*A data-driven framework mapping the global frontier of artificial intelligence.*

[![Live Site](https://img.shields.io/badge/Live%20Site-aisi--bda600.vercel.app-black?style=for-the-badge&logo=vercel)](https://aisi-bda600.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-75.7%25-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

> The global race for artificial intelligence is no longer just about software — it is a complex geopolitical struggle for technological sovereignty. The **AI Supremacy Index (AISI)** synthesizes 31 source files across 5 major ETO datasets into a single composite score, evaluating 195 countries across 7 dimensions of AI capability.

---

## ✨ What's Inside

| Page | Description |
|------|-------------|
| 🏠 **Home** | Project overview, AISI methodology, and ETO data source cards |
| 📊 **AISI Index** | Interactive globe with collaboration arcs, country leaderboard, and per-country radar + dimension breakdown |
| 📈 **Analysis** | Deep-dive visualizations: semiconductor supply chain, AI innovation & workforce, global patents, research collaboration, policy trends, and investment heatmaps |
| 🔍 **SWOT Analysis** | Structured global AI resilience assessment — strengths, weaknesses, opportunities, threats |
| ⚙️ **Data Processing** | Full pipeline documentation: how 5 datasets → 8 master CSVs → 7-dimension scoring |
| 👥 **Our Team** | Capstone team profiles |

---

## 🏆 Key Findings at a Glance

| Metric | Finding |
|--------|---------|
| 🥇 Top AISI Score | **USA — 78.2** (full-spectrum leader, 7/7 dimensions) |
| 🇨🇳 #2 | **China — 65.5** (research powerhouse, +2.4 trend) |
| 🌍 Global Average | **46.3** across 20 indexed countries |
| 🚀 Rising Star | **India — +3.1** trend (43,816 AI publications in 2023) |
| 🔬 US–China co-authored papers | **162,646** — world's most productive bilateral research link |
| 🖥️ Semiconductor chokepoint | **EUV lithography: 100% Netherlands** (ASML monopoly) |
| 👷 AI workforce gap | **US has 31× more deployed AI workers than China** |
| 📄 Publication race | China hit **103,672** papers in 2023 — 2× the US total |

---

## 🗂️ Site Pages & Features

### 📊 AISI Index — Interactive Globe
- 3D globe with color-coded country dots (score >50 vs ≤50) and collaboration arcs
- Country leaderboard (top 15) with scores, trend arrows, and archetype labels ("Foundry titan", "EUV monopoly")
- Per-country radar chart across 7 dimensions, dimension score bars, strengths/weaknesses summary, and top research partners

### 📈 Global Analysis

The Analysis page covers four major thematic sections:

**Semiconductors**
- Treemap of supply chain by resource type (Design $648B dominant, anchored by US fabless firms)
- Bump chart of country rankings 2019 → 2022 → 2024
- Stacked bar breakdown by country × resource type

**AI Innovation**
- Bubble chart: AI workforce vs publications vs patents by country (US depth vs China breadth)
- Donut chart: Global AI patents by country (US 320K, China 98K)
- Bubble map: AI patents by sub-domain (Computer Vision leads with 27,304 filings)

**Research Capacity & Collaboration**
- Scatter: Publications vs Citations for top 20 organizations (Alphabet, Microsoft, Meta, IBM, Tencent…)
- Chord diagram: Global cross-border co-authorship network by country
- Stacked area: Cross-border collaboration by field, 2015–2023 (all 8 fields growing)
- Line chart: US–China collaboration by field (peaked ~2021, showing deceleration)
- Scatter: Partner diversity vs collaboration volume (US leads both axes simultaneously)

**Policy & Investment**
- Bar chart: US AI policy stance over time 2019–2025 (Restrictive now outpaces Enabling 2:1 since 2023)
- Sunburst: Global AI patents by sector × region (Asia-Pacific 53.3%, Americas 40.8%)
- Bubble heatmap: AI investment by country × field (US $168B in Mobile/Internet alone)
- Racing bar chart: AI publications 2015–2023 (China surpassed US in 2017)

### 🔍 SWOT: Global AI Resilience

| | |
|---|---|
| **Strengths** | Cross-border collaboration +342% (2015–2023); 192 nations publishing AI research; 691 tracked companies |
| **Weaknesses** | 95% of semiconductor inputs HHI > 2500; patent data 5-year lag; governance scoreable for only US & China |
| **Opportunities** | LLMs & AI Safety are fastest-growing research fields; 117 countries attract measurable AI investment |
| **Threats** | EUV 100% Netherlands, discrete GPUs 100% US; US–China chip design collaboration declining; digital divide widening |

---

## ⚙️ AISI Scoring Methodology

Seven dimensions, coverage-weighted into one composite score:

| # | Dimension | Weight | Coverage |
|---|-----------|--------|----------|
| 1 | 🖥️ Hardware Sovereignty | **22%** | ~23 countries |
| 2 | 🔬 Research Capacity | **20%** | ~192 countries |
| 3 | 💼 Commercial Ecosystem | **20%** | ~117 countries |
| 4 | 💡 Innovation Output | **18%** | ~73 countries |
| 5 | 🧠 Talent Base | **10%** | 17 countries |
| 6 | 🤝 Collaboration Network | **5%** | ~94 countries |
| 7 | ⚖️ Governance Readiness | **5%** | 2 countries |

```
AISI Score = Σ (dim_score × dim_weight × dim_coverage)
             ──────────────────────────────────────────
                  Σ (dim_weight × dim_coverage)

           × Breadth Factor: 0.75 + 0.25 × (dims_scored / 7)
```

Raw scores are **Min-Max normalized** to 0–100 per dimension. Missing dimensions are filled with `0` (genuine absence, not missing data). See the [Data Processing page](https://aisi-bda600.vercel.app/data-processing) for the full pipeline.

---

## 📦 Data Sources

All analysis is powered by datasets from the [Emerging Technology Observatory (ETO)](https://eto.tech):

| Dataset | What It Covers |
|---------|---------------|
| **Country AI Activity** | Publications, citations, patents, and investment by country × field × year |
| **Cross-Border Research** | Cross-country co-authorship across 8 AI fields, 2015–2023 |
| **PARAT** | Corporate AI activity — workforce, publications, patents for 691 companies |
| **Advanced Semiconductor Supply Chain** | Market share data for 126 chip production inputs across 374 providers in 21 countries |
| **AGORA** | 973 AI governance documents with NLP stance classification (Enabling / Restrictive / Neutral / Balanced) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript (75.7%) |
| Styling | CSS Modules (11.8%) |
| Deployment | [Vercel](https://vercel.com) |
| Data | ETO datasets → processed master CSVs |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/pTidke/aisi-bda600.git
cd aisi-bda600

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files under `src/`.

---

## 📁 Project Structure

```
aisi-bda600/
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Home / methodology
│   │   ├── analysis/         # Global AI analysis visualizations
│   │   ├── data-processing/  # Pipeline documentation
│   │   ├── swot-analysis/    # SWOT page
│   │   └── our-team/         # Team profiles
│   ├── components/           # Shared UI components
│   └── styles/               # CSS modules
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔗 Links

| | |
|---|---|
| 🌐 Live Site | [aisi-bda600.vercel.app](https://aisi-bda600.vercel.app) |
| 📊 AISI Index | [/explore](https://aisi-bda600.vercel.app/explore) |
| 📈 Analysis | [/analysis](https://aisi-bda600.vercel.app/analysis) |
| 🔍 SWOT | [/swot-analysis](https://aisi-bda600.vercel.app/swot-analysis) |
| ⚙️ Data Processing | [/data-processing](https://aisi-bda600.vercel.app/data-processing) |
| 📚 ETO Datasets | [eto.tech](https://eto.tech) |

---


*© 2026 AISI Project · BDA Capstone · All rights reserved.*
