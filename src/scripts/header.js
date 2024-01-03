import { contentMain, createElement } from "./index.js";

function createHeader() {
	const header = createElement('header', 'header-container');

	const menuDiv = createElement('div', 'header-container__menu');
	header.appendChild(menuDiv);

	// Menu Left
	const menuLeftWrapper = createElement('ul', 'menu-left-wrapper');
	menuDiv.appendChild(menuLeftWrapper);

	const homeLi = createElement('li', 'active', 'HOME');
	homeLi.dataset.tab = 'home';
	menuLeftWrapper.appendChild(homeLi);

	const menuLi = createElement('li', null, 'MENU');
	menuLi.dataset.tab = 'menu';
	menuLeftWrapper.appendChild(menuLi);

	// Logo
	const logoDiv = createElement('div');
	menuDiv.appendChild(logoDiv);

	const logoImg = createElement('img', 'logo-asset');
	logoImg.src = '/src/assets/KapihanCoLogoDark.svg';
	logoImg.alt = 'Kapihan Co. logo';
	logoDiv.appendChild(logoImg);

	// Menu Right
	const menuRightWrapper = createElement('ul', 'menu-right-wrapper');
	menuDiv.appendChild(menuRightWrapper);

	const aboutLi = createElement('li', null, 'ABOUT');
	aboutLi.dataset.tab = 'about';
	menuRightWrapper.appendChild(aboutLi);

	const contactLi = createElement('li', null, 'CONTACT');
	contactLi.dataset.tab = 'contact';
	menuRightWrapper.appendChild(contactLi);

	return header;
}

export { createHeader }