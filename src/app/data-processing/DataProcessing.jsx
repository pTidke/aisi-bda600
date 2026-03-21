"use client";
import { useState } from "react";

const FONT = "var(--font-sans)";

const COLORS = {
  bg: "var(--bg-main)",
  card: "var(--bg-main)",
  cardAlt: "var(--bg-subtle)",
  border: "var(--border)",
  borderLight: "var(--border-light)",
  text: "var(--text-primary)",
  textMid: "var(--text-secondary)",
  textDim: "var(--text-muted)",
  accent: "var(--primary)",
  accentLight: "rgba(212, 23, 54, 0.1)",
  green: "#059669",
  greenLight: "#D1FAE5",
  orange: "#D97706",
  orangeLight: "#FEF3C7",
  red: "#d41736",
  redLight: "rgba(212, 23, 54, 0.1)",
  purple: "#7C3AED",
  purpleLight: "#EDE9FE",
  teal: "#0D9488",
  tealLight: "#CCFBF1",
  pink: "#DB2777",
  pinkLight: "#FCE7F3",
};

/* ─── Reusable Components ─── */

const Badge = ({ children, color = "accent" }) => {
  const bgMap = {
    accent: COLORS.accentLight, green: COLORS.greenLight, orange: COLORS.orangeLight,
    red: COLORS.redLight, purple: COLORS.purpleLight, teal: COLORS.tealLight, pink: COLORS.pinkLight,
  };
  const fgMap = {
    accent: COLORS.accent, green: COLORS.green, orange: COLORS.orange,
    red: COLORS.red, purple: COLORS.purple, teal: COLORS.teal, pink: COLORS.pink,
  };
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 20,
      fontSize: 11, fontWeight: 600, fontFamily: FONT, letterSpacing: 0.5,
      background: bgMap[color], color: fgMap[color], textTransform: "uppercase",
    }}>{children}</span>
  );
};

const StatCard = ({ value, label, sub, color = COLORS.accent }) => (
  <div style={{
    flex: "1 1 140px", padding: "18px 16px", background: COLORS.card,
    borderRadius: 12, border: `1px solid ${COLORS.borderLight}`,
    display: "flex", flexDirection: "column", gap: 4, minWidth: 120,
  }}>
    <div style={{ fontSize: 28, fontWeight: 700, color, fontFamily: FONT, lineHeight: 1.1 }}>{value}</div>
    <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text, fontFamily: FONT }}>{label}</div>
    {sub && <div style={{ fontSize: 11, color: COLORS.textDim, fontFamily: FONT }}>{sub}</div>}
  </div>
);

const FlowArrow = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "6px 0" }}>
    <svg width="20" height="24" viewBox="0 0 20 24"><path d="M10 0v18M4 14l6 8 6-8" fill="none" stroke={COLORS.textDim} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

const FlowBox = ({ children, bg = COLORS.card, accent = COLORS.accent, small = false }) => (
  <div style={{
    padding: small ? "10px 14px" : "14px 18px", background: bg, borderRadius: 10,
    border: `1px solid ${COLORS.borderLight}`, borderLeft: `3px solid ${accent}`,
    fontSize: small ? 12 : 13, color: COLORS.text, fontFamily: FONT, lineHeight: 1.5,
  }}>{children}</div>
);

const CodeBlock = ({ children }) => (
  <pre style={{
    margin: 0, padding: "12px 16px", background: "#1E293B", color: "#E2E8F0",
    borderRadius: 8, fontSize: 11.5, fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    lineHeight: 1.6, overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-all",
  }}>{children}</pre>
);

const SectionDivider = ({ number, title, subtitle, color = COLORS.accent }) => (
  <div style={{ padding: "24px 0 16px", marginTop: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
      <div style={{
        width: 36, height: 36, borderRadius: "50%", background: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: FONT, flexShrink: 0,
      }}>{number}</div>
      <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: COLORS.text, fontFamily: FONT }}>{title}</h2>
    </div>
    {subtitle && <p style={{ margin: "4px 0 0 50px", fontSize: 14, color: COLORS.textMid, fontFamily: FONT }}>{subtitle}</p>}
  </div>
);

const TableWrap = ({ children }) => (
  <div style={{ overflowX: "auto", borderRadius: 10, border: `1px solid ${COLORS.borderLight}` }}>
    <table style={{
      width: "100%", borderCollapse: "collapse", fontSize: 12.5, fontFamily: FONT,
    }}>{children}</table>
  </div>
);

