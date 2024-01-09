import { contentMain, createElement } from "./index.js";

function createMain() {
    const main = createElement('main', 'main-container');

    // Hero Section
    const heroSection = createElement('section', null, null);
    heroSection.id = 'hero-section';
    main.appendChild(heroSection);
        const heroContainer = createElement('div', 'hero-container');
        heroSection.appendChild(heroContainer);
            const heroHeadline = createElement('h1', 'hero-headline', 'Beyond the ordinary cup');
            heroContainer.appendChild(heroHeadline);
            const heroLine = createElement('hr', 'hero-headline', 'Coffee with a story at Kapihan Co.');
            heroContainer.appendChild(heroLine);

    // About Section
    const craftSection = createElement('section', null, null);
    craftSection.id = 'craft-section';
    main.appendChild(craftSection);
        const craftContainer = createElement('div', 'craft-container');
        craftSection.appendChild(craftContainer);
            const div1 = createElement('div', 'div1');
            craftContainer.appendChild(div1);
            const div2 = createElement('div', 'div2');
            craftContainer.appendChild(div2);
                const craftheadline = createElement('h1', 'craft-headline', 'Crafted with care');
            const div3 = createElement('div', 'div3');
            craftContainer.appendChild(div3);
            const div4 = createElement('div', 'div4');
            craftContainer.appendChild(div4);
            const div5 = createElement('div', 'div5');
            craftContainer.appendChild(div5);


    // ... Continue for other sections ...


    
    return main;
}

export { createMain }
