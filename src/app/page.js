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
    <main className="justify-self-stretch flex flex-col gap-4">
      <SearchBar />

      <div className="grid-home gap-4">
        <TodayCard img="cloudy"/>

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
