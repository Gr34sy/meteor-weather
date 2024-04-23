"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxLayout } from "./BoxLayout";
import {
  faSun,
  faCloudRain,
  faMoon,
  faCloudBolt,
  faWind,
  faCloud,
  faSnow,
} from "@fortawesome/free-solid-svg-icons";

export function MediumBox({ hour, description, temp }) {
  return (
    <BoxLayout>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-3 text-xl">
            <p className="font-bold">{hour}</p>
            <p>{description}</p>
            <p className="font-bold">{temp}&deg;C</p>
        </div>

        <FontAwesomeIcon icon={faSun} className="size-[35px]"/>
      </div>
    </BoxLayout>
  );
}
