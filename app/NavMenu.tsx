import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          src="/finalLogo.svg"
          width={250}
          height={50}
          alt="AHlogo"
        />
      </Link>
      <ul className={styles.links}>
      <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
