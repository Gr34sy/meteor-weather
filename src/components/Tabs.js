import { MediumBox } from "@/components/MediumBox";
import { PageHeader } from "./PageHeader";

export function Tabs({ items }) {
  return (
    <div className="grid gap-3">
      <div className="bg-red-400">Bar</div>


      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 md:gap-4">
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
        <MediumBox />
      </div>
    </div>
  );
}

