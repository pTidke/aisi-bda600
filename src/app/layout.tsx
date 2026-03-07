import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Who's got AI? | AI Supremacy Index",
  description:
    "Analyzing the global race for AI supremacy through the AI Supremacy Index (AISI). A clear, data-driven exploration of technological leadership and geopolitical shifts.",
  keywords: [
    "AI",
    "artificial intelligence",
    "supremacy index",
    "AISI",
    "global AI landscape",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
