// icons and images
import {
  faCloud,
  faCloudRain,
  faDroplet,
  faEye,
  faGaugeSimpleHigh,
  faMagnifyingGlass,
  faMoon,
  faSnowflake,
  faSun,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

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

      <div className="grid min-[500px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] min-[500px]:grid-rows-[1fr_1fr_1fr] gap-4">
        <TodayCard img="stormy" location="Ankara" temp="3" date="22 Feb 2025" />

        <SmallBox icon={faTemperatureArrowUp} title="High" description="21%" />
        <SmallBox icon={faTemperatureArrowDown} title="Low" description="21%" />
        <SmallBox icon={faSun} title="Sunrise" description="21%" />
        <SmallBox icon={faMoon} title="Sunset" description="21%" />
        <SmallBox icon={faDroplet} title="Humidity" description="21%" />
        <SmallBox icon={faEye} title="Visibility" description="21%" />
        <SmallBox icon={faGaugeSimpleHigh} title="Pressure" description="21%" />
        <SmallBox icon={faWind} title="Wind" description="21%" />
        <SmallBox
          icon={faCloud}
          title="Cloudiness"
          description="21%"
        />
        <SmallBox icon={faCloudRain} title="Rain" description="21%" />
        <SmallBox icon={faSnowflake} title="Snow" description="21%" />
      </div>

      <Tabs />
    </main>
  );
}
