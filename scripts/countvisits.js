const countDisplay = document.querySelector(".count");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits ++;

localStorage.setItem("numVisits-ls", numVisits);

countDisplay.textContent = numVisits