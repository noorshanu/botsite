import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBg";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolTools | Solana Bot",
  description: "The Most advanced crypto Bots on solana bringing sniping , Token creation , add Liquidity , snipe on first transaction , Trading and More .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


{

  const CrispWithNoSSR = dynamic(
    () => import('./crisp')
  )
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="fav.png" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}>
        <CrispWithNoSSR/>
        <StarsCanvas/>
        
        <Navbar/>
        {children}
        
        <Footer/>
        </body>
       
    </html>
  );
}
