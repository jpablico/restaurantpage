function home() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const home = document.createElement('div');
  home.classList.add('home');
  const homeTitle = document.createElement('h1');
  homeTitle.textContent = 'Welcome to our restaurant';
  const homeText = document.createElement('p');
  homeText.textContent = 'We are a restaurant that offers a variety of dishes, from the most traditional to the most innovative. We have a wide selection of wines and cocktails. We are located in the heart of the city, so you can visit us whenever you want.';
  home.appendChild(homeTitle);
  home.appendChild(homeText);
  content.appendChild(home);
};

export default home;