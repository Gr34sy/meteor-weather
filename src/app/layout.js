import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";

import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeteorWeather",
  description: "Weather app which utilizes OpenWeather API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Layout children={children}/>
      </body>
    </html>
  );
}
