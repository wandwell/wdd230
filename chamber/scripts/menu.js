const nav = document.querySelector('.navigation');
const menubutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
menubutton.addEventListener('click', () => {
	nav.classList.toggle('show');
	menubutton.classList.toggle('show');
});