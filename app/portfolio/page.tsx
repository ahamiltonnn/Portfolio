import styles from "./portfolio.module.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: `Austin Hamilton's Portfolio`,
};

const ProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>My Portfolio</h1>
        <p className={styles.description}>
          Welcome to my portfolio! Here, you'll find a showcase of my web
          development projects, which I've built using technologies like React,
          Next.js, JavaScript, and Python. Check out my projects below:
        </p>
      </section>

      <section className={styles.carouselSection}>
        <ProjectCarousel />
      </section>
    </main>
  );
}
