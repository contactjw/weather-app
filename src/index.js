import * as apiFunctions from './apiFunctions';
import updateWeather from './htmlFunctions';

// We can get these values from a function that retrieves data from form.
let city = 'Sunnyvale';
let lastCity = 'Sunnyvale';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
let units = 'imperial';
const unitButton = document.getElementById('change-units');
const searchButton = document.getElementById('city-name-search');

// Event listeners
unitButton.addEventListener('click', async () => {
  if (units === 'imperial') units = 'metric';
  else units = 'imperial';

  const coords = await apiFunctions.getCoordinates(city, apiKey);
  const data = await apiFunctions.getWeather(coords.lon, coords.lat, units, apiKey);

  updateWeather(city, units, data);

  if (units === 'imperial') unitButton.innerHTML = '<span>&#176;</span>C';
  else unitButton.innerHTML = '<span>&#176;</span>F';
});

// Prevent enter key submission
document.getElementById('city-name-input').onkeypress = function (e) {
  const key = e.charCode || e.keyCode || 0;
  if (key === 13) {
    e.preventDefault();
  }
};

searchButton.addEventListener('click', async () => {
  try {
    city = apiFunctions.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await apiFunctions.getCoordinates(city, apiKey);
    const data = await apiFunctions.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
    updateWeather(city, units, data);
    lastCity = city;
    document.getElementById('error-message').style.visibility = 'hidden';
    document.getElementById('city-name-input').value = '';
  } catch (error) {
    document.getElementById('error-message').style.visibility = 'visible';
    document.getElementById('city-name-input').value = '';
    city = lastCity;
    // console.log(`City name is now back to: ${city}`);
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
