"use client";

import { BoxLayout } from "@/components/BoxLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorBoundary({ error }) {
  return (
    <div>
      <BoxLayout>
        <div className="p-3 sm:p-10 grid gap-2 justify-items-center">
            <div className="text-red-600 flex items-center gap-1">
                <FontAwesomeIcon icon={faTriangleExclamation} className="size-[25px] sm:size-[35px] pr-2"/>
                <h2 className="text-2xl font-bold">
                    Error!
                </h2>
            </div>
            <p className="text-lg">
            {error.message}
            </p>
        </div>
      </BoxLayout>
    </div>
  );
}
