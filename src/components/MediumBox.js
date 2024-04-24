"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxLayout } from "./BoxLayout";
import {
  faSun,
  faCloudRain,
  faMoon,
  faCloudBolt,
  faCloud,
  faSnowflake,
  faMeteor,
} from "@fortawesome/free-solid-svg-icons";

export function MediumBox({ temp, weather, date }) {
  const nightHours = [22, 23, 24, 0, 1, 2, 3, 4, 5, 6];
  const dayHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  return (
    <BoxLayout>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-3 text-xl">
          <p className="font-bold">{`${date.hour}:${
            date.minutes.toString().length === 1
              ? "0" + date.minutes.toString()
              : date.minutes
          }`}</p>

          <div>
            <p>{weather.map((item) => item.main)}</p>
            <p className="font-bold">{temp}&deg;C</p>
          </div>

          <p className="text-red-400 dark:text-red-600">{date.day} {date.month}</p>
        </div>

        <div className="flex gap-1 items-center">
          {weather.map((item, i) => {
            if (item.main == "Rain") {
              return (
                <FontAwesomeIcon
                  icon={faCloudRain}
                  className="size-[30px]"
                  key={i}
                />
              );
            } else if (item.main == "Clouds") {
              return (
                <FontAwesomeIcon
                  icon={faCloud}
                  className="size-[30px]"
                  key={i}
                />
              );
            }else if (item.main == "Snow") {
              return (
                <FontAwesomeIcon icon={faSnowflake} className="size-[30px]" key={i} />
              );
            }else if (item.main == "Storm") {
              return (
                <FontAwesomeIcon icon={faCloudBolt} className="size-[30px]" key={i} />
              );
            } else if (item.main == "Clear" && dayHours.includes(date.hour)) {
              return (
                <FontAwesomeIcon icon={faSun} className="size-[30px]" key={i} />
              );
            } else if (
              item.main == "Clear" &&
              nightHours.includes(date.hour)
            ) {
              return (
                <FontAwesomeIcon
                  icon={faMoon}
                  className="size-[30px]"
                  key={i}
                />
              );
            } else {
              return (
                <FontAwesomeIcon
                  icon={faMeteor}
                  className="size-[30px]"
                  key={i}
                />
              );
            }
          })}
        </div>
      </div>
    </BoxLayout>
  );
}
