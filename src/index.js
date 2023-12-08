import css from './style.css';
import "./style.css";
import header from './header';
import home from './home';

//header();
 
const tabs = document.querySelectorAll('.header_nav_list_item');
tabs.forEach(tab => tab.addEventListener('click', () => {
  const target = tab.dataset.setId;
}));
