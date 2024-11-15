const date = new Date();
let year = date.getFullYear();

document.querySelector('#year').innerHTML = year;
document.querySelector('.copyright p:last-child').textContent = `Last Modified: ${document.lastModified}`;