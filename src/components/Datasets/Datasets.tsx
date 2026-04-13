"use client";
import { useState } from "react";
import {
  ExternalLink,
  Database,
  Activity,
  Share2,
  Box,
  ShieldCheck,
  FileText,
  Download,
  Github,
  X,
} from "lucide-react";
import styles from "./Datasets.module.css";

interface DatasetFile {
  name: string;
  path: string;
}

interface Dataset {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  files?: DatasetFile[];
  isGithub?: boolean;
  zip?: string;
}

const etoDatasets = [
  {
    title: "Country AI Activity Metrics",
    desc: "Comprehensive tracking of publications, citations, patents, and investment across nations, categorized by year and AI field.",
    icon: <Activity size={24} />,
    color: "var(--primary)",
    link: "https://eto.tech/dataset-docs/country-ai-activity-metrics/",
    zip: "/datasets/activity/Activity.zip",
    files: [
      { name: "AISI_Final_Rankings.csv", path: "/datasets/master/AISI_Final_Rankings.csv" },
      { name: "AISI_High_Confidence_Rankings.csv", path: "/datasets/master/AISI_High_Confidence_Rankings.csv" },
      { name: "country_ai_unified_master.csv", path: "/datasets/master/country_ai_unified_master.csv" },
      { name: "publications_yearly_articles.csv", path: "/datasets/activity/publications_yearly_articles.csv" },
      { name: "publications_yearly_citations.csv", path: "/datasets/activity/publications_yearly_citations.csv" },
      { name: "patents_yearly_applications.csv", path: "/datasets/activity/patents_yearly_applications.csv" },
      { name: "companies_yearly_estimated.csv", path: "/datasets/activity/companies_yearly_estimated.csv" },
      { name: "publications_summary.csv", path: "/datasets/activity/publications_summary.csv" },
    ],
  },
  {
    title: "Cross-Border Tech Research Metrics",
    desc: "A deep dive into international collaboration, featuring extensive records of cross-country research co-authorship.",
    icon: <Share2 size={24} />,
    color: "var(--primary)",
    link: "https://eto.tech/dataset-docs/cross-border-tech-research-metrics/",
    zip: "/datasets/collaboration/Collaborations.zip",
    files: [
      { name: "crossborder_collab_master.csv", path: "/datasets/master/crossborder_collab_master.csv" },
      { name: "AI safety.csv", path: "/datasets/collaboration/AI safety.csv" },
      { name: "Artificial intelligence.csv", path: "/datasets/collaboration/Artificial intelligence.csv" },
      { name: "Chip design and fabrication.csv", path: "/datasets/collaboration/Chip design and fabrication.csv" },
      { name: "Computer vision.csv", path: "/datasets/collaboration/Computer vision.csv" },
      { name: "Cybersecurity.csv", path: "/datasets/collaboration/Cybersecurity.csv" },
      { name: "Large language models.csv", path: "/datasets/collaboration/Large language models.csv" },
      { name: "Natural language processing.csv", path: "/datasets/collaboration/Natural language processing.csv" },
      { name: "Robotics.csv", path: "/datasets/collaboration/Robotics.zip" },
    ],
  },
  {
    title: "Private-Sector AI Indicators",
    desc: "Granular data on corporate AI activity, including AI workforce presence, publication volume, and specific company profiles.",
    icon: <Database size={24} />,
    color: "var(--primary)",
    link: "https://eto.tech/dataset-docs/private-sector-ai-indicators/",
    zip: "/datasets/talent/Talent.zip",
    files: [
      { name: "parat_country_agg.csv", path: "/datasets/master/parat_country_agg.csv" },
      { name: "parat_master.csv", path: "/datasets/talent/parat_master.csv" },
      { name: "core.csv", path: "/datasets/talent/core.csv" },
      { name: "id.csv", path: "/datasets/talent/id.csv" },
      { name: "ticker.csv", path: "/datasets/talent/ticker.csv" },
      { name: "yearly_publication_counts.csv", path: "/datasets/talent/yearly_publication_counts.csv" },
    ],
  },
  {
    title: "Advanced Semiconductor Supply Chain",
    desc: "Market share and presence data for semiconductor providers globally, tracing the strategic hardware foundation of AI.",
    icon: <Box size={24} />,
    color: "var(--primary)",
    link: "https://eto.tech/dataset-docs/chipexplorer/",
    zip: "/datasets/semiconductor/Semiconductors.zip",
    files: [
      { name: "semiconductor_master.csv", path: "/datasets/master/semiconductor_master.csv" },
      { name: "inputs.csv", path: "/datasets/semiconductor/inputs.csv" },
      { name: "providers.csv", path: "/datasets/semiconductor/providers.csv" },
      { name: "provision.csv", path: "/datasets/semiconductor/provision.csv" },
      { name: "sequence.csv", path: "/datasets/semiconductor/sequence.csv" },
      { name: "stages.csv", path: "/datasets/semiconductor/stages.csv" },
    ],
  },
  {
    title: "AGORA Dataset",
    desc: "Critical policy and regulatory data points, tracking the global landscape of AI governance and high-level strategy.",
    icon: <ShieldCheck size={24} />,
    color: "var(--primary)",
    link: "https://eto.tech/dataset-docs/agora-dataset/",
    zip: "/datasets/governance/Governance.zip",
    files: [
      { name: "documents.csv", path: "/datasets/governance/documents.csv" },
      { name: "segments.csv", path: "/datasets/governance/segments.csv" },
      { name: "authorities.csv", path: "/datasets/governance/authorities.csv" },
      { name: "collections.csv", path: "/datasets/governance/collections.csv" },
    ],
  },
  {
    title: "Full Analysis Pipeline",
    desc: "Access the complete Python analytical pipeline, including all notebooks, data processing logic, and scoring scripts.",
    icon: <Github size={24} />,
    color: "var(--primary)",
    link: "https://github.com/pTidke/aisi-data-processing",
    isGithub: true,
  },
];

