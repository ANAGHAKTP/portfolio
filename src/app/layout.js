import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Anagha K T P | Portfolio",
  description: "AI & ML Student Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* ⚡ Bolt: Preconnect to Google Fonts to reduce DNS/TLS handshake time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ⚡ Bolt: Add display=block to prevent Flash of Unstyled Text (FOUT) for icon fonts */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet" />
      </head>
      <body
        className={`${serif.variable} ${sans.variable} antialiased bg-cream text-black transition-colors duration-300 font-sans`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
