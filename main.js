/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAbout: () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


function createAbout() {
	const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container', null);

	const aboutSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);
	aboutSection.id = 'about-section'
	main.appendChild(aboutSection);

	return main;
}



/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/scripts/index.js");


function createContact() {
	const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container', null);


	return main;
}



/***/ }),

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


function createFooter() {
    const footer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', null, null);
    footer.id = 'footer-section';
    
    const footerContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'footer-container');
    footer.appendChild(footerContainer);

    const footerHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', 'footer-headline', 'Copyright © 2023 Kapihan Co. - All Rights Reserved');
    footerContainer.appendChild(footerHeadline);

    const footerLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'footer-line');
    footerContainer.appendChild(footerLine);

    const footerContent = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'footer-content', 'Designed & developed with ♡ by ');
    footerContainer.appendChild(footerContent);

    const footerLink = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', 'linkedin-link', 'Josh Pablico');
    footerLink.href = 'https://www.linkedin.com/in/josh-pablico-618108220/';
    footerLink.target = '_blank';
    footerContent.appendChild(footerLink);

    return footer;
}

 

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


function createHeader() {
	const header = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', 'header-container');

	const menuDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header-container__menu');
	header.appendChild(menuDiv);

	// Menu Left
	const menuLeftWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-left-wrapper');
	menuDiv.appendChild(menuLeftWrapper);

	const homeLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', 'active', 'HOME');
	homeLi.dataset.tab = 'home';
	menuLeftWrapper.appendChild(homeLi);

	const menuLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'MENU');
	menuLi.dataset.tab = 'menu';
	menuLeftWrapper.appendChild(menuLi);

	// Logo
	const logoDiv = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
	menuDiv.appendChild(logoDiv);

	const logoImg = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', 'logo-asset');
	logoImg.src = '/src/assets/KapihanCoLogoDark.svg';
	logoImg.alt = 'Kapihan Co. logo';
	logoDiv.appendChild(logoImg);

	// Menu Right
	const menuRightWrapper = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'menu-right-wrapper');
	menuDiv.appendChild(menuRightWrapper);

	const aboutLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'ABOUT');
	aboutLi.dataset.tab = 'about';
	menuRightWrapper.appendChild(aboutLi);

	const contactLi = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', null, 'CONTACT');
	contactLi.dataset.tab = 'contact';
	menuRightWrapper.appendChild(contactLi);

	return header;
}



/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMain: () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


function createMain() {
    const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container');

    // Hero Section
    const heroSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);
    heroSection.id = 'hero-section';
    main.appendChild(heroSection);
        const heroContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hero-container');
        heroSection.appendChild(heroContainer);
            const heroHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'hero-headline', 'Beyond the ordinary cup');
            heroContainer.appendChild(heroHeadline);
            const heroLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'hero-headline', 'Coffee with a story at Kapihan Co.');
            heroContainer.appendChild(heroLine);

    // About Section
    const craftSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);
    craftSection.id = 'craft-section';
    main.appendChild(craftSection);
        const craftContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'craft-container');
        craftSection.appendChild(craftContainer);
            const div1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div1');
            craftContainer.appendChild(div1);
            const div2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div2');
            craftContainer.appendChild(div2);
                const craftheadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'craft-headline', 'Here, every bean whispers a story, roasted to perfection and brewed with meticulous care');
                div2.appendChild(craftheadline);
                const craftline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'craft-headline', 'It\'s an invitation to slow down, to savor the nuanced flavors, the aroma that dances on the air, the warmth that seeps into your soul');
                div2.appendChild(craftline);
            const div3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div3');
            craftContainer.appendChild(div3);
            const div4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div4');
            craftContainer.appendChild(div4);
            const div5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'div5');
            craftContainer.appendChild(div5);

        // Location and Hours Section
        const locationSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);
        locationSection.id = 'location-hours-section';
        main.appendChild(locationSection);
            const locationContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'location-hours-container');
            locationSection.appendChild(locationContainer);
                const location = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'location', null);
                locationContainer.appendChild(location);
                    const map = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('iframe', 'location-box', null);
                        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.454571083354!2d-96.6851412241615!3d33.14969106484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c16bfaa64ff31%3A0x1223ad96bcbcb4b!2s5121%20Collin%20McKinney%20Pkwy%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1702950205264!5m2!1sen!2sus';
                        map.allowFullscreen = '';
                        map.loading = 'lazy';
                        map.width = '600';
                        map.height = '450';
                        map.style = 'border:0;';
                        map.allowfullscreen = '';
                        map.borderradius = '10px';
                        location.appendChild(map);
                    const address = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'location-content', '5121 Collin McKinney Pkwy, McKinney, TX 75070');
                    location.appendChild(address);
                const hours = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours', null);
                locationContainer.appendChild(hours);
                    const hoursHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'hours-headline', 'Location Hours');
                    hours.appendChild(hoursHeadline);
                    const hoursContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-container');
                    hours.appendChild(hoursContainer)
                        const hoursDay = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-day', null);
                        hoursContainer.appendChild(hoursDay);
                            const monday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Monday');
                            hoursDay.appendChild(monday);
                            const tuesday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Tuesday');
                            hoursDay.appendChild(tuesday);
                            const wednesday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Wednesday');
                            hoursDay.appendChild(wednesday);
                            const thursday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Thursday');
                            hoursDay.appendChild(thursday);
                            const friday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Friday');
                            hoursDay.appendChild(friday);
                            const saturday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Saturday');
                            hoursDay.appendChild(saturday);
                            const sunday = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', 'Sunday');
                            hoursDay.appendChild(sunday);
                        const hoursTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hours-time', null);
                        hoursContainer.appendChild(hoursTime);
                            const mondayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(mondayTime);
                            const tuesdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(tuesdayTime);
                            const wednesdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(wednesdayTime);
                            const thursdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(thursdayTime);
                            const fridayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(fridayTime);
                            const saturdayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 7:00 PM');
                            hoursTime.appendChild(saturdayTime);
                            const sundayTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'location-hours-content', '7:00 AM - 5:00 PM');
                            hoursTime.appendChild(sundayTime);
                  


    
    return main;
}




