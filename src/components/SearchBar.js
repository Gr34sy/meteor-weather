import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Input } from "./Input";
import { Button } from "./Button";

export function SearchBar() {
  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4 sm:w-[500px]">
      <label className="grid sm:grid-cols-[auto_1fr] gap-4">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hidden sm:block size-[30px] self-center hover:cursor-pointer"
        />
        <Input placeholder="Enter zipcode or location name" />
      </label>

      <div>
        <Button text="Search" />
      </div>

    </div>
  );
}
