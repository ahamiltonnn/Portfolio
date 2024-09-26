import Image from "next/image";
import styles from "./page.module.css";

// Ensure the function is a valid React Component
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Austin Hamilton</h1>
          <h2 className={styles.subtitle}>
            Full Stack Web Developer | Innovator | Problem Solver
          </h2>
          <p className={styles.description}>
            I'm a full-stack web developer passionate about building innovative, 
            user-friendly applications that solve real-world problems. With expertise 
            in modern web technologies like JavaScript, Python, and frameworks like 
            Next.js and React, I strive to deliver robust and scalable solutions.
          </p>
          <a href="/about" className={styles.cta}>
            Let's Build Something Amazing
          </a>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/" // Replace with your image
            alt="Austin Hamilton"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
      </section>
    </main>
  );
}

