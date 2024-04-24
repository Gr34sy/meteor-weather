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
  const [nightmode, setNightmode] = useLocalStorage(
    initialNightmodeKey,
    initialNightmodeValue,
    {
      initializeWithValue: false,
    }
  );

  return (
    <div
      className={
        "transition-[background-color] min-h-[100dvh] grid items-between md:grid-rows-[1fr] md:grid-cols-[auto_1fr_auto] duration-500 delay-100 ease-in-out " +
        (nightmode
          ? "dark dark:bg-slate-800 text-white-100"
          : "bg-white-300 text-slate-700")
      }
    >
      <AppBar
        nightmode={nightmode}
        changeMode={() => setNightmode((prev) => !prev)}
      />

      <div className="grid grid-rows-[auto_1fr] gap-4 sm:gap-10 px-2 sm:px-8 lg:px-32 pb-14">
        <Header />
        {children}
      </div>

      <Footer />
    </div>
  );
}
