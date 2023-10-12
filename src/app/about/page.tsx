import Link from "next/link";
import styles from "./page.module.css";
import constructionHat from "public/construction-hat.jpg";
import Image from "next/image";
import Wip from "../Wip";

export default function About() {
    return (
        <main className={styles.aboutPage}>
            {/* <div className={styles.stackCard}>
                <div className={styles.currentItemLogo}>
                    <Image
                        fill={true}
                        src={constructionHat}
                        alt="some image"
                    ></Image>
                </div>
                <div className={styles.stackCardText}>
                    <h1>About me</h1>
                    <h3>Subtitle</h3>
                    <p>
                        paragraph: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Earum dignissimos consequuntur
                        consequatur ipsum voluptatibus dolore dolor perspiciatis
                        commodi blanditiis id.
                    </p>
                    <a href={""} target="_blank" id="learn-more">
                        link
                    </a>
                </div>
            </div> */}
            <Wip />
        </main>
    );
}
