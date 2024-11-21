import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in contact",
};

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <h1 className={styles.heading}>Contact Me</h1>
      <p className={styles.contactMessage}>
        If you have any questions, feedback, or just want to get in touch, feel
        free to reach out to me. I'd love to hear from you!
      </p>
      <ContactForm />
    </main>
  );
}
