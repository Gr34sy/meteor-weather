export async function getToday(lat, lon) {
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

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );
  const data = await res.json();
  const timezone = data.timezone;
  const todayDate = new Date((Date.now() + timezone));

  const todaySunrise = new Date((data.sys.sunrise + timezone) * 1000);
  const todaySunset = new Date((data.sys.sunset + timezone) * 1000);
  const today = {
    date: {
      minutes: todayDate.getMinutes(),
      hour: todayDate.getHours(),
      day: todayDate.getDate(),
      month: months[todayDate.getMonth()],
      year: todayDate.getFullYear(),
    },
    weather: data.weather,
    min: Math.round(data.main.temp_min),
    max: Math.round(data.main.temp_max),
    temp: Math.round(data.main.temp),
    pressure: data.main.pressure + " hPA",
    humidity: data.main.humidity + " %",
    cloudiness: data.clouds.all + " %",
    visibility: data.visibility + " m",
    wind: data.wind.speed + " m/s",
    rain: data.rain ? data.rain["1h"] : "None",
    snow: data.snow ? data.snow["1h"] : "None",
    sunrise: `${todaySunrise.getHours()}:${todaySunrise.getMinutes().toString().length === 1 ? "0" + todaySunrise.getMinutes() : todaySunrise.getMinutes()}`,
    sunset: `${todaySunset.getHours()}:${todaySunset.getMinutes().toString().length === 1 ? "0" + todaySunset.getMinutes() : todaySunset.getMinutes()}`,
  };

  return today;
}