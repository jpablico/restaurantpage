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

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\nfunction createFooter() {\n    const footer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', null, null);\n    footer.id = 'footer-section';\n    \n    const footerContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'footer-container');\n    footer.appendChild(footerContainer);\n\n    const footerHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', 'footer-headline', 'Copyright © 2023 Kapihan Co. - All Rights Reserved');\n    footerContainer.appendChild(footerHeadline);\n\n    const footerLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'footer-line');\n    footerContainer.appendChild(footerLine);\n\n    const footerContent = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'footer-content', 'Designed & developed with ♡ by ');\n    footerContainer.appendChild(footerContent);\n\n    const footerLink = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', 'linkedin-link', 'Josh Pablico');\n    footerLink.href = 'https://www.linkedin.com/in/josh-pablico-618108220/';\n    footerLink.target = '_blank';\n    footerContent.appendChild(footerLink);\n\n    return footer;\n}\n\n \n\n//# sourceURL=webpack://restaurantpage/./src/scripts/footer.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\nfunction createHeader() {\n\tconst header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', 'header-container');\n\n\tconst menuDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header-container__menu');\n\theader.appendChild(menuDiv);\n\n\t// Menu Left\n\tconst menuLeftWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-left-wrapper');\n\tmenuDiv.appendChild(menuLeftWrapper);\n\n\tconst homeLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', 'active', 'HOME');\n\thomeLi.dataset.tab = 'home';\n\tmenuLeftWrapper.appendChild(homeLi);\n\n\tconst menuLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'MENU');\n\tmenuLi.dataset.tab = 'menu';\n\tmenuLeftWrapper.appendChild(menuLi);\n\n\t// Logo\n\tconst logoDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n\tmenuDiv.appendChild(logoDiv);\n\n\tconst logoImg = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'logo-asset');\n\tlogoImg.src = '/src/assets/KapihanCoLogoDark.svg';\n\tlogoImg.alt = 'Kapihan Co. logo';\n\tlogoDiv.appendChild(logoImg);\n\n\t// Menu Right\n\tconst menuRightWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-right-wrapper');\n\tmenuDiv.appendChild(menuRightWrapper);\n\n\tconst aboutLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'ABOUT');\n\taboutLi.dataset.tab = 'about';\n\tmenuRightWrapper.appendChild(aboutLi);\n\n\tconst contactLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'CONTACT');\n\tcontactLi.dataset.tab = 'contact';\n\tmenuRightWrapper.appendChild(contactLi);\n\n\treturn header;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMain: () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\nfunction createMain() {\n    const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container');\n\n    // Hero Section\n    const heroSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);\n    heroSection.id = 'hero-section';\n    main.appendChild(heroSection);\n        const heroContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hero-container');\n        heroSection.appendChild(heroContainer);\n            const heroHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'hero-headline', 'Beyond the ordinary cup');\n            heroContainer.appendChild(heroHeadline);\n            const heroLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'hero-headline', 'Coffee with a story at Kapihan Co.');\n            heroContainer.appendChild(heroLine);\n\n    // About Section\n    const craftSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);\n    craftSection.id = 'craft-section';\n    main.appendChild(craftSection);\n        const craftContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'craft-container');\n        craftSection.appendChild(craftContainer);\n            const div1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div1');\n            craftContainer.appendChild(div1);\n            const div2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div2');\n            craftContainer.appendChild(div2);\n                const craftheadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'craft-headline', 'Here, every bean whispers a story, roasted to perfection and brewed with meticulous care');\n                div2.appendChild(craftheadline);\n                const craftline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'craft-headline', 'It\\'s an invitation to slow down, to savor the nuanced flavors, the aroma that dances on the air, the warmth that seeps into your soul');\n                div2.appendChild(craftline);\n            const div3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div3');\n            craftContainer.appendChild(div3);\n            const div4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div4');\n            craftContainer.appendChild(div4);\n            const div5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div5');\n            craftContainer.appendChild(div5);\n\n        // Location and Hours Section\n        const locationSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);\n        locationSection.id = 'location-hours-section';\n        main.appendChild(locationSection);\n            const locationContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'location-hours-container');\n            locationSection.appendChild(locationContainer);\n                const location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'location', null);\n                locationContainer.appendChild(location);\n                    const map = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('iframe', 'location-box', null);\n                        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.454571083354!2d-96.6851412241615!3d33.14969106484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c16bfaa64ff31%3A0x1223ad96bcbcb4b!2s5121%20Collin%20McKinney%20Pkwy%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1702950205264!5m2!1sen!2sus';\n                        map.allowFullscreen = '';\n                        map.loading = 'lazy';\n                        map.width = '600';\n                        map.height = '450';\n                        map.style = 'border:0;';\n                        map.allowfullscreen = '';\n                        map.borderradius = '10px';\n                        location.appendChild(map);\n                    const address = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'location-content', '5121 Collin McKinney Pkwy, McKinney, TX 75070');\n                    location.appendChild(address);\n                const hours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours', null);\n                locationContainer.appendChild(hours);\n                    const hoursHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'hours-headline', 'Location Hours');\n                    hours.appendChild(hoursHeadline);\n                    const hoursContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-container');\n                    hours.appendChild(hoursContainer)\n                        const hoursDay = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-day', null);\n                        hoursContainer.appendChild(hoursDay);\n                            const monday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Monday');\n                            hoursDay.appendChild(monday);\n                            const tuesday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Tuesday');\n                            hoursDay.appendChild(tuesday);\n                            const wednesday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Wednesday');\n                            hoursDay.appendChild(wednesday);\n                            const thursday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Thursday');\n                            hoursDay.appendChild(thursday);\n                            const friday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Friday');\n                            hoursDay.appendChild(friday);\n                            const saturday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Saturday');\n                            hoursDay.appendChild(saturday);\n                            const sunday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Sunday');\n                            hoursDay.appendChild(sunday);\n                        const hoursTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-time', null);\n                        hoursContainer.appendChild(hoursTime);\n                            const mondayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(mondayTime);\n                            const tuesdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(tuesdayTime);\n                            const wednesdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(wednesdayTime);\n                            const thursdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(thursdayTime);\n                            const fridayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(fridayTime);\n                            const saturdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');\n                            hoursTime.appendChild(saturdayTime);\n                            const sundayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 5:00 PM');\n                            hoursTime.appendChild(sundayTime);\n                  \n\n\n    \n    return main;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/home.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentMain: () => (/* binding */ contentMain),\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ \"./src/style.scss\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/scripts/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/scripts/home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/scripts/footer.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/scripts/menu.js\");\n\n\n\n\n\n\nconst contentMain = document.getElementById('content');\n\nfunction createElement(tag, className, textContent) {\n    const element = document.createElement(tag);\n    if (className) element.className = className;\n    if (textContent) element.textContent = textContent;\n    return element;\n}\n\nconst tabs = document.querySelectorAll('data-tab');\nconsole.log(tabs);\n\ntabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n        const tabName = tab.dataset.tab;\n        const content = document.getElementById('content');\n        while (content.firstChild) {\n            content.removeChild(content.firstChild);\n        }\n        if (tabName === 'home') {\n            content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createMain)());\n            console.log(\"Bop\");\n        } else if (tabName === 'menu') {\n            content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.createMenu)());\n        } else if (tabName === 'about') {\n            content.appendChild(createAbout());\n        } else if (tabName === 'contact') {\n            content.appendChild(createContact());\n        }\n    });\n});\n\nfunction appendToContent() {\n    const contentDiv = document.getElementById('content');\n    if (!contentDiv) {\n        console.error('No element with ID \"content\" found.');\n        return;\n    }\n    contentDiv.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n}\ndocument.addEventListener('DOMContentLoaded', appendToContent);\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\nfunction createMenu() {\n\tconst main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container', null);\n\n\tconst menuSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);\n\tmenuSection.id = 'menu-section';\n\tmain.appendChild(menuSection);\n\t\tconst menuContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-container');\n\t\tmenuSection.appendChild(menuContainer);\n\t\t\tconst menuHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-headline', null);\n\t\t\tmenuContainer.appendChild(menuHeadline);\n\t\t\t\tconst menuHeadlineTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1','menu-headline-title','Discover Our Selection');\n\t\t\t\tmenuHeadline.appendChild(menuHeadlineTitle);\n\t\t\t\tconst menuHeadlineLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'menu-headline__line', null);\n\t\t\t\tmenuHeadline.appendChild(menuHeadlineLine);\n\t\t\t\tconst menuSubHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'menu-subheadline', 'Indulge in our carefully curated craft coffee, menu, featuring a variety of flavors.');\n\t\t\t\tmenuHeadline.appendChild(menuSubHeadline);\n\t\t\tconst menuItemContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item-container', null);\n\t\t\tmenuContainer.appendChild(menuItemContainer);\n\t\t\t\tconst menuCoffee = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-coffee', null);\n\t\t\t\tmenuItemContainer.appendChild(menuCoffee);\n\t\t\t\t\tconst menuItemTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'menu-item-title', 'Coffee');\n\t\t\t\t\tmenuCoffee.appendChild(menuItemTitle);\n\t\t\t\t\tconst menuItemLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'menu-item-line', null);\n\t\t\t\t\tmenuCoffee.appendChild(menuItemLine);\n\t\t\t\t\t\tconst menuItemsCofee = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-items-coffee', null);\n\t\t\t\t\t\tmenuCoffee.appendChild(menuItemsCofee);\n\t\t\t\t\t\t\tconst menuItem1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);\n\t\t\t\t\t\t\tmenuItemsCofee.appendChild(menuItem1);\n\t\t\t\t\t\t\t\tconst menuItem1Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Espresso');\n\t\t\t\t\t\t\t\tmenuItem1.appendChild(menuItem1Title);\n\t\t\t\t\t\t\t\tconst menuItem1Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.');\n\t\t\t\t\t\t\t\tmenuItem1.appendChild(menuItem1Description);\n\t\t\t\t\t\t\tconst menuItem2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);\n\t\t\t\t\t\t\tmenuItemsCofee.appendChild(menuItem2);\n\t\t\t\t\t\t\t\tconst menuItem2Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Americano');\n\t\t\t\t\t\t\t\tmenuItem2.appendChild(menuItem2Title);\n\t\t\t\t\t\t\t\tconst menuItem2Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.');\n\t\t\t\t\t\t\t\tmenuItem2.appendChild(menuItem2Description);\n\t\t\t\t\t\t\tconst menuItem3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);\n\t\t\t\t\t\t\tmenuItemsCofee.appendChild(menuItem3);\n\t\t\t\t\t\t\t\tconst menuItem3Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cafe Latte');\n\t\t\t\t\t\t\t\tmenuItem3.appendChild(menuItem3Title);\n\t\t\t\t\t\t\t\tconst menuItem3Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A coffee drink made with half espresso and half steamed milk.');\n\t\t\t\t\t\t\t\tmenuItem3.appendChild(menuItem3Description);\n\t\t\t\t\t\t\tconst menuItem4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);\n\t\t\t\t\t\t\tmenuItemsCofee.appendChild(menuItem4);\n\t\t\t\t\t\t\t\tconst menuItem4Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cappuccino');\n\t\t\t\t\t\t\t\tmenuItem4.appendChild(menuItem4Title);\n\t\t\t\t\t\t\t\tconst menuItem4Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A coffee drink made with espresso and steamed milk.');\n\t\t\t\t\t\t\t\tmenuItem4.appendChild(menuItem4Description);\n\t\t\t\t\t\t\tconst menuItem5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);\n\t\t\t\t\t\t\tmenuItemsCofee.appendChild(menuItem5);\n\t\t\t\t\t\t\t\tconst menuItem5Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cortado');\n\t\t\t\t\t\t\t\tmenuItem5.appendChild(menuItem5Title);\n\t\t\t\t\t\t\t\tconst menuItem5Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A Spanish coffee drink made with espresso and a small amount of steamed milk.');\n\t\t\t\t\t\t\t\tmenuItem5.appendChild(menuItem5Description);\n\treturn main;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/scripts/menu.js?");

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