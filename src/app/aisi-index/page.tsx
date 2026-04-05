"use client";
import dynamic from "next/dynamic";
import styles from "./aisi-index.module.css";
import UnderstandingScores from "@/components/Methodology/UnderstandingScores";

const AISIDashboard = dynamic(() => import("./AISIDashboard"), {
  ssr: false,
});

export default function AISIIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          AISI <span className="gradient-text">Index</span>
        </h1>
      </div>

      <section className={styles.section}>
        <AISIDashboard />
        <div className={styles.understandingWrapper}>
          <UnderstandingScores />
        </div>
      </section>
    </main>
  );
}
