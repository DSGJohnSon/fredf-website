import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CursorFollower from "../components/ui-self/CursorFollower";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/sections/Header";
import { ThemeProvider } from "@/components/ui-self/ThemeProvider";
import { PageTransitionProvider } from "@/components/ui-self/PageTransitionProvider";

const font = Manrope({ subsets: ["latin"] });
const profont = localFont({
  src: "../public/fonts/pro-font.woff2",
  variable: "--font-profont",
});

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
    <html lang="fr" suppressHydrationWarning>
      <body className={`relative ${font.className} ${profont.variable} dark:bg-zinc-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransitionProvider>
            <Header />
            <CursorFollower />
            {children}
            <SpeedInsights />
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
