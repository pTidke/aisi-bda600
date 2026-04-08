"use client";
import {
  ExternalLink,
  Database,
  Activity,
  Share2,
  Box,
  ShieldCheck,
} from "lucide-react";
import styles from "./Datasets.module.css";

const etoDatasets = [
  {
    title: "Country AI Activity Metrics",
    desc: "Comprehensive tracking of publications, citations, patents, and investment across nations, categorized by year and AI field.",
    icon: <Activity size={24} />,
    color: "#3b82f6",
    link: "https://eto.tech/dataset-docs/country-ai-activity-metrics/",
  },
  {
    title: "Cross-Border Tech Research Metrics",
    desc: "A deep dive into international collaboration, featuring extensive records of cross-country research co-authorship.",
    icon: <Share2 size={24} />,
    color: "#6366f1",
    link: "https://eto.tech/dataset-docs/cross-border-tech-research-metrics/",
  },
  {
    title: "Private-Sector AI Indicators",
    desc: "Granular data on corporate AI activity, including AI workforce presence, publication volume, and specific company profiles.",
    icon: <Database size={24} />,
    color: "#8b5cf6",
    link: "https://eto.tech/dataset-docs/private-sector-ai-indicators/",
  },
  {
    title: "Advanced Semiconductor Supply Chain",
    desc: "Market share and presence data for semiconductor providers globally, tracing the strategic hardware foundation of AI.",
    icon: <Box size={24} />,
    color: "#ec4899",
    link: "https://eto.tech/dataset-docs/chipexplorer/",
  },
  {
    title: "AGORA Dataset",
    desc: "Critical policy and regulatory data points, tracking the global landscape of AI governance and high-level strategy.",
    icon: <ShieldCheck size={24} />,
    color: "#f43f5e",
    link: "https://eto.tech/dataset-docs/agora-dataset/",
  },
];

export default function Datasets() {
  return (
    <section className={styles.section} id="datasets">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Data Sources</div>
          <h2 className={styles.title}>
            Powered by <span className={styles.eto}>ETO.tech</span>
          </h2>
          <p className={styles.description}>
            Our analysis leverages first-class datasets from the Emerging
            Technology Observatory (ETO), providing the empirical backbone for
            the AI Supremacy Index.
          </p>

          <div className={styles.grid}>
            {etoDatasets.map((d, i) => (
              <a
                key={i}
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: `${d.color}15`, color: d.color }}
                >
                  {d.icon}
                </div>
                <h3 className={styles.cardTitle}>{d.title}</h3>
                <p className={styles.cardDesc}>{d.desc}</p>
                <div className={styles.cardLink}>
                  View Documentation <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>

          <div className={styles.footer}>
            <a
              href="https://eto.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Explore ETO Datasets <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
