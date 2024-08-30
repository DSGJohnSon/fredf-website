import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CursorFollower from "./components/ui/CursorFollower";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/sections/Header";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fred Florkowski - Creative Frontend Developper",
  description:
    "I'm Fred Florkowski, a creative frontend developper based in Marseille, South of France. Working on creating visual experiences for your businesses.",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        url: "/images/logos/logo.png",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: "/images/logos/logo.png",
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
    <html lang="fr">
      <body className={`relative ${font.className} text-gray-900`}>
        <Header />
        <CursorFollower />
        {children}
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}
