import { BoxLayout } from "./BoxLayout";

export function NotFound() {
  return (
    <div className="grid justify-items-center">
      <BoxLayout>
        <div className="p-3 sm:p-10 grid gap-2 justify-self-center justify-items-center">
          <p>Meteor couldn't find requested location. Please try again</p>
          <p className="text-bold">
            Proper input format:{" "}
            <span className="text-red-400 dark:text-red-600">
              City,zipcode,countrycode
            </span>
          </p>
          <p className="text-bold">
            You can also try searching only by city name
          </p>
        </div>
      </BoxLayout>
    </div>
  );
}
