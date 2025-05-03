// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeff Gicharu - Portfolio", // You can customize this later
  description: "Portfolio of Jeff Gicharu, React/Next.js Developer", // Customize later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removed comments from inside tags
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex flex-col min-h-full bg-gray-100 dark:bg-gray-900`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