const Th = ({ children, align = "left" }) => (
  <th style={{
    padding: "10px 14px", background: COLORS.cardAlt, borderBottom: `1px solid ${COLORS.border}`,
    fontWeight: 700, color: COLORS.text, textAlign: align, whiteSpace: "nowrap", fontSize: 11.5,
    textTransform: "uppercase", letterSpacing: 0.5,
  }}>{children}</th>
);

const Td = ({ children, align = "left", mono = false }) => (
  <td style={{
    padding: "9px 14px", borderBottom: `1px solid ${COLORS.borderLight}`,
    color: COLORS.textMid, textAlign: align, whiteSpace: "nowrap",
    fontFamily: mono ? "'JetBrains Mono', monospace" : FONT, fontSize: mono ? 11.5 : 12.5,
  }}>{children}</td>
);

/* ─── Dataset Sections ─── */

const SemiconductorSection = () => (
  <div>
    <SectionDivider number="1" title="Advanced Semiconductor Supply Chain" subtitle="5 source files → 1 master dataset (1,305 rows × 16 columns)" color={COLORS.red}/>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
      <StatCard value="5" label="Source Files" color={COLORS.red}/>
      <StatCard value="126" label="Unique Inputs" sub="tools, materials, processes" color={COLORS.red}/>
      <StatCard value="374" label="Organizations" sub="across 21 countries" color={COLORS.red}/>
      <StatCard value="1,305" label="Master Rows" sub="provider–input pairs" color={COLORS.red}/>
      <StatCard value="96" label="Inputs w/ Share" sub="breadth denominator" color={COLORS.red}/>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Source Files</h4>
    <TableWrap>
      <thead><tr><Th>File</Th><Th align="right">Rows</Th><Th align="right">Cols</Th><Th>Role</Th></tr></thead>
      <tbody>
        <tr><Td mono>inputs.csv</Td><Td align="right">126</Td><Td align="right">10</Td><Td>Catalog of chip production inputs (tools 90, materials 17, processes 11, designs 7)</Td></tr>
        <tr><Td mono>providers.csv</Td><Td align="right">397</Td><Td align="right">5</Td><Td>Countries + organizations (includes aliases → 374 unique after dedup)</Td></tr>
        <tr><Td mono>provision.csv</Td><Td align="right">1,305</Td><Td align="right">7</Td><Td>Core linkage: which providers supply which inputs, with market share %</Td></tr>
        <tr><Td mono>sequence.csv</Td><Td align="right">139</Td><Td align="right">6</Td><Td>Supply chain relationships: 53 "goes into" + 86 "is type of"</Td></tr>
        <tr><Td mono>stages.csv</Td><Td align="right">3</Td><Td align="right">6</Td><Td>Three production stages: Design, Fabrication, ATP</Td></tr>
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Processing Pipeline</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <FlowBox accent={COLORS.red}>
        <strong>Step 1 — Deduplicate Providers:</strong> providers.csv contains alias rows. Drop duplicates on <code>provider_id</code> → 397 → 374 unique. Rename <code>country</code> → <code>provider_hq_country</code>.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.red}>
        <strong>Step 2 — Join Provision + Providers:</strong> Left join on <code>provider_id</code>, adding <code>provider_type</code> and <code>provider_hq_country</code>.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.red}>
        <strong>Step 3 — Join Input Metadata:</strong> Left join on <code>provided_id = input_id</code>, adding <code>input_type</code>, <code>stage_id</code>, <code>input_data_year</code>, <code>input_market_size</code>.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.red}>
        <strong>Step 4 — Join Stage Metadata:</strong> Left join on <code>stage_id</code>, adding <code>production_stage</code> (Design / Fabrication / ATP).
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.red}>
        <strong>Step 5 — Derive Effective Country:</strong> For country-type providers, use <code>provider_name</code> (ISO code). For organizations, use <code>provider_hq_country</code>. This creates a unified country attribution column.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.red} bg={COLORS.redLight}>
        <strong>Step 6 — Final Cleanup & Reorder:</strong> Drop redundant columns, rename for clarity (<code>provided_name</code> → <code>input_name</code>, <code>year</code> → <code>provision_year</code>). Reorder to 16 analysis-ready columns.
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Quality Checks</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.orange}><strong>Market share sums:</strong> Country-level shares per input average ~100% (median 100.0%). 0 outliers outside 90–110%.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>"Various" entries:</strong> Aggregated small providers (&lt;1% share each) — kept as-is, excluded from country-level analysis.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>Missing shares:</strong> 30 inputs have no market share data → only 96 inputs used for breadth denominator.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>HQ Attribution:</strong> All country assignments are HQ-based (e.g., TSMC → Taiwan even with US fabs). Flagged in methodology.</FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Output Schema</h4>
    <CodeBlock>{`semiconductor_master.csv — 1,305 rows × 16 columns
├── provider_name, provider_id, provider_type, provider_hq_country, effective_country
├── input_name, input_id, input_name_full, input_type
├── production_stage, stage_id, input_data_year
├── share_provided, provision_year
└── input_market_size, source`}</CodeBlock>
  </div>
);

