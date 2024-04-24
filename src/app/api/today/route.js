import { transformForecast } from "@/utils/transformForecast";
import { transformToday } from "@/utils/transformToday";

export async function GET(req) {
  const url = req.nextUrl.searchParams;
  const location = url.get("location");

  try {
    // getting location
    const locationRes = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.API_KEY}`
    );
    if(!locationRes.ok){
      throw new Error("Couldn't get the location");
    }
    const geocode = await locationRes.json();

    // getting today
    const todayRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocode[0].lat}&lon=${geocode[0].lon}&appid=${process.env.API_KEY}&units=metric`
    );
    if(!todayRes.ok){
      throw new Error("Couldn't get the today's weather");
    }
    const todayData = await todayRes.json();
    const today = transformToday(todayData);

    // getting forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${geocode[0].lat}&lon=${geocode[0].lon}&appid=${process.env.API_KEY}&units=metric`
    );
    if(!forecastRes.ok){
      throw new Error("Couldn't get the forecast");
    }
    const forecastData = await forecastRes.json();
    const forecast = transformForecast(forecastData);


    const data = {
      today,
      forecast,
      location,
    }

    return Response.json(data);

  } catch (err) {
    console.log(err);
    return Response.json({ message: "Failed retrieving data" }, { status: 500 });
  }
}
