import { contentMain, createElement } from "./index.js";

function createFooter() {
    const footer = createElement('footer', null, null);
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

export { createFooter } 