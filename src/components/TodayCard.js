// icons
import {
  faSun,
  faCloudRain,
  faMoon,
  faCloudBolt,
  faWind,
  faCloud,
  faSnow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// border-2 border-solid border-white-300

export function TodayCard({ img, icon, location, temp, date }) {

  return (
    <div
      className={
        "grid rounded-xl bg-red-400 dark:bg-slate-700 row-span-3 min-[500px]:col-span-3 bg-cover bg-center" +
        ` ${img}-bg`
      }
    >
      <div className="flex flex-col-reverse items-start min-[350px]:items-center min-[350px]:flex-row min-[350px]:justify-between gap-5 p-3 sm:p-8">
        <div className="flex flex-col gap-4 justify-between h-full">
          <div className="grid gap-1 justify-items-start bg-slate-100 p-2">
            <h2 className="text-4xl font-bold text-white-300">Today</h2>
            <p className="text-2xl font-semibold text-red-400 text-white-300">
              {location}
            </p>
            <p className="text-4xl font-extralight text-white-300">
              {temp}&deg;C
            </p>
          </div>

          <p className="text-white-300 text-md font-bold bg-slate-100 p-2">
           {`${date.day} ${date.month} ${date.year}`}
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={faCloudBolt}
            className="size-[80px] text-red-400 dark:text-red-600"
          />
        </div>
      </div>
    </div>
  );
}
