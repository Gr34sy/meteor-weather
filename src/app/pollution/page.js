import { BoxLayout } from "@/components/BoxLayout";
import { SearchBar } from "@/components/SearchBar";
import { PollutionTable } from "@/components/PollutionTable";
import { PollutionStats } from "@/components/PollutionStats";

export default function PollutionPage() {
  return (
    <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar />

      <h2>Ankara</h2>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-14">
        <PollutionStats />

        <PollutionTable />
      </div>
    </main>
  );
}
