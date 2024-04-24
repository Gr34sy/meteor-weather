"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Input } from "./Input";
import { Button } from "./Button";

import { useState } from "react";

export function SearchBar({action}) {
  const [inputValue, setInputValue ] = useState(""); 

  function search(){
    if(typeof action === "function"){
      action(inputValue.trim().replaceAll(' ', ''));
    }
  }

  function onInputChange(value){
    setInputValue(value)
  }

  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4 sm:w-[500px]">
      <label className="grid sm:grid-cols-[auto_1fr] gap-4">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hidden sm:block size-[30px] self-center hover:cursor-pointer"
        />
        <Input placeholder="City, zipcode, countrycode" value={inputValue} onChange={onInputChange} />
      </label>

      <div>
        <Button text="Search" onClick={search} />
      </div>

    </div>
  );
}