const CrossBorderSection = () => (
  <div>
    <SectionDivider number="2" title="Cross-Border Tech Research Collaborations" subtitle="8 field-specific CSVs → 1 master dataset (21,118 rows × 8 columns)" color={COLORS.accent}/>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
      <StatCard value="8" label="Source Files" sub="one per research field" color={COLORS.accent}/>
      <StatCard value="21,118" label="Master Rows" sub="country-pair × field × year" color={COLORS.accent}/>
      <StatCard value="94" label="Countries" color={COLORS.accent}/>
      <StatCard value="2015–2025" label="Year Range" sub="complete through 2023" color={COLORS.accent}/>
      <StatCard value="≥25" label="Min Threshold" sub="articles per pair/year" color={COLORS.accent}/>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Source Files (by field)</h4>
    <TableWrap>
      <thead><tr><Th>File</Th><Th align="right">Rows</Th><Th>Field</Th><Th>Note</Th></tr></thead>
      <tbody>
        {[
          ["Artificial_intelligence.csv", "10,569", "AI (general)", "Largest — broadest coverage"],
          ["Computer_vision.csv", "3,335", "Computer Vision", "Mature subfield"],
          ["Chip_design_and_fabrication.csv", "2,418", "Chip Design", "Strategically weighted 2.0×"],
          ["Cybersecurity.csv", "1,709", "Cybersecurity", "National security relevance"],
          ["Robotics.csv", "1,561", "Robotics", "Mature subfield"],
          ["Natural_language_processing.csv", "921", "NLP", "Broad applied AI"],
          ["Large_language_models.csv", "432", "LLMs", "Frontier AI, weighted 1.8×"],
          ["AI_safety.csv", "181", "AI Safety", "Smallest — emerging field, weighted 1.6×"],
        ].map(([file, rows, field, note], i) => (
          <tr key={i}><Td mono>{file}</Td><Td align="right">{rows}</Td><Td>{field}</Td><Td>{note}</Td></tr>
        ))}
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Processing Pipeline</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <FlowBox accent={COLORS.accent}>
        <strong>Step 1 — Concatenate:</strong> Stack all 8 CSVs vertically. Identical schema: <code>country1, country2, field, year, num_articles, complete</code>. Total: 21,118 rows.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.accent}>
        <strong>Step 2 — Standardize Pair Ordering:</strong> Create <code>country_a</code>, <code>country_b</code> with alphabetical ordering so (US, China) and (China, US) map to the same canonical pair. Prevents double-counting in analysis.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.accent}>
        <strong>Step 3 — Completeness Filtering:</strong> Flag rows where <code>complete=True</code> (data considered reliable). Years 2024–2025 are incomplete and excluded from scoring. Complete range: 2015–2023.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.accent} bg={COLORS.accentLight}>
        <strong>Step 4 — Validation:</strong> Verify all country names are consistent (uses full names like "United States", "China"). No duplicate pairs per field/year. Minimum 25-article threshold already applied by source.
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Key Data Characteristics</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.accent}><strong>US–China axis dominates:</strong> 197K co-authored articles — 2.4× the next largest pair.</FlowBox>
      <FlowBox small accent={COLORS.accent}><strong>Growth trajectory:</strong> 39K articles in 2015 → 174K in 2023 (+342% overall).</FlowBox>
      <FlowBox small accent={COLORS.accent}><strong>Partner diversity:</strong> Mean 19.1 partners, median 12, 95th percentile = 54 (used as cap in AISI).</FlowBox>
    </div>
  </div>
);

