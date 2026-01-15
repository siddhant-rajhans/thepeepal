import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Peepal - Eco-Friendly Farm Stay in Nashik",
  description: "Experience blissful natural earthen homes at The Peepal. Contributing to eco-friendly Bharat with sustainable mud villas, organic farming, and traditional farm-to-table dining in Nashik, Maharashtra.",
  keywords: ["The Peepal", "Farm Stay Nashik", "Eco-Friendly Accommodation", "Mud House", "Sustainable Living", "Organic Farming", "Weekend Getaway Nashik", "Maharashtra Tourism"],
  authors: [{ name: "The Peepal" }],
  icons: {
    icon: [
      { url: "/favicon-for-app/favicon.ico" },
      { url: "/favicon-for-app/icon1.png", sizes: "any", type: "image/png" },
      { url: "/favicon-for-app/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon-for-app/apple-icon.png" },
    ],
  },
  manifest: "/favicon-for-app/manifest.json",
  openGraph: {
    title: "The Peepal - Eco-Friendly Farm Stay",
    description: "Experience blissful natural earthen homes and sustainable living in Nashik",
    url: "https://thepeepal.pages.dev",
    siteName: "The Peepal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peepal - Eco-Friendly Farm Stay",
    description: "Experience blissful natural earthen homes and sustainable living in Nashik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
