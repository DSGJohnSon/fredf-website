import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CursorFollower from "./components/ui/CursorFollower";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fred Florkowski - Creative Frontend Developper",
  description:
    "I'm Fred Florkowski, a creative frontend developper based in Marseille, South of France. Working on creating visual experiences for your businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`relative ${font.className} text-gray-900`}>
        <CursorFollower />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
