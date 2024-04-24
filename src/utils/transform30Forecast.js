export function transform30Forecast(data) {
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
  
    const timezone = data.city.timezone;
  
    const forecastList = data.list.map((data) => {
      const date = new Date((data.dt + timezone) * 1000);
  
      return {
        day: Math.round(data.temp.day),
        night: Math.round(data.temp.night),
        min: Math.round(data.temp.min),
        max: Math.round(data.temp.max),
        humidity: data.humidity,
        pressure: data.pressure,
        
        date: {
          minutes: date.getMinutes(),
          hour: date.getHours(),
          day: date.getDate(),
          month: months[date.getMonth()],
          year: date.getFullYear(),
        },
      };
    });
  
    return forecastList;
  }
  