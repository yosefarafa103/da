import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SocialMedia />
        <main className="relative top-[100px]">{children}</main>
      </body>
    </html>
  );
}
