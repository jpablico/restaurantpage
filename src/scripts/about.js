import { contentMain, createElement } from "./index.js";

function createAbout() {
	const main = createElement('main', 'main-container', null);

	const aboutSection = createElement('section', null, null);
	aboutSection.id = 'about-section'
	main.appendChild(aboutSection);

	return main;
}

export { createAbout }