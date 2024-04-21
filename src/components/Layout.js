"use client";

// components
import { AppBar } from "@/components/AppBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NightmodeContext, {
  NightmodeContextProvider,
} from "@/store/mode-context";

// hooks
import { useContext } from "react";

export function Layout({children}) {
  const nightmode = useContext(NightmodeContext);

  return (
    <NightmodeContextProvider>
      <div className={nightmode.mode ? "dark" : ""}>
        <Header />

        <div className="layout">
          <AppBar />
          <div className="grid bg-white-300 pt-[80px] px-2 sm:px-5">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </NightmodeContextProvider>
  );
}
