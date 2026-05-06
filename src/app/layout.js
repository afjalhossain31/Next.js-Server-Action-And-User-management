// Multi-layout: This is the root layout.js for the entire app.
// Layouts in Next.js app router allow shared UI across routes.
// Apply Google Font: Using Next.js font optimization with Geist fonts from Google Fonts.
// SEO Metadata: Root metadata can be overridden in child pages.

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Fundamentals Practice",
  description: "Practicing Next.js concepts: SSR, CSR, dynamic routes, data loading, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
