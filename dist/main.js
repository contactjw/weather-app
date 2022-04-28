/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityName": () => (/* binding */ getCityName),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
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




/***/ }),

/***/ "./src/htmlFunctions.js":
/*!******************************!*\
  !*** ./src/htmlFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  else document.querySelector('.wind-speed-data').innerHTML = (`${Math.round(weatherData.current.wind_speed)} kph`);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ "./src/apiFunctions.js");
/* harmony import */ var _htmlFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlFunctions */ "./src/htmlFunctions.js");



// We can get these values from a function that retrieves data from form.
let city = 'Tracy';
let lastCity = 'Tracy';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
const units = 'imperial';
const searchButton = document.getElementById('city-name-search');

// Event listeners
searchButton.addEventListener('click', async () => {
  try {
    city = _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey);
    const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
    (0,_htmlFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(city, units, data);
    lastCity = city;
  } catch (error) {
    alert(error);
    city = lastCity;
    console.log(`City name is now back to: ${city}`);
  }
});

async function initializeWeather() {
  // Assign latitude and longitude of city to an object
  const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey);
  // Pass the latitude and longitude of the city to a function to get the more precise weather data
  const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(coords.lon, coords.lat, units, apiKey);
  (0,_htmlFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(city, units, data);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixLQUFLLFNBQVMsT0FBTyxLQUFLLGNBQWM7QUFDNUg7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxzRkFBc0YsSUFBSSxPQUFPLElBQUksU0FBUyxNQUFNLFNBQVMsT0FBTyxLQUFLLGNBQWM7QUFDdko7QUFDQTtBQUNBOztBQU1FOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkY7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Ysc0NBQXNDLFlBQVk7QUFDcEksNkRBQTZELHNDQUFzQyxZQUFZO0FBQy9HOztBQUVBO0FBQ0EseURBQXlELG9DQUFvQztBQUM3Rjs7QUFFQSwyREFBMkQsOEJBQThCO0FBQ3pGLDhEQUE4RCxzQ0FBc0M7QUFDcEcsdUZBQXVGLDRDQUE0QztBQUNuSSxrRUFBa0UsNENBQTRDOztBQUU5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7O0FBRUEsMERBQTBELCtDQUErQyxZQUFZO0FBQ3JILHFDQUFxQywrQ0FBK0MsWUFBWTs7QUFFaEcseURBQXlELCtDQUErQyxZQUFZO0FBQ3BILG9DQUFvQywrQ0FBK0MsWUFBWTs7QUFFL0YsNkRBQTZELHlDQUF5QztBQUN0RztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDL0U3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNIOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBd0I7QUFDbkMsMkNBQTJDLEtBQUs7O0FBRWhELHlCQUF5Qix5REFBMkI7QUFDcEQsdUJBQXVCLHFEQUF1Qjs7QUFFOUM7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHVCQUF1Qix5REFBMkI7QUFDbEQ7QUFDQSxxQkFBcUIscURBQXVCO0FBQzVDLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2h0bWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDaXR5TmFtZSgpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lLWlucHV0JykudmFsdWU7XG4gIGlmIChjaXR5TmFtZSkgcmV0dXJuIGNpdHlOYW1lO1xuICByZXR1cm4gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbiwgbGF0OiB3ZWF0aGVyRGF0YS5jb29yZC5sYXQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb24sIGxhdCwgdW5pdHMsIGFwaUtleSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmV4cG9ydCB7XG4gIGdldENpdHlOYW1lLFxuICBnZXRDb29yZGluYXRlcyxcbiAgZ2V0V2VhdGhlcixcbn07XG4iLCJmdW5jdGlvbiBnZXREYXlzT2ZXZWVrKCkge1xuICBjb25zdCBtYXhEYXlJbmRleCA9IDY7XG4gIGNvbnN0IGRheU9mV2Vla0FycmF5ID0gW107XG5cbiAgbGV0IGRheU9mV2Vla0RpZ2l0ID0gbmV3IERhdGUoKS5nZXREYXkoKSArIDE7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBzd2l0Y2ggKGRheU9mV2Vla0RpZ2l0KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ1N1bmRheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnTW9uZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdUdWVzZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdXZWRuZXNkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ1RodXJzZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdGcmlkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ1NhdHVyZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ2Nhc2Ugbm90IG1ldCcpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZGF5T2ZXZWVrRGlnaXQgPT09IG1heERheUluZGV4KSBkYXlPZldlZWtEaWdpdCA9IDA7XG4gICAgZWxzZSBkYXlPZldlZWtEaWdpdCArPSAxO1xuICB9XG5cbiAgLy8gICBjb25zb2xlLmxvZyhkYXlPZldlZWtBcnJheSk7XG4gIHJldHVybiBkYXlPZldlZWtBcnJheTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlcihjaXR5LCB1bml0cywgd2VhdGhlckRhdGEpIHtcbiAgLy8gVXBkYXRlIEN1cnJlbnQgV2VhdGhlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJykuaW5uZXJIVE1MID0gY2l0eTtcbiAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCl9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5GYDtcbiAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCl9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5DYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLm1haW47XG5cbiAgLy8gQ3JlYXRlIEFQSSBpY29uIHVybCBzdHJpbmdcbiAgY29uc3QgaWNvblN0cmluZyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblN0cmluZyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWRhdGEnKS5pbm5lckhUTUwgPSAoYCR7d2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX0gJWApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmNlLXJhaW4tZGF0YScpLmlubmVySFRNTCA9IChgJHt3ZWF0aGVyRGF0YS5ob3VybHlbMF0ucG9wLnRvRml4ZWQoMil9ICVgKTtcbiAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZC1kYXRhJykuaW5uZXJIVE1MID0gKGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC53aW5kX3NwZWVkKX0gbXBoYCk7XG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQtZGF0YScpLmlubmVySFRNTCA9IChgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9zcGVlZCl9IGtwaGApO1xuXG4gIC8vIFVwZGF0ZSB3ZWVrbHkgZm9yZWNhc3QgZGF0YVxuICBjb25zdCBkYXlzT2ZXZWVrID0gZ2V0RGF5c09mV2VlaygpO1xuICBjb25zdCBodG1sRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXknKTtcbiAgY29uc3QgZGFpbHlIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWhpZ2gnKTtcbiAgY29uc3QgZGFpbHlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktbG93Jyk7XG4gIGNvbnN0IGRhaWx5SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktaWNvbicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgaHRtbERheXNbaV0uaW5uZXJIVE1MID0gZGF5c09mV2Vla1tpXTtcblxuICAgIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykgZGFpbHlIaWdoW2ldLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLnRlbXAubWF4KX0gPHNwYW4+JiMxNzY7PC9zcGFuPkZgO1xuICAgIGVsc2UgZGFpbHlIaWdoW2ldLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLnRlbXAubWF4KX0gPHNwYW4+JiMxNzY7PC9zcGFuPkNgO1xuXG4gICAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSBkYWlseUxvd1tpXS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS50ZW1wLm1pbil9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5GYDtcbiAgICBlbHNlIGRhaWx5TG93W2ldLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLnRlbXAubWluKX0gPHNwYW4+JiMxNzY7PC9zcGFuPkNgO1xuXG4gICAgY29uc3QgZGFpbHlJY29uVVJMID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBkYWlseUljb25zW2ldLnNldEF0dHJpYnV0ZSgnc3JjJywgZGFpbHlJY29uVVJMKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBhcGlGdW5jdGlvbnMgZnJvbSAnLi9hcGlGdW5jdGlvbnMnO1xuaW1wb3J0IHVwZGF0ZVdlYXRoZXIgZnJvbSAnLi9odG1sRnVuY3Rpb25zJztcblxuLy8gV2UgY2FuIGdldCB0aGVzZSB2YWx1ZXMgZnJvbSBhIGZ1bmN0aW9uIHRoYXQgcmV0cmlldmVzIGRhdGEgZnJvbSBmb3JtLlxubGV0IGNpdHkgPSAnVHJhY3knO1xubGV0IGxhc3RDaXR5ID0gJ1RyYWN5JztcbmNvbnN0IGFwaUtleSA9ICcyMmE0YWVlMjdlOTNiYjM2NDRkNDRmNjVhNWQ2ZDU5NCc7XG5jb25zdCB1bml0cyA9ICdpbXBlcmlhbCc7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lLXNlYXJjaCcpO1xuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjaXR5ID0gYXBpRnVuY3Rpb25zLmdldENpdHlOYW1lKCk7XG4gICAgY29uc29sZS5sb2coYENpdHkgbmFtZSBpcyBjdXJyZW50bHk6ICR7Y2l0eX1gKTtcblxuICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRDb29yZGluYXRlcyhjaXR5LCBhcGlLZXkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0V2VhdGhlcihjb29yZHMubG9uLCBjb29yZHMubGF0LCB1bml0cywgYXBpS2V5KTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHVwZGF0ZVdlYXRoZXIoY2l0eSwgdW5pdHMsIGRhdGEpO1xuICAgIGxhc3RDaXR5ID0gY2l0eTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvcik7XG4gICAgY2l0eSA9IGxhc3RDaXR5O1xuICAgIGNvbnNvbGUubG9nKGBDaXR5IG5hbWUgaXMgbm93IGJhY2sgdG86ICR7Y2l0eX1gKTtcbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVXZWF0aGVyKCkge1xuICAvLyBBc3NpZ24gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiBjaXR5IHRvIGFuIG9iamVjdFxuICBjb25zdCBjb29yZHMgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5KTtcbiAgLy8gUGFzcyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgY2l0eSB0byBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgbW9yZSBwcmVjaXNlIHdlYXRoZXIgZGF0YVxuICBjb25zdCBkYXRhID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldFdlYXRoZXIoY29vcmRzLmxvbiwgY29vcmRzLmxhdCwgdW5pdHMsIGFwaUtleSk7XG4gIHVwZGF0ZVdlYXRoZXIoY2l0eSwgdW5pdHMsIGRhdGEpO1xuICAvLyBBc3NpZ24gZGF5cyBvZiB3ZWVrIHRvIGFuIGFycmF5XG4gIGNvbnN0IGRheXNPZldlZWtUZW1wID0gZGF0YS5kYWlseTtcbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSB0byBkaXNwbGF5IHRoZSB0ZW1wZXJhdHVyZXMgZm9yIGVhY2ggZGF5XG4gIGRheXNPZldlZWtUZW1wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LnRlbXAuZGF5KTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LndlYXRoZXJbMF0ubWFpbik7XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyB0aGUgZW50aXJlIG9iamVjdCBvZiB0aGUgd2VhdGhlciBhcGlcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmluaXRpYWxpemVXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=