import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="absolute top-0 left-1/2 translate-x-[-50%] flex gap-1 items-center bg-red-400 rounded-b-3xl py-2 px-4 sm:px-20">
      <FontAwesomeIcon icon={faMeteor} className="size-[50px] text-slate-700" />

      <p className="text-[2rem] text-white-100">MeteorWeather</p>
    </header>
  );
}
