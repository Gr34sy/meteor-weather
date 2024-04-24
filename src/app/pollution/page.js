"use client";
import { PageHeader } from "@/components/PageHeader";
import { PollutionTable } from "@/components/PollutionTable";
import { PollutionStats } from "@/components/PollutionStats";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ErrorAlert } from "@/components/ErrorAlert";
import { SearchBar } from "@/components/SearchBar";

import { useState, useEffect } from "react";

export default function PollutionPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState("Warsaw");
  const [pollution, setPollution] = useState(false);

  async function getPollution(locationValue) {
    try {
      const res = await fetch(`/api/pollution/?location=${locationValue}`);
      if (!res.ok) {
        throw new Error(res.message);
      }
      const data = await res.json();

      setPollution(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      setError("Failed retrieving the data");
    }
    setLoading(false);
  }

  useEffect(() => {
    getPollution(location);
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

  if(pollution) {
    return (
      <main className="min-[1150px]:justify-self-stretch self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar action={setLocation}/>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-14">
        <div className="grid grid-rows-[auto_1fr]">
          <PageHeader highlight={pollution.location} />
          <PollutionStats
            data={{
              so2: pollution.components.so2,
              no2: pollution.components.no2,
              pm10: pollution.components.pm10,
              pm2_5: pollution.components.pm2_5,
              o3: pollution.components.o3,
              co: pollution.components.co,
            }}
          />
        </div>

        <PollutionTable />
      </div>
    </main>
    );
  }

  return (
    <main className="min-[1150px]:justify-self-stretch self-stretch flex flex-col gap-4 md:gap-6">
      <SearchBar />
    </main>
  );
}
