import { transformPollution } from "@/utils/transformPollution";

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

    // getting pollution
    const pollutionRes = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${geocode[0].lat}&lon=${geocode[0].lon}&appid=${process.env.API_KEY}&units=metric`
    );
    if(!pollutionRes.ok){
      throw new Error("Couldn't get the forecast");
    }
    const pollutionData = await pollutionRes.json();
    const pollutionComponents = transformPollution(pollutionData);

    const data = {
      components: pollutionComponents,
      location,
    }

    console.log(data.date);
    return Response.json(data);

  } catch (err) {
    console.log(err);
    return Response.json({ message: err.message }, { status: 500 });
  }
}
