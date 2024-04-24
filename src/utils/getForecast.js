export async function getForecast(lat, lon) {
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
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
  );
  const data = await res.json();
  const timezone = data.city.timezone;

  const forecastList = data.list.map((data) => {
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

  const firstDay = forecastList[0].date.day;
  const forecast = {
    allDates: [...forecastList],
    firstDate: forecastList.filter((item) => item.date.day == firstDay),
    secondDate: forecastList.filter((item) => item.date.day == firstDay + 1),
    thirdDate: forecastList.filter((item) => item.date.day == firstDay + 2),
    fourthDate: forecastList.filter((item) => item.date.day == firstDay + 3),
    fifthDate: forecastList.filter((item) => item.date.day == firstDay + 4),
  };

  return forecast;
}
