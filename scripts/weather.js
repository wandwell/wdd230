const weather = document.querySelector("#weather");
const icon = document.createElement("img");
const temp = document.createElement("h3");
const description = document.createElement("h3"); 

const url = "https://api.openweathermap.org/data/2.5/weather?lat=46.13&lon=-112.96&appid=161028ee799eb858ed2dc91a68344866&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].main)
    description.textContent = ` - ${capitalize(desc)}`;

    weather.appendChild(icon);
    weather.appendChild(temp);
    weather.appendChild(description);
}

function capitalize (string) {
    const words = string.split(" ");

    let newString  = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
        }).join(" ");

    return newString;
}