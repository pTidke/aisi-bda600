"use client";
import { TrendingUp, AlertCircle, Lightbulb, ShieldAlert } from "lucide-react";
import styles from "./SWOT.module.css";

const swotData = [
  {
    type: "Strengths",
    content:
      "Cross-border AI research collaboration surged 342% (2015–2023), spanning 94 countries across 8 fields. 192 nations now produce AI publications, and the private sector shows depth with 691 tracked companies driving corporate AI R&D.",
    bullets: ["Research Collaboration Growth", "Broad Country Participation"],
    icon: <TrendingUp size={24} />,
    color: "#22c55e",
    bgColor: "#f0fdf4",
  },
  {
    type: "Weaknesses",
    content:
      "95% of semiconductor inputs are highly concentrated (HHI > 2500) with zero competitive markets. Patent data lags 5 years (complete only through 2020), workforce metrics cover just 17 countries, and AI governance is individually scoreable for only the US and China.",
    bullets: ["Semiconductor Chokepoints", "Severe Data Gaps"],
    icon: <AlertCircle size={24} />,
    color: "#ef4444",
    bgColor: "#fef2f2",
  },
  {
    type: "Opportunities",
    content:
      "LLMs and AI Safety are the fastest-growing cross-border research fields, signaling frontier capability diffusion. 117 countries attract measurable AI investment, and expanding governance archives could enable more nations to build institutional AI readiness.",
    bullets: ["Frontier Research Diffusion", "Governance Framework Expansion"],
    icon: <Lightbulb size={24} />,
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  {
    type: "Threats",
    content:
      "Critical supply chain chokepoints persist — EUV lithography is 100% Netherlands, discrete GPUs are 100% US. US–China chip design collaboration is declining while the digital divide widens: only 65 of 192 countries have data across all research pillars.",
    bullets: ["Supply Chain Fragmentation", "Widening Digital Divide"],
    icon: <ShieldAlert size={24} />,
    color: "#f97316",
    bgColor: "#fff7ed",
  },
];

export default function SWOT() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            SWOT: Global AI <span className="gradient-text">Resilience</span>
          </h1>
        </div>

        <div className={styles.grid}>
          {swotData.map((item) => (
            <div
              key={item.type}
              className={styles.card}
              style={{ backgroundColor: item.bgColor }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} style={{ color: item.color }}>
                  {item.icon}
                </div>
              </div>
              <h2 className={styles.cardTitle}>{item.type}</h2>
              <p className={styles.cardContent}>{item.content}</p>
              <ul className={styles.bullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet} className={styles.bulletItem}>
                    <span
                      className={styles.dot}
                      style={{ backgroundColor: item.color }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
