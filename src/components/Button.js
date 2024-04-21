"use client";

export function Button({text, onClick}){
    function handleClick(){
        if(typeof onClick === 'function'){
            onClick();
        }
    }

    return(
        <button className="px-2 sm:px-5 rounded-full text-white-400 bg-red-400 dark:bg-red-600 duration-500 delay-100 ease-in-out sm:hover:px-8 hover:px-3" onClick={handleClick}>{text}</button>
    )
}