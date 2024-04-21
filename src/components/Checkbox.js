"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Checkbox({name, text, checked, onChange }){

    function handleChange(e){
        if(typeof onChange === "function"){
            onChange(e.target.value);
        }
    }

    return (
        <label htmlFor={name} className="hover:cursor-pointer grid grid-cols-[auto_1fr] gap-4 relative">
            <input id={name} name={name} type="checkbox" onChange={handleChange} value={checked} className="appearance-none hover:cursor-pointer bg-white-400 dark:bg-white-50 w-[32px] h-[32px] rounded-lg"/>
            {checked && <FontAwesomeIcon icon={faCheck} className="size-[20px] absolute top-[6px] left-[6px]"/>}
            <p className="text-lg self-center">{text}</p>
        </label>
    )
}