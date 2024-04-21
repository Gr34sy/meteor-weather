import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="bg-red-400 dark:bg-slate-700 sm:absolute sm:top-0 sm:left-1/2 sm:translate-x-[-50%] flex gap-1 items-center justify-center rounded-b-3xl py-2  px-20 mb-2">
      <FontAwesomeIcon icon={faMeteor} className="size-[40px] min-[300px]:size-[50px] text-slate-700 dark:text-red-600" />

      <p className="text-[1.5rem] min-[300px]:text-[2rem] text-white-100">MeteorWeather</p>
    </header>
  );
}
