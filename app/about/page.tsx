import styles from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Austin Hamilton Full Stack Developer",
};

export default async function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>About Me</h1>
      <p className={styles.paragraph}>
        Innovative full stack developer with a proactive approach to
        problem-solving, specializing in system design, back-end and front-end
        development. Skilled in Python, JavaScript, SQL, HTML5, CSS, and
        experienced in creating dynamic web applications using frameworks like
        Django, React (including Next.js), and FastAPI. Proficient in
        implementing user-centric features to enhance functionality and
        security, with a focus on enhancing user experience and driving project
        success.
      </p>
      <h2 className={styles.heading}>My Experience</h2>
      <p className={styles.paragraph}>
        From a young age, I developed a passion for computers and technology,
        which ultimately led me to pursue a career in software development. I
        started my professional journey by enrolling in the Hack Reactor
        bootcamp by Galvanize, where I dedicated over 700 hours to mastering
        JavaScript and Python. This immersive experience solidified my skills
        and set a strong foundation for my career. Today, I stay actively
        involved in the tech community by contributing to open-source projects
        and building personal projects that push me to grow as a developer and
        stay current with industry advancements.
      </p>
      <h3 className={styles.heading}>The Future</h3>
      <p className={styles.paragraph}>
        Looking ahead I am excited to further develop my skills as a software
        developer and hone my proficiency through the work on new and
        interesting projects. The aim of my roadmap is to reach a developer job
        in order to contribute to the creation of significant applications, to
        collaborate with an excellent team, and to lead the solution of
        interesting problems. I am most looking forward to the chances to learn
        new technologies, build on my full-stack developer experience, and build
        solutions that matter. Leveraging my deep technical background and my
        enthusiasm for technology, I am now prepared to move to the next step in
        my career for the benefit of a progressive company.
      </p>
    </main>
  );
}
