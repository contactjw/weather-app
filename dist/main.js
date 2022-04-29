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

  if (cityName) {
    const capitalize = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    return capitalize;
  }
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
  else document.querySelector('.wind-speed-data').innerHTML = (`${Math.round(weatherData.current.wind_speed)} kmh`);

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

  const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey);
  const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(coords.lon, coords.lat, units, apiKey);

  (0,_htmlFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(city, units, data);

  if (units === 'imperial') unitButton.innerHTML = '<span>&#176;</span>C';
  else unitButton.innerHTML = '<span>&#176;</span>F';
});

searchButton.addEventListener('click', async () => {
  try {
    city = _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey);
    const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
    (0,_htmlFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(city, units, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0YsS0FBSyxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQzVIO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0Esc0ZBQXNGLElBQUksT0FBTyxJQUFJLFNBQVMsTUFBTSxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQ3ZKO0FBQ0E7QUFDQTs7QUFNRTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLHNDQUFzQyxZQUFZO0FBQ3BJLDZEQUE2RCxzQ0FBc0MsWUFBWTtBQUMvRzs7QUFFQTtBQUNBLHlEQUF5RCxvQ0FBb0M7QUFDN0Y7O0FBRUEsMkRBQTJELDhCQUE4QjtBQUN6Riw4REFBOEQsc0NBQXNDO0FBQ3BHLHVGQUF1Riw0Q0FBNEM7QUFDbkksa0VBQWtFLDRDQUE0Qzs7QUFFOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBLDBEQUEwRCwrQ0FBK0MsWUFBWTtBQUNySCxxQ0FBcUMsK0NBQStDLFlBQVk7O0FBRWhHLHlEQUF5RCwrQ0FBK0MsWUFBWTtBQUNwSCxvQ0FBb0MsK0NBQStDLFlBQVk7O0FBRS9GLDZEQUE2RCx5Q0FBeUM7QUFDdEc7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQy9FN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDSDs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHlEQUEyQjtBQUNsRCxxQkFBcUIscURBQXVCOztBQUU1QyxFQUFFLDBEQUFhOztBQUVmLGdFQUFnRTtBQUNoRSwyQ0FBMkM7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsV0FBVyxzREFBd0I7QUFDbkMsMkNBQTJDLEtBQUs7O0FBRWhELHlCQUF5Qix5REFBMkI7QUFDcEQsdUJBQXVCLHFEQUF1Qjs7QUFFOUM7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHVCQUF1Qix5REFBMkI7QUFDbEQ7QUFDQSxxQkFBcUIscURBQXVCO0FBQzVDLEVBQUUsMERBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2h0bWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDaXR5TmFtZSgpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lLWlucHV0JykudmFsdWU7XG5cbiAgaWYgKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IGNpdHlOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eU5hbWUuc2xpY2UoMSk7XG4gICAgcmV0dXJuIGNhcGl0YWxpemU7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5LCBhcGlLZXkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHsgbG9uOiB3ZWF0aGVyRGF0YS5jb29yZC5sb24sIGxhdDogd2VhdGhlckRhdGEuY29vcmQubGF0IH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9uLCBsYXQsIHVuaXRzLCBhcGlLZXkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQge1xuICBnZXRDaXR5TmFtZSxcbiAgZ2V0Q29vcmRpbmF0ZXMsXG4gIGdldFdlYXRoZXIsXG59O1xuIiwiZnVuY3Rpb24gZ2V0RGF5c09mV2VlaygpIHtcbiAgY29uc3QgbWF4RGF5SW5kZXggPSA2O1xuICBjb25zdCBkYXlPZldlZWtBcnJheSA9IFtdO1xuXG4gIGxldCBkYXlPZldlZWtEaWdpdCA9IG5ldyBEYXRlKCkuZ2V0RGF5KCkgKyAxO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgc3dpdGNoIChkYXlPZldlZWtEaWdpdCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdTdW5kYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ01vbmRheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnVHVlc2RheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnV2VkbmVzZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdUaHVyc2RheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnRnJpZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdTYXR1cmRheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXNlIG5vdCBtZXQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGRheU9mV2Vla0RpZ2l0ID09PSBtYXhEYXlJbmRleCkgZGF5T2ZXZWVrRGlnaXQgPSAwO1xuICAgIGVsc2UgZGF5T2ZXZWVrRGlnaXQgKz0gMTtcbiAgfVxuXG4gIC8vICAgY29uc29sZS5sb2coZGF5T2ZXZWVrQXJyYXkpO1xuICByZXR1cm4gZGF5T2ZXZWVrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIoY2l0eSwgdW5pdHMsIHdlYXRoZXJEYXRhKSB7XG4gIC8vIFVwZGF0ZSBDdXJyZW50IFdlYXRoZXJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLmlubmVySFRNTCA9IGNpdHk7XG4gIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJykuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXApfSA8c3Bhbj4mIzE3Njs8L3NwYW4+RmA7XG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJykuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXApfSA8c3Bhbj4mIzE3Njs8L3NwYW4+Q2A7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5tYWluO1xuXG4gIC8vIENyZWF0ZSBBUEkgaWNvbiB1cmwgc3RyaW5nXG4gIGNvbnN0IGljb25TdHJpbmcgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWljb24nKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25TdHJpbmcpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1kYXRhJykuaW5uZXJIVE1MID0gKGAke3dlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHl9ICVgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5jZS1yYWluLWRhdGEnKS5pbm5lckhUTUwgPSAoYCR7d2VhdGhlckRhdGEuaG91cmx5WzBdLnBvcC50b0ZpeGVkKDIpfSAlYCk7XG4gIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQtZGF0YScpLmlubmVySFRNTCA9IChgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9zcGVlZCl9IG1waGApO1xuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkLWRhdGEnKS5pbm5lckhUTUwgPSAoYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpfSBrbWhgKTtcblxuICAvLyBVcGRhdGUgd2Vla2x5IGZvcmVjYXN0IGRhdGFcbiAgY29uc3QgZGF5c09mV2VlayA9IGdldERheXNPZldlZWsoKTtcbiAgY29uc3QgaHRtbERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5Jyk7XG4gIGNvbnN0IGRhaWx5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1oaWdoJyk7XG4gIGNvbnN0IGRhaWx5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWxvdycpO1xuICBjb25zdCBkYWlseUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWljb24nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgIGh0bWxEYXlzW2ldLmlubmVySFRNTCA9IGRheXNPZldlZWtbaV07XG5cbiAgICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIGRhaWx5SGlnaFtpXS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS50ZW1wLm1heCl9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5GYDtcbiAgICBlbHNlIGRhaWx5SGlnaFtpXS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS50ZW1wLm1heCl9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5DYDtcblxuICAgIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykgZGFpbHlMb3dbaV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0udGVtcC5taW4pfSA8c3Bhbj4mIzE3Njs8L3NwYW4+RmA7XG4gICAgZWxzZSBkYWlseUxvd1tpXS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS50ZW1wLm1pbil9IDxzcGFuPiYjMTc2Ozwvc3Bhbj5DYDtcblxuICAgIGNvbnN0IGRhaWx5SWNvblVSTCA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmRhaWx5W2kgKyAxXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgZGFpbHlJY29uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhaWx5SWNvblVSTCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlV2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgYXBpRnVuY3Rpb25zIGZyb20gJy4vYXBpRnVuY3Rpb25zJztcbmltcG9ydCB1cGRhdGVXZWF0aGVyIGZyb20gJy4vaHRtbEZ1bmN0aW9ucyc7XG5cbi8vIFdlIGNhbiBnZXQgdGhlc2UgdmFsdWVzIGZyb20gYSBmdW5jdGlvbiB0aGF0IHJldHJpZXZlcyBkYXRhIGZyb20gZm9ybS5cbmxldCBjaXR5ID0gJ1N1bm55dmFsZSc7XG5sZXQgbGFzdENpdHkgPSAnU3Vubnl2YWxlJztcbmNvbnN0IGFwaUtleSA9ICcyMmE0YWVlMjdlOTNiYjM2NDRkNDRmNjVhNWQ2ZDU5NCc7XG5sZXQgdW5pdHMgPSAnaW1wZXJpYWwnO1xuY29uc3QgdW5pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2UtdW5pdHMnKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUtc2VhcmNoJyk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xudW5pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSB1bml0cyA9ICdtZXRyaWMnO1xuICBlbHNlIHVuaXRzID0gJ2ltcGVyaWFsJztcblxuICBjb25zdCBjb29yZHMgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRXZWF0aGVyKGNvb3Jkcy5sb24sIGNvb3Jkcy5sYXQsIHVuaXRzLCBhcGlLZXkpO1xuXG4gIHVwZGF0ZVdlYXRoZXIoY2l0eSwgdW5pdHMsIGRhdGEpO1xuXG4gIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykgdW5pdEJ1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4+JiMxNzY7PC9zcGFuPkMnO1xuICBlbHNlIHVuaXRCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuPiYjMTc2Ozwvc3Bhbj5GJztcbn0pO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY2l0eSA9IGFwaUZ1bmN0aW9ucy5nZXRDaXR5TmFtZSgpO1xuICAgIGNvbnNvbGUubG9nKGBDaXR5IG5hbWUgaXMgY3VycmVudGx5OiAke2NpdHl9YCk7XG5cbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldFdlYXRoZXIoY29vcmRzLmxvbiwgY29vcmRzLmxhdCwgdW5pdHMsIGFwaUtleSk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB1cGRhdGVXZWF0aGVyKGNpdHksIHVuaXRzLCBkYXRhKTtcbiAgICBsYXN0Q2l0eSA9IGNpdHk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGNpdHkgPSBsYXN0Q2l0eTtcbiAgICAvLyBjb25zb2xlLmxvZyhgQ2l0eSBuYW1lIGlzIG5vdyBiYWNrIHRvOiAke2NpdHl9YCk7XG4gIH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplV2VhdGhlcigpIHtcbiAgLy8gQXNzaWduIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgY2l0eSB0byBhbiBvYmplY3RcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSk7XG4gIC8vIFBhc3MgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGNpdHkgdG8gYSBmdW5jdGlvbiB0byBnZXQgdGhlIG1vcmUgcHJlY2lzZSB3ZWF0aGVyIGRhdGFcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRXZWF0aGVyKGNvb3Jkcy5sb24sIGNvb3Jkcy5sYXQsIHVuaXRzLCBhcGlLZXkpO1xuICB1cGRhdGVXZWF0aGVyKGNpdHksIHVuaXRzLCBkYXRhKTtcbiAgLy8gQXNzaWduIGRheXMgb2Ygd2VlayB0byBhbiBhcnJheVxuICBjb25zdCBkYXlzT2ZXZWVrVGVtcCA9IGRhdGEuZGFpbHk7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmVzIGZvciBlYWNoIGRheVxuICBkYXlzT2ZXZWVrVGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC50ZW1wLmRheSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC53ZWF0aGVyWzBdLm1haW4pO1xuICB9KTtcbiAgLy8gY29uc29sZS5sb2cgdGhlIGVudGlyZSBvYmplY3Qgb2YgdGhlIHdlYXRoZXIgYXBpXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG5pbml0aWFsaXplV2VhdGhlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9