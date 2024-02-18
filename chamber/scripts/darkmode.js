const modeButton = document.querySelector(".slider");
const body = document.querySelector("body");
const divs = document.querySelectorAll(".mode");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark');
	divs.forEach(div => {
		div.classList.toggle('dark');
	});
});
