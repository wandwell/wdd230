const button = document.querySelector(".view");
const directory = document.querySelector("#directory");

button.addEventListener('click', () => {
    directory.classList.toggle("list");
    button.classList.toggle("list");

});