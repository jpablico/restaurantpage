import '../style.scss';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { createMain } from './home.js';

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

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createFooter());

}
document.addEventListener('DOMContentLoaded', appendToContent);

export { contentMain, createElement}