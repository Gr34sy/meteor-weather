"use client";
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
import { ErrorAlert } from "@/components/ErrorAlert";
import { LoadingScreen } from "@/components/LoadingScreen";

// functions
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState("Warsaw");
  const [forecast, setForecast] = useState(false);
  const [today, setToday] = useState(false);

  async function getToday(locationValue) {
    setLoading(false);
    try {
      const res = await fetch(`/api/today/?location=${locationValue}`);
      if (!res.ok) {
        throw new Error(res.message);
      }
      const data = await res.json();

      setToday(data.today);
      setForecast(data.forecast);
    } catch (err) {
      console.log(err);
      setError("Failed retrieving the data");
    }
    setLoading(false);
  }

  useEffect(() => {
    getToday(location);
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
        <ErrorAlert message={error} />
      </main>
    );
  }

  if (today && forecast) {
    return (
      <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
        <SearchBar action={setLocation} />

        <div className="grid min-[500px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] min-[500px]:grid-rows-[1fr_1fr_1fr] gap-4">
          <TodayCard
            weather={today.weather[0].main}
            date={today.date}
            location={today.location}
            temp={today.temp}
          />

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
          <SmallBox
            icon={faDroplet}
            title="Humidity"
            description={today.humidity}
          />
          <SmallBox
            icon={faEye}
            title="Visibility"
            description={today.visibility}
          />
          <SmallBox
            icon={faGaugeSimpleHigh}
            title="Pressure"
            description={today.pressure}
          />
          <SmallBox icon={faWind} title="Wind" description={today.wind} />
          <SmallBox
            icon={faCloud}
            title="Cloudiness"
            description={today.cloudiness}
          />
          <SmallBox icon={faCloudRain} title="Rain" description={today.rain} />
          <SmallBox icon={faSnowflake} title="Snow" description={today.snow} />
        </div>

        <Tabs
          all={forecast.allDates}
          day1={forecast.firstDate}
          day2={forecast.secondDate}
          day3={forecast.thirdDate}
          day4={forecast.fourthDate}
          day5={forecast.fifthDate}
        />
      </main>
    );
  }

  return (
    <main className="justify-self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar action={setLocation} />
    </main>
  );
}
