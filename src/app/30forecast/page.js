"use client";
import { SlimBox } from "@/components/SlimBox";
import { SearchBar } from "@/components/SearchBar";
import { PageHeader } from "@/components/PageHeader";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ErrorAlert } from "@/components/ErrorAlert";

import { useState, useEffect } from "react";

export default function ForecastPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState("Warsaw");
  const [forecast, setForecast] = useState(false);

  async function getForecast(locationValue) {
    setLoading(true);
    try {
      const res = await fetch(`/api/forecast/?location=${locationValue}`);
      if (!res.ok) {
        throw new Error(res.message);
      }
      const data = await res.json();

      setForecast(data);
    } catch (err) {
      console.log(err);
      setError("Failed retrieving the data");
    }
    setLoading(false);
  }

  useEffect(() => {
    getForecast(location);
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

  if (forecast) {
    return (
      <main className="justify-self-stretch flex  flex-col gap-4">
        <SearchBar action={setLocation} />
        <PageHeader text="30 days forecast:" highlight={forecast.location} />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-4">
          {forecast.list.map((item, i) => {
            return (
              <SlimBox
                date={`${item.date.day} ${item.date.month} ${item.date.year}`}
                day={item.day}
                night={item.night}
                min={item.min}
                max={item.max}
                humidity={item.humidity}
                pressure={item.pressure}
                key={i}
              />
            );
          })}
        </div>
      </main>
    );
  }

  return (
    <main className="justify-self-stretch flex  flex-col gap-4">
      <SearchBar />
    </main>
  );
}
