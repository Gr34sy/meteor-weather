// icons and images
import {
  faCloud,
  faCloudRain,
  faDroplet,
  faEye,
  faGaugeSimpleHigh,
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
  const location = "Warsaw";
  const zip = "";
  const lat = 52.23;
  const lon = 21.01;

  const todayRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );
  const forecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );

  if (!todayRes.ok || !forecastRes.ok) {
    throw new Error("Failed loading data");
  }

  const todayData = await todayRes.json();
  const forecastData = await forecastRes.json();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const timezone = todayData.timezone;
  const todayDate = new Date((Date.now() + timezone));

  // today data formatting
  const todaySunrise = new Date((todayData.sys.sunrise + timezone) * 1000);
  const todaySunset = new Date((todayData.sys.sunset + timezone) * 1000);
  const today = {
    date: {
      minutes: todayDate.getMinutes(),
      hour: todayDate.getHours(),
      day: todayDate.getDate(),
      month: months[todayDate.getMonth()],
      year: todayDate.getFullYear(),
    },
    weather: todayData.weather,
    min: Math.round(todayData.main.temp_min),
    max: Math.round(todayData.main.temp_max),
    temp: Math.round(todayData.main.temp),
    pressure: todayData.main.pressure + " hPA",
    humidity: todayData.main.humidity + " %",
    cloudiness: todayData.clouds.all + " %",
    visibility: todayData.visibility + " m",
    wind: todayData.wind.speed + " m/s",
    rain: todayData.rain ? todayData.rain["1h"] : "None",
    snow: todayData.snow ? todayData.snow["1h"] : "None",
    sunrise: `${todaySunrise.getHours()}:${todaySunrise.getMinutes().toString().length === 1 ? "0" + todaySunrise.getMinutes() : todaySunrise.getMinutes()}`,
    sunset: `${todaySunset.getHours()}:${todaySunset.getMinutes().toString().length === 1 ? "0" + todaySunset.getMinutes() : todaySunset.getMinutes()}`,
    name: location,
    zip: zip,
  };
  console.log(today);

  //  forecast data formatting
  const forecast = forecastData.list.map((data) => {
    const date = new Date((data.dt + timezone) * 1000);

    return {
      temp: Math.round(data.main.temp),
      weather: data.weather,
      date: {
        minutes: date.getMinutes(),
        hour: date.getHours(),
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      },
    };
  });
  const firstDay = forecast[0].date.day;
  const firstDate = forecast.filter((item) => item.date.day == firstDay);
  const secondDate = forecast.filter((item) => item.date.day == firstDay + 1);
  const thirdDate = forecast.filter((item) => item.date.day == firstDay + 2);
  const fourthDate = forecast.filter((item) => item.date.day == firstDay + 3);
  const fifthDate = forecast.filter((item) => item.date.day == firstDay + 4);

  return (
    <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar />

      <div className="grid min-[500px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] min-[500px]:grid-rows-[1fr_1fr_1fr] gap-4">
        <TodayCard weather={today.weather} date={today.date} location={today.name} temp={today.temp} />

        <SmallBox
          icon={faTemperatureArrowUp}
          title="High"
          description={today.max + "°C"}
        />
        <SmallBox
          icon={faTemperatureArrowDown}
          title="Low"
          description={today.min + "°C"}
        />
        <SmallBox icon={faSun} title="Sunrise" description={today.sunrise} />
        <SmallBox icon={faMoon} title="Sunset" description={today.sunset} />
        <SmallBox icon={faDroplet} title="Humidity" description={today.humidity} />
        <SmallBox icon={faEye} title="Visibility" description={today.visibility} />
        <SmallBox icon={faGaugeSimpleHigh} title="Pressure" description={today.pressure} />
        <SmallBox icon={faWind} title="Wind" description={today.wind} />
        <SmallBox icon={faCloud} title="Cloudiness" description={today.cloudiness} />
        <SmallBox icon={faCloudRain} title="Rain" description={today.rain} />
        <SmallBox icon={faSnowflake} title="Snow" description={today.snow} />
      </div>

      <Tabs
        all={forecast}
        day1={firstDate}
        day2={secondDate}
        day3={thirdDate}
        day4={fourthDate}
        day5={fifthDate}
      />
    </main>
  );
}