const CountryAISection = () => (
  <div>
    <SectionDivider number="3" title="Country AI Activity Metrics" subtitle="9 CSVs → 4 master datasets (unified + 3 pillar-level)" color={COLORS.green}/>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
      <StatCard value="9" label="Source Files" sub="3 publication + 2 patent + 4 investment" color={COLORS.green}/>
      <StatCard value="189" label="Countries" sub="after excluding 12 groups" color={COLORS.green}/>
      <StatCard value="204" label="Raw Entities" sub="including OECD, NATO, EU…" color={COLORS.green}/>
      <StatCard value="12" label="Groups Excluded" sub="ASEAN, Five Eyes, Quad…" color={COLORS.green}/>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Source Files</h4>
    <TableWrap>
      <thead><tr><Th>File</Th><Th align="right">Rows</Th><Th>Pillar</Th><Th>Key Metrics</Th></tr></thead>
      <tbody>
        {[
          ["publications_yearly_articles.csv", "8,983", "Publications", "num_articles by country × field × year"],
          ["publications_yearly_citations.csv", "~8K", "Publications", "num_citations (no complete flag — lagged)"],
          ["publications_yearly_highly_cited.csv", "~8K", "Publications", "Highly cited article counts"],
          ["patents_yearly_applications.csv", "5,832", "Patents", "num_patent_applications (complete thru 2020)"],
          ["patents_yearly_grants.csv", "~5K", "Patents", "Granted patents (removed from scoring — grant rate bias)"],
          ["companies_yearly_disclosed.csv", "~12K", "Investment", "Disclosed investment ($M)"],
          ["companies_yearly_estimated.csv", "15,339", "Investment", "Estimated investment ($M) — used for scoring"],
          ["companies_yearly_num_transactions.csv", "~12K", "Investment", "Transaction counts"],
          ["companies_yearly_num_companies.csv", "~12K", "Investment", "Active company counts"],
        ].map(([file, rows, pillar, desc], i) => (
          <tr key={i}><Td mono>{file}</Td><Td align="right">{rows}</Td><Td><Badge color={pillar === "Publications" ? "green" : pillar === "Patents" ? "orange" : "purple"}>{pillar}</Badge></Td><Td>{desc}</Td></tr>
        ))}
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Processing Pipeline</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <FlowBox accent={COLORS.green}>
        <strong>Step 1 — Exclude Group Entities:</strong> Remove 12 aggregate entries: <em>ASEAN, Africa, Asia, EU, Europe, Five Eyes, Global Partnership on AI, NATO, North America and the Caribbean, OECD, Oceania, Quad</em>. These are not countries and distort country-level metrics. 204 → 192 entities.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.green}>
        <strong>Step 2 — Harmonize "China (mainland)":</strong> Country AI Activity uses "China (mainland)" while all other datasets use "China". Mapped to canonical "China" via lookup table. Also flagged: "is_group" boolean set before filtering.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.green}>
        <strong>Step 3 — Filter on Completeness:</strong> Only <code>complete=True</code> rows used for scoring. Publications: 2015–2023. Patents: 2015–2020 (5-year lag!). Investment: 2015–2024. Citations: no complete flag → use lagged window 2021–2023.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.green}>
        <strong>Step 4 — Build Pillar-Level Masters:</strong> Aggregate by country across complete years. Publications master: avg annual articles, fields covered. Patents master: total applications, field diversity (out of 11 fields). Investment master: total estimated investment ($M).
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.green} bg={COLORS.greenLight}>
        <strong>Step 5 — Build Unified Master:</strong> Join all 3 pillars on country name. Set boolean availability flags (<code>has_publications</code>, <code>has_citations</code>, <code>has_patents</code>, <code>has_investment</code>) BEFORE any NaN filling. Output: 189 countries × 10 columns.
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Critical Data Findings</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.orange}><strong>Extreme skewness:</strong> Publications skew=8.3, Patents skew=6.9, Investment skew=10.4. Log(1+x) reduces all to &lt;1.0.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>Patent lag:</strong> Complete patent data ends at 2020 — 5 years behind. Innovation Output measures pre-pandemic activity only.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>Coverage varies:</strong> 192 countries have publications, but only 73 have patents and 117 have investment data. 65 countries have all 3 pillars.</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>Citation gap:</strong> No <code>complete</code> flag for citations. Using lagged window (2021–2023) to avoid measuring data pipeline latency.</FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Output Files</h4>
    <CodeBlock>{`country_ai_unified_master.csv     — 189 rows × 10 cols  (one row per country, all pillars)
country_ai_publications_master.csv — 8,983 rows          (yearly articles by country × field)
country_ai_patents_master.csv      — 5,832 rows          (yearly applications by country × field)
country_ai_investment_master.csv   — 15,339 rows         (yearly estimated investment by country × field)`}</CodeBlock>
  </div>
);

