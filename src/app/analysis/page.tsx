import SemiconductorTreemap from "./SemiconductorBump";
import SemiconductorStackedBar from "./SemiconductorStackedBar";
import SemiconductorNestedTreemap from "./SemiconductorNestedTreemap";
import styles from "./analysis.module.css";

export const metadata = {
  title: "Analysis | AI Supremacy Index",
  description: "Data visualizations and analysis for the AI Supremacy Index.",
};

export default function AnalysisPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Global AI <span className="gradient-text">Analysis</span>
        </h1>
        {/* <p className={styles.subtitle}>
          Interactive visualizations across semiconductor markets, research
          capacity, and AI investment landscapes.
        </p> */}
      </div>

      <section className={styles.section}>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Semiconductor Supply Chain by{" "}
            <span className="gradient-text">Subcategory & Country</span>
          </h2>
          <p className={styles.chartSub}>
            Nested treemap showing each resource type broken down by market
            segment and contributing country.
          </p>
          <SemiconductorNestedTreemap />
          {/* <p className={styles.source}>Data: ETO (2019–2024)</p> */}
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Country Rankings in Global Semiconductor Supply{" "}
            <span className="gradient-text">Over Years</span>
          </h2>
          <p className={styles.chartSub}>
            Rank by share of total semiconductor supply chain · Lower rank =
            larger share · 2019 → 2022 → 2024
          </p>
          <SemiconductorTreemap />
          {/* <p className={styles.source}>Data: ETO (2019–2024)</p> */}
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global Semiconductor Market Breakdown by Country and{" "}
            <span className="gradient-text">Resource Type</span>
          </h2>
          <p className={styles.chartSub}>
            Stacked bars show each country&apos;s contribution across resource
            types, sorted by total market size.
          </p>
          <SemiconductorStackedBar />
          {/* <p className={styles.source}>Data: ETO (2019–2024)</p> */}
        </div>
      </section>
    </main>
  );
}
