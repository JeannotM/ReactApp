import styles from "./nav.module.css"

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <a>Home</a>
            <a>Portfolio</a>
            <a>About me</a>
        </nav>
    );
  }
  