const PARATSection = () => (
  <div>
    <SectionDivider number="4" title="Private-Sector AI Indicators (PARAT)" subtitle="5 source files → parat_master.csv + parat_country_agg.csv" color={COLORS.purple}/>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
      <StatCard value="691" label="Companies" sub="startups to multinationals" color={COLORS.purple}/>
      <StatCard value="17" label="Countries" sub="85% US-based" color={COLORS.purple}/>
      <StatCard value="63" label="Core Columns" sub="publications, patents, workforce" color={COLORS.purple}/>
      <StatCard value="71" label="Master Columns" sub="after enrichment" color={COLORS.purple}/>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Source Files</h4>
    <TableWrap>
      <thead><tr><Th>File</Th><Th align="right">Rows</Th><Th>Role</Th></tr></thead>
      <tbody>
        <tr><Td mono>core.csv</Td><Td align="right">691</Td><Td>Main metrics: AI pubs, patents, workforce, company metadata (HQ, stage, sector)</Td></tr>
        <tr><Td mono>yearly_publication_counts.csv</Td><Td align="right">~6K</Td><Td>Disaggregated yearly publication & patent data per company</Td></tr>
        <tr><Td mono>alias.csv</Td><Td align="right">varies</Td><Td>Alternate company names for matching</Td></tr>
        <tr><Td mono>ticker.csv</Td><Td align="right">varies</Td><Td>Stock exchange symbols for public companies</Td></tr>
        <tr><Td mono>id.csv</Td><Td align="right">varies</Td><Td>Cross-references: LinkedIn, Crunchbase, ROR, PermID</Td></tr>
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Processing Pipeline</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <FlowBox accent={COLORS.purple}>
        <strong>Step 1 — Load & Merge:</strong> Join <code>core.csv</code> with <code>yearly_publication_counts.csv</code> on company ID. Add <code>alias</code> and <code>ticker</code> for enrichment. Result: 691 companies × 71 columns.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.purple}>
        <strong>Step 2 — Flag Key Attributes:</strong> Identify company categories — S&P 500, Global Big Tech, GenAI Contenders. Flag companies with zero AI publications (35%) and zero AI patents (38%).
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.purple}>
        <strong>Step 3 — Country-Level Aggregation:</strong> Group by HQ country. Compute: <code>company_count</code>, <code>total_ai_pubs</code>, <code>total_ai_patents</code>, <code>total_ai_workers</code>, <code>total_tech_workers</code>, <code>avg_ai_pubs_per_company</code>, <code>top_conference_pubs</code>, <code>sp500_count</code>, <code>big_tech_count</code>, <code>genai_count</code>.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.purple} bg={COLORS.purpleLight}>
        <strong>Step 4 — Talent Tier Assignment:</strong> For each country, count companies with non-zero <code>Workforce: AI workers</code>. Tier 1: ≥3 companies with workforce data. Tier 2: has AI publications. Tier 3: company count only.
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Known Limitations</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.red}><strong>US dominance:</strong> 85% of companies are US-based. Workforce data (LinkedIn-derived) is essentially US-only — LinkedIn blocked in China/Russia.</FlowBox>
      <FlowBox small accent={COLORS.red}><strong>Curated, not exhaustive:</strong> PARAT is a selected set of 691 companies, not a census. Biased toward well-known firms.</FlowBox>
      <FlowBox small accent={COLORS.red}><strong>Maturity skew:</strong> 93% of companies are at "mature" stage. Startup representation is limited.</FlowBox>
    </div>
  </div>
);

