function home() {
	const content = document.getElementById('content');
	
	const homecontent = content.innerHTML = `
	<div class="home">
		<h1 class="home_title">Welcome to Rowena's Cafe</h1>
		<p class="home_description">We are a family owned and operated restaurant located in the heart of the city. We offer a wide variety of dishes, from traditional to modern, and everything in between. Our menu is carefully crafted to ensure that you have the best dining experience possible. Whether you're looking for a quick bite to eat or a full meal, we have something for everyone. Come in and see us today!</p>
	</div>
  `;
  return content.appendChild(homecontent);
};

export default home;