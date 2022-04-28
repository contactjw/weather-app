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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0YsS0FBSyxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQzVIO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0Esc0ZBQXNGLElBQUksT0FBTyxJQUFJLFNBQVMsTUFBTSxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQ3ZKO0FBQ0E7QUFDQTs7QUFNRTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLHNDQUFzQyxZQUFZO0FBQ3BJLDZEQUE2RCxzQ0FBc0MsWUFBWTtBQUMvRzs7QUFFQTtBQUNBLHlEQUF5RCxvQ0FBb0M7QUFDN0Y7O0FBRUEsMkRBQTJELDhCQUE4QjtBQUN6Riw4REFBOEQsc0NBQXNDO0FBQ3BHLHVGQUF1Riw0Q0FBNEM7QUFDbkksa0VBQWtFLDRDQUE0Qzs7QUFFOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBLDBEQUEwRCwrQ0FBK0MsWUFBWTtBQUNySCxxQ0FBcUMsK0NBQStDLFlBQVk7O0FBRWhHLHlEQUF5RCwrQ0FBK0MsWUFBWTtBQUNwSCxvQ0FBb0MsK0NBQStDLFlBQVk7O0FBRS9GLDZEQUE2RCx5Q0FBeUM7QUFDdEc7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQy9FN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDSDs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0RBQXdCO0FBQ25DLDJDQUEyQyxLQUFLOztBQUVoRCx5QkFBeUIseURBQTJCO0FBQ3BELHVCQUF1QixxREFBdUI7O0FBRTlDO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx1QkFBdUIseURBQTJCO0FBQ2xEO0FBQ0EscUJBQXFCLHFEQUF1QjtBQUM1QyxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9odG1sRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q2l0eU5hbWUoKSB7XG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZS1pbnB1dCcpLnZhbHVlO1xuXG4gIGlmIChjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNhcGl0YWxpemUgPSBjaXR5TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNpdHlOYW1lLnNsaWNlKDEpO1xuICAgIHJldHVybiBjYXBpdGFsaXplO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IGxvbjogd2VhdGhlckRhdGEuY29vcmQubG9uLCBsYXQ6IHdlYXRoZXJEYXRhLmNvb3JkLmxhdCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvbiwgbGF0LCB1bml0cywgYXBpS2V5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0Q2l0eU5hbWUsXG4gIGdldENvb3JkaW5hdGVzLFxuICBnZXRXZWF0aGVyLFxufTtcbiIsImZ1bmN0aW9uIGdldERheXNPZldlZWsoKSB7XG4gIGNvbnN0IG1heERheUluZGV4ID0gNjtcbiAgY29uc3QgZGF5T2ZXZWVrQXJyYXkgPSBbXTtcblxuICBsZXQgZGF5T2ZXZWVrRGlnaXQgPSBuZXcgRGF0ZSgpLmdldERheSgpICsgMTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgIHN3aXRjaCAoZGF5T2ZXZWVrRGlnaXQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnU3VuZGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBkYXlPZldlZWtBcnJheS5wdXNoKCdNb25kYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ1R1ZXNkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ1dlZG5lc2RheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnVGh1cnNkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRheU9mV2Vla0FycmF5LnB1c2goJ0ZyaWRheScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgZGF5T2ZXZWVrQXJyYXkucHVzaCgnU2F0dXJkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnY2FzZSBub3QgbWV0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChkYXlPZldlZWtEaWdpdCA9PT0gbWF4RGF5SW5kZXgpIGRheU9mV2Vla0RpZ2l0ID0gMDtcbiAgICBlbHNlIGRheU9mV2Vla0RpZ2l0ICs9IDE7XG4gIH1cblxuICAvLyAgIGNvbnNvbGUubG9nKGRheU9mV2Vla0FycmF5KTtcbiAgcmV0dXJuIGRheU9mV2Vla0FycmF5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyKGNpdHksIHVuaXRzLCB3ZWF0aGVyRGF0YSkge1xuICAvLyBVcGRhdGUgQ3VycmVudCBXZWF0aGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKS5pbm5lckhUTUwgPSBjaXR5O1xuICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKX0gPHNwYW4+JiMxNzY7PC9zcGFuPkZgO1xuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKX0gPHNwYW4+JiMxNzY7PC9zcGFuPkNgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0ubWFpbjtcblxuICAvLyBDcmVhdGUgQVBJIGljb24gdXJsIHN0cmluZ1xuICBjb25zdCBpY29uU3RyaW5nID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1pY29uJykuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uU3RyaW5nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZGF0YScpLmlubmVySFRNTCA9IChgJHt3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuY2UtcmFpbi1kYXRhJykuaW5uZXJIVE1MID0gKGAke3dlYXRoZXJEYXRhLmhvdXJseVswXS5wb3AudG9GaXhlZCgyKX0gJWApO1xuICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkLWRhdGEnKS5pbm5lckhUTUwgPSAoYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpfSBtcGhgKTtcbiAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZC1kYXRhJykuaW5uZXJIVE1MID0gKGAke01hdGgucm91bmQod2VhdGhlckRhdGEuY3VycmVudC53aW5kX3NwZWVkKX0ga21oYCk7XG5cbiAgLy8gVXBkYXRlIHdlZWtseSBmb3JlY2FzdCBkYXRhXG4gIGNvbnN0IGRheXNPZldlZWsgPSBnZXREYXlzT2ZXZWVrKCk7XG4gIGNvbnN0IGh0bWxEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheScpO1xuICBjb25zdCBkYWlseUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktaGlnaCcpO1xuICBjb25zdCBkYWlseUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1sb3cnKTtcbiAgY29uc3QgZGFpbHlJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1pY29uJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBodG1sRGF5c1tpXS5pbm5lckhUTUwgPSBkYXlzT2ZXZWVrW2ldO1xuXG4gICAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSBkYWlseUhpZ2hbaV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0udGVtcC5tYXgpfSA8c3Bhbj4mIzE3Njs8L3NwYW4+RmA7XG4gICAgZWxzZSBkYWlseUhpZ2hbaV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0udGVtcC5tYXgpfSA8c3Bhbj4mIzE3Njs8L3NwYW4+Q2A7XG5cbiAgICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIGRhaWx5TG93W2ldLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlckRhdGEuZGFpbHlbaSArIDFdLnRlbXAubWluKX0gPHNwYW4+JiMxNzY7PC9zcGFuPkZgO1xuICAgIGVsc2UgZGFpbHlMb3dbaV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0udGVtcC5taW4pfSA8c3Bhbj4mIzE3Njs8L3NwYW4+Q2A7XG5cbiAgICBjb25zdCBkYWlseUljb25VUkwgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5kYWlseVtpICsgMV0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIGRhaWx5SWNvbnNbaV0uc2V0QXR0cmlidXRlKCdzcmMnLCBkYWlseUljb25VUkwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGFwaUZ1bmN0aW9ucyBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5pbXBvcnQgdXBkYXRlV2VhdGhlciBmcm9tICcuL2h0bWxGdW5jdGlvbnMnO1xuXG4vLyBXZSBjYW4gZ2V0IHRoZXNlIHZhbHVlcyBmcm9tIGEgZnVuY3Rpb24gdGhhdCByZXRyaWV2ZXMgZGF0YSBmcm9tIGZvcm0uXG5sZXQgY2l0eSA9ICdTdW5ueXZhbGUnO1xubGV0IGxhc3RDaXR5ID0gJ1N1bm55dmFsZSc7XG5jb25zdCBhcGlLZXkgPSAnMjJhNGFlZTI3ZTkzYmIzNjQ0ZDQ0ZjY1YTVkNmQ1OTQnO1xuY29uc3QgdW5pdHMgPSAnaW1wZXJpYWwnO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZS1zZWFyY2gnKTtcblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY2l0eSA9IGFwaUZ1bmN0aW9ucy5nZXRDaXR5TmFtZSgpO1xuICAgIGNvbnNvbGUubG9nKGBDaXR5IG5hbWUgaXMgY3VycmVudGx5OiAke2NpdHl9YCk7XG5cbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldFdlYXRoZXIoY29vcmRzLmxvbiwgY29vcmRzLmxhdCwgdW5pdHMsIGFwaUtleSk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB1cGRhdGVXZWF0aGVyKGNpdHksIHVuaXRzLCBkYXRhKTtcbiAgICBsYXN0Q2l0eSA9IGNpdHk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGNpdHkgPSBsYXN0Q2l0eTtcbiAgICAvLyBjb25zb2xlLmxvZyhgQ2l0eSBuYW1lIGlzIG5vdyBiYWNrIHRvOiAke2NpdHl9YCk7XG4gIH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplV2VhdGhlcigpIHtcbiAgLy8gQXNzaWduIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgY2l0eSB0byBhbiBvYmplY3RcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSk7XG4gIC8vIFBhc3MgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgdGhlIGNpdHkgdG8gYSBmdW5jdGlvbiB0byBnZXQgdGhlIG1vcmUgcHJlY2lzZSB3ZWF0aGVyIGRhdGFcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRXZWF0aGVyKGNvb3Jkcy5sb24sIGNvb3Jkcy5sYXQsIHVuaXRzLCBhcGlLZXkpO1xuICB1cGRhdGVXZWF0aGVyKGNpdHksIHVuaXRzLCBkYXRhKTtcbiAgLy8gQXNzaWduIGRheXMgb2Ygd2VlayB0byBhbiBhcnJheVxuICBjb25zdCBkYXlzT2ZXZWVrVGVtcCA9IGRhdGEuZGFpbHk7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmVzIGZvciBlYWNoIGRheVxuICBkYXlzT2ZXZWVrVGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC50ZW1wLmRheSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC53ZWF0aGVyWzBdLm1haW4pO1xuICB9KTtcbiAgLy8gY29uc29sZS5sb2cgdGhlIGVudGlyZSBvYmplY3Qgb2YgdGhlIHdlYXRoZXIgYXBpXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG5pbml0aWFsaXplV2VhdGhlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9