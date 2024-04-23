import { MediumBox } from "@/components/MediumBox";

export function Tabs() {
  return (
    <div className="grid-tabs gap-2 md:gap-4">
      <div className="bg-red-400 col-span-full">Bar</div>

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
  );
}
