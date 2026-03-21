import styles from "./analysis.module.css";

const ChartLoading = () => (
  <div
    style={{
      width: "100%",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-subtle)",
      border: "1px solid var(--border-light)",
      borderRadius: "4px",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <div className={styles.shimmer} style={{ width: "80%", height: "20px" }} />
    <div className={styles.shimmer} style={{ width: "60%", height: "200px" }} />
    <div className={styles.shimmer} style={{ width: "70%", height: "20px" }} />
    <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "10px" }}>
      Loading interactive visualization...
    </p>
  </div>
);

export default ChartLoading;
