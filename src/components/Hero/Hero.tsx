"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <ParticleBackground />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.badge}
        >
          <span>
            {/* <Sparkles size={16} className={styles.sparkle} /> */}
            BDA Capstone Project 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.title}
        >
          Deciphering the <br />
          <span className="gradient-text">AI Supremacy</span> Index
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.subtitle}
        >
          The global race for artificial intelligence is no longer just about
          software - it is a complex geopolitical struggle for technological
          sovereignty. Through our capstone project, we aim to provide a
          data-driven framework to monitor, compare, and understand the core
          drivers of AI development by synthesizing disparate indicators into a
          single index.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.actions}
        >
          <a href="#analysis" className="btn-primary">
            Explore Analysis <ArrowRight size={18} />
          </a>
          <a href="#paper" className="btn-outline">
            Download Paper <FileText size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={styles.scrollHint}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className={styles.scrollArrow} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          style={{ marginTop: "-24px" }}
        >
          <ChevronDown size={32} className={styles.scrollArrow} />
        </motion.div>
      </motion.div>
    </section>
  );
}
