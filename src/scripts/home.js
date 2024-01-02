function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

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

function createMain() {
    const main = createElement('main', 'main-container');

    // Hero Section
    const heroSection = createElement('section', null, null);
    heroSection.id = 'hero-section';
    main.appendChild(heroSection);

    const heroContainer = createElement('div', 'hero-container');
    heroSection.appendChild(heroContainer);

    const heroHeadline = createElement('h1', 'hero-headline', 'Beyond the ordinary cup\nCoffee with a story at Kapihan Co.');
    heroContainer.appendChild(heroHeadline);

    // ... Continue for other sections ...

    return main;
}

function createFooter() {
    const footer = createElement('footer', null);
    footer.id = 'footer-section';

    const footerContainer = createElement('div', 'footer-container');
    footer.appendChild(footerContainer);

    const footerHeadline = createElement('h4', 'footer-headline', 'Copyright © 2023 Kapihan Co. - All Rights Reserved');
    footerContainer.appendChild(footerHeadline);

    const footerLine = createElement('hr', 'footer-line');
    footerContainer.appendChild(footerLine);

    const footerContent = createElement('h5', 'footer-content', 'Designed & developed with ♡ by ');
    footerContainer.appendChild(footerContent);

    const footerLink = createElement('a', 'linkedin-link', 'Josh Pablico');
    footerLink.href = 'https://www.linkedin.com/in/josh-pablico-618108220/';
    footerLink.target = '_blank';
    footerContent.appendChild(footerLink);

    return footer;
}

function appendToContent() {
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('No element with ID "content" found.');
        return;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createFooter());
}

document.addEventListener('DOMContentLoaded', appendToContent);
