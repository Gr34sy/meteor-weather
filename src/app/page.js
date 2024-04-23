// icons and images
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// components
import { SmallBox } from "@/components/SmallBox";
import { TodayCard } from "@/components/TodayCard";
import { SearchBar } from "@/components/SearchBar";
import { Tabs } from "@/components/Tabs";

export default async function Home() {
  const lat = 10.99;
  const lon = 44.34;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed loading data");
  }

  const data = await response.json();
  console.log(data);

  return (
    <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar />

      <div className="grid-home grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4 md:gap-6">
        <TodayCard img="stormy" location="Ankara" temp="3" date="22 Feb 2025"/>

        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%" />
      </div>

      <Tabs />
    </main>
  );
}
