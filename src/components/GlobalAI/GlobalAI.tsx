import { Activity, Database, Users, Globe } from "lucide-react";
import styles from "./GlobalAI.module.css";

const metrics = [
  {
    id: "compute",
    icon: <Activity size={24} />,
    label: "AI Compute Output",
    subLabel: "1st Quartile",
    subLabelColor: "var(--primary)",
    value: "+14%",
    valueColor: "var(--text-primary)",
    description: "Peak compute growth and sustained long-active leading runs.",
  },
  {
    id: "capacity",
    icon: <Database size={24} />,
    label: "Cloud AI Capacity",
    subLabel: "Concentrated",
    subLabelColor: "#d97706",
    value: "42%",
    valueColor: "var(--text-primary)",
    description:
      "Data center hubs for AI and hubs for AI accelerator manufacturing.",
  },
  {
    id: "researchers",
    icon: <Users size={24} />,
    label: "AI Researchers",
    subLabel: "Globally",
    subLabelColor: "var(--primary)",
    value: "850+",
    valueColor: "var(--text-primary)",
    description: "Prominent and invited leadership of generation AI summits.",
  },
  {
    id: "risk",
    icon: <Globe size={24} />,
    label: "Geopolitical Risk",
    subLabel: "Elevated",
    subLabelColor: "#dc2626",
    value: "High",
    valueColor: "#dc2626",
    description: "Growing frequency of international competitive pressure.",
  },
];

export default function GlobalAI() {
  return (
    <section className={styles.section} id="analysis">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.liveTag}>
            <span className={styles.liveDot} />
            LIVE INDICATORS
          </div>
          <h2 className="section-title">Global AI Landscape</h2>
          <p className={styles.subtitle}>
            Real-time markers indicating the momentum of international AI
            development cycles.
          </p>
        </div>

        <div className={styles.grid}>
          {metrics.map((m) => (
            <div key={m.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>{m.icon}</div>
                <span className={styles.cardLabel}>{m.label}</span>
              </div>
              <div className={styles.cardValue}>
                <span className={styles.value} style={{ color: m.valueColor }}>
                  {m.value}
                </span>
                <span
                  className={styles.subLabel}
                  style={{ color: m.subLabelColor }}
                >
                  {m.subLabel}
                </span>
              </div>
              <p className={styles.cardDesc}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
