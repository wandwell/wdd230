const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;

if (numVisits !== 0) {
	visits.textContent = `Number of Visits: ${numVisits}`;
} else {
	visits.textContent = `Welcome New Visitor`;
}

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);