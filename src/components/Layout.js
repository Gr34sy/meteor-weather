"use client";

// components
import { AppBar } from "@/components/AppBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// hooks
import { useState, useEffect } from "react";

export function Layout({ children }) {
  const [nightmode, setNightmode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("nightmode") || false;
    setNightmode(storedMode);
  }, []);

  return (
    <div
      className={
        "layout grid " +
        (nightmode
          ? "dark dark:bg-slate-800 text-white-100"
          : "bg-white-300 text-slate-950")
      }
    >
      <AppBar
        nightmode={nightmode}
        changeMode={() => setNightmode((prev) => !prev)}
      />
      <div className="layout__wrapper grid justify-items-center gap-4 sm:gap-10 px-2 sm:px-5">
        <Header />

        {children}
      </div>
      <Footer />
    </div>
  );
}
