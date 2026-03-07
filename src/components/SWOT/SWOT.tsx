"use client";
import {
  TrendingUp,
  AlertCircle,
  Lightbulb,
  ShieldAlert,
  BarChart3,
} from "lucide-react";
import styles from "./SWOT.module.css";

const swotData = [
  {
    type: "Strengths",
    content:
      "Rapid innovation cycles and robust computational infrastructure in leading tech hubs. Strong venture capital backing and concentration of global talent in key regions.",
    bullets: ["R&D Investment", "Talent Concentration"],
    icon: <TrendingUp size={24} />,
    color: "#22c55e",
    bgColor: "#f0fdf4",
  },
  {
    type: "Weaknesses",
    content:
      "Fragmented ethical frameworks, data privacy vulnerabilities, and massive energy requirements. Lack of standardized governance across international borders.",
    bullets: ["Energy Consumption", "Regulatory Fragmentation"],
    icon: <AlertCircle size={24} />,
    color: "#ef4444",
    bgColor: "#fef2f2",
  },
  {
    type: "Opportunities",
    content:
      "Democratization of open-source models and cross-border research collaborations. Integration of AI in healthcare and climate change mitigation strategies.",
    bullets: ["Open Source Growth", "Healthcare Optimization"],
    icon: <Lightbulb size={24} />,
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  {
    type: "Threats",
    content:
      "Algorithmic bias, automated misinformation campaigns, and the widening global digital divide. Potential job market displacement and security risks.",
    bullets: ["Digital Divide", "AI Weaponization"],
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
            SWOT: Global AI <span className="gradient-text">Adoption</span>
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
