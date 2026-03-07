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
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AISI Analysis Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.decorTL}></div>
          <div className={styles.decorBR}></div>
        </div>
      </div>
    </section>
  );
}
