"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import githubLogo from "/public/Github Logo.svg";
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
            <button>✉️</button>
            <button>
                <Image
                    style={{
                        objectFit: "contain",
                    }}
                    src={githubLogo}
                    alt="my github"
                />
            </button>
        </nav>
    );
}
