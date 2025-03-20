import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Shop Co",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
