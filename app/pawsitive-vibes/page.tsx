import React from "react";
import styles from "./pawsitive-vibes.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pawsitive Vibes",
  description: `Pawsitive Vibes is a web application developed for a dog training business, designed to streamline client
          bookings and showcase the services offered. The goal was to create a user-friendly platform for both dog owners
          and the trainer to manage appointments and information with ease.`,
};

const PawsitiveVibes = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pawsitive Vibes - Dog Training Website</h1>
      <section className={styles.projectDescription}>
        <h2 className={styles.subtitle}>Project Overview</h2>
        <p>
          Pawsitive Vibes is a web application developed for a dog training
          business, designed to streamline client bookings and showcase the
          services offered. The goal was to create a user-friendly platform for
          both dog owners and the trainer to manage appointments and information
          with ease.
        </p>
      </section>

      <section className={styles.features}>
        <h2 className={styles.subtitle}>Features</h2>
        <ul className={styles.ulList}>
          <li>Integrated client booking calendar</li>
          <li>User profiles for tracking sessions</li>
          <li>Responsive design for seamless mobile and desktop experiences</li>
          <li>Customizable booking options for different training sessions</li>
        </ul>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.subtitle}>Technologies Used</h2>
        <ul className={styles.ulList}>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript, HTML, CSS</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB (or any other database used)</li>
        </ul>
      </section>

      <section className={styles.collaboration}>
        <h2 className={styles.subtitle}>Collaboration</h2>
        <p>
          This project was a group effort, and I worked alongside three talented
          developers. My main contribution was implementing the fully functional
          booking calendar and ensuring its seamless integration with the
          back-end.
        </p>
      </section>

      <section className={styles.additional}>
        <h2 className={styles.subtitle}>Challenges & Solutions</h2>
        <p>
          One of the biggest challenges was designing the booking calendar to be
          both intuitive and responsive. We used a combination of React state
          management and backend API calls to ensure that the calendar could
          dynamically reflect availability and allow clients to book their
          sessions easily.
        </p>
      </section>

      <section className={styles.imageSection}>
        <h2 className={styles.subtitle}>Screenshots</h2>
        <div className={styles.images}>
          <img
            src="/path-to-your-image.jpg"
            alt="Pawsitive Vibes - Screenshot 1"
            className={styles.image}
          />
          <img
            src="/path-to-your-image2.jpg"
            alt="Pawsitive Vibes - Screenshot 2"
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.links}>
        <h2 className={styles.subtitle}>Project Links</h2>
        <p>
          Check out the live project:{" "}
          <a
            href="https://your-live-project-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Live Demo
          </a>
        </p>
        <p>
          View the GitHub repository:{" "}
          <a
            href="https://github.com/your-username/pawsitive-vibes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub Repo
          </a>
        </p>
      </section>
    </main>
  );
};

export default PawsitiveVibes;
