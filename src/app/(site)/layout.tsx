import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
      <Analytics />
    </>
  );
}
