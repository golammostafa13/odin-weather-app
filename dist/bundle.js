/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: showData } = __webpack_require__(/*! ./modules/showData */ \"./src/modules/showData.js\");\nconst { default: weather } = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n\nconst input = document.querySelector('input');\nconst searchBtn = document.querySelector('#search-btn');\nconst searchForm = document.querySelector('#search-form');\n\nsearchForm.addEventListener('submit', (e)=>{\n    e.preventDefault();\n});\nsearchBtn.addEventListener('click', async function      getWeather (){\n    if(!input.value)return;\n    const weatherData = await weather.getData(input.value);\n    showData.setSearchData(weatherData);\n    input.value = \"\";\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/showData.js":
/*!*********************************!*\
  !*** ./src/modules/showData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showData = (() =>{\n    function setSearchData(weatherData) {\n        // console.log(weatherData);\n        const cityName = document.querySelector('#name');\n        cityName.innerText = weatherData.name;\n\n        const img = document.querySelector('#img');\n        img.src = weatherData.iconURL;\n\n        const condition = document.querySelector('#condition');\n        condition.innerText = weatherData.condition;\n\n        const humidity = document.querySelector('#humidity');\n        humidity.innerHTML = `Humidity <span id='color'>${weatherData.humidity}</span>`;\n\n        const feelsLike = document.querySelector('#feelsLike')\n        feelsLike.innerHTML = `Feels Like <span id='color'>${weatherData.feelsLikecel}</span>° C`;\n\n        const temp = document.querySelector('#temp');\n        temp.innerHTML = `Temperature <span id='color'>${weatherData.tempCel}</span>° C`;\n\n        const wind = document.querySelector('#wind');\n        wind.innerHTML = `Wind Speed <span id='color'>${weatherData.windSpeed}</span> kph`;\n    }\n\n    return {setSearchData};\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);\n\n//# sourceURL=webpack://weather-app/./src/modules/showData.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() =>{\n    const convertData = (data) =>{\n        return {\n            name: data.location.name,\n            condition: data.current.condition.text,\n            feelsLikecel: data.current.feelslike_c,\n            humidity: data.current.humidity,\n            tempCel: data.current.temp_c,\n            tempFer: data.current.temp_f,\n            iconURL: data.current.condition.icon,\n            windSpeed: data.current.wind_kph,       \n        };\n    }\n    async function getData (city = 'dhaka'){\n        const endPoint = `http://api.weatherapi.com/v1/current.json?key=03591424cf324c90b1394409211606&q=${city}&aqi=no`;\n        try{\n            const response = await fetch(endPoint, {mode: 'cors'});\n            if(!response.ok){\n                throw new error(`City ${city} is not found`);\n            }\n            const data = convertData(await response.json());\n            // const data = await response.json();\n            return data;\n        }catch(error){\n            alert(error);\n            return null;\n        }\n    }\n    return {getData};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;