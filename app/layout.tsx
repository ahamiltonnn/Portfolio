import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Austin Hamilton",
  description: "Austin Hamilton's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
