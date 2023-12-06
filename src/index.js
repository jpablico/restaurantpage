import css from './style.css';
import "./style.css";
import header from './home';

const content = document.getElementById('content');

const render = () => {
  content.innerHTML = `
	<h1>Hello World!</h1>
	<p>Current time: ${new Date()}</p>
  `;
}

header(); 
render();