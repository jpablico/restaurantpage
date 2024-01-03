/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.scss?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\nfunction createHeader() {\n\tconst header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', 'header-container');\n\n\tconst menuDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header-container__menu');\n\theader.appendChild(menuDiv);\n\n\t// Menu Left\n\tconst menuLeftWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-left-wrapper');\n\tmenuDiv.appendChild(menuLeftWrapper);\n\n\tconst homeLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', 'active', 'HOME');\n\thomeLi.dataset.tab = 'home';\n\tmenuLeftWrapper.appendChild(homeLi);\n\n\tconst menuLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'MENU');\n\tmenuLi.dataset.tab = 'menu';\n\tmenuLeftWrapper.appendChild(menuLi);\n\n\t// Logo\n\tconst logoDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n\tmenuDiv.appendChild(logoDiv);\n\n\tconst logoImg = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'logo-asset');\n\tlogoImg.src = '/src/assets/KapihanCoLogoDark.svg';\n\tlogoImg.alt = 'Kapihan Co. logo';\n\tlogoDiv.appendChild(logoImg);\n\n\t// Menu Right\n\tconst menuRightWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-right-wrapper');\n\tmenuDiv.appendChild(menuRightWrapper);\n\n\tconst aboutLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'ABOUT');\n\taboutLi.dataset.tab = 'about';\n\tmenuRightWrapper.appendChild(aboutLi);\n\n\tconst contactLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'CONTACT');\n\tcontactLi.dataset.tab = 'contact';\n\tmenuRightWrapper.appendChild(contactLi);\n\n\treturn header;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentMain: () => (/* binding */ contentMain),\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ \"./src/style.scss\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/scripts/header.js\");\n\n\n\nconst contentMain = document.getElementById('content');\n\nfunction createElement(tag, className, textContent) {\n    const element = document.createElement(tag);\n    if (className) element.className = className;\n    if (textContent) element.textContent = textContent;\n    return element;\n}\n\n\n\nfunction appendToContent() {\n    const contentDiv = document.getElementById('content');\n    if (!contentDiv) {\n        console.error('No element with ID \"content\" found.');\n        return;\n    }\n\n    contentDiv.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n}\n\ndocument.addEventListener('DOMContentLoaded', appendToContent);\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;