const AGORASection = () => (
  <div>
    <SectionDivider number="5" title="AGORA — AI Governance Archive" subtitle="4 source files → agora_master.csv with NLP stance classification" color={COLORS.teal}/>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
      <StatCard value="973" label="Documents" sub="laws, regulations, standards" color={COLORS.teal}/>
      <StatCard value="77" label="Taxonomy Tags" sub="5 domains" color={COLORS.teal}/>
      <StatCard value="91%" label="US-Focused" sub="882 of 973 documents" color={COLORS.teal}/>
      <StatCard value="2" label="Scoreable Countries" sub="US (390 enacted) + China (18)" color={COLORS.teal}/>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Source Files</h4>
    <TableWrap>
      <thead><tr><Th>File</Th><Th align="right">Rows</Th><Th>Role</Th></tr></thead>
      <tbody>
        <tr><Td mono>documents.csv</Td><Td align="right">973</Td><Td>Core metadata: authority, status, dates, summaries, 77 tag columns</Td></tr>
        <tr><Td mono>segments.csv</Td><Td align="right">8,116</Td><Td>Sub-document segments with granular annotations</Td></tr>
        <tr><Td mono>authorities.csv</Td><Td align="right">105</Td><Td>Issuing bodies with jurisdiction and parent authority</Td></tr>
        <tr><Td mono>collections.csv</Td><Td align="right">10</Td><Td>Thematic groupings</Td></tr>
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Processing Pipeline</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <FlowBox accent={COLORS.teal}>
        <strong>Step 1 — Merge Documents + Authorities:</strong> Left join <code>documents</code> on <code>Authority = Name</code> from authorities table. Adds <code>Jurisdiction</code> field for country mapping.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.teal}>
        <strong>Step 2 — Map to Countries:</strong> Sub-national authorities (California, NYC) → "United States". Exclude "Multinational" and "Other countries" (cannot be mapped to individual nations). Only US and China are individually scoreable.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.teal}>
        <strong>Step 3 — NLP Stance Classification:</strong> Classify each document as <Badge color="green">Enabling</Badge> <Badge color="red">Restrictive</Badge> <Badge color="orange">Neutral</Badge> or <Badge color="purple">Balanced</Badge> using a dual-signal approach:
        <div style={{ marginTop: 8 }}>• <strong>Tag-based scoring (2× weight):</strong> Map all 77 taxonomy tags to stance indicators. Sum pro-enabling vs pro-restrictive tag counts.</div>
        <div>• <strong>Keyword analysis (1× weight):</strong> Scan document summaries for stance-indicating keywords (e.g., "promote", "fund" → enabling; "restrict", "prohibit" → restrictive).</div>
        <div style={{ marginTop: 4 }}>Result: 346 Enabling, 293 Restrictive, 191 Neutral, 137 Balanced, 6 Unclassified.</div>
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.teal}>
        <strong>Step 4 — Boolean Tag Normalization:</strong> Convert all 77 tag columns to proper booleans (handling mixed TRUE/"True"/1 formats). Required for thematic breadth calculation.
      </FlowBox>
      <FlowArrow/>
      <FlowBox accent={COLORS.teal} bg={COLORS.tealLight}>
        <strong>Step 5 — Governance Metrics:</strong> Per country: <code>enacted_docs</code> (log-transformed), <code>thematic_breadth</code> (unique tags covered / 77), <code>maturity_ratio</code> (enacted / total docs).
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Document Status Breakdown</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.green}><strong>450</strong> Enacted — active law/regulation</FlowBox>
      <FlowBox small accent={COLORS.red}><strong>400</strong> Defunct — expired or superseded</FlowBox>
      <FlowBox small accent={COLORS.orange}><strong>123</strong> Proposed — pending legislation</FlowBox>
    </div>
  </div>
);

const HarmonizationSection = () => (
  <div>
    <SectionDivider number="6" title="Country Name Harmonization" subtitle="Unifying naming conventions across all 5 datasets into canonical forms" color={COLORS.pink}/>

    <p style={{ fontFamily: FONT, fontSize: 13.5, color: COLORS.textMid, lineHeight: 1.7, marginBottom: 20 }}>
      Each dataset uses different country naming conventions — ISO 3166 codes (semiconductor), full names with variants ("China (mainland)" in Country AI Activity), and standard full names (cross-border, PARAT, AGORA). Without explicit harmonization, cross-dataset joins fail silently and countries lose data across dimensions.
    </p>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Key Mappings</h4>
    <TableWrap>
      <thead><tr><Th>Canonical Name</Th><Th>Semiconductor</Th><Th>Cross-Border</Th><Th>Country AI</Th><Th>PARAT</Th><Th>AGORA</Th></tr></thead>
      <tbody>
        {[
          ["China", "CHN", "China", "China (mainland)", "China", "China"],
          ["United States", "USA", "United States", "United States", "United States", "United States"],
          ["South Korea", "KOR", "South Korea", "South Korea", "South Korea", "—"],
          ["Taiwan", "TWN", "Taiwan", "Taiwan", "Taiwan", "—"],
          ["Japan", "JPN", "Japan", "Japan", "Japan", "—"],
          ["Germany", "DEU", "Germany", "Germany", "Germany", "—"],
          ["Netherlands", "NLD", "Netherlands", "Netherlands", "Netherlands", "—"],
          ["United Kingdom", "GBR", "United Kingdom", "United Kingdom", "United Kingdom", "—"],
        ].map(([canonical, semi, cb, cai, parat, agora], i) => (
          <tr key={i}><Td><strong>{canonical}</strong></Td><Td mono>{semi}</Td><Td>{cb}</Td><Td>{cai}</Td><Td>{parat}</Td><Td>{agora}</Td></tr>
        ))}
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Harmonization Function</h4>
    <CodeBlock>{`def harmonize_country(name):
    if name in GROUP_ENTITIES:     return None   # Exclude 12 group entities
    if name in ISO_TO_NAME:        return ISO_TO_NAME[name]   # CHN → China, USA → United States
    if name in VARIANT_TO_CANONICAL: return VARIANT_TO_CANONICAL[name]   # "China (mainland)" → China
    if name == 'Various countries': return None   # Semiconductor aggregates
    return name   # Already canonical`}</CodeBlock>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Group Entities Excluded (12)</h4>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
      {["ASEAN", "Africa", "Asia", "EU", "Europe", "Five Eyes", "GPAI", "NATO", "N. America & Caribbean", "OECD", "Oceania", "Quad"].map(g => (
        <Badge key={g} color="red">{g}</Badge>
      ))}
    </div>
    <p style={{ fontFamily: FONT, fontSize: 12, color: COLORS.textDim, marginTop: 8 }}>
      These exist in the Country AI Activity dataset as aggregate rows. Removed before any metric computation.
    </p>
  </div>
);

