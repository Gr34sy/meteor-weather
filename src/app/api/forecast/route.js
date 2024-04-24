import { transform30Forecast } from "@/utils/transform30Forecast";

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

    // getting forecast
    const forecastRes = await fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${geocode[0].lat}&lon=${geocode[0].lon}&appid=${process.env.API_KEY}&units=metric`
    );
    if(!forecastRes.ok){
      throw new Error("Couldn't get the forecast");
    }
    const forecastData = await forecastRes.json();
    const forecast= transform30Forecast(forecastData);


    const data = {
      list: forecast,
      location,
    }

    console.log(data.date);
    return Response.json(data);

  } catch (err) {
    console.log(err);
    return Response.json({ message: err.message }, { status: 500 });
  }
}
