let dateModified = new Date(document.lastModified);
let year = dateModified.getFullYear().toString();

let text = document.querySelector("#copyright").innerHTML;
copyright = text.replace("year", year);
document.querySelector("#copyright").innerHTML = copyright;

document.querySelector("#lastModified").innerHTML = `Last Modifification: ${dateModified.toString()}`