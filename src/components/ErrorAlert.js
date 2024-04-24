"use client"
import { BoxLayout } from "./BoxLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

export function ErrorAlert({ message }) {
  return (
    <div className="grid justify-items-center items-start">
      <BoxLayout>
        <div className="p-3 sm:p-10 grid gap-2 justify-self-center justify-items-center">
          <div className="text-red-600 flex items-center gap-1">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="size-[25px] sm:size-[35px] pr-2"
            />
            <h2 className="text-2xl font-bold">Error!</h2>
          </div>
          <p className="text-lg">{message}</p>
          <p className="text-bold">
            Proper input format:{" "}
            <span className="text-red-400 dark:text-red-600">
              City,zipcode,countrycode
            </span>
          </p>
          <p className="text-bold">
            You can also try searching only by <span className="text-red-400 dark:text-red-600">city name</span>
          </p>
        </div>
      </BoxLayout>
    </div>
  );
}
