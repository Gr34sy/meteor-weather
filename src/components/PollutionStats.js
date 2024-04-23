import { BoxLayout } from "./BoxLayout";

export function PollutionStats({ data }) {
  return (
    <BoxLayout>
      <div className="flex flex-col gap-2 justify-between text-xl">
        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            SO<sub>2</sub>
          </p>
          <p className="text-red-400 dark:text-red-600">{data.so2}</p>
        </div>

        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            NO<sub>2</sub>
          </p>
          <p className="text-red-400 dark:text-red-600">{data.no2}</p>
        </div>

        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            PM<sub>10</sub>
          </p>
          <p className="text-red-400 dark:text-red-600">{data.pm10}</p>
        </div>

        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            PM<sub>2.5</sub>
          </p>
          <p className="text-red-400 dark:text-red-600">{data.pm2_5}</p>
        </div>

        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            O<sub>3</sub>
          </p>
          <p className="text-red-400 dark:text-red-600">{data.o3}</p>
        </div>

        <div className="flex gap-2 justify-between">
          <p className="font-bold">
            CO:
          </p>
          <p className="text-red-400 dark:text-red-600">{data.co}</p>
        </div>
      </div>
    </BoxLayout>
  );
}
