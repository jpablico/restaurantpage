import '../style.scss';
import { createHeader } from './header.js';
import { createMain } from './home.js';
import { createFooter } from './footer.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';
import { createContact } from './contact.js';

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
    const footer = createFooter();

    content.appendChild(createHeader());
    content.appendChild(createMain());
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
                    content.insertBefore(createMain(), footer);
                    break;
                case 'menu':
                    content.insertBefore(createMenu(), footer);
                    break;
                case 'about':
                    content.insertBefore(createAbout(), footer);
                    break;
                case 'contact':
                    content.insertBefore(createContact(), footer);
                    break;
                default:
                    console.error('Unknown tab:', tabName);
            }
        }
    });
});


export { contentMain, createElement }
