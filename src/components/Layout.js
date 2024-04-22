"use client";

// components
import { AppBar } from "@/components/AppBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// hooks
import { useLocalStorage } from "usehooks-ts";

const initialNightmodeKey = "nightmode";
const initialNightmodeValue = false;

export function Layout({ children }) {
  const [nightmode, setNightmode] = useLocalStorage(initialNightmodeKey, initialNightmodeValue, {
    initializeWithValue: false,
  });

  return (
    <div
      className={
        "layout grid duration-500 delay-100 ease-in-out " +
        (nightmode
          ? "dark dark:bg-slate-800 text-white-100"
          : "bg-white-300 text-slate-950")
      }
    >
      <AppBar
        nightmode={nightmode}
        changeMode={() => setNightmode((prev) => !prev)}
      />
      <div className="layout__wrapper grid justify-items-center gap-4 sm:gap-10 px-1 sm:px-5">
        <Header />

        {children}
      </div>
      <Footer />
    </div>
  );
}
