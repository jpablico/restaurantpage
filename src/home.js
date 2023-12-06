function header() {
  const content = document.getElementById('content');
  content.innerHTML = `
	<h1>Hello World!</h1>
	<p>Current time: ${new Date()}</p>
  `;
}	

export default header;