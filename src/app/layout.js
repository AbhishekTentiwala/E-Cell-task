import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navi from "@/components/nav";
import Foot from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "my Ecell Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navi />
        {children}
        <Foot/>
      </body>
    </html>
  );
}
