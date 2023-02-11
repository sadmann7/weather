export const getWeather = async (city: string) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
