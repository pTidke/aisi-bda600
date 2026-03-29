"use client";
import dynamic from "next/dynamic";
import styles from "./analysis.module.css";
import ChartLoading from "./ChartLoading";

// Dynamic imports for chart components to improve performance
const SemiconductorNestedTreemap = dynamic(
  () => import("./SemiconductorNestedTreemap"),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);
const SemiconductorBump = dynamic(() => import("./SemiconductorBump"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const SemiconductorStackedBar = dynamic(
  () => import("./SemiconductorStackedBar"),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);
const AiInnovationRose = dynamic(() => import("./AiInnovationRose"), {
  ssr: false,
  loading: () => <ChartLoading />,
});
const AiTechPatentsPackedBubble = dynamic(
  () => import("./AiTechPatentsPackedBubble"),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);
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
const PartnerDiversityScatter = dynamic(
  () => import("./PartnerDiversityScatter"),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);
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
const AIPublicationsRacingBar = dynamic(
  () => import("./AIPublicationsRacingBar"),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  },
);

export default function AnalysisPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Global AI <span className="gradient-text">Analysis</span>
        </h1>
      </div>

      <section className={styles.section}>

        {/* ── SEMICONDUCTORS ── */}
        <div className={styles.sectionGroup}>
          <div className={styles.sectionHeader}>Semiconductors</div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Semiconductor Supply Chain by{" "}
              <span className="gradient-text">Subcategory & Country</span>
            </h2>
            <p className={styles.analysisText}>
              The global semiconductor supply chain reveals stark geographic concentration across all four resource types. Design resources command the largest share at $648B, led by US-headquartered fabless firms and IP licensing giants. South Korea and Taiwan anchor Process capabilities through Samsung and TSMC&apos;s combined foundry scale, while Japan&apos;s Materials strength forms an indispensable but often underappreciated layer of the stack.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>$648B</div>
              <div className={styles.keyFindingLabel}>
                Design is the largest supply chain segment — dominated by US fabless firms and IP licensing. Click any box to drill down into sub-segments.
              </div>
            </div>
            <SemiconductorNestedTreemap />
            <p className={styles.sourceNote}>Source: CSET · SIA · McKinsey Global Semiconductor Report</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Country Rankings in Global Semiconductor Supply{" "}
              <span className="gradient-text">Over Years</span>
            </h2>
            <p className={styles.analysisText}>
              Between 2019 and 2024, rankings within the semiconductor supply chain have remained broadly stable at the top, masking important shifts in mid-tier positions. China has moved up steadily despite export restrictions, reflecting sustained domestic capacity investment. The Netherlands holds an outsized position — disproportionate to its economy size — through ASML&apos;s monopoly on EUV lithography tooling, making it a pivotal single point in the global supply network.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>Netherlands</div>
              <div className={styles.keyFindingLabel}>
                Small economy, singular leverage: ASML&apos;s EUV monopoly makes the Netherlands an irreplaceable chokepoint in advanced chip manufacturing.
              </div>
            </div>
            <SemiconductorBump />
            <p className={styles.sourceNote}>Source: CSET · SIA · Rank by share of total supply chain value · 2019 → 2022 → 2024</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global Semiconductor Market Breakdown by Country and{" "}
              <span className="gradient-text">Resource Type</span>
            </h2>
            <p className={styles.analysisText}>
              The US dominates Design resources by a wide margin, reflecting the concentration of leading fabless chip companies (Nvidia, Qualcomm, AMD) and EDA software vendors that underpin global chip development. Taiwan and South Korea lead in Process through world-class foundry infrastructure, while Japan&apos;s Materials and Tool strengths complete a triangulated dependency that no single nation can replicate alone. This interdependence is simultaneously a stabilizing force and a geopolitical vulnerability.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>US $373B</div>
              <div className={styles.keyFindingLabel}>
                US leads Design — the highest-value segment — by a margin no other country approaches. Reflects deep concentration of fabless IP and EDA tooling.
              </div>
            </div>
            <SemiconductorStackedBar />
            <p className={styles.sourceNote}>Source: CSET · SIA · Sorted by total market size</p>
          </div>
        </div>

        {/* ── AI INNOVATION ── */}
        <div className={styles.sectionGroup}>
          <div className={styles.sectionHeader}>AI Innovation</div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global AI Innovation & Workforce by{" "}
              <span className="gradient-text">Country</span>
            </h2>
            <p className={styles.analysisText}>
              The US and China present two contrasting profiles in AI capacity. The US dominates deployed workforce with 170,061 AI workers versus China&apos;s 5,342, reflecting deep integration of AI talent into industry. China counters with sheer publication and patent volume — 22,665 papers and 48,660 patents — suggesting a strategic emphasis on output and IP claims over workforce deployment. These profiles reveal fundamentally different approaches: US depth versus Chinese breadth.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>31×</div>
              <div className={styles.keyFindingLabel}>
                The US has 31 times more deployed AI workers than China — the largest capability gap between the two leading AI powers.
              </div>
            </div>
            <AiInnovationRose />
            <p className={styles.sourceNote}>Source: PARAT · OECD AI Policy Observatory · Area proportional to capacity across papers, patents, and workers</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global AI Patents By{" "}
              <span className="gradient-text">Sub-Domain</span>
            </h2>
            <p className={styles.analysisText}>
              Computer Vision dominates the AI patent landscape with 27,304 filings — more than double any other sub-domain — reflecting its commercial maturity in surveillance, autonomous vehicles, and consumer devices. Control systems (11,662) and Analytics (10,733) follow, signaling that applied industrial AI is drawing serious IP investment alongside consumer applications. Emerging domains like NLP and AI Safety remain comparatively thin, suggesting the patent race has yet to fully reach generative and safety-critical AI.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>27,304</div>
              <div className={styles.keyFindingLabel}>
                Computer Vision patents — more than double the #2 domain. Reflects commercial maturity in surveillance, autonomous vehicles, and consumer hardware.
              </div>
            </div>
            <AiTechPatentsPackedBubble />
            <p className={styles.sourceNote}>Source: PARAT · USPTO · WIPO · Patent volume across AI technology sub-domains</p>
          </div>
        </div>

        {/* ── RESEARCH CAPACITY & COLLABORATION ── */}
        <div className={styles.sectionGroup}>
          <div className={styles.sectionHeader}>Research Capacity & Collaboration</div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              AI Research Capacity:{" "}
              <span className="gradient-text">Publications vs. Citations</span>
            </h2>
            <p className={styles.analysisText}>
              Research output and citation impact are highly unequal: a small cluster of elite institutions — primarily US and Chinese universities and research labs — account for a disproportionate share of high-citation work. The top 20 organizations sit in an exponential outlier cluster well above the trend line, meaning their research is cited far more than their publication count alone would predict. Volume and impact diverge sharply; the citation leaders define the field&apos;s direction.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>Top 20</div>
              <div className={styles.keyFindingLabel}>
                Organizations account for a disproportionate share of total citations despite representing less than 1% of all institutions tracked.
              </div>
            </div>
            <ResearchScatterChart />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Top 20 organizations highlighted by total citation impact</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global Research{" "}
              <span className="gradient-text">Collaboration Network</span>
            </h2>
            <p className={styles.analysisText}>
              The US-China research collaboration link is the single thickest arc in the global network, representing 162,646 co-authored articles — far larger than any other bilateral pair. This paradox of deep scientific interdependence amid rising geopolitical tension is the defining dynamic of the field. Decoupling AI research would require severing one of the world&apos;s most productive scientific partnerships, with cascading effects on citation networks, talent exchange, and benchmark development.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>162,646</div>
              <div className={styles.keyFindingLabel}>
                US-China co-authored AI papers — the world&apos;s most productive bilateral research relationship, and a structural barrier to decoupling.
              </div>
            </div>
            <CollaborationChord />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Arc thickness proportional to co-authorship volume</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global Cross-Border AI Research{" "}
              <span className="gradient-text">Collaboration</span>
            </h2>
            <p className={styles.analysisText}>
              Cross-border AI research collaboration grew substantially across all tracked fields from 2015 to 2023. Computer Vision and core Artificial Intelligence saw the sharpest absolute increases, driven by shared benchmark datasets and open-source frameworks that lower collaboration barriers. Emerging fields like AI Safety and Large Language Models show accelerating growth from a small base — suggesting the collaborative frontier is shifting toward the most consequential and contested areas of the field.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>All 8 fields</div>
              <div className={styles.keyFindingLabel}>
                Show consistent year-over-year growth — collaboration has expanded through policy tensions, not despite them.
              </div>
            </div>
            <FieldGrowthArea />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Cross-border co-authorship volume by research field · 2015–2023</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              AI Research Collaboration by Field{" "}
              <span className="gradient-text">— US & China</span>
            </h2>
            <p className={styles.analysisText}>
              Despite escalating geopolitical friction, US-China AI research collaboration remained robust through most of the 2015-2023 period before showing signs of deceleration at the tail end. The collaboration is deepest in Computer Vision and core AI, where shared conference culture (NeurIPS, CVPR) and open-source norms keep researchers connected. Any structural decoupling would need to overcome deeply entrenched researcher-level networks that have produced some of the field&apos;s most-cited and foundational work.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>2018–2020</div>
              <div className={styles.keyFindingLabel}>
                Collaboration persisted through the trade war years, peaking around 2021 before policy tightening began to show measurable effects.
              </div>
            </div>
            <USChinaCollabArea />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Collaboration trends across 8 AI research fields · 2015–2023</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Partner Diversity —{" "}
              <span className="gradient-text">Global AI Research Hubs</span>
            </h2>
            <p className={styles.analysisText}>
              The upper-right quadrant — high partner diversity and high collaboration volume — identifies the world&apos;s true AI research hubs. The US occupies this position most definitively, collaborating with the widest range of countries at the greatest aggregate volume. Countries in the middle cluster show that raw collaboration volume often concentrates with just a few major partners, limiting the diversity of ideas and talent networks. Hub status confers compounding advantages in attracting talent and setting research agendas.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>US leads both</div>
              <div className={styles.keyFindingLabel}>
                Highest collaboration volume and widest partner diversity simultaneously — a dual dominance that reinforces US centrality in global AI research.
              </div>
            </div>
            <PartnerDiversityScatter />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Top 15 countries highlighted by unique collaboration partners</p>
          </div>
        </div>

        {/* ── POLICY & INVESTMENT ── */}
        <div className={styles.sectionGroup}>
          <div className={styles.sectionHeader}>Policy & Investment</div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              US AI Policy Stance Over Time{" "}
              <span className="gradient-text">(2019–2025)</span>
            </h2>
            <p className={styles.analysisText}>
              US AI policy has shifted decisively toward restriction since 2022, with Restrictive measures consistently outnumbering Enabling ones from 2023 onward. The 2024 peak of 65 Restrictive policies reflects a wave of export controls on advanced chips (H100, A100), investment screening via CFIUS expansions, and computing access restrictions targeting Chinese entities. Balanced and Neutral policies remain present but are now secondary to a national security frame that has fundamentally reoriented US AI governance.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>2024: 65 vs. 38</div>
              <div className={styles.keyFindingLabel}>
                Restrictive policies now outpace Enabling ones by nearly 2:1 — a structural reversal from the 2019-2021 period that favored AI enablement.
              </div>
            </div>
            <PolicyStanceTimeline />
            <p className={styles.sourceNote}>Source: OECD AI Policy Observatory · CSET · Policy count by stance category · 2019–2025</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global AI Patent Landscape{" "}
              <span className="gradient-text">— Sector Categories</span>
            </h2>
            <p className={styles.analysisText}>
              AI patent activity clusters in industrial and consumer applications, with Healthcare, Mobility, and Finance representing the dominant commercial sectors globally. Asia-Pacific leads by volume across most sectors, driven by Chinese strategic filing at scale, while US and European patents tend to concentrate in higher-value, more specialized categories. This divergence reflects fundamentally different IP strategies: volume-based portfolio building in Asia versus targeted protection of core innovations in the West.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>Asia-Pacific</div>
              <div className={styles.keyFindingLabel}>
                Leads patent volume in most sectors. Western filings are fewer but concentrate in higher-value niches — revealing two distinct IP strategy philosophies.
              </div>
            </div>
            <AIPatentSunbursts />
            <p className={styles.sourceNote}>Source: PARAT · WIPO · USPTO · Click any slice to drill down by region, country, and sector</p>
          </div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global AI Investment Heatmap{" "}
              <span className="gradient-text">— Top 15 Countries & Fields</span>
            </h2>
            <p className={styles.analysisText}>
              US AI investment is concentrated overwhelmingly in Mobile/Internet services at $168B, reflecting Big Tech&apos;s platform-scale bets on AI-native products. Healthcare and Data & Analytics represent the next priority clusters, both areas where AI offers clear productivity leverage. China&apos;s profile is more evenly distributed at lower absolute values, while European nations show targeted investment in industrial automation and specialized verticals — revealing a fundamental difference between platform-building and sector-specific application strategies.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>US $168B</div>
              <div className={styles.keyFindingLabel}>
                In Mobile/Internet alone — more than the total AI investment of most other nations combined. Reflects Big Tech&apos;s outsized role in US AI commercialization.
              </div>
            </div>
            <InvestmentHeatmap />
            <p className={styles.sourceNote}>Source: CSET · PitchBook · AI investment across countries and technology categories</p>
          </div>
        </div>

        {/* ── PUBLICATIONS ── */}
        <div className={styles.sectionGroup}>
          <div className={styles.sectionHeader}>Publications</div>

          <div className={styles.chartCard}>
            <h2 className={styles.chartTitle}>
              Global AI Publications Racing Bar{" "}
              <span className="gradient-text">(2015–2023)</span>
            </h2>
            <p className={styles.analysisText}>
              China&apos;s rise in AI publication volume is the defining story of the 2015-2023 period. China surpassed the US around 2017 and reached 103,672 publications by 2023 — more than double the US total of 50,359. India&apos;s emergence as a significant third contributor (43,816) is the decade&apos;s secondary story, while European nations have grown at slower but steady rates. The raw volume race, however, obscures quality differences better captured in citation analysis — China&apos;s publication lead does not directly translate to equivalent research influence.
            </p>
            <div className={styles.keyFinding}>
              <div className={styles.keyFindingStat}>103,672</div>
              <div className={styles.keyFindingLabel}>
                China&apos;s 2023 AI publication count — 2× the US total and growing faster year-over-year. India at 43,816 is rapidly closing the gap with the US.
              </div>
            </div>
            <AIPublicationsRacingBar />
            <p className={styles.sourceNote}>Source: PARAT · Semantic Scholar · Top 15 countries by annual AI publication count · 2015–2023</p>
          </div>
        </div>

      </section>
    </main>
  );
}