const ScoringSection = () => (
  <div>
    <SectionDivider number="7" title="AISI Scoring Pipeline" subtitle="7 dimensions → coverage-weighted composite → final rankings" color="#1E293B"/>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "16px 0 12px" }}>Dimension Weights (v3)</h4>
    <TableWrap>
      <thead><tr><Th>Dimension</Th><Th align="right">Weight</Th><Th align="right">Coverage</Th><Th>Sub-components</Th><Th>Data Source</Th></tr></thead>
      <tbody>
        {[
          ["Hardware Sovereignty", "22%", "~23", "Avg share (35%) + Peak share (30%) + Breadth/96 (35%)", "Semiconductor"],
          ["Research Capacity", "20%", "~192", "Log pub volume (35%) + Lagged citations (45%) + Z-scored growth (20%)", "Country AI"],
          ["Commercial Ecosystem", "20%", "~117", "Log investment (50%) + Log company count (30%) + Pub intensity (20%)", "Country AI + PARAT"],
          ["Innovation Output", "18%", "~73", "Log patent volume (45%) + Field diversity /11 (55%)", "Country AI"],
          ["Talent Base", "10%", "17", "Tiered fallback: Workforce → Publications → Company count", "PARAT"],
          ["Collaboration Network", "5%", "~94", "Partner div capped@54 (40%) + Strategic volume (35%) + Partner quality (25%)", "Cross-Border"],
          ["Governance Readiness", "5%", "2", "Log enacted docs (30%) + Breadth/77 (40%) + Maturity ratio (30%)", "AGORA"],
        ].map(([dim, w, cov, sub, src], i) => (
          <tr key={i}><Td><strong>{dim}</strong></Td><Td align="right"><strong>{w}</strong></Td><Td align="right">{cov}</Td><Td>{sub}</Td><Td><Badge color={["red","green","purple","green","purple","accent","teal"][i]}>{src}</Badge></Td></tr>
        ))}
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Log Transform Impact</h4>
    <TableWrap>
      <thead><tr><Th>Metric</Th><Th align="right">Raw Skew</Th><Th align="right">Log Skew</Th><Th align="right">Top/Median (Raw)</Th><Th align="right">Top/Median (Log)</Th></tr></thead>
      <tbody>
        <tr><Td>Publication volume</Td><Td align="right"><strong>8.3</strong></Td><Td align="right">0.2</Td><Td align="right">1,127×</Td><Td align="right">2.6×</Td></tr>
        <tr><Td>Patent volume</Td><Td align="right"><strong>6.9</strong></Td><Td align="right">0.8</Td><Td align="right">4,987×</Td><Td align="right">3.4×</Td></tr>
        <tr><Td>Estimated investment</Td><Td align="right"><strong>10.4</strong></Td><Td align="right">0.3</Td><Td align="right">6,741×</Td><Td align="right">2.8×</Td></tr>
      </tbody>
    </TableWrap>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Coverage-Weighted Composite Formula</h4>
    <CodeBlock>{`AISI Score = Σ (dimension_score × dimension_weight × dimension_coverage)
             ─────────────────────────────────────────────────────────
                        Σ (dimension_weight × dimension_coverage)

+ Breadth factor: 0.75 + 0.25 × (dims_scored / 7)
  → Penalizes countries scoring on fewer dimensions`}</CodeBlock>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Bug Fixes Applied</h4>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10 }}>
      <FlowBox small accent={COLORS.red}>
        <strong>Bug #1 — NaN ≠ Zero:</strong> Countries absent from semiconductor/collaboration/governance datasets were treated as NaN (missing), not zero (genuine absence). The coverage-weighted formula rewarded them with higher scores for having fewer dimensions. <strong>Fix:</strong> Fill genuine-zero dimensions with 0 before scoring.
      </FlowBox>
      <FlowBox small accent={COLORS.red}>
        <strong>Bug #2 — Breadth Gaming:</strong> Countries scoring on only 2–3 dimensions could outscore broader profiles because the coverage denominator was smaller. <strong>Fix:</strong> Added breadth factor <code>0.75 + 0.25 × (dims/7)</code> that penalizes shallow coverage.
      </FlowBox>
    </div>

    <h4 style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.text, margin: "24px 0 12px" }}>Final Output Files</h4>
    <CodeBlock style={{ marginBottom: "48px" }}>{`AISI_Final_Rankings.csv             — All ~195 countries, 7 dimensions + composite
AISI_Final_Rankings_v2_no_governance.csv — 6-dimension variant (governance excluded)
AISI_High_Confidence_Rankings.csv   — Filtered to ≥50% data coverage only`}</CodeBlock>
  </div>
);

