"use client";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

// Components
import Link from "next/link";

// hooks
import { useState } from "react";

export function AppBar() {
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState("homepage");

  return (
    <aside
      className={"bg-white-100 py-5 rounded-xl " + (collapsed ? "" : "max-w-[180px]")}
    >
      <div onClick={() => setCollapsed((prev) => !prev)}>
        <FontAwesomeIcon
          icon={collapsed ? faChevronRight : faChevronLeft}
          className="size-[20px] hover:cursor-pointer"
        />
      </div>

      <ul className="flex flex-col gap-3">
        <li>
          <Link href="/" className={"flex px-3 gap-2 items-center text-lg " + (collapsed && active==="homepage" ? "border-r-8 border-solid border-red-400" : "")}>
            <FontAwesomeIcon icon={faHouse} className="size-[35px] my-[5px]" />
            {!collapsed && <p className={"px-2 py-2 rounded-2xl " + (active === "homepage" ? "text-white-100 bg-red-400" : "")}>Homepage</p>}
          </Link>
        </li>

        <li>
          <Link href="/30forecast" className={"flex px-3 gap-2 items-center text-lg " + (collapsed && active==="30forecast" ? "border-r-8 border-solid border-red-400" : "")}>
            <FontAwesomeIcon icon={faCalendar} className="size-[35px] my-[5px]" />
            {!collapsed && <p className={"px-2 py-2 rounded-2xl " + (active === "30forecast" ? "text-white-100 bg-red-400" : "")}>Forecast</p>}
          </Link>
        </li>

        <li>
          <Link href="/pollution" className={"flex px-3 gap-2 items-center text-lg " + (collapsed && active==="pollution" ? "border-r-8 border-solid border-red-400" : "")}>
            <FontAwesomeIcon icon={faSmog} className="size-[35px] my-[5px]" />
            {!collapsed && <p className={"px-2 py-2 rounded-2xl " + (active === "pollution" ? "text-white-100 bg-red-400" : "")}>Pollution</p>}
          </Link>
        </li>

        <li>
          <Link href="/options" className={"flex px-3 gap-2 items-center text-lg " + (collapsed && active==="options" ? "border-r-8 border-solid border-red-400" : "")}>
            <FontAwesomeIcon icon={faGear} className="size-[35px] my-[5px]" />
            {!collapsed && <p className={"px-2 py-2 rounded-2xl " + (active === "options" ? "text-white-100 bg-red-400" : "")}>Options</p>}
          </Link>
        </li>
      </ul>
    </aside>
  );
}
