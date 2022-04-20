async function getCoordinates(city, apiKey, units) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`, { mode: 'cors' });
  const weatherData = await response.json();
  return { lon: weatherData.coord.lon, lat: weatherData.coord.lat };
}

async function getWeather(city, lon, lat, units, apiKey) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`, { mode: 'cors' });
  const weatherData = await response.json();
  // Don't necessarily need the console.log below this, more so for testing reasons.
  console.log(`Current temp in ${city}: ${weatherData.current.temp} fahrenheit`);
  return weatherData;
}

export {
  getWeather,
  getCoordinates,
};
