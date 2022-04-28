import * as apiFunctions from './apiFunctions';
import updateWeather from './htmlFunctions';

// We can get these values from a function that retrieves data from form.
let city = 'Tracy';
let lastCity = 'Tracy';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
const units = 'imperial';
const searchButton = document.getElementById('city-name-search');

// Event listeners
searchButton.addEventListener('click', async () => {
  try {
    city = apiFunctions.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await apiFunctions.getCoordinates(city, apiKey);
    const data = await apiFunctions.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
    updateWeather(city, units, data);
    lastCity = city;
  } catch (error) {
    alert(error);
    city = lastCity;
    console.log(`City name is now back to: ${city}`);
  }
});

async function initializeWeather() {
  // Assign latitude and longitude of city to an object
  const coords = await apiFunctions.getCoordinates(city, apiKey);
  // Pass the latitude and longitude of the city to a function to get the more precise weather data
  const data = await apiFunctions.getWeather(coords.lon, coords.lat, units, apiKey);
  updateWeather(city, units, data);
  // Assign days of week to an array
  const daysOfWeekTemp = data.daily;
  // Loop through the array to display the temperatures for each day
  daysOfWeekTemp.forEach((element) => {
    console.log(element.temp.day);
    console.log(element.weather[0].main);
  });
  // console.log the entire object of the weather api
  console.log(data);
}

initializeWeather();
