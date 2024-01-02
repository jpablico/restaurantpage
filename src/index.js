import './style.scss';

const contentMain = document.getElementById('content');

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});
