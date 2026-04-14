import { ArrowRight, Download } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          {/* <p className={styles.eyebrow}>Access the technical dataset</p> */}
          <h2 className={styles.title}>
            Ready to explore the
            <br />
            <span className="gradient-text">full AISI architecture?</span>
          </h2>
          <p className={styles.subtitle}>
            Analyze Top 15 nations and thousands of multi-dimensional data
            points processed through our proprietary AISI Dashboard.
          </p>
          <div className={styles.actions}>
            <a href="/aisi-index" className="btn-primary btn-glow">
              Explore AISI Dashboard <ArrowRight size={18} />
            </a>
            {/* <a href="#dataset" className="btn-outline">
              Access Raw Data <Download size={18} />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
