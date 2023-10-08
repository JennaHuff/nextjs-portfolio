import Link from "next/link";
import styles from "./page.module.css";
import ViteLogo from "../../../public/Vite Logo.svg";
import Image from "next/image";
import gif from "../../../public/todo.gif";

interface IProject {
    title: string;
    href: string;
    description: string;
    image: any;
}

const projects: IProject[] = [
    {
        title: "Drag & Drop Todo / Kanban",
        href: "/todo",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicingelit. Consequatur perferendis nesciunt facilis molestiaeculpa iusto, saepe provident quam maxime dolore, idnihil, atque nobis eveniet in. Voluptate corporisincidunt hic, a nisi aliquam amet quae. Ea, similiquevel amet dignissimos quaerat aliquam quas, et quos laborum laboriosam officia quo fuga.",
        image: ViteLogo,
    },
    {
        title: "React Backgammon",
        href: "/backgammon",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicingelit. Consequatur perferendis nesciunt facilis molestiaeculpa iusto, saepe provident quam maxime dolore, idnihil, atque nobis eveniet in. Voluptate corporisincidunt hic, a nisi aliquam amet quae. Ea, similiquevel amet dignissimos quaerat aliquam quas, et quos laborum laboriosam officia quo fuga.",
        image: ViteLogo,
    },
];

function ProjectCard({ project }: { project: IProject }) {
    return (
        <Link href={project.href}>
            <div className={`${styles.stackCard} clickable`}>
                <div className={styles.currentItemLogo}>
                    {/* <Image
                        fill={true}
                        src={project.image}
                        alt={"project preview image"}
                    /> */}
                    <Image
                        style={{ objectFit: "contain", position: "relative" }}
                        // fill={true}
                        src={gif}
                        alt={"project preview image"}
                    />
                </div>

                <div className={styles.stackCardText}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default function FeaturedProjects() {
    return (
        <main className={styles.featuredPage}>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.href} />
            ))}
        </main>
    );
}
