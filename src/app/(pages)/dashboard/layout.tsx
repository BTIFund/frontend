import type { Metadata } from "next";
import "../style/index.css";
import { Web3Provider } from "@/app/provide";

export const metadata: Metadata = {
    title: "Propex",
    description: "Revolutionize real estate investment",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <Web3Provider>
                    {children}
                </Web3Provider>
            </body>
        </html>
    );
}
