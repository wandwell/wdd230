const date = new Date();
let year = date.getFullYear();
let lastModified = document.querySelector('footer:nth-child(2)');

document.querySelector('#year').innerHTML = year;
document.querySelector('p:last-child').textContent = `Last Modified: ${document.lastModified}`;