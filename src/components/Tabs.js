"use client";

import { MediumBox } from "@/components/MediumBox";
import { PageHeader } from "./PageHeader";

import { useState } from "react";

export function Tabs({ all, day1, day2, day3, day4, day5 }) {
  const [activeItems, setActiveItems] = useState("items1");

  function Header({ title, item }) {
    function handleClick() {
      setActiveItems(item);
    }

    return (
      <div
        className={
          "text-md font-medium capitalize hover:cursor-pointer hover:bg-red-400 hover:text-white-100 hover:dark:bg-red-600 border-2 border-solid border-red-400 dark:border-red-600 rounded-3xl p-2 hover:px-3 duration-500 delay-100 ease-in-out " +
          (activeItems === item
            ? "text-white-100 bg-red-400 dark:bg-red-600"
            : "")
        }
        onClick={handleClick}
      >
        {title}
      </div>
    );
  }

  function Items({ items }) {
    return (
      <>
        {items.map((item, i) => {
          return (
            <MediumBox
              date={item.date}
              weather={item.weather}
              temp={item.temp}
              key={i}
            />
          );
        })}
      </>
    );
  }

  return (
    <div className="grid gap-3">
      <div className="grid gap-1">
        <PageHeader text="Next 5 Days" />

        <div className="self-center flex gap-2 flex-wrap">
          <Header title="All" item="items1" />
          <Header
            title={`${day1[0].date.day} ${day1[0].date.month}`}
            item="items2"
          />
          <Header
            title={`${day2[0].date.day} ${day2[0].date.month}`}
            item="items3"
          />
          <Header
            title={`${day3[0].date.day} ${day3[0].date.month}`}
            item="items4"
          />
          <Header
            title={`${day4[0].date.day} ${day4[0].date.month}`}
            item="items5"
          />
          <Header
            title={`${day5[0].date.day} ${day5[0].date.month}`}
            item="items6"
          />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 md:gap-5" >
        {activeItems === "items1" && <Items items={all} />}
        {activeItems === "items2" && <Items items={day1} />}
        {activeItems === "items3" && <Items items={day2} />}
        {activeItems === "items4" && <Items items={day3} />}
        {activeItems === "items5" && <Items items={day4} />}
        {activeItems === "items6" && <Items items={day5} />}
      </div>
    </div>
  );
}
