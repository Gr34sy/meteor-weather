import { getForecast } from "@/utils/getForecast";
import { getGeocode } from "@/utils/getGeocode";
import { getToday } from "@/utils/getToday";

export async function GET(req) {
  const url = req.nextUrl.searchParams;

  const lat = url.get('lat');
  const lon = url.get('lon');

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}&units=metric`
  );

  const data = await res.json();

  console.log(data);


  return Response.json(data);
}
