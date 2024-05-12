import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBg";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Bot",
  description: "The Most Advanced Crypto Bot on Solana Bringing Sniping, Tracking, Trading, Perpetual and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}>
        <StarsCanvas/>
        <Navbar/>
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}