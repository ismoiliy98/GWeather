import axios from "axios";

const SERVICE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const SERVICE_KEY = "PUT_YOUR_API_KEY_RIGHT_THERE";

const getTimeFromDate = time => {
  var date = new Date(parseInt(time));
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });
};

class WeatherService {
  getFiveDaysWeather = async (id, isHourly) => {
    const url = `${SERVICE_URL}?units=metric&id=${id}&appid=${SERVICE_KEY}`;

    try {
      const response = await axios.get(url);
      let data = [];

      for (let i = 0; i < 5; i++) {
        let index = i * 8;
        let hourlyTemp = [];

        if (isHourly === true) {
          for (let j = index; j < index + 8; j++) {
            hourlyTemp.push({
              time: getTimeFromDate(response.data.list[j].dt * 1000),
              temp: Math.floor(response.data.list[j].main.temp),
              temp_max: Math.floor(response.data.list[j].main.temp_max),
              temp_min: Math.floor(response.data.list[j].main.temp_min),
              icon: response.data.list[j].weather[0].icon
            });
          }
          data.push(hourlyTemp);
          hourlyTemp = [];
        } else {
          data.push({
            day: new Date(response.data.list[index].dt * 1000).getDay(),
            temp_max: Math.floor(response.data.list[index].main.temp_max),
            temp_min: Math.floor(response.data.list[index].main.temp_min),
            icon: response.data.list[index].weather[0].icon
          });
        }
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export { WeatherService };