/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentMain: () => (/* binding */ contentMain),
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/scripts/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/footer.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.js */ "./src/scripts/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.js */ "./src/scripts/contact.js");








const contentMain = document.getElementById('content');

function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function appendToContent(element) {
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('No element with ID "content" found.');
        return;
    }
    contentDiv.appendChild(element);
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const footer = (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.createFooter)();

    content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createMain)());
    content.appendChild(footer);

    document.querySelector('.header-container').addEventListener('click', (event) => {
        if (event.target.dataset.tab) {
            const tabName = event.target.dataset.tab;
            console.log('Tab clicked:', tabName); 
            while (content.children.length > 2) {
                content.removeChild(content.children[1]);
            }
            switch (tabName) {
                case 'home':
                    content.insertBefore((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createMain)(), footer);
                    break;
                case 'menu':
                    content.insertBefore((0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.createMenu)(), footer);
                    break;
                case 'about':
                    content.insertBefore((0,_about_js__WEBPACK_IMPORTED_MODULE_5__.createAbout)(), footer);
                    break;
                case 'contact':
                    content.insertBefore((0,_contact_js__WEBPACK_IMPORTED_MODULE_6__.createContact)(), footer);
                    break;
                default:
                    console.error('Unknown tab:', tabName);
            }
        }
    });
});





/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


function createMenu() {
	const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main-container', null);

	const menuSection = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', null, null);
	menuSection.id = 'menu-section';
	main.appendChild(menuSection);
		const menuContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-container');
		menuSection.appendChild(menuContainer);
			const menuHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-headline', null);
			menuContainer.appendChild(menuHeadline);
				const menuHeadlineTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1','menu-headline-title','Discover Our Selection');
				menuHeadline.appendChild(menuHeadlineTitle);
				const menuHeadlineLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'menu-headline__line', null);
				menuHeadline.appendChild(menuHeadlineLine);
				const menuSubHeadline = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h5', 'menu-subheadline', 'Indulge in our carefully curated craft coffee, menu, featuring a variety of flavors.');
				menuHeadline.appendChild(menuSubHeadline);
			const menuItemContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item-container', null);
			menuContainer.appendChild(menuItemContainer);
				const menuCoffee = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-coffee', null);
				menuItemContainer.appendChild(menuCoffee);
					const menuItemTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'menu-item-title', 'Coffee');
					menuCoffee.appendChild(menuItemTitle);
					const menuItemLine = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('hr', 'menu-item-line', null);
					menuCoffee.appendChild(menuItemLine);
						const menuItemsCofee = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-items-coffee', null);
						menuCoffee.appendChild(menuItemsCofee);
							const menuItem1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem1);
								const menuItem1Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Espresso');
								menuItem1.appendChild(menuItem1Title);
								const menuItem1Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.');
								menuItem1.appendChild(menuItem1Description);
							const menuItem2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem2);
								const menuItem2Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Americano');
								menuItem2.appendChild(menuItem2Title);
								const menuItem2Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.');
								menuItem2.appendChild(menuItem2Description);
							const menuItem3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem3);
								const menuItem3Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cafe Latte');
								menuItem3.appendChild(menuItem3Title);
								const menuItem3Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A coffee drink made with half espresso and half steamed milk.');
								menuItem3.appendChild(menuItem3Description);
							const menuItem4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem4);
								const menuItem4Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cappuccino');
								menuItem4.appendChild(menuItem4Title);
								const menuItem4Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A coffee drink made with espresso and steamed milk.');
								menuItem4.appendChild(menuItem4Description);
							const menuItem5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem5);
								const menuItem5Title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'menu-item-title', 'Cortado');
								menuItem5.appendChild(menuItem5Title);
								const menuItem5Description = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'menu-item-description', 'A Spanish coffee drink made with espresso and a small amount of steamed milk.');
								menuItem5.appendChild(menuItem5Description);
	return main;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map