import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import Navbar from "./Component/Navbar";

const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

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
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
