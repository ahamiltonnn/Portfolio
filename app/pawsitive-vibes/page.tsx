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
          <li>Testimonial carousel for customer reviews</li>
          <li>Meetup page for signed-in users to connect with others for dog-related activities</li>
        </ul>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.subtitle}>Technologies Used</h2>
        <ul className={styles.ulList}>
          <li>React.js</li>
          <li>JavaScript, HTML, CSS</li>
          <li>FastAPI</li>
          <li>JWT Authentication</li>
          <li>SQL Database</li>
          <li>Docker</li>
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
        <p>
          Additionally, we integrated a testimonial carousel, allowing customers
          to write reviews. We also developed a meetup page for signed-in users
          to connect with others for dog-related activities, ensuring that only
          authorized users could participate.
        </p>
        <p>
          On the backend, we built a robust authentication system using JWT
          tokens to secure user sessions, and the entire app was built with
          FastAPI, Docker, SQL, and a fully RESTful API for smooth communication
          between the front-end and back-end.
        </p>
      </section>

      <section className={styles.imageSection}>
        <h2 className={styles.subtitle}>Screenshots</h2>
        <div className={styles.images}>
          <img
            src="/Screenshot 2024-05-14 115303.png"
            alt="Pawsitive Vibes - Screenshot 1"
            className={styles.image}
          />
          <img
            src="/pawsitive-vibes2.jpg"
            alt="Pawsitive Vibes - Screenshot 2"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
};

export default PawsitiveVibes;
