"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import githubLogo from "/public/Github Logo.svg";
import linkedinLogo from "/public/LinkedIn Logo.svg";
import mailLogo from "/public/Mail Logo.svg";
import Image from "next/image";

export default function Header() {
    const currentRoute = usePathname();
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <Link
                        href={"/about"}
                        className={
                            currentRoute === "/about"
                                ? styles.activeLink
                                : styles.navLink
                        }
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/tech-stack"}
                        className={
                            currentRoute === "/tech-stack"
                                ? styles.activeLink
                                : styles.navLink
                        }
                    >
                        Tech Stack
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/featured-projects"}
                        className={
                            currentRoute === "/featured-projects"
                                ? styles.activeLink
                                : styles.navLink
                        }
                    >
                        Featured Projects
                    </Link>
                </li>
            </ul>
            <ul>
                {/* <li>
                    <Link href={""} className={styles.navLink}>
                        <Image src={mailLogo} alt="contact me!"></Image>
                    </Link>
                </li> */}
                <li>
                    <Link
                        href={"https://github.com/JennaHuff"}
                        target={"_blank"}
                        className={styles.navLink}
                    >
                        <Image src={githubLogo} alt="link to my github"></Image>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"https://www.linkedin.com/in/anton-jollant/"}
                        target={"_blank"}
                        className={styles.navLink}
                    >
                        <Image
                            src={linkedinLogo}
                            alt="link to my linked in"
                        ></Image>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
