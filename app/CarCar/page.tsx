import React from "react";
import styles from "./carcar.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarCar",
  description: `CarCar is a dealership management application designed to streamline operations. It allows users to manage 
          technicians, customers, salespeople, inventory, and more. Built using Docker, React, and Django during 
          the Hack Reactor bootcamp.`,
};

const CarCar = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        CarCar - Dealership Management Application
      </h1>

      <section className={styles.projectDescription}>
        <h2 className={styles.subtitle}>Project Overview</h2>
        <p>
          <span className={styles.highlight}>CarCar</span> is a web application
          developed to streamline business operations for car dealerships. The
          application provides a comprehensive set of features, from managing
          technicians and salespeople to tracking customer information and
          maintaining an inventory of vehicles for sale. This project was
          developed collaboratively during the{" "}
          <span className={styles.highlight}>Hack Reactor bootcamp</span>,
          utilizing modern tools and frameworks to deliver a robust and
          efficient solution.
        </p>
      </section>

      <section className={styles.features}>
        <h2 className={styles.subtitle}>Features</h2>
        <ul className={styles.ulList}>
          <li>Technician management with easy-to-use interfaces</li>
          <li>
            Comprehensive customer database with premium status and service
            history tracking
          </li>
          <li>Inventory management for vehicles available for sale</li>
          <li>
            Salespeople management, including onboarding and recordkeeping
          </li>
          <li>Real-time data updates and streamlined operations</li>
        </ul>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.subtitle}>Technologies Used</h2>
        <ul className={styles.ulList}>
          <li>React.js for dynamic front-end development</li>
          <li>Django for building scalable back-end APIs</li>
          <li>Docker for containerized deployment</li>
          <li>JavaScript, HTML, CSS for core application functionality</li>
        </ul>
      </section>

      <section className={styles.collaboration}>
        <h2 className={styles.subtitle}>Collaboration</h2>
        <p>
          This project was a collaborative effort between me and one other
          developer. I focused on several key aspects, including:
        </p>
        <ul className={styles.ulList}>
          <li>Designing and implementing the technician management system</li>
          <li>
            Creating the customer database with features to classify premium
            members
          </li>
          <li>Integrating React with Django APIs for seamless functionality</li>
          <li>
            Setting up Docker for consistent development and deployment
            environments
          </li>
        </ul>
      </section>

      <section className={styles.additional}>
        <h2 className={styles.subtitle}>Challenges & Solutions</h2>
        <p>
          One of the primary challenges was ensuring the application’s backend
          and frontend components communicated effectively while maintaining a
          smooth user experience. By leveraging Django’s robust framework and
          React’s flexibility, we overcame these challenges and delivered a
          solution that was both scalable and user-friendly.
        </p>
      </section>

      <section className={styles.imageSection}>
        <h2 className={styles.subtitle}>Screenshots</h2>
        <div className={styles.images}>
          <img
            src="/Screenshot 2024-11-26 181147.png"
            alt="CarCar - Technician Management"
            className={styles.image}
          />
          <img
            src="/carcar-auto.png"
            alt="CarCar - Customer Database"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
};

export default CarCar;
