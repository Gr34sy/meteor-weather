"use client";

import { BoxLayout } from "@/components/BoxLayout";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { LoadingScreen } from "@/components/LoadingScreen";

import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Checkbox } from "@/components/Checkbox";

const initialLocationKey = "location";
const initialLocationValue = "Warsaw";

export default function Options() {
  // const [locationValue, setLocationValue] = useState("");
  // const [location, setLocation] = useLocalStorage(
  //   initialLocationKey,
  //   initialLocationValue,
  //   {
  //     initializeWithValue: false,
  //   }
  // );

  // function handleLocationChange(value) {
  //   setLocationValue(value);
  // }
  // function saveLocation() {
  //   setLocation(locationValue);
  //   setLocationValue("");
  // }

  return (
    <main className="options">
      <LoadingScreen />
      {/* <BoxLayout>
        <div className="grid justify-center gap-3 sm:gap-6 px-2 sm:px-4 py-4 md:py-12 lg:py-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-slate-700 dark:text-white-100">
            Options
          </h2>

          <div className="grid gap-2 text-lg sm:text-2xl">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-red-400 dark:text-red-600 duration-500 delay-100 ease-in-out">
                Default Location:
              </p>
              <p>{location}</p>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-2">
              <Input
                value={locationValue}
                onChange={handleLocationChange}
                placeholder="Other Location"
              />
              <Button text="Set" onClick={saveLocation} />
            </div>

            <div className="grid gap-2">
              <p className="font-semibold text-red-400 dark:text-red-600 duration-500 delay-100 ease-in-out">
                Default App Settings:
              </p>
              <Checkbox name="darkmode" text="Darkmode" />
              <Checkbox name="collapsed" text="Sidebar Collapsed" />
            </div>
          </div>
        </div>
      </BoxLayout> */}
    </main>
  );
}
