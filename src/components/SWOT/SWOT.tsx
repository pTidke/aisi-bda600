"use client";
import { TrendingUp, AlertCircle, Lightbulb, ShieldAlert } from "lucide-react";
import styles from "./SWOT.module.css";

const swotData = [
  {
    type: "Strengths",
    content:
      "Built on the three core pillars of the popular GAIRI index—Government, Technology Sector, and Data & Infrastructure. Our framework synthesizes 31 source files across 5 major ETO datasets. Notably, cross-border AI research has surged 342% since 2015, with 192 nations now contributing to the global frontier.",
    bullets: ["342% R&D Surge", "192 Active Nations", "GAIRI Pillar Alignment"],
    icon: <TrendingUp size={24} />,
    color: "#22c55e",
    bgColor: "#f0fdf4",
  },
  {
    type: "Weaknesses",
    content:
      "Significant year gaps in available data, including a 5-year patent reporting lag, limit continuous time-series predictive power. Furthermore, 95% of semiconductor inputs are trapped in high-concentration markets (HHI > 2500), creating extreme supply chain fragility for most nations.",
    bullets: ["5-Year Patent Lag", "95% Input Concentration", "Time-Series Gaps"],
    icon: <AlertCircle size={24} />,
    color: "#ef4444",
    bgColor: "#fef2f2",
  },
  {
    type: "Opportunities",
    content:
      "Growing trends toward data transparency may gradually reduce access barriers for higher quality datasets. With 117 countries now attracting measurable AI investment and India showing a +3.1 trend, there is significant potential for emerging markets to bypass traditional development hurdles.",
    bullets: ["India +3.1 Trend", "117 Nations Investing", "Transparency Trends"],
    icon: <Lightbulb size={24} />,
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  {
    type: "Threats",
    content:
      "Diverging AI development paths (localized LLMs vs. global platforms) require continuous adaptation of the framework. Geopolitical chokepoints remain severe, with a 100% Dutch monopoly on EUV lithography and a 31x talent gap in deployed AI workforce between leaders risk a permanent divide.",
    bullets: ["31x Talent Gap", "100% EUV Monopoly", "Diverging AI Paths"],
    icon: <ShieldAlert size={24} />,
    color: "#f97316",
    bgColor: "#fff7ed",
  },
];

const recommendations = [
  {
    title: "Supply Chain Diversification",
    desc: "De-risk the 95% of semiconductor inputs that are currently monopolized or highly concentrated.",
  },
  {
    title: "Accelerated Transparency",
    desc: "Close the 5-year patent lag with standardized, monthly reporting of innovation metrics.",
  },
  {
    title: "Talent Leveling",
    desc: "Target the 31x workforce disparity through international AI deployment exchange programs.",
  },
  {
    title: "Governance Harmonization",
    desc: "Establish common standards for AI Safety (+342% growth) to prevent regulatory fragmentation.",
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
          <p className={styles.subtitle}>
            A quantitative assessment of the global AI landscape across seven dimensions and 5 major datasets.
          </p>
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

        <section className={styles.recommendationsSection}>
          <div className={styles.recommendationsHeader}>
            <Lightbulb className={styles.sidebarIcon} size={24} />
            <h3 className={styles.sidebarTitle}>Strategic Recommendations</h3>
          </div>
          <div className={styles.recommendationGrid}>
            {recommendations.map((rec, index) => (
              <div key={index} className={styles.recItem}>
                <div className={styles.recNumber}>0{index + 1}</div>
                <div className={styles.recContent}>
                  <h4 className={styles.recTitle}>{rec.title}</h4>
                  <p className={styles.recDesc}>{rec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
