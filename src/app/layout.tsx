import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anton J",
    description: "Anton J's webdev portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Link href={"/"}>Home</Link>
                <Link href={"/todo"}>Todo</Link>
                <Link href={"/backgammon"}>Backgammon</Link>
                {children}
            </body>
        </html>
    );
}
