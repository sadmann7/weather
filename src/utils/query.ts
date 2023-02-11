export const getWeather = async (
  location: string,
  unit: "metric" | "imperial"
) => {
  const url = `${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL}/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=${unit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
