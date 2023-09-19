import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./Component/Navbar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CREST",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
