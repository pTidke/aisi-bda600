import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Project Introduction <span className="gradient-text">Video</span>
          </h2>
          <p className={styles.subtitle}>
            Explore our latest video analysis on the shifting tides of global AI
            leadership and technological sovereignty.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <div className={styles.skeletonWrapper}>
              <div className={styles.shimmer}></div>
              <div className={styles.skeletonHeader}></div>
              <div className={styles.skeletonMain}>
                <div className={styles.skeletonPlayCircle}></div>
              </div>
              <div className={styles.skeletonBar}></div>
            </div>
          </div>
          <div className={styles.decorTL}></div>
          <div className={styles.decorBR}></div>
        </div>
      </div>
    </section>
  );
}
