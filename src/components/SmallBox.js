"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SmallBox({icon, title, description}){
    return(
        <div className="flex bg-white-100 dark:bg-slate-700 gap-2 justify-center items-center rounded-xl p-2 sm:p-4"> 
            <FontAwesomeIcon icon={icon} className="size-[30px]" />
            <div className="text-center">
                <p className="font-bold text-lg">
                {title}
                </p>
                <p className="text-red-400 dark:text-red-600">
                    {description}
                </p>
            </div>
        </div>
    )
}