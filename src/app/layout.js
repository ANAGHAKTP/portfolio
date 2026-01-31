import { Caveat, Gaegu, Quicksand } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playful",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Tech Portfolio | Digital Scrapbook",
  description: "Portfolio of Anagha K T P",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${caveat.variable} ${gaegu.variable} ${quicksand.variable} antialiased bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 font-display`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
