function getDaysOfWeek() {
  const maxDayIndex = 6;
  const dayOfWeekArray = [];

  let dayOfWeekDigit = new Date().getDay() + 1;

  for (let i = 0; i < 7; i += 1) {
    switch (dayOfWeekDigit) {
      case 0:
        dayOfWeekArray.push('Sunday');
        break;
      case 1:
        dayOfWeekArray.push('Monday');
        break;
      case 2:
        dayOfWeekArray.push('Tuesday');
        break;
      case 3:
        dayOfWeekArray.push('Wednesday');
        break;
      case 4:
        dayOfWeekArray.push('Thursday');
        break;
      case 5:
        dayOfWeekArray.push('Friday');
        break;
      case 6:
        dayOfWeekArray.push('Saturday');
        break;
      default:
        console.log('case not met');
        break;
    }

    if (dayOfWeekDigit === maxDayIndex) dayOfWeekDigit = 0;
    else dayOfWeekDigit += 1;
  }

  //   console.log(dayOfWeekArray);
  return dayOfWeekArray;
}

function updateWeather(city, units, weatherData) {
  // Update Current Weather
  document.querySelector('.city-name').innerHTML = city;
  if (units === 'imperial') document.querySelector('.temperature').innerHTML = `${Math.round(weatherData.current.temp)} <span>&#176;</span>F`;
  else document.querySelector('.temperature').innerHTML = `${Math.round(weatherData.current.temp)} <span>&#176;</span>C`;
  document.querySelector('.description').innerHTML = weatherData.current.weather[0].main;

  // Create API icon url string
  const iconString = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
  document.getElementById('today-icon').setAttribute('src', iconString);

  document.querySelector('.humidity-data').innerHTML = (`${weatherData.current.humidity} %`);
  document.querySelector('.chance-rain-data').innerHTML = (`${weatherData.hourly[0].pop.toFixed(2)} %`);
  if (units === 'imperial') document.querySelector('.wind-speed-data').innerHTML = (`${Math.round(weatherData.current.wind_speed)} mph`);
  else document.querySelector('.wind-speed-data').innerHTML = (`${Math.round(weatherData.current.wind_speed)} m/s`);

  // Update weekly forecast data
  const daysOfWeek = getDaysOfWeek();
  const htmlDays = document.querySelectorAll('.day');
  const dailyHigh = document.querySelectorAll('.daily-high');
  const dailyLow = document.querySelectorAll('.daily-low');
  const dailyIcons = document.querySelectorAll('.daily-icon');

  for (let i = 0; i < 7; i += 1) {
    htmlDays[i].innerHTML = daysOfWeek[i];

    if (units === 'imperial') dailyHigh[i].innerHTML = `${Math.round(weatherData.daily[i + 1].temp.max)} <span>&#176;</span>F`;
    else dailyHigh[i].innerHTML = `${Math.round(weatherData.daily[i + 1].temp.max)} <span>&#176;</span>C`;

    if (units === 'imperial') dailyLow[i].innerHTML = `${Math.round(weatherData.daily[i + 1].temp.min)} <span>&#176;</span>F`;
    else dailyLow[i].innerHTML = `${Math.round(weatherData.daily[i + 1].temp.min)} <span>&#176;</span>C`;

    const dailyIconURL = `http://openweathermap.org/img/wn/${weatherData.daily[i + 1].weather[0].icon}@2x.png`;
    dailyIcons[i].setAttribute('src', dailyIconURL);
  }
}

export default updateWeather;
