import { SlimBox } from "@/components/SlimBox";
import { SearchBar } from "@/components/SearchBar";

export default function ForecastPage() {
  return (
    <div className="justify-self-stretch flex  flex-col gap-4">
      <SearchBar />
      <h2 className="text-4xl font-bold">30 Day Forecast</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />

        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
        <SlimBox
          date="21 Feb 2026"
          day="16"
          night="7"
          min="4"
          max="22"
          humidity="5"
          pressure="1000"
        />
      </div>
    </div>
  );
}
