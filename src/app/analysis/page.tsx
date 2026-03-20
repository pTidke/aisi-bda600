import SemiconductorBump from "./SemiconductorBump";
import SemiconductorStackedBar from "./SemiconductorStackedBar";
import SemiconductorNestedTreemap from "./SemiconductorNestedTreemap";
import AiInnovationRose from "./AiInnovationRose";
import ResearchScatterChart from "./ResearchScatterChart";
import AiTechPatentsBubble from "./AiTechPatentsBubble";
import AiTechPatentsPackedBubble from "./AiTechPatentsPackedBubble";
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
            segment and contributing country. (Click on box for drill down)
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
          <SemiconductorBump />
          {/* <p className={styles.source}>Data: ETO (2019–2024)</p> */}
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global AI Innovation & Workforce by{" "}
            <span className="gradient-text">Country</span>
          </h2>
          <p className={styles.chartSub}>
            Stacked Rose Chart · Area is proportional to capacity across papers,
            patents, and workers.
          </p>
          <AiInnovationRose />
        </div>

        {/* <div className={styles.chartCard} style={{ padding: "40px 60px" }}>
          <AiTechPatentsBubble />
        </div> */}

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global AI Patents By{" "}
            <span className="gradient-text">Sub-Domain</span>
          </h2>
          <p className={styles.chartSub}>
            Packed bubble chart visualization of patent volume across different
            artificial intelligence technologies.
          </p>
          <AiTechPatentsPackedBubble />
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

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            AI Research Capacity:{" "}
            <span className="gradient-text">Publications vs. Citations</span>
          </h2>
          <p className={styles.chartSub}>
            Scatter plot of AI research impact · Highlighted points represent
            the Top 20 organizations by total impact.
          </p>
          <ResearchScatterChart />
        </div>
      </section>
    </main>
  );
}
