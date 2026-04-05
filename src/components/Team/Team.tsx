"use client";
import { Mail, Linkedin, Briefcase } from "lucide-react";
import Image from "next/image";
import styles from "./Team.module.css";

const teamMembers = [
  {
    name: "Chuks Azubuike",
    email: "cazubuike9158@sdsu.edu",
    linkedin: "https://www.linkedin.com/in/chuks-azubuike/",
    bio: "Data science graduate student with a strong interest in statistical analysis, machine learning, and exploratory data analysis. Passionate about uncovering insights from complex datasets and turning them into actionable solutions. Skilled in R, Python, SQL, and Tableau, Chuks enjoys applying analytics to real-world problems and creating clear visualizations for decision-makers.",
    responsibilities: ["Statistical Analysis", "EDA"],
    image: "/Chuks.jpg",
  },
  {
    name: "Huong Nguyen",
    email: "hnguyen9196@sdsu.edu",
    linkedin: "https://www.linkedin.com/in/huong-nguyen/",
    bio: "Researches national AI capacity by reviewing historical institutional approaches. Her work focus on the semiconductor industry, specifically analyzing chip design and manufacturing in leading countries, while managing the project’s SWOT analysis to identify key strengths and potential risks.",
    responsibilities: ["EDA", "Data Visualization"],
    image: "/Houng.jpeg",
  },
  {
    name: "Prajwal Tidke",
    email: "ptidke4710@sdsu.edu",
    linkedin: "https://www.linkedin.com/in/prajwal-tidke/",
    bio: "Senior Data Engineer pursuing MS in Big Data Analytics at SDSU. Specializes in building production-grade ETL pipelines, cloud infrastructure (AWS, Databricks, Snowflake), and AI-powered applications, with a focus on solving complex data problems that have real-world impact. I love Photography as my side hustle.",
    responsibilities: ["Website Design", "Data Visualization"],
    image: "/Prajwal.jpeg",
  },
];

export default function Team() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* <div className={styles.label}>Our Team</div> */}
          <h1 className={styles.title}>
            The Minds Behind <span className="gradient-text">AISI</span>
          </h1>
          {/* <p className={styles.subtitle}>
            A diverse group of researchers, designers, and engineers working
            together to map the global AI frontier.
          </p> */}
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.profileImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className={styles.content}>
                <h2 className={styles.name}>{member.name}</h2>
                <div className={styles.socials}>
                  <a
                    href={`mailto:${member.email}`}
                    className={styles.socialLink}
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                <p className={styles.bio}>{member.bio}</p>

                <div className={styles.responsibilities}>
                  <h3 className={styles.respTitle}>
                    <Briefcase size={16} /> Key Responsibilities
                  </h3>
                  <ul className={styles.respList}>
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className={styles.respItem}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
