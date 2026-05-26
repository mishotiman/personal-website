import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michail — Build the body & mind",
  description: "I climbed back from autoimmune disease, anxiety, and depression by rebuilding my body and mind. Here's what worked.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={`${inter.variable} ${newsreader.variable} font-sans antialiased bg-neutral-950 text-neutral-100`}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
