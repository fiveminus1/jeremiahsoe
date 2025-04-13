import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Taskbar from "@/components/Taskbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div>
          <Navbar />
          <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{backgroundImage: "url('/images/bliss-wallpaper.jpg')"}} />
          <Taskbar />
        </div>
      </body>
    </html>
  );
}
