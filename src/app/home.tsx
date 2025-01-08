import styles from "./home.module.css" 
import Image from "next/image";

export default function HomeLayout() {
  return (
    <div className={styles.homeInformation}>
        <div className={styles.information}>
            <h1>Jeannot Makkinje</h1>
            <p> Ik ben een harde werker met gevoel voor humor, doorzettend en collegiaal. Breinkrakers en opdrachten waar ik mijn kennis kan verbreden vind ik het meest interessant om aan te werken door mijn leergierigheid</p>
        </div>

        <div className={styles.pictureFrame}>
            <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/jeannot-makkinje/" className={styles.icon}>
                <Image src="/linkedin.png" alt="Linkedin logo" width={25} height={25}/></a>
            <a href="https://github.com/JeannotM" className={styles.icon}>
                <Image src="/git.png" alt="Github logo" width={25} height={25}/></a>
            </div>
            <Image src="/handsome-pic.jpg" alt="Picture of author" className={styles.picture} width={1280} height={1280} />
        </div>
    </div>
  );
}