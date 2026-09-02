import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Imran — Full Stack AI Web Developer",
  description:
    "Full Stack AI Web Developer specializing in MERN, Spring Boot & AI-powered web experiences. Available for collaborations and internships.",
  keywords: [
    "Mohamed Imran",
    "Full Stack Developer",
    "MERN Stack",
    "AI Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Imran" }],
  openGraph: {
    title: "Mohamed Imran — Full Stack AI Web Developer",
    description:
      "Crafting intelligent, luxury-grade web experiences with MERN, Spring Boot & AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen bg-[#080808] text-[#f5f5f3] antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
