import '../style.scss';
import { createHeader } from './header.js';
import { createMain } from './home.js';
import { createFooter } from './footer.js';
import { createMenu } from './menu.js';

const contentMain = document.getElementById('content');

function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

const tabs = document.querySelectorAll('data-tab');
console.log(tabs);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        const content = document.getElementById('content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        if (tabName === 'home') {
            content.appendChild(createMain());
            console.log("Bop");
        } else if (tabName === 'menu') {
            content.appendChild(createMenu());
        } else if (tabName === 'about') {
            content.appendChild(createAbout());
        } else if (tabName === 'contact') {
            content.appendChild(createContact());
        }
    });
});

function appendToContent() {
    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('No element with ID "content" found.');
        return;
    }
    contentDiv.appendChild(createHeader());
}
document.addEventListener('DOMContentLoaded', appendToContent);


export { contentMain, createElement}