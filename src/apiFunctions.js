function getCityName() {
  const cityName = document.getElementById('city-name-input').value;
  if (cityName) return cityName;
  return '';
}

async function getCoordinates(city, apiKey) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });
  const weatherData = await response.json();
  return { lon: weatherData.coord.lon, lat: weatherData.coord.lat };
}

async function getWeather(lon, lat, units, apiKey) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
}

export {
  getCityName,
  getCoordinates,
  getWeather,
};
