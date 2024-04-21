"use client";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGear,
  faHouse,
  faToggleOff,
  faToggleOn,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

// Components
import Link from "next/link";

// hooks
import { useState } from "react";
import { usePathname } from 'next/navigation'

export function AppBar({nightmode, changeMode}) {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  function handleChangeMode(){
    if(typeof changeMode === "function"){
      changeMode();
    }
  }

  return (
    <aside className={"bg-white-100 dark:bg-slate-700 py-5 rounded-r-xl flex flex-col gap-4 " + (collapsed ? " " : " min-w-[185px]")}>
      <div
        className={
          "px-3 flex items-center " +
          (!collapsed ? "justify-between gap-1" : "justify-center")
        }
      >
        {!collapsed && (
          <div
            className="flex gap-2 hover:cursor-pointer"
            onClick={handleChangeMode}
          >
            <FontAwesomeIcon
              icon={nightmode ? faToggleOn : faToggleOff}
              className="size-[25px] hover:cursor-pointer text-slate-700 dark:text-white-400"
            />

            <p className="font-semibold tracking-wider">{nightmode ? "Dark" : "Light"}</p>
          </div>
        )}

        <FontAwesomeIcon
          onClick={() => setCollapsed((prev) => !prev)}
          icon={collapsed ? faChevronRight : faChevronLeft}
          className="size-[25px] hover:cursor-pointer text-slate-700 dark:text-white-400"
        />
      </div>

      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/"
            className={
              "flex px-3 gap-2 items-center text-lg " +
              (collapsed && pathname === "/"
                ? "border-r-8 border-solid border-red-400 dark:border-red-600"
                : "")
            }
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="size-[35px] my-[5px] text-slate-700 dark:text-white-400"
            />
            {!collapsed && (
              <p
                className={
                  "px-2 py-2 rounded-2xl duration-500 delay-100 ease-in-out hover:px-3 " +
                  (pathname === "/" ? "text-white-100 bg-red-400 dark:bg-slate-900 dark:text-white-300" : "dark:hover:bg-white-50 hover:bg-slate-50")
                }
              >
                Homepage
              </p>
            )}
          </Link>
        </li>

        <li>
          <Link
            href="/30forecast"
            className={
              "flex px-3 gap-2 items-center text-lg " +
              (collapsed && pathname === "/30forecast"
                ? "border-r-8 border-solid border-red-400 dark:border-red-600"
                : "")
            }
          >
            <FontAwesomeIcon
              icon={faCalendar}
              className="size-[35px] my-[5px] text-slate-700 dark:text-white-400"
            />
            {!collapsed && (
              <p
                className={
                  "px-2 py-2 rounded-2xl duration-500 delay-100 ease-in-out hover:px-3 " +
                  (pathname === "/30forecast" ? "text-white-100 bg-red-400 dark:bg-slate-900 dark:text-white-300" : "dark:hover:bg-white-50 hover:bg-slate-50")
                }
              >
                Forecast
              </p>
            )}
          </Link>
        </li>

        <li>
          <Link
            href="/pollution"
            className={
              "flex px-3 gap-2 items-center text-lg " +
              (collapsed && pathname === "/pollution"
                ? "border-r-8 border-solid border-red-400 dark:border-red-600"
                : "")
            }
          >
            <FontAwesomeIcon
              icon={faSmog}
              className="size-[35px] my-[5px] text-slate-700 dark:text-white-400"
            />
            {!collapsed && (
              <p
                className={
                  "px-2 py-2 rounded-2xl duration-500 delay-100 ease-in-out hover:px-3 " +
                  (pathname === "/pollution" ? "text-white-100 bg-red-400 dark:bg-slate-900 dark:text-white-300" : "dark:hover:bg-white-50 hover:bg-slate-50")
                }
              >
                Pollution
              </p>
            )}
          </Link>
        </li>

        <li>
          <Link
            href="/options"
            className={
              "flex px-3 gap-2 items-center text-lg " +
              (collapsed && pathname === "/options"
                ? "border-r-8 border-solid border-red-400 dark:border-red-600"
                : "")
            }
          >
            <FontAwesomeIcon
              icon={faGear}
              className="size-[35px] my-[5px] text-slate-700 dark:text-white-400"
            />
            {!collapsed && (
              <p
                className={
                  "px-2 py-2 rounded-2xl duration-500 delay-100 ease-in-out hover:px-3 " +
                  (pathname === "/options" ? "text-white-100 bg-red-400 dark:bg-slate-900 dark:text-white-300" : "dark:hover:bg-white-50 hover:bg-slate-50")
                }
              >
                Options
              </p>
            )}
          </Link>
        </li>
      </ul>

      {collapsed && (
        <FontAwesomeIcon
          icon={nightmode ? faToggleOn : faToggleOff}
          className="px-3 pt-3 size-[35px] text-slate-700 dark:text-white-400 hover:cursor-pointer"
          onClick={handleChangeMode}
        />
      )}
    </aside>
  );
}
