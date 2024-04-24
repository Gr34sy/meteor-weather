// icons
import {
  faSun,
  faCloudRain,
  faMoon,
  faCloudBolt,
  faWind,
  faCloud,
  faSnowflake,
  faMeteor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// border-2 border-solid border-white-300

export function TodayCard({weather, location, temp, date }) {
  const nightHours = [22, 23, 24, 0, 1, 2, 3, 4, 5, 6];
  const dayHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  function getBg(weather){
    if (weather === "Rain"){
      return "rainy";
    }else if (weather === "Snow") {
      return "snowy";
    }else if (weather === "Storm") {
      return "stormy";
    }  
    else if (weather === "Clouds") {
      return "cloudy";
    } else if (weather === "Clear" && dayHours.includes(date.hour)) {
      return "sunny";
    } else if (weather === "Clear" && nightHours.includes(date.hour)){
      return "night";
    } else {
      return "cloudy";
    }
  }

  function getIcon(weather){
    if (weather === "Rain"){
      return faCloudRain;
    }else if (weather === "Snow") {
      return faSnowflake;
    }else if (weather === "Storm") {
      return faCloudBolt;
    }  
    else if (weather === "Clouds") {
      return faCloud;
    } else if (weather === "Clear" && dayHours.includes(date.hour)) {
      return faSun;
    } else if (weather === "Clear" && nightHours.includes(date.hour)){
      return faMoon;
    } else {
      return faMeteor;
    }
  }
  

  return (
    <div
      className={
        "grid rounded-xl bg-slate-700 row-span-3 min-[500px]:col-span-3 bg-cover bg-center" +
        ` ${getBg(weather)}-bg`
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
              {temp}&deg;C <span className="text-2xl">{weather}</span>
            </p>
          </div>

          <p className="text-white-300 text-md font-bold bg-slate-100 p-2">
           {`${date.day} ${date.month} ${date.year}`}
          </p>
        </div>

        <div className="">
          <FontAwesomeIcon
            icon={getIcon(weather)}
            className="size-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
