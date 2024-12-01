import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Austin Hamilton</h1>
          <h2 className={styles.subtitle}>
            Full-Stack Developer | Innovator | Problem Solver
          </h2>
          <p className={styles.description}>
            I specialize in crafting innovative, user-centric web applications
            using modern technologies like JavaScript, Python, and frameworks
            like Next.js and React. Let’s create something amazing together!
          </p>
          <div className={styles.ctaContainer}>
            <a href="/portfolio" className={styles.cta}>
              View My Portfolio
            </a>
            <a
              href="/contact"
              className={`${styles.cta} ${styles.ctaSecondary}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/resumephoto.jpg"
            alt="Austin Hamilton"
            width={350}
            height={350}
            className={styles.profileImage}
            priority
          />
        </div>
      </section>
    </main>
  );
}
