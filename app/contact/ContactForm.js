"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wpsbihy",
        "template_v24x6al",
        form.current,
        "q0pnzRkGiiHMxl6--"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          form.current.reset();
        },
        (error) => {
          setStatus("FAILED");
          console.log("Email send failed:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div>
        <label htmlFor="user_name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.inputField}
          required
        />
      </div>
      <div>
        <label htmlFor="user_email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.inputField}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textareaField}
          required
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>
        Send
      </button>

      {status === "SUCCESS" && <p>Your message has been sent!</p>}
      {status === "FAILED" && <p>There was an issue sending your message.</p>}
    </form>
  );
};

export default ContactForm;
