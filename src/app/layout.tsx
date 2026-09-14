import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Work24x7.ai — Autonomous AI Workforce That Never Sleeps",
  description:
    "Autonomous intelligent agents engineered to handle workflows, customer operations, and deep tasks around the clock with zero downtime. Work in progress.",
  keywords: [
    "AI agents",
    "autonomous workforce",
    "24/7 AI",
    "work automation",
    "work24x7",
    "artificial intelligence",
    "workflow automation",
  ],
  authors: [{ name: "Work24x7.ai Team" }],
  creator: "Work24x7.ai",
  metadataBase: new URL("https://work24x7.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://work24x7.ai",
    siteName: "Work24x7.ai",
    title: "Work24x7.ai — Autonomous AI Workforce That Never Sleeps",
    description:
      "Autonomous intelligent agents engineered to handle workflows, customer operations, and deep tasks around the clock with zero downtime.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work24x7.ai — Autonomous AI Workforce That Never Sleeps",
    description:
      "Autonomous intelligent agents engineered to handle workflows, customer operations, and deep tasks around the clock with zero downtime.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
