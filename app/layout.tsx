import type { Metadata } from "next";
import "./globals.css";
//appealing I wont be using the following two lines
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viajes",
  description: "Viajes User Experience and Interface App for Travelers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
