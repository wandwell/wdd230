let lastVisit = getLastVisit() || 0;
const msToDays = 86400000;

if (lastVisit == 0) {
    document.querySelector('#visits').textContent = `Welcome! Let us know if you have any questions...`
}
else {
    let n = (date.now() - lastVisit) / msToDays;
    
    if (n < 1) {
        document.querySelector('#visits').textContent = `Back so soon! Awesome!`
    }
    else document.querySelector('#visits').textContent = `You last visited ${Math.round(n)} days ago.`
}

function getLastVisit() {
    return JSON.parse(localStorage.getItem('anacondaChamberVisit'));
}