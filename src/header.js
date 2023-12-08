function header() {
	const content = document.getElementById('content');
	
	const headercontent = content.innerHTML = `
	<header class="header">
		<h1 class="header_title">Rowena's Cafe</h1>
		<nav class="header_nav">
			<ul class="header_nav_list">
				<li data-set-id="home" class="header_nav_list_item">Home</li>
				<li data-set-id="menu" class="header_nav_list_item">Menu</li>
				<li data-set-id="contact" class="header_nav_list_item">Contact</li>
				<li data-set-id="about" class="header_nav_list_item">About</li>
				<li data-set-id="reservation" class="header_nav_list_item">Reservation</li>
			</ul>
		</nav>
	</header>
  `;
  return content.appendChild(headercontent);
}


export default header;