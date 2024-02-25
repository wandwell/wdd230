const countDisplay = document.querySelector(".count");
const today = Date.now();
const msToDays = 84600000;

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = String(window.localStorage.getItem("lastVisit")) || 0;

const difference = (lastVisit - Date.now()) 
/ msToDays;

numVisits ++;

if (numVisits == 1){
    countDisplay.textContent = "Welcome! Let us know if you have any questions.";
}
else if (difference <= 1){
    countDisplay.textContent = "Back so soon! Awesome!";
}
else {
    countDisplay.innerHTML = `You last visited ${difference.toPrecision()} days ago.`;
}

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit", today)