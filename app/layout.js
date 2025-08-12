import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy Me a Coffee - Support by Funding",
  description: "This Website is a Crowdfunding Platform for Building Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-grow">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
