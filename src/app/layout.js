import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";

import { AppBar } from "@/components/AppBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeteorWeather",
  description: "Weather app which utilizes OpenWeather API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppBar />
        <div className="layout bg-white-300">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
