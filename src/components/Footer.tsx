import styles from "./Footer.module.css"
export default function Footer(){
    return (
        //this is the footer that appears on every page
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copy}>
                     © 2026 <span className={styles.accent}>BusyBee</span> — Lefophana Nthabiseng
                </p>
            </div>
        </footer>
    )
}