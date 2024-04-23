"use client";

import { MediumBox } from "@/components/MediumBox";
import { PageHeader } from "./PageHeader";

import { useState } from "react";

export function Tabs({ items }) {
  const [activeItem, setActiveItem] = useState("item1");
  
  function Header({title, item}){
    function handleClick(){
      setActiveItem(item);
    }

    return (
      <div className={"text-md font-medium capitalize hover:cursor-pointer hover:bg-red-400 hover:text-white-100 hover:dark:bg-red-600 border-2 border-solid border-red-400 dark:border-red-600 rounded-3xl p-2 " + (activeItem === item ? "text-white-100 bg-red-400 dark:bg-red-600" : "")} onClick={handleClick}>
        {title}
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      <div className="grid gap-1">
        <PageHeader text="Next 5 Days"/>

        <div className="self-center flex gap-2 flex-wrap">
          <Header title="25 feb 2024" item="item1"/>
          <Header title="26 feb 2024" item="item2"/>
        </div>
      </div>


      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 md:gap-4">
        {activeItem === "item1" && <MediumBox hour="18:00" description="Clear" temp="12"/>}
        {activeItem === "item2" && <MediumBox  hour="21:00" description="Clear" temp="9"/>}

      </div>
    </div>
  );
}

