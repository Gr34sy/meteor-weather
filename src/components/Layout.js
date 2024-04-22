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
        "transition-[background-color] min-[1024px]:min-h-[100dvh] md:grid md:grid-rows-[1fr] md:grid-cols-[auto_1fr] duration-500 delay-100 ease-in-out " +
        (nightmode
          ? "dark dark:bg-slate-800 text-white-100"
          : "bg-white-300 text-slate-950")
      }
    >
      <AppBar
        nightmode={nightmode}
        changeMode={() => setNightmode((prev) => !prev)}
      />

      <div className="grid md:grid-rows-[auto_1fr] justify-items-center gap-4 sm:gap-10 px-1 sm:px-5 pb-8">
        <Header />
        {children}
      </div>
      
      <Footer />
    </div>
  );
}
