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
  const lat = 52.23;
  const lon = 21.01;

  const todayRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );
  const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`);

  if (!todayRes.ok || !forecastRes.ok) {
    throw new Error("Failed loading data");
  }

  const todayData = await todayRes.json();
  const forecastData = await forecastRes.json();

  const forecast = forecastData.list.map((data) => {
    const date = new Date(data.dt_txt);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return {
      temp: Math.round(data.main.temp),
      weather: data.weather,
      date: {
        minutes: date.getMinutes(),
        hour: date.getHours(),
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      }
    }
  });

  const firstDay = forecast[0].date.day;
  const firstDate = forecast.filter((item) => item.date.day == firstDay);
  const secondDate = forecast.filter((item) => item.date.day == (firstDay+1));
  const thirdDate = forecast.filter((item) => item.date.day == (firstDay+2));
  const fourthDate = forecast.filter((item) => item.date.day == (firstDay+3));
  const fifthDate = forecast.filter((item) => item.date.day == (firstDay+4));

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

      <Tabs all={forecast} day1={firstDate} day2={secondDate} day3={thirdDate} day4={fourthDate} day5={fifthDate}/>
    </main>
  );
}
