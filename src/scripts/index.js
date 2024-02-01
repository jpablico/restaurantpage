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

function appendToContent() {
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('No element with ID "content" found.');
        return;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const tabs = document.querySelectorAll('data-tab');
    const footer = createFooter();
    console.log(tabs)
    console.log('BLOP');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(footer);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Clear the content area, but keep the header and footer
            while (content.children.length > 2) {
                content.removeChild(content.children[1]);
            }

            // Add the new content
            if (tabName === 'home') {
                content.insertBefore(createMain(), footer);
            } else if (tabName === 'menu') {
                content.insertBefore(createMenu(), footer);
            } else if (tabName === 'about') {
                content.insertBefore(createAbout(), footer);
            } else if (tabName === 'contact') {
                content.insertBefore(createContact(), footer);
            }
        });
    });
});

export { contentMain, createElement}