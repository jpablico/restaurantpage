import { contentMain, createElement } from "./index.js";

function createMenu() {
	const main = createElement('main', 'main-container', null);

	const menuSection = createElement('section', null, null);
	menuSection.id = 'menu-section';
	main.appendChild(menuSection);
		const menuContainer = createElement('div', 'menu-container');
		menuSection.appendChild(menuContainer);
			const menuHeadline = createElement('div', 'menu-headline', null);
			menuContainer.appendChild(menuHeadline);
				const menuHeadlineTitle = createElement('h1','menu-headline-title','Discover Our Selection');
				menuHeadline.appendChild(menuHeadlineTitle);
				const menuHeadlineLine = createElement('hr', 'menu-headline__line', null);
				menuHeadline.appendChild(menuHeadlineLine);
				const menuSubHeadline = createElement('h5', 'menu-subheadline', 'Indulge in our carefully curated craft coffee, menu, featuring a variety of flavors.');
			const menuItemContainer = createElement('div', 'menu-item-container', null);
			menuContainer.appendChild(menuItemContainer);
				const menuCoffee = createElement('div', 'menu-coffee', null);
				menuItemContainer.appendChild(menuCoffee);
					const menuItemTitle = createElement('h1', 'menu-item-title', 'Coffee');
					menuCoffee.appendChild(menuItemTitle);
					const menuItemLine = createElement('hr', 'menu-item-line', null);
					menuCoffee.appendChild(menuItemLine);
						const menuItemsCofee = createElement('div', 'menu-items-coffee', null);
						menuCoffee.appendChild(menuItemsCofee);
							const menuItem1 = createElement('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem1);
								const menuItem1Title = createElement('h3', 'menu-item-title', 'Espresso');
								menuItem1.appendChild(menuItem1Title);
								const menuItem1Description = createElement('p', 'menu-item-description', 'A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.');
								menuItem1.appendChild(menuItem1Description);
							const menuItem2 = createElement('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem2);
								const menuItem2Title = createElement('h3', 'menu-item-title', 'Americano');
								menuItem2.appendChild(menuItem2Title);
								const menuItem2Description = createElement('p', 'menu-item-description', 'A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.');
								menuItem2.appendChild(menuItem2Description);
							const menuItem3 = createElement('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem3);
								const menuItem3Title = createElement('h3', 'menu-item-title', 'Cafe Latte');
								menuItem3.appendChild(menuItem3Title);
								const menuItem3Description = createElement('p', 'menu-item-description', 'A coffee drink made with espresso and steamed milk.');
								menuItem3.appendChild(menuItem3Description);
							const menuItem4 = createElement('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem4);
								const menuItem4Title = createElement('h3', 'menu-item-title', 'Cappuccino');
								menuItem4.appendChild(menuItem4Title);
								const menuItem4Description = createElement('p', 'menu-item-description', 'A coffee drink made with espresso and steamed milk.');
								menuItem4.appendChild(menuItem4Description);
							const menuItem5 = createElement('div', 'menu-item', null);
							menuItemsCofee.appendChild(menuItem5);
								const menuItem5Title = createElement('h3', 'menu-item-title', 'Cortado');
								menuItem5.appendChild(menuItem5Title);
								const menuItem5Description = createElement('p', 'menu-item-description', 'A coffee drink made with espresso and steamed');

	return main;
}

export { createMenu }