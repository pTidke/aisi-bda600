"use client";
import {
  Database,
  TrendingUp,
  Cpu,
  Globe,
  Users,
  FileText,
  Shield,
} from "lucide-react";
import UnderstandingScores from "./UnderstandingScores";
import styles from "./Methodology.module.css";

const dimensions = [
  {
    title: "1. Hardware Sovereignty",
    weight: "25%",
    icon: <Cpu size={20} />,
    isHighest: true,
    components: [
      {
        label: "Avg Market Share",
        detail: "Average share across inputs (35%)",
      },
      {
        label: "Peak Market Share",
        detail: "Maximum share in any single input (30%)",
      },
      {
        label: "Breadth",
        detail: "Inputs with presence / 96 total scored inputs (35%)",
      },
    ],
    note: "Score = Avg share (35%) + Peak share (30%) + Breadth/96 (35%)",
  },
  {
    title: "2. Research Capacity",
    weight: "20%",
    icon: <FileText size={20} />,
    components: [
      {
        label: "Log Publication Volume",
        detail: "Log-transformed average articles over latest 3 years (35%)",
      },
      {
        label: "Lagged Citation Impact",
        detail: "Citations per article using 2021–2023 window (45%)",
      },
      {
        label: "Z-Scored Growth Trend",
        detail:
          "% change from early 3 years to latest 3 years, Z-score normalized (20%)",
      },
    ],
  },
  {
    title: "3. Commercial Ecosystem",
    weight: "20%",
    icon: <Database size={20} />,
    components: [
      {
        label: "Log Investment Volume",
        detail: "Log-transformed total estimated AI investment (50%)",
      },
      {
        label: "Log Company Count",
        detail: "Log-transformed number of AI companies in PARAT (30%)",
      },
      {
        label: "Publication Intensity",
        detail: "Average AI publications per company (20%)",
      },
    ],
  },
  {
    title: "4. Innovation Output",
    weight: "15%",
    icon: <TrendingUp size={20} />,
    components: [
      {
        label: "Log Patent Volume",
        detail: "Log-transformed total patent applications (45%)",
      },
      {
        label: "Field Diversity",
        detail: "Distinct AI subfields with patent activity / 11 fields (55%)",
      },
    ],
  },
  {
    title: "5. Talent Base",
    weight: "10%",
    icon: <Users size={20} />,
    desc: "Tiered fallback scoring: Tier 1 uses AI workforce presence (≥3 companies with data). Tier 2 falls back to AI publications. Tier 3 uses company count only.",
  },
  {
    title: "6. Collaboration Network",
    weight: "5%",
    icon: <Globe size={20} />,
    components: [
      {
        label: "Partner Diversity",
        detail: "Unique partner countries, capped at 54 (40%)",
      },
      {
        label: "Strategic Volume",
        detail: "Total co-authored articles with strategic weighting (35%)",
      },
      {
        label: "Partner Quality",
        detail: "Average strength of collaboration partners (25%)",
      },
    ],
  },
  {
    title: "7. Governance Readiness",
    weight: "5%",
    icon: <Shield size={20} />,
    components: [
      {
        label: "Enacted Documents",
        detail: "Log-transformed count of enacted AI legislation (30%)",
      },
      {
        label: "Thematic Breadth",
        detail: "Unique taxonomy tags covered / 77 total tags (40%)",
      },
      {
        label: "Maturity Ratio",
        detail: "Enacted documents / total documents (30%)",
      },
    ],
  },
];

export default function Methodology() {
  return (
    <section className={styles.section} id="methodology">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            AISI <span className="gradient-text">Methodology</span>
          </h2>
          <p className={styles.subtitle}>
            With the AI Supremacy Index (<strong>AISI</strong>), our analysis
            dissects the shifting landscape of international power, evaluating
            how nations leverage research, infrastructure, and capital to lead
            the next industrial revolution through
            <strong> 7 Key Performance Indicators</strong>.
          </p>
        </div>

        <div className={styles.dimensionsSection}>
          <div className={styles.dimensionsGrid}>
            {dimensions.map((dim, idx) => (
              <div key={idx} className={styles.dimensionCard}>
                <div className={styles.dimHeader}>
                  <div className={styles.dimIcon}>{dim.icon}</div>
                  <span className={styles.weightBadge}>{dim.weight}</span>
                </div>
                <h4 className={styles.dimTitle}>{dim.title}</h4>

                {dim.desc && <p className={styles.dimDesc}>{dim.desc}</p>}

                {dim.components && (
                  <ul className={styles.componentList}>
                    {dim.components.map((comp, cIdx) => (
                      <li key={cIdx}>
                        <strong>{comp.label}:</strong> {comp.detail}
                      </li>
                    ))}
                  </ul>
                )}

                {dim.note && <div className={styles.dimNote}>{dim.note}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.understandingSection}>
          <UnderstandingScores />
        </div>

        <div className={styles.normalizationBox}>
          <h3 className={styles.normTitle}>
            Coverage-Weighted Composite Calculation
          </h3>
          <p>
            Raw scores are <strong>Min-Max normalized</strong> to 0–100 per
            dimension. Missing values (NaN) for genuinely absent dimensions are filled with 0.
          </p>
          <div className={styles.formula}>
            <strong>AISI Score</strong> = Σ (dimension_score × dimension_weight × dimension_coverage)
            &nbsp;/&nbsp;
            Σ (dimension_weight × dimension_coverage)
            <br />
            <br />
            × <strong>Breadth Factor</strong>: 0.75 + 0.25 × (dimensions_scored / 7)
          </div>
        </div>
      </div>
    </section>
  );
}
