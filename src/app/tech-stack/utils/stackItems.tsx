import ViteLogo from "public/Vite Logo.svg";
import ReactLogo from "public/React Logo.svg";
import TypescriptLogo from "public/Typescript Logo.svg";
import GitLogo from "public/Git Logo.svg";
import VscLogo from "public/VSC Logo.svg";
import CssLogo from "public/CSS Logo.svg";
import NextLogo from "public/Next Logo.svg";

import { IStackItem } from "./types";
import Image from "next/image";

const stackItems: IStackItem[] = [
    {
        name: "Next.js",
        icon: <Image fill={true} alt="NextJs Logo" src={NextLogo} />,
        catchphrase: "The leading React framework",
        description:
            "Next.js is a popular open-source React framework for building fast and efficient web applications. It provides server-side rendering, and simplified routing, making it ideal for creating high-performance, SEO-friendly websites and applications.",
        docsLink: "https://nextjs.org/",
    },
    {
        name: "React",
        icon: <Image fill={true} alt="React Logo" src={ReactLogo} />,
        catchphrase: "Create dynamic web user interfaces",
        description:
            "React is an open-source front-end JavaScript library for building user interfaces based on reusable components (bricks, if you will). React can be used to develop single-page (SPA), mobile (React Native), or server-rendered (Next.js) applications.",
        docsLink: "https://react.dev/",
    },
    {
        name: "Typescript",
        icon: <Image fill={true} alt="Typescript Logo" src={TypescriptLogo} />,
        catchphrase: "Catch errors early in your editor",
        description:
            "TypeScript is an open-source high-level programming language that adds static typing to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
        docsLink: "https://www.typescriptlang.org/",
    },
    {
        name: "Vite.js",
        icon: <Image fill={true} alt="vitejs logo" src={ViteLogo} />,
        catchphrase: "Bundle React apps fast",
        description:
            "Vite  is a local development server boasting Hot Module Replacement, a pre-configured RollupJs bundler and out-of-the-box support for Typescript, JSX and server-side rendering (SSR).",
        docsLink: "https://vitejs.dev/",
    },
    {
        name: "Visual Studio Code",
        icon: <Image fill={true} alt="Vsc Logo" src={VscLogo} />,
        catchphrase: "A rather pleasant code editor",
        description:
            "Visual Studio Code is the most popular code editor. It offers tens of thousands of extensions, and features such as syntax highlighting, automatic formatting and refactoring.",
        docsLink: "https://code.visualstudio.com/",
    },
    {
        name: "Git",
        icon: <Image fill={true} alt="Git Logo" src={GitLogo} />,
        catchphrase: "The most important development tool",
        description:
            "Git is a distributed version control system that enables efficient tracking of changes in software development. It allows multiple collaborators to work on code simultaneously, with the ability to merge, branch, and maintain a detailed history of revisions. Git enhances collaboration, facilitates error tracking, and ensures code integrity.",
        docsLink: "https://git-scm.com/",
    },
    {
        name: "CSS 3",
        icon: <Image fill={true} alt="Css Logo" src={CssLogo} />,
        catchphrase: "Good ol' reliable, cascading, style sheets",
        description:
            "CSS is used to style and format web content. It controls the visual presentation of HTML elements, defining attributes like layout, fonts, colors, and spacing. CSS enables consistent, responsive design, enhancing the appearance and user experience of websites and web applications.",
        docsLink: "https://www.w3.org/Style/CSS/learning",
    },
];

export default stackItems;
