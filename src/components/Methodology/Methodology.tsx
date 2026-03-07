"use client";
import {
  Database,
  TrendingUp,
  Cpu,
  Globe,
  Users,
  Scale,
  FileText,
} from "lucide-react";
import styles from "./Methodology.module.css";

const dimensions = [
  {
    title: "1. Research Capacity",
    weight: "20%",
    icon: <FileText size={20} />,
    components: [
      {
        label: "Publication Volume",
        detail: "Average articles over latest 3 years, capped at 100",
      },
      {
        label: "Citation Impact",
        detail: "Citations per article in the most recent year",
      },
      {
        label: "5-Year Growth Trend",
        detail:
          "% change from early 3 years to latest 3 years, shifted so 0% growth = score 50",
      },
    ],
  },
  {
    title: "2. Innovation Output",
    weight: "20%",
    icon: <TrendingUp size={20} />,
    components: [
      {
        label: "Patent Volume",
        detail: "Total patents across all years (patents / 500)",
      },
      {
        label: "Patent Grant Rate",
        detail: "(Granted / Applied) × 100 — measures quality/success rate",
      },
      {
        label: "Field Diversity",
        detail:
          "Number of distinct AI subfields with patent activity (fields × 5)",
      },
    ],
  },
  {
    title: "3. Commercial Ecosystem",
    weight: "20%",
    icon: <Database size={20} />,
    components: [
      {
        label: "Investment Volume",
        detail: "Total disclosed AI investment (investment / 1000)",
      },
      {
        label: "Company Count",
        detail: "Number of AI companies in PARAT (companies × 2)",
      },
      {
        label: "AI Publication Intensity",
        detail: "Average AI publications per company (avg_pubs / 50)",
      },
    ],
  },
  {
    title: "4. Hardware Sovereignty",
    weight: "25%",
    icon: <Cpu size={20} />,
    isHighest: true,
    desc: "Single most heavily weighted dimension, reflecting strategic hardware dependency.",
    scoring:
      "Score = (average market share × 0.6) + (peak/max market share × 0.4).",
  },
  {
    title: "5. Collaboration Network",
    weight: "10%",
    icon: <Globe size={20} />,
    components: [
      {
        label: "Partner Diversity",
        detail: "Unique partner countries (partners × 2, max 50 points)",
      },
      {
        label: "Collaboration Volume",
        detail: "Total co-authored articles (articles / 100, max 50 points)",
      },
    ],
    note: "Both halves added → max raw score = 100",
  },
  {
    title: "6. Talent Base",
    weight: "5%",
    icon: <Users size={20} />,
    desc: "Uses AI workforce headcount if available (workers / 50). Falls back to company count as a proxy if workforce data is absent.",
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
            <strong> 6 Key Performance Indicators</strong>.
          </p>
        </div>

        <div className={styles.dimensionsSection}>
          {/* <h3 className={styles.sectionTitle}>
            <Scale size={21} /> The 6 Dimensions & Scoring
          </h3> */}
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

                {dim.scoring && (
                  <div className={styles.scoringFormula}>{dim.scoring}</div>
                )}
                {dim.note && <div className={styles.dimNote}>{dim.note}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.normalizationBox}>
          <h3 className={styles.normTitle}>
            Normalization & Composite Calculation
          </h3>
          <p>
            Raw scores are <strong>Min-Max normalized</strong> to 0–100 per
            dimension. Missing values (NaN) are filled with 0.
          </p>
          <div className={styles.formula}>
            <strong>Resilience Index</strong> = (Res. Cap × 0.20) + (Inn. Out ×
            0.20) + (Comm. Eco × 0.20) + (Hard. Sov × 0.25) + (Collab × 0.10) +
            (Talent × 0.05)
          </div>
        </div>
      </div>
    </section>
  );
}
