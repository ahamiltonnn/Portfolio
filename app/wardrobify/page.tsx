import React from "react";
import styles from "./wardrobify.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wardrobify",
  description: `Wardrobify is a web application designed to help users organize their hats and shoes collections. It allows users to
          easily add, delete, and view items, with a seamless search functionality for quick access to specific items. Built with Django on the backend
          and React on the frontend, it aims to provide a smooth user experience for managing wardrobe items.`,
};

const Wardrobify = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Wardrobify - Hat and Shoe Organization</h1>
      <section className={styles.projectDescription}>
        <h2 className={styles.subtitle}>Project Overview</h2>
        <p>
          Wardrobify is a web application developed to help users organize and
          manage their hats and shoes collections. It provides an intuitive
          interface where users can easily add, delete, and view their items.
          Additionally, the app includes a search bar to allow quick access to
          specific items in the collection.
        </p>
        <p>
          The goal of this project was to create a user-friendly platform that
          would allow users to keep track of their items, ensuring they could
          manage their wardrobe efficiently. The app uses a Django backend API
          and a React frontend to create a seamless and interactive user
          experience.
        </p>
      </section>

      <section className={styles.features}>
        <h2 className={styles.subtitle}>Features</h2>
        <ul className={styles.ulList}>
          <li>Add shoes and hats to a list</li>
          <li>Delete items from the list</li>
          <li>Detail view for each item</li>
          <li>Search functionality to quickly find items</li>
          <li>
            Seamless integration between Django backend API and React frontend
          </li>
        </ul>
      </section>

      <section className={styles.technologies}>
        <h2 className={styles.subtitle}>Technologies Used</h2>
        <ul className={styles.ulList}>
          <li>React.js</li>
          <li>Django</li>
          <li>JavaScript, HTML, CSS</li>
          <li>Insomnia</li>
        </ul>
      </section>

      <section className={styles.collaboration}>
        <h2 className={styles.subtitle}>Collaboration</h2>
        <p>
          This project was developed individually as part of my Hack Reactor
          bootcamp. My main role was to implement both the frontend and backend
          of the project. On the backend, I built a Django RESTful API to handle
          the data and serve it to the frontend. On the frontend, I used React
          to build a user-friendly interface that allows for easy interaction
          with the wardrobe items.
        </p>
      </section>

      <section className={styles.additional}>
        <h2 className={styles.subtitle}>Challenges & Solutions</h2>
        <p>
          One of the main challenges I faced during this project was creating a
          seamless experience between the Django backend and the React frontend.
          The interaction between the two was critical to ensure that when a
          user added, deleted, or viewed an item, the changes were reflected in
          real-time. I used Django REST framework to build a robust API that
          interacted smoothly with the React frontend to provide a dynamic user
          experience.
        </p>
        <p>
          Another challenge was ensuring the search functionality worked
          efficiently as the collection grew. By utilizing proper filtering and
          search algorithms on both the frontend and backend, I was able to
          ensure that users could quickly find their items, even in large
          collections.
        </p>
      </section>

      <section className={styles.imageSection}>
        <h2 className={styles.subtitle}>Screenshots</h2>
        <div className={styles.images}>
          <img
            src="/Screenshot 2024-11-26 174831.png"
            alt="Wardrobify - Screenshot 1"
            className={styles.image}
          />
          <img
            src="/wardobifyForm.png"
            alt="Wardrobify - Screenshot 2"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
};

export default Wardrobify;
