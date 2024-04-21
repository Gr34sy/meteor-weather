import { BoxLayout } from "@/components/BoxLayout";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";

export default function Options() {
  return (
    <main className="options">
      <BoxLayout>
        <div className="grid justify-center gap-6 px-2 sm:px-4 py-4 md:py-12 lg:py-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-slate-700 dark:text-white-100">
            Options
          </h2>

          <div className="text-lg sm:text-2xl">
            <div className="flex gap-4 sm:gap-14 justify-between items-center">
              <p className="font-semibold text-red-400 dark:text-red-600 duration-500 delay-100 ease-in-out">
                Default Location:
              </p>
              <p>Ankara</p>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-2">
              <Input />
              <Button text="Set" />
            </div>
          </div>

          <div className="text-lg sm:text-2xl">
            <div className="flex gap-4 sm:gap-14 justify-between items-center">
              <p className="font-semibold text-red-400 dark:text-red-600 duration-500 delay-100 ease-in-out">
                Default Mode:
              </p>
              <p>Dark On</p>
            </div>

            <Checkbox name="darkmode" text="Enable Dark" startingValue={false} />
          </div>
        </div>
      </BoxLayout>
    </main>
  );
}
