import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxLayout } from "./BoxLayout";
import {
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faGaugeSimpleHigh,
  faDroplet,
  faSun,
  faMoon,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

export function SlimBox({ date, day, night, min, max, humidity, pressure }) {
  return (
    <BoxLayout>
      <h3 className="text-2xl font-semibold pb-1 border-b-2 border-solid dark:border-slate-800 border-white-300 mb-3">{date}</h3>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faSun} className="size-[35px]" />
            <p className="">Day:</p>
            <p className="text-red-400 dark:text-red-600">{day}&deg;C</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faMoon} className="size-[35px]" />
            <p className="">Night:</p>
            <p className="text-red-400 dark:text-red-600">{night}&deg;C</p>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faTemperatureArrowUp}
              className="size-[35px]"
            />
            <p className="">Min:</p>
            <p className="text-red-400 dark:text-red-600">{min}&deg;C</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faTemperatureArrowDown}
              className="size-[35px]"
            />
            <p className="">Max:</p>
            <p className="text-red-400 dark:text-red-600">{max}&deg;C</p>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faDroplet} className="size-[30px]" />
            <p className="">Humidity:</p>
            <p className="text-red-400 dark:text-red-600">{humidity}%</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="size-[30px]" />
            <p className="">Pressure:</p>
            <p className="text-red-400 dark:text-red-600">{pressure}hPa</p>
          </div>
        </div>
      </div>
    </BoxLayout>
  );
}
