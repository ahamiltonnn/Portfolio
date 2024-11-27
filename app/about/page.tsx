import styles from "./about.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Austin Hamilton Full Stack Developer",
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.introSection}>
        <h1 className={styles.heading}>Who I Am</h1>
        <p className={styles.paragraph}>
          Hi! I’m <span className={styles.highlight}>Austin Hamilton</span>, a
          passionate <span className={styles.highlight}>full-stack developer</span> dedicated to building robust, user-centric
          solutions. My expertise lies in <span className={styles.highlight}>Python</span>, <span className={styles.highlight}>JavaScript</span>, and frameworks like <span className={styles.highlight}>React</span> and <span className={styles.highlight}>Next.js</span>. With a strong foundation in software engineering and an eye for detail, I love crafting applications that make a difference.
        </p>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.subheading}>My Journey</h2>
        <p className={styles.paragraph}>
          My love for technology began at a young age, eventually leading me to enroll in the rigorous <span className={styles.highlight}>Hack Reactor bootcamp</span>, where I dedicated over 700 hours to mastering modern development techniques. This experience equipped me with not only technical skills but also the collaborative mindset necessary to excel in team environments. Today, I stay active in the development community by contributing to open-source projects and continually refining my skills.
        </p>
      </section>

      <section className={styles.futureSection}>
        <h2 className={styles.subheading}>Looking Ahead</h2>
        <p className={styles.paragraph}>
          I’m excited about the future of technology and my role within it. My goal is to collaborate on impactful projects that challenge me to innovate while creating solutions that enhance lives and drive business success. Whether working on back-end systems, front-end interfaces, or end-to-end solutions, I thrive in tackling challenges with creativity and dedication.
        </p>
      </section>

      <Link href="/contact" passHref>
        <button className={styles.connectButton}>Connect With Me</button>
      </Link>
    </main>
  );
}
