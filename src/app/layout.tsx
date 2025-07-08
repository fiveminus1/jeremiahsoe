import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  title: "Jeremiah Soe",
  description: "Jeremiah Soe's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      suppressHydrationWarning
      lang="en"  
      className={[inter.variable, manrope.variable].join(" ")}
    >
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
