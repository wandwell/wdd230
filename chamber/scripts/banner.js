let banner = document.querySelector("#banner");
let button = document.querySelector("#closeBanner");

let current = new Date();
let weekday = current.getDay();

if (weekday == 1 || weekday == 2 || weekday == 3){
    button.addEventListener("click", () => {
        banner.classList.toggle("closed");
    });
}else {
    banner.classList.toggle("closed");
};