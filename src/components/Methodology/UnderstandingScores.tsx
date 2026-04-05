import React, { useState } from 'react';
import { Info, HelpCircle, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './UnderstandingScores.module.css';

export default function UnderstandingScores() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button 
          className={styles.trigger}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <div className={styles.triggerContent}>
            <HelpCircle size={24} className={styles.mainIcon} />
            <div className={styles.triggerText}>
              <h3 className={styles.triggerTitle}>Understanding AISI Scores</h3>
              <p className={styles.triggerSubtitle}>A quick guide on how to read the data and dimension scaling correctly.</p>
            </div>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isExpanded && (
          <div className={styles.content}>
            <div className={styles.grid}>
              {/* Scaling Section */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <TrendingUpIcon size={20} />
                  <h4>Relative vs. Absolute Scaling</h4>
                </div>
                <p>
                  <strong>Most dimensions use relative scaling.</strong> Research Capacity, Innovation Output, Commercial Ecosystem, Collaboration Network, Talent Base, and Governance Readiness are all scored relative to the best performer. A score of 100 means "highest among all countries measured" — not "perfect".
                </p>
                <div className={styles.example}>
                  <span>Example:</span> China scores 100 on Innovation Output because it leads in patents, but South Korea is right behind at 92.6.
                </div>
              </div>

              {/* Hardware Exceptions */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <CpuIcon size={20} />
                  <h4>Hardware Sovereignty (The Exception)</h4>
                </div>
                <p>
                  This dimension uses <strong>actual market share percentages</strong>, not relative scaling. These are real monopolies, not relative rankings.
                </p>
                <ul className={styles.list}>
                  <li><strong>100% share:</strong> Literal global control (e.g., ASML's 100% EUV market share).</li>
                  <li><strong>Discrete GPUs:</strong> 100% share means Nvidia and AMD together hold the entire market.</li>
                </ul>
              </div>

              {/* Log Scaling */}
              <div className={styles.cardFull}>
                <div className={styles.cardHeader}>
                  <BarChartIcon size={20} />
                  <h4>Why we use Log-Scaling</h4>
                </div>
                <div className={styles.logContent}>
                  <p>
                    AI metrics are extremely concentrated: the US publishes 1,127× more AI papers than the median country. Without log-scaling, 90% of countries would score below 5. 
                  </p>
                  <div className={styles.tradeoff}>
                    <strong>The Trade-off:</strong> Gaps at the top appear smaller than they really are — a country at 100 might be 10× larger in raw terms than a country at 70.
                  </div>
                </div>
              </div>

              {/* Missing Scores */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <AlertCircle size={20} />
                  <h4>Missing Scores vs. Zeros</h4>
                </div>
                <p>
                  A dash (—) means <strong>no data available</strong> for that country. A zero (0) means the country is present but has <strong>zero activity</strong>.
                </p>
                <div className={styles.comparison}>
                  <div className={styles.compItem}>
                    <span className={styles.compLabel}>Dash (—):</span> Dataset doesn't cover this country (e.g., most countries have no governance score).
                  </div>
                  <div className={styles.compItem}>
                    <span className={styles.compLabel}>Zero (0):</span> Country is in the dataset but has no presence (e.g., Brazil has zero semiconductor providers).
                  </div>
                </div>
              </div>

              {/* Quick Reference */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <CheckCircle2 size={20} />
                  <h4>Quick Reference</h4>
                </div>
                <ul className={styles.quickRef}>
                  <li><strong>100 on Hardware:</strong> Real monopoly position.</li>
                  <li><strong>100 on Innovation:</strong> Best in dataset, others may be close.</li>
                  <li><strong>0 on Hardware:</strong> No provider headquarters in country.</li>
                  <li><strong>Dash on Talent:</strong> No corporate workforce data available.</li>
                  <li><strong>70% Data Coverage:</strong> Scored on 5 of 7 dimensions.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Simple icons for the cards
function TrendingUpIcon({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
}

function CpuIcon({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>;
}

function BarChartIcon({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
}
