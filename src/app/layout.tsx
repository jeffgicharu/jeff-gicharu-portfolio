// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'; // <-- Import Header

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
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* <-- Add Header component here */}
        {children} {/* Page content will be rendered here */}
        {/* We can add a Footer component here later */}
      </body>
    </html>
  );
}