import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles["contact-list"]}>
        <h2>Get in contact</h2>
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+16028856025">+1 (602) 885-6025</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/austin-hamiltonn"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/austin-hamiltonn
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:austinhamilton.mail@proton.me">
            austinhamilton.mail@proton.me
          </a>
        </li>
      </ul>
    </footer>
  );
}
