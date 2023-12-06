function header() {
	const content = document.getElementById('content');
	content.innerHTML = `
	<header class="header">
		<h1 class="header_title">Rowena's Cafe</h1>
		<nav class="header_nav">
			<ul class="header_nav_list">
				<li><a href="#" class="header_nav_list_item">Home</a></li>
				<li><a href="#" class="header_nav_list_item">Menu</a></li>
				<li><a href="#" class="header_nav_list_item">Contact</a></li>
				<li><a href="#" class="header_nav_list_item">About</a></li>
				<li><a href="#" class="header_nav_list_item">Reservation</a></li>
			</ul>
		</nav>
	</header>
  `;
}


export default header;