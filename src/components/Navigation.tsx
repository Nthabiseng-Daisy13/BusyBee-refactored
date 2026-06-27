import Link from "next/link"
import styles from "./Navigation.module.css"

export default function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/about" className={styles.link}>About</Link>
      <Link href="/profile" className={styles.link}>Profile</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
    </nav>
  )
}