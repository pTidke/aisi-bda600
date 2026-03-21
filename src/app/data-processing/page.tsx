import DataProcessing from "./DataProcessing";
import styles from "./data-processing.module.css";

export const metadata = {
  title: "Data Processing | AI Supremacy Index",
  description:
    "Data processing pipelines and methodologies for the AI Supremacy Index.",
};

export default function DataProcessingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Data <span className="gradient-text">Processing</span>
        </h1>
        <p className={styles.subtitle}>
          Complete documentation of how 5 ETO datasets containing 31 source
          files were cleaned, combined, harmonized, and transformed into 8
          analysis-ready master datasets feeding the AI Supremacy Index scoring
          pipeline.
        </p>
      </div>

      <section className={styles.section}>
        <DataProcessing />
      </section>
    </main>
  );
}
