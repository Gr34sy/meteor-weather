import { PageHeader } from "@/components/PageHeader";
import { PollutionTable } from "@/components/PollutionTable";
import { PollutionStats } from "@/components/PollutionStats";

export default function PollutionPage() {
  return (
    <main className="min-[1150px]:justify-self-stretch self-stretch flex flex-col gap-4 md:gap-6">

      <div className="flex flex-col sm:flex-row gap-4 md:gap-14">
       <div className="grid grid-rows-[auto_1fr]">
       <PageHeader highlight="Ankara" />
       <PollutionStats data={{
            so2: 18,
            no2: 38,
            pm10: 60,
            pm2_5: 78,
            o3: 100,
            co: 12350,
        }}/>
       </div>

       <PollutionTable />
      </div>
    </main>
  );
}
