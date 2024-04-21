import { BoxLayout } from "@/components/BoxLayout";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Options() {
  return (
    <main className="options ">
      <BoxLayout>
        <div className="grid justify-center gap-6 p-2 sm:p-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-slate-700 dark:text-white-100">
            Options
          </h2>

          <div className="text-lg sm:text-2xl">
            <div className="flex gap-4 sm:gap-14 justify-between items-center">
              <p className="font-semibold text-red-400 dark:text-red-600">
                Default Location:
              </p>
              <p>Ankara</p>
            </div>

            <div>
              <Input />
              <Button text="Set"/>
            </div>
          </div>

          <div className="text-lg sm:text-2xl">
            <div className="flex gap-4 sm:gap-14 justify-between items-center">
              <p className="font-semibold text-red-400 dark:text-red-600">
                Default Mode:
              </p>
              <p>Dark</p>
            </div>

            <div>
              <Input />
              <Button text="Set"/>
            </div>
          </div>
        </div>
      </BoxLayout>
    </main>
  );
}
