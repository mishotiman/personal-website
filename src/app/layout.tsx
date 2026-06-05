import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mishotiman.com"),
  title: {
    default: "Michail Timanov — Health and Wellbeing Principles",
    template: "%s — Michail Timanov", // child pages fill %s
  },
  description:
    "I climbed back from autoimmune disease, anxiety, and depression. Here are the principles for better health and wellbeing.",
  openGraph: {
    type: "website",
    siteName: "Michail Timanov",
    locale: "en_US",
    url: "https://mishotiman.com",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased bg-[#faf8f5] text-[#2a2a28]`}
      >
        {children}
      </body>
    </html>
  );
}
