import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CursorFollower from "../components/ui-self/CursorFollower";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/sections/Header";
import { ThemeProvider } from "@/components/ui-self/ThemeProvider";

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
        type: "image/webp",
        url: "/images/logos/logo.webp",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/webp",
        url: "/images/logos/logo.webp",
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
      <body className={`relative ${font.className} dark:bg-slate-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          <CursorFollower />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
