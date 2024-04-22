
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// components
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SmallBox } from "@/components/SmallBox";
import { TodayCard } from "@/components/TodayCard";
import { MediumBox } from "@/components/MediumBox";

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
    <main className="justify-self-stretch flex  flex-col gap-4 lg:px-8">
      <div className="grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:w-[500px]">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hidden sm:block size-[30px] self-center"
        />
        <Input placeholder="Search location" />
        <Button text="Search" />
      </div>

      <div className="grid-home gap-4">
        <TodayCard />

        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
        <SmallBox icon={faMagnifyingGlass} title="Humidity" description="21%"/>
      </div>

      <div className="bg-red-400">Bar</div>

      <div className="grid-tabs gap-6">
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
    </main>
  );
}
