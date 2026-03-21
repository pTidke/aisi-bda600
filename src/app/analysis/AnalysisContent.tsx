"use client";

import dynamic from "next/dynamic";
import styles from "./analysis.module.css";
import ChartLoading from "./ChartLoading";

// Dynamic imports for chart components
const SemiconductorNestedTreemap = dynamic(() => import("./SemiconductorNestedTreemap"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const SemiconductorBump = dynamic(() => import("./SemiconductorBump"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const SemiconductorStackedBar = dynamic(() => import("./SemiconductorStackedBar"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const AiInnovationRose = dynamic(() => import("./AiInnovationRose"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const AiTechPatentsPackedBubble = dynamic(() => import("./AiTechPatentsPackedBubble"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const ResearchScatterChart = dynamic(() => import("./ResearchScatterChart"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const CollaborationChord = dynamic(() => import("./CollaborationChord"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const FieldGrowthArea = dynamic(() => import("./FieldGrowthArea"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const USChinaCollabArea = dynamic(() => import("./USChinaCollabLine"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const PartnerDiversityScatter = dynamic(() => import("./PartnerDiversityScatter"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const PolicyStanceTimeline = dynamic(() => import("./PolicyStanceTimeline"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const AIPatentSunbursts = dynamic(() => import("./AIPatentSunbursts"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const InvestmentHeatmap = dynamic(() => import("./InvestmentHeatmap"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const AIPublicationsRacingBar = dynamic(() => import("./AIPublicationsRacingBar"), {
  ssr: false,
  loading: () => <ChartLoading />,
});

export default function AnalysisContent() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Global AI <span className="gradient-text">Analysis</span>
        </h1>
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
            AI Research Capacity:{" "}
            <span className="gradient-text">Publications vs. Citations</span>
          </h2>
          <p className={styles.chartSub}>
            Scatter plot of AI research impact · Highlighted points represent
            the Top 20 organizations by total impact.
          </p>
          <ResearchScatterChart />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global Research{" "}
            <span className="gradient-text">Collaboration Network</span>
          </h2>
          <p className={styles.chartSub}>
            Chord diagram visualizing co-authorship links between top countries.
            The thickness of the arcs represents the volume of shared research
            articles.
          </p>
          <CollaborationChord />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global Cross-Border AI Research{" "}
            <span className="gradient-text">Collaboration</span>
          </h2>
          <p className={styles.chartSub}>
            Area chart showing the volume of cross-border AI research
            collaborations between countries over time.
          </p>
          <FieldGrowthArea />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            AI Research Collaboration by Field{" "}
            <span className="gradient-text">US-China</span>
          </h2>
          <p className={styles.chartSub}>
            Stacked area showing collaboration trends across 8 fields
          </p>
          <USChinaCollabArea />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Partner Diversity — Who are the global{" "}
            <span className="gradient-text">AI research hubs?</span>
          </h2>
          <p className={styles.chartSub}>
            Scatter plot of AI research impact · Highlighted points represent
            the Top 20 organizations by total impact.
          </p>
          <PartnerDiversityScatter />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            US AI Policy Stance Over Time{" "}
            <span className="gradient-text">(2019–2025)</span>
          </h2>
          <p className={styles.chartSub}>
            Stacked bar: Enabling vs Restrictive vs Balanced vs Neutral
          </p>
          <PolicyStanceTimeline />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global AI Patent Landscape{" "}
            <span className="gradient-text">Sector Categories</span>
          </h2>
          <p className={styles.chartSub}>
            Sunburst chart showing AI patent distribution across technology
            categories (Click on slice for drill down)
          </p>
          <AIPatentSunbursts />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global AI Investment Heatmap{" "}
            <span className="gradient-text">Top 15 Countries, Fields</span>
          </h2>
          <p className={styles.chartSub}>
            Heatmap showing AI investment across countries and technology
            categories.
          </p>
          <InvestmentHeatmap />
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>
            Global AI Publications Racing Bar (2015–2023){" "}
            <span className="gradient-text">Top 15 Countries</span>
          </h2>
          <p className={styles.chartSub}>
            Animated bar chart that auto-plays through years
          </p>
          <AIPublicationsRacingBar />
        </div>
      </section>
    </main>
  );
}
