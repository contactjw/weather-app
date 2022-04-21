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
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
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
const city = 'Tracy';
const apiKey = '22a4aee27e93bb3644d44f65a5d6d594';
const units = 'imperial';

const div = document.querySelector('content');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLG9GQUFvRixLQUFLLFNBQVMsT0FBTyxTQUFTLE1BQU0sS0FBSyxjQUFjO0FBQzNJO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0Esc0ZBQXNGLElBQUksT0FBTyxJQUFJLFNBQVMsTUFBTSxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQ3ZKO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSyxJQUFJLDBCQUEwQjtBQUNwRTtBQUNBOztBQUtFOzs7Ozs7O1VDakJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIseURBQTJCO0FBQ2xEO0FBQ0EscUJBQXFCLHFEQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSwgYXBpS2V5LCB1bml0cykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyBsb246IHdlYXRoZXJEYXRhLmNvb3JkLmxvbiwgbGF0OiB3ZWF0aGVyRGF0YS5jb29yZC5sYXQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCBsb24sIGxhdCwgdW5pdHMsIGFwaUtleSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBEb24ndCBuZWNlc3NhcmlseSBuZWVkIHRoZSBjb25zb2xlLmxvZyBiZWxvdyB0aGlzLCBtb3JlIHNvIGZvciB0ZXN0aW5nIHJlYXNvbnMuXG4gIGNvbnNvbGUubG9nKGBDdXJyZW50IHRlbXAgaW4gJHtjaXR5fTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXB9IGZhaHJlbmhlaXRgKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQge1xuICBnZXRXZWF0aGVyLFxuICBnZXRDb29yZGluYXRlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGFwaUZ1bmN0aW9ucyBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5cbi8vIFdlIGNhbiBnZXQgdGhlc2UgdmFsdWVzIGZyb20gYSBmdW5jdGlvbiB0aGF0IHJldHJpZXZlcyBkYXRhIGZyb20gZm9ybS5cbmNvbnN0IGNpdHkgPSAnVHJhY3knO1xuY29uc3QgYXBpS2V5ID0gJzIyYTRhZWUyN2U5M2JiMzY0NGQ0NGY2NWE1ZDZkNTk0JztcbmNvbnN0IHVuaXRzID0gJ2ltcGVyaWFsJztcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29udGVudCcpO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgLy8gQXNzaWduIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgb2YgY2l0eSB0byBhbiBvYmplY3RcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgYXBpRnVuY3Rpb25zLmdldENvb3JkaW5hdGVzKGNpdHksIGFwaUtleSwgdW5pdHMpO1xuICAvLyBQYXNzIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIG9mIHRoZSBjaXR5IHRvIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBtb3JlIHByZWNpc2Ugd2VhdGhlciBkYXRhXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlGdW5jdGlvbnMuZ2V0V2VhdGhlcihjaXR5LCBjb29yZHMubG9uLCBjb29yZHMubGF0LCB1bml0cywgYXBpS2V5KTtcbiAgLy8gQXNzaWduIGRheXMgb2Ygd2VlayB0byBhbiBhcnJheVxuICBjb25zdCBkYXlzT2ZXZWVrVGVtcCA9IGRhdGEuZGFpbHk7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgdG8gZGlzcGxheSB0aGUgdGVtcGVyYXR1cmVzIGZvciBlYWNoIGRheVxuICBkYXlzT2ZXZWVrVGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC50ZW1wLmRheSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nIHRoZSBlbnRpcmUgb2JqZWN0IG9mIHRoZSB3ZWF0aGVyIGFwaVxuICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuZGlzcGxheVdlYXRoZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==