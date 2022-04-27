import * as apiFunctions from './apiFunctions';

// We can get these values from a function that retrieves data from form.
let city = 'Tracy';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
const units = 'imperial';
const searchButton = document.getElementById('city-name-search');

const div = document.querySelector('content');

// Event listeners
searchButton.addEventListener('click', async () => {
  try {
    city = apiFunctions.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await apiFunctions.getCoordinates(city, apiKey);
    const data = await apiFunctions.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
  } catch (error) {
    alert(error);
  }
});

async function displayWeather() {
  // Assign latitude and longitude of city to an object
  const coords = await apiFunctions.getCoordinates(city, apiKey, units);
  // Pass the latitude and longitude of the city to a function to get the more precise weather data
  const data = await apiFunctions.getWeather(city, coords.lon, coords.lat, units, apiKey);
  // Assign days of week to an array
  const daysOfWeekTemp = data.daily;
  // Loop through the array to display the temperatures for each day
  daysOfWeekTemp.forEach((element) => {
    console.log(element.temp.day);
    console.log(element.weather[0].description);
  });
  // console.log the entire object of the weather api
  console.log(data);
}

displayWeather();