export default function Datasets() {
  const [activeDataset, setActiveDataset] = useState<Dataset | null>(null);

  const closeModal = () => setActiveDataset(null);

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
              <div key={i} className={d.isGithub ? styles.cardGithub : styles.card}>
                <div className={styles.iconWrapper}>
                  {d.icon}
                </div>
                <h3 className={styles.cardTitle}>{d.title}</h3>
                <p className={styles.cardDesc}>{d.desc}</p>

                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    {d.isGithub ? "View Repository" : "View Documentation"} <ExternalLink size={14} />
                  </a>

                  {d.files && (
                    <button
                      onClick={() => setActiveDataset(d)}
                      className={styles.link}
                    >
                      <Download size={16} /> Download Raw Data
                    </button>
                  )}

                  {d.isGithub && (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <Github size={16} /> Clone Pipeline
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <a
                href="/datasets/Datasets.zip"
                download
                className={`${styles.link} ${styles.linkPrimary}`}
              >
                <Download size={18} /> Download Master Dataset (All ZIPs)
              </a>
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
      </div>

      {activeDataset && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>{activeDataset.title}</div>
              <button className={styles.closeButton} onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <p className={styles.modalDesc} style={{ margin: 0 }}>
                  Direct download access to the curated raw files for this domain.
                </p>
                {activeDataset.zip && (
                  <a
                    href={activeDataset.zip}
                    download
                    className={`${styles.link} ${styles.linkZip}`}
                    style={{ width: "auto" }}
                  >
                    <Download size={14} /> Download Section ZIP
                  </a>
                )}
              </div>
              <div className={styles.downloadSection} style={{ border: "none", marginTop: 0, paddingTop: 0 }}>
                <div className={styles.downloadHeader}>
                  <Download size={14} /> Available CSV Files
                </div>
                <div className={styles.fileList} style={{ maxHeight: "300px" }}>
                  {activeDataset.files?.map((file, fi) => (
                    <a
                      key={fi}
                      href={file.path}
                      download
                      className={styles.fileItem}
                      title={`Download ${file.name}`}
                    >
                      <span>{file.name}</span>
                      <Download size={12} className={styles.downloadIcon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
