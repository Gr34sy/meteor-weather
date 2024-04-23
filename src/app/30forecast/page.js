import { SlimBox } from "@/components/SlimBox";
import { SearchBar } from "@/components/SearchBar";
import { PageHeader } from "@/components/PageHeader";

export default function ForecastPage() {
  return (
    <div className="justify-self-stretch flex  flex-col gap-4">
      <SearchBar />
      <PageHeader text="30 days forecast" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-4">
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
