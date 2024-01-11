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
                const craftheadline = createElement('h1', 'craft-headline', 'Here, every bean whispers a story, roasted to perfection and brewed with meticulous care');
                div2.appendChild(craftheadline);
                const craftline = createElement('hr', 'craft-headline', 'It\'s an invitation to slow down, to savor the nuanced flavors, the aroma that dances on the air, the warmth that seeps into your soul');
                div2.appendChild(craftline);
            const div3 = createElement('div', 'div3');
            craftContainer.appendChild(div3);
            const div4 = createElement('div', 'div4');
            craftContainer.appendChild(div4);
            const div5 = createElement('div', 'div5');
            craftContainer.appendChild(div5);

        // Location and Hours Section
        const locationSection = createElement('section', null, null);
        locationSection.id = 'location-hours-section';
        main.appendChild(locationSection);
            const locationContainer = createElement('div', 'location-hours-container');
            locationSection.appendChild(locationContainer);
                const location = createElement('div', 'location', null);
                locationContainer.appendChild(location);
                    const map = createElement('iframe', 'location-box', null);
                        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.454571083354!2d-96.6851412241615!3d33.14969106484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c16bfaa64ff31%3A0x1223ad96bcbcb4b!2s5121%20Collin%20McKinney%20Pkwy%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1702950205264!5m2!1sen!2sus';
                        map.allowFullscreen = '';
                        map.loading = 'lazy';
                        map.width = '600';
                        map.height = '450';
                        map.style = 'border:0;';
                        map.allowfullscreen = '';
                        map.borderradius = '10px';
                        location.appendChild(map);
                    const address = createElement('h3', 'location-content', '5121 Collin McKinney Pkwy, McKinney, TX 75070');
                    location.appendChild(address);
                const hours = createElement('div', 'hours', null);
                locationContainer.appendChild(hours);
                    const hoursHeadline = createElement('h2', 'hours-headline', 'Hours');
                    hours.appendChild(hoursHeadline);
                    const hoursContent = createElement('p', 'hours-content', 'Mon - Fri: 7:00am - 9:00pm');
                    hours.appendChild(hoursContent);
                    const hoursContent2 = createElement('p', 'hours-content', 'Sat - Sun: 8:00am - 9:00pm');
                    hours.appendChild(hoursContent2);
                                   


    
    return main;
}

export { createMain }
