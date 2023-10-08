import Header from "./Header";
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
                <Header />
                {children}
            </body>
        </html>
    );
}
