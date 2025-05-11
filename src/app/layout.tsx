import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";
import { Web3Provider } from "./Web3Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BTI Fund | Blockchain Solar Investment Platform",
  description: "Invest in solar energy projects through secure blockchain technology. Join BTI Fund to earn returns while supporting sustainable energy development.",
  icons: {
    icon: [
      {
        url: "/img/bti-logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/img/bti-logo.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>
          <AppShell>
              {children}
          </AppShell>
        </Web3Provider>
      </body>
    </html>
  );
}
