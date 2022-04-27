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


// We can get these values from a function that retrieves data from form.
let city = 'Tracy';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
const units = 'imperial';
const searchButton = document.getElementById('city-name-search');

const div = document.querySelector('content');

// Event listeners
searchButton.addEventListener('click', async () => {
  try {
    city = _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCityName();
    console.log(`City name is currently: ${city}`);

    const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey);
    const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(coords.lon, coords.lat, units, apiKey);

    console.log(data);
  } catch (error) {
    alert(error);
  }
});

async function displayWeather() {
  // Assign latitude and longitude of city to an object
  const coords = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoordinates(city, apiKey, units);
  // Pass the latitude and longitude of the city to a function to get the more precise weather data
  const data = await _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getWeather(city, coords.lon, coords.lat, units, apiKey);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixLQUFLLFNBQVMsT0FBTyxLQUFLLGNBQWM7QUFDNUg7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxzRkFBc0YsSUFBSSxPQUFPLElBQUksU0FBUyxNQUFNLFNBQVMsT0FBTyxLQUFLLGNBQWM7QUFDdko7QUFDQTtBQUNBOztBQU1FOzs7Ozs7O1VDdEJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBd0I7QUFDbkMsMkNBQTJDLEtBQUs7O0FBRWhELHlCQUF5Qix5REFBMkI7QUFDcEQsdUJBQXVCLHFEQUF1Qjs7QUFFOUM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHVCQUF1Qix5REFBMkI7QUFDbEQ7QUFDQSxxQkFBcUIscURBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDaXR5TmFtZSgpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lLWlucHV0JykudmFsdWU7XG4gIGlmIChjaXR5TmFtZSkgcmV0dXJuIGNpdHlOYW1lO1xuICByZXR1cm4gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbiwgbGF0OiB3ZWF0aGVyRGF0YS5jb29yZC5sYXQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb24sIGxhdCwgdW5pdHMsIGFwaUtleSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmV4cG9ydCB7XG4gIGdldENpdHlOYW1lLFxuICBnZXRXZWF0aGVyLFxuICBnZXRDb29yZGluYXRlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGFwaUZ1bmN0aW9ucyBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5cbi8vIFdlIGNhbiBnZXQgdGhlc2UgdmFsdWVzIGZyb20gYSBmdW5jdGlvbiB0aGF0IHJldHJpZXZlcyBkYXRhIGZyb20gZm9ybS5cbmxldCBjaXR5ID0gJ1RyYWN5JztcbmNvbnN0IGFwaUtleSA9ICcyMmE0YWVlMjdlOTNiYjM2NDRkNDRmNjVhNWQ2ZDU5NCc7XG5jb25zdCB1bml0cyA9ICdpbXBlcmlhbCc7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lLXNlYXJjaCcpO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb250ZW50Jyk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNpdHkgPSBhcGlGdW5jdGlvbnMuZ2V0Q2l0eU5hbWUoKTtcbiAgICBjb25zb2xlLmxvZyhgQ2l0eSBuYW1lIGlzIGN1cnJlbnRseTogJHtjaXR5fWApO1xuXG4gICAgY29uc3QgY29vcmRzID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRXZWF0aGVyKGNvb3Jkcy5sb24sIGNvb3Jkcy5sYXQsIHVuaXRzLCBhcGlLZXkpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoZXJyb3IpO1xuICB9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoKSB7XG4gIC8vIEFzc2lnbiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIGNpdHkgdG8gYW4gb2JqZWN0XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGFwaUZ1bmN0aW9ucy5nZXRDb29yZGluYXRlcyhjaXR5LCBhcGlLZXksIHVuaXRzKTtcbiAgLy8gUGFzcyB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgY2l0eSB0byBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgbW9yZSBwcmVjaXNlIHdlYXRoZXIgZGF0YVxuICBjb25zdCBkYXRhID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldFdlYXRoZXIoY2l0eSwgY29vcmRzLmxvbiwgY29vcmRzLmxhdCwgdW5pdHMsIGFwaUtleSk7XG4gIC8vIEFzc2lnbiBkYXlzIG9mIHdlZWsgdG8gYW4gYXJyYXlcbiAgY29uc3QgZGF5c09mV2Vla1RlbXAgPSBkYXRhLmRhaWx5O1xuICAvLyBMb29wIHRocm91Z2ggdGhlIGFycmF5IHRvIGRpc3BsYXkgdGhlIHRlbXBlcmF0dXJlcyBmb3IgZWFjaCBkYXlcbiAgZGF5c09mV2Vla1RlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudGVtcC5kYXkpO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyB0aGUgZW50aXJlIG9iamVjdCBvZiB0aGUgd2VhdGhlciBhcGlcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmRpc3BsYXlXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=