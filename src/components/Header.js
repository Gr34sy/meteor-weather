import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="bg-red-400 dark:bg-slate-700 w-full md:w-2/3 flex gap-1 justify-self-center items-center justify-center rounded-b-3xl py-2 mb-2 duration-500 delay-100 ease-in-out dark:shadow-none shadow-[0_0_6px_0_rgba(0,0,0,0.3)]">
      <FontAwesomeIcon icon={faMeteor} className="size-[40px] min-[400px]:size-[50px] text-slate-700 dark:text-red-600 duration-500 delay-100 ease-in-out" />

      <h1 className="text-[1.5rem] min-[400px]:text-[2rem] text-white-100">MeteorWeather</h1>
    </header>
  );
}