/* ─── Main Page ─── */

export default function DataProcessing() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: COLORS.bg, minHeight: "100vh", color: COLORS.text }}>

      {/* Header */}
      <div style={{ padding: "48px 24px 32px", maxWidth: 1100, margin: "0 auto" }}>
        {/* <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <Badge color="accent">AISI Project</Badge>
          <Badge color="orange">v3 Methodology</Badge>
        </div>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Data Processing Pipeline
        </h1>
        <p style={{ margin: "12px 0 0", fontSize: 15, color: COLORS.textMid, lineHeight: 1.7, maxWidth: 720 }}>
          Complete documentation of how 5 ETO datasets containing 31 source files were cleaned, combined, harmonized, and transformed into 8 analysis-ready master datasets feeding the AI Supremacy Index scoring pipeline.
        </p> */}

        {/* Pipeline overview stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 0 }}>
          <StatCard value="31" label="Source Files" sub="across 5 datasets" color={COLORS.text}/>
          <StatCard value="8" label="Master Outputs" sub="analysis-ready CSVs" color={COLORS.text}/>
          <StatCard value="~50K" label="Total Rows" sub="processed" color={COLORS.text}/>
          <StatCard value="195" label="Countries" sub="after harmonization" color={COLORS.text}/>
          <StatCard value="7" label="Dimensions" sub="scored per country" color={COLORS.text}/>
        </div>

        {/* Pipeline flow summary */}
        <div style={{
          marginTop: 32, padding: "20px 24px", background: COLORS.card,
          borderRadius: 14, border: `1px solid ${COLORS.borderLight}`,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            End-to-End Pipeline
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 13 }}>
            {[
              { label: "5 Raw Datasets", color: COLORS.textDim },
              { label: "→" },
              { label: "31 CSV Files", color: COLORS.orange },
              { label: "→" },
              { label: "Clean & Combine", color: COLORS.accent },
              { label: "→" },
              { label: "Harmonize Names", color: COLORS.pink },
              { label: "→" },
              { label: "8 Master Files", color: COLORS.green },
              { label: "→" },
              { label: "7 Dimensions", color: COLORS.purple },
              { label: "→" },
              { label: "AISI Score", color: COLORS.text },
            ].map((item, i) => (
              item.label === "→" ? (
                <span key={i} style={{ color: COLORS.textDim, fontSize: 16 }}>→</span>
              ) : (
                <span key={i} style={{
                  padding: "4px 12px", borderRadius: 8, fontWeight: 600,
                  background: item.color + "15", color: item.color, fontFamily: FONT,
                }}>{item.label}</span>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0px auto", padding: "0 48px 48px" }}>
        <SemiconductorSection/>
        <CrossBorderSection/>
        <CountryAISection/>
        <PARATSection/>
        <AGORASection/>
        <HarmonizationSection/>
        <ScoringSection/>

        {/* Footer */}
        {/* <div style={{ marginTop: 64, padding: "24px 0", borderTop: `1px solid ${COLORS.border}` }}>
          <p style={{ margin: 0, fontSize: 12, color: COLORS.textDim, fontFamily: FONT, textAlign: "center" }}>
            AISI — AI Supremacy Index · Data Processing Documentation · Methodology v3 (Post-Data Audit)
          </p>
        </div> */}
      </div>
    </div>
  );